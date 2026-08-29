import type { APIRoute } from 'astro';
import { cleanMultiline, cleanText, isValidEmail, json, normalizeEmail, sha256 } from '../../../../lib/security';

const allowedReasons = new Set(['fake', 'spam', 'wrong-homestay', 'personal-info', 'harassment', 'other']);

export const POST: APIRoute = async ({ params, request, locals }) => {
  const env = locals.runtime.env;
  const db = env.DB;
  const reviewId = Number(params.id);
  if (!db || !env.HASH_SALT) return json({ ok: false, error: 'Service unavailable.' }, 503);
  if (!Number.isInteger(reviewId) || reviewId <= 0) return json({ ok: false, error: 'Invalid review.' }, 400);

  const review = await db.prepare(`SELECT id FROM reviews WHERE id = ? AND status = 'approved' LIMIT 1`)
    .bind(reviewId)
    .first<{ id: number }>();
  if (!review) return json({ ok: false, error: 'Review not found.' }, 404);

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return json({ ok: false, error: 'Invalid report.' }, 400);
  }

  const reason = cleanText(form.get('reason'), 40);
  const detail = cleanMultiline(form.get('detail'), 800);
  const emailRaw = normalizeEmail(cleanText(form.get('email'), 254));
  const reporterEmail = emailRaw && isValidEmail(emailRaw) ? emailRaw : null;
  if (!allowedReasons.has(reason)) return json({ ok: false, error: 'Choose a report reason.' }, 400);

  const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
  const ua = request.headers.get('User-Agent') || '';
  const reporterKeyHash = await sha256(`${env.HASH_SALT}|report|${ip}|${ua}|${reviewId}`);

  const recent = await db.prepare(`
    SELECT id FROM review_reports
    WHERE review_id = ? AND reporter_key_hash = ? AND datetime(created_at) > datetime('now', '-1 day')
    LIMIT 1
  `).bind(reviewId, reporterKeyHash).first<{ id: number }>();

  if (!recent) {
    await db.prepare(`
      INSERT INTO review_reports (review_id, reason, detail, reporter_email, reporter_key_hash)
      VALUES (?, ?, ?, ?, ?)
    `).bind(reviewId, reason, detail || null, reporterEmail, reporterKeyHash).run();
  }

  return json({ ok: true, message: 'Thanks. The review has been sent back to moderation.' });
};
