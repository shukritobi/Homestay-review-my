import { env } from 'cloudflare:workers';
import type { APIRoute } from 'astro';
import { getAdminIdentity } from '../../../../../lib/admin';
import { refreshHomestayStats } from '../../../../../lib/db';
import { sendReviewDecisionEmail } from '../../../../../lib/email';
import { cleanText, json } from '../../../../../lib/security';

const statusByAction: Record<string, string> = {
  approve: 'approved',
  reject: 'rejected',
  flag: 'flagged',
  changes: 'needs_changes',
  remove: 'removed'
};

export const POST: APIRoute = async ({ params, request }) => {
  const db = env.DB;
  const moderator = getAdminIdentity(request, env);
  if (!moderator) return json({ ok: false, error: 'Unauthorized.' }, 401);
  if (!db) return json({ ok: false, error: 'Database unavailable.' }, 503);

  const reviewId = Number(params.id);
  if (!Number.isInteger(reviewId) || reviewId <= 0) return json({ ok: false, error: 'Invalid review.' }, 400);

  let payload: { action?: string; note?: string } = {};
  try {
    payload = await request.json();
  } catch {
    return json({ ok: false, error: 'Invalid request.' }, 400);
  }

  const action = cleanText(payload.action ?? null, 30);
  const note = cleanText(payload.note ?? null, 500);
  const nextStatus = statusByAction[action];
  if (!nextStatus) return json({ ok: false, error: 'Unknown moderation action.' }, 400);

  const review = await db.prepare(`
    SELECT
      r.id, r.status, r.homestay_id, r.reviewer_name, r.reviewer_email,
      h.status AS homestay_status, h.name AS homestay_name, h.slug AS homestay_slug
    FROM reviews r
    JOIN homestays h ON h.id = r.homestay_id
    WHERE r.id = ? AND r.email_verified = 1
    LIMIT 1
  `).bind(reviewId).first<{
    id: number;
    status: string;
    homestay_id: number;
    reviewer_name: string;
    reviewer_email: string;
    homestay_status: string;
    homestay_name: string;
    homestay_slug: string;
  }>();

  if (!review) return json({ ok: false, error: 'Review not found or email not verified.' }, 404);

  if (action === 'approve') {
    await db.batch([
      db.prepare(`
        UPDATE reviews
        SET status = 'approved', approved_at = CURRENT_TIMESTAMP, rejected_at = NULL, moderator_note = ?
        WHERE id = ?
      `).bind(note || null, reviewId),
      db.prepare(`
        UPDATE homestays
        SET status = CASE WHEN status = 'pending' THEN 'active' ELSE status END,
            updated_at = CURRENT_TIMESTAMP
        WHERE id = ?
      `).bind(review.homestay_id),
      db.prepare(`
        INSERT INTO moderation_logs (review_id, homestay_id, moderator_id, action, previous_status, new_status, reason)
        VALUES (?, ?, ?, ?, ?, 'approved', ?)
      `).bind(reviewId, review.homestay_id, moderator, action, review.status, note || null)
    ]);
  } else {
    const rejectedAt = action === 'reject' ? 'CURRENT_TIMESTAMP' : 'NULL';
    await db.batch([
      db.prepare(`
        UPDATE reviews
        SET status = ?,
            rejected_at = ${rejectedAt},
            moderator_note = ?
        WHERE id = ?
      `).bind(nextStatus, note || null, reviewId),
      db.prepare(`
        INSERT INTO moderation_logs (review_id, homestay_id, moderator_id, action, previous_status, new_status, reason)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `).bind(reviewId, review.homestay_id, moderator, action, review.status, nextStatus, note || null)
    ]);
  }

  await refreshHomestayStats(db, review.homestay_id);

  if (
    ['approved', 'rejected', 'needs_changes', 'removed'].includes(nextStatus) &&
    env.RESEND_API_KEY && env.EMAIL_FROM
  ) {
    try {
      await sendReviewDecisionEmail({
        apiKey: env.RESEND_API_KEY,
        from: env.EMAIL_FROM,
        to: review.reviewer_email,
        reviewerName: review.reviewer_name,
        homestayName: review.homestay_name,
        reviewId,
        status: nextStatus as 'approved' | 'rejected' | 'needs_changes' | 'removed',
        note,
        publicUrl: env.APP_URL ? `${env.APP_URL.replace(/\/$/, '')}/homestay/${review.homestay_slug}` : ''
      });
    } catch (error) {
      // Moderation is authoritative; notification email failure must not roll it back.
      console.error('Review decision email failed', error);
    }
  }

  return json({ ok: true, status: nextStatus });
};
