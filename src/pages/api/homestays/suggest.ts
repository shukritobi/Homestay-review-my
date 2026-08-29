import type { APIRoute } from 'astro';
import { json } from '../../../lib/security';

export const GET: APIRoute = async ({ request, locals }) => {
  const db = locals.runtime.env.DB;
  const query = new URL(request.url).searchParams.get('q')?.trim().slice(0, 80) || '';
  if (!db || query.length < 2) return json({ ok: true, results: [] });

  const pattern = `%${query.toLowerCase()}%`;
  const { results } = await db.prepare(`
    SELECT id, name, city, state, slug, review_count, average_rating
    FROM homestays
    WHERE status = 'active'
      AND (lower(name) LIKE ? OR lower(city) LIKE ? OR lower(state) LIKE ?)
    ORDER BY review_count DESC, average_rating DESC, name ASC
    LIMIT 8
  `).bind(pattern, pattern, pattern).all<{
    id: number;
    name: string;
    city: string;
    state: string;
    slug: string;
    review_count: number;
    average_rating: number;
  }>();

  return json({
    ok: true,
    results: results.map((item) => ({
      id: item.id,
      name: item.name,
      city: item.city,
      state: item.state,
      slug: item.slug,
      reviewCount: Number(item.review_count || 0),
      rating: Number(item.average_rating || 0)
    }))
  });
};
