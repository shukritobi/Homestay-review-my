import type { APIRoute } from 'astro';
import { json, sha256 } from '../../../../lib/security';

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

  const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
  const ua = request.headers.get('User-Agent') || '';
  const voterKeyHash = await sha256(`${env.HASH_SALT}|helpful|${ip}|${ua}`);

  await db.prepare(`INSERT OR IGNORE INTO helpful_votes (review_id, voter_key_hash) VALUES (?, ?)`)
    .bind(reviewId, voterKeyHash)
    .run();

  const count = await db.prepare(`SELECT COUNT(*) AS total FROM helpful_votes WHERE review_id = ?`)
    .bind(reviewId)
    .first<{ total: number }>();

  return json({ ok: true, count: Number(count?.total || 0) });
};
