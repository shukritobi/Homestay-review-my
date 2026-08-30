import { env } from 'cloudflare:workers';
import type { APIRoute } from 'astro';
import { findHomestayById, findHomestayByIdentity } from '../../../lib/db';
import { sendVerificationEmail } from '../../../lib/email';
import {
  cleanMultiline,
  cleanText,
  isValidEmail,
  json,
  normalizeEmail,
  parseStayMonth,
  randomToken,
  sha256,
  slugify,
  verifyTurnstile
} from '../../../lib/security';

export const POST: APIRoute = async ({ request }) => {
  const db = env.DB;

  if (!db || !env.TURNSTILE_SECRET || !env.RESEND_API_KEY || !env.ADMIN_EMAIL || !env.HASH_SALT || !env.APP_URL || !env.EMAIL_FROM) {
    return json({ ok: false, error: 'The review service is not fully configured yet.' }, 503);
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return json({ ok: false, error: 'Invalid form submission.' }, 400);
  }

  // Honeypot: ordinary users never see this field. Bots commonly fill every text input.
  if (cleanText(form.get('website'), 200)) {
    return json({ ok: true, message: 'Thanks. Your submission has been received.' });
  }

  const turnstileToken = cleanText(form.get('cf-turnstile-response'), 2048);
  const remoteIp = request.headers.get('CF-Connecting-IP');
  const challenge = await verifyTurnstile({
    token: turnstileToken,
    secret: env.TURNSTILE_SECRET,
    remoteIp,
    expectedAction: 'submit_review',
    expectedHostnames: env.TURNSTILE_HOSTNAMES
  });

  if (!challenge.ok) {
    return json({ ok: false, error: 'Bot check failed. Please refresh and try again.' }, 403);
  }

  const rating = Number(cleanText(form.get('rating'), 1));
  const stayValue = cleanText(form.get('stayMonth'), 7);
  const stay = parseStayMonth(stayValue);
  const tripType = cleanText(form.get('tripType'), 40);
  const reviewTitle = cleanText(form.get('title'), 90);
  const reviewBody = cleanMultiline(form.get('body'), 2500);
  const reviewerName = cleanText(form.get('name'), 80);
  const reviewerEmail = normalizeEmail(cleanText(form.get('email'), 254));

  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    return json({ ok: false, error: 'Choose a rating from 1 to 5.' }, 400);
  }
  if (!stay) return json({ ok: false, error: 'Choose a valid stay month.' }, 400);
  if (!reviewTitle || reviewTitle.length < 3) return json({ ok: false, error: 'Add a short review title.' }, 400);
  if (reviewBody.length < 40) return json({ ok: false, error: 'Please add a little more detail to your review.' }, 400);
  if (!reviewerName) return json({ ok: false, error: 'Add your name.' }, 400);
  if (!isValidEmail(reviewerEmail)) return json({ ok: false, error: 'Enter a valid email address.' }, 400);

  const userAgent = request.headers.get('User-Agent') || '';
  const ipHash = await sha256(`${env.HASH_SALT}|ip|${remoteIp || 'unknown'}`);
  const userAgentHash = await sha256(`${env.HASH_SALT}|ua|${userAgent}`);

  await db.batch([
    db.prepare(`
      DELETE FROM review_verification_tokens
      WHERE review_id IN (
        SELECT id FROM reviews
        WHERE status = 'pending_email' AND datetime(submitted_at) < datetime('now', '-24 hours')
      )
    `),
    db.prepare(`
      DELETE FROM reviews
      WHERE status = 'pending_email' AND datetime(submitted_at) < datetime('now', '-24 hours')
    `)
  ]);
  await db.prepare(`
    DELETE FROM homestays
    WHERE status = 'pending'
      AND source_name = 'User submitted'
      AND datetime(created_at) < datetime('now', '-24 hours')
      AND NOT EXISTS (SELECT 1 FROM reviews WHERE reviews.homestay_id = homestays.id)
  `).run();

  const [ipBurst, emailBurst] = await Promise.all([
    db.prepare(`
      SELECT COUNT(*) AS total FROM reviews
      WHERE ip_hash = ? AND datetime(submitted_at) > datetime('now', '-1 hour')
    `).bind(ipHash).first<{ total: number }>(),
    db.prepare(`
      SELECT COUNT(*) AS total FROM reviews
      WHERE reviewer_email = ? AND datetime(submitted_at) > datetime('now', '-1 hour')
    `).bind(reviewerEmail).first<{ total: number }>()
  ]);

  if (Number(ipBurst?.total || 0) >= 6 || Number(emailBurst?.total || 0) >= 3) {
    return json({ ok: false, error: 'Too many review attempts. Please try again later.' }, 429);
  }

  let homestay: Awaited<ReturnType<typeof findHomestayById>> | null = null;
  let createdHomestayId: number | null = null;
  const homestayId = Number(cleanText(form.get('homestayId'), 20));

  if (Number.isInteger(homestayId) && homestayId > 0) {
    homestay = await findHomestayById(db, homestayId);
    if (!homestay || !['active', 'pending'].includes(homestay.status)) {
      return json({ ok: false, error: 'That homestay listing is no longer available.' }, 404);
    }
  } else {
    const homestayName = cleanText(form.get('homestay'), 140);
    const city = cleanText(form.get('city'), 100);
    const state = cleanText(form.get('state'), 80);

    if (!homestayName || !city || !state) {
      return json({ ok: false, error: 'For a new homestay, add its name, city and state.' }, 400);
    }

    homestay = await findHomestayByIdentity(db, homestayName, city, state);

    if (!homestay) {
      let slug = slugify(`${homestayName}-${city}`);
      const slugExists = await db.prepare('SELECT id FROM homestays WHERE slug = ? LIMIT 1').bind(slug).first<{ id: number }>();
      if (slugExists) slug = `${slug}-${randomToken(4).toLowerCase()}`;

      const inserted = await db.prepare(`
        INSERT INTO homestays (name, slug, city, state, status, source_name)
        VALUES (?, ?, ?, ?, 'pending', 'User submitted')
      `).bind(homestayName, slug, city, state).run();

      createdHomestayId = Number(inserted.meta.last_row_id);
      homestay = { id: createdHomestayId, name: homestayName, slug, city, state, status: 'pending' };
    }
  }

  const recent = await db.prepare(`
    SELECT id FROM reviews
    WHERE reviewer_email = ? AND homestay_id = ?
      AND status NOT IN ('rejected', 'removed')
      AND datetime(submitted_at) > datetime('now', '-90 days')
    LIMIT 1
  `).bind(reviewerEmail, homestay.id).first<{ id: number }>();

  if (recent) {
    if (createdHomestayId) {
      await db.prepare(`DELETE FROM homestays WHERE id = ? AND NOT EXISTS (SELECT 1 FROM reviews WHERE homestay_id = ?)`)
        .bind(createdHomestayId, createdHomestayId).run();
    }
    return json({ ok: false, error: 'This email already submitted a review for this homestay recently.' }, 409);
  }

  const insertedReview = await db.prepare(`
    INSERT INTO reviews (
      homestay_id, reviewer_name, reviewer_email, rating, review_title, review_body,
      stay_month, stay_year, trip_type, status, ip_hash, user_agent_hash
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'pending_email', ?, ?)
  `).bind(
    homestay.id, reviewerName, reviewerEmail, rating, reviewTitle, reviewBody,
    stay.month, stay.year, tripType || null, ipHash, userAgentHash
  ).run();

  const reviewId = Number(insertedReview.meta.last_row_id);
  const verificationToken = randomToken(32);
  const tokenHash = await sha256(verificationToken);

  await db.prepare(`
    INSERT INTO review_verification_tokens (review_id, token_hash, expires_at)
    VALUES (?, ?, datetime('now', '+24 hours'))
  `).bind(reviewId, tokenHash).run();

  const verifyUrl = `${env.APP_URL.replace(/\/$/, '')}/review/verify?token=${encodeURIComponent(verificationToken)}`;

  try {
    await sendVerificationEmail({
      apiKey: env.RESEND_API_KEY,
      from: env.EMAIL_FROM,
      to: reviewerEmail,
      reviewerName,
      homestayName: homestay.name,
      verifyUrl,
      reviewId
    });
  } catch (error) {
    await db.batch([
      db.prepare('DELETE FROM review_verification_tokens WHERE review_id = ?').bind(reviewId),
      db.prepare('DELETE FROM reviews WHERE id = ?').bind(reviewId)
    ]);
    if (createdHomestayId) {
      await db.prepare(`DELETE FROM homestays WHERE id = ? AND status = 'pending' AND NOT EXISTS (SELECT 1 FROM reviews WHERE homestay_id = ?)`)
        .bind(createdHomestayId, createdHomestayId).run();
    }
    console.error('Verification email failed', error);
    return json({ ok: false, error: 'We could not send the verification email. Please try again.' }, 502);
  }

  return json({
    ok: true,
    reviewId,
    newHomestay: homestay.status === 'pending',
    message: 'Check your email to verify the review. It will then enter the private moderation queue.'
  });
};
