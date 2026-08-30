export type HomestaySummary = {
  id: number;
  name: string;
  slug: string;
  city: string;
  state: string;
  averageRating: number;
  reviewCount: number;
  googleRating: number | null;
  googleReviewCount: number;
  googleMapsUrl: string | null;
  tags: string[];
  latestReview: string | null;
};

export type PublicReview = {
  id: number;
  author: string;
  rating: number;
  title: string;
  body: string;
  stayMonth: number | null;
  stayYear: number | null;
  helpful: number;
  approvedAt: string | null;
};

export type HomestayDetail = HomestaySummary & {
  address: string | null;
  district: string | null;
  postcode: string | null;
  sourceName: string | null;
  sourceUrl: string | null;
  googleDataCheckedAt: string | null;
  distribution: [number, number, number, number, number];
  reviews: PublicReview[];
};

export type AdminReview = {
  id: number;
  homestayId: number;
  homestayName: string;
  city: string;
  state: string;
  homestayStatus: string;
  rating: number;
  title: string;
  body: string;
  author: string;
  email: string;
  stayMonth: number | null;
  stayYear: number | null;
  tripType: string | null;
  submittedAt: string;
  status: string;
  risk: string;
};

function parseTags(value: string | null) {
  if (!value) return [];
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed.filter((item) => typeof item === 'string').slice(0, 8) : [];
  } catch {
    return [];
  }
}

export async function listHomestays(db: D1Database): Promise<HomestaySummary[]> {
  const { results } = await db.prepare(`
    SELECT
      h.id,
      h.name,
      h.slug,
      h.city,
      h.state,
      h.average_rating,
      h.review_count,
      h.google_rating,
      h.google_review_count,
      h.google_maps_url,
      h.tags_json,
      (
        SELECT r.review_body
        FROM reviews r
        WHERE r.homestay_id = h.id AND r.status = 'approved'
        ORDER BY COALESCE(r.approved_at, r.submitted_at) DESC
        LIMIT 1
      ) AS latest_review
    FROM homestays h
    WHERE h.status = 'active'
    ORDER BY
      CASE WHEN h.review_count > 0 THEN 1 ELSE 0 END DESC,
      h.review_count DESC,
      h.average_rating DESC,
      COALESCE(h.google_rating, 0) DESC,
      h.google_review_count DESC,
      h.name ASC
    LIMIT 500
  `).all<{
    id: number;
    name: string;
    slug: string;
    city: string;
    state: string;
    average_rating: number;
    review_count: number;
    google_rating: number | null;
    google_review_count: number | null;
    google_maps_url: string | null;
    tags_json: string | null;
    latest_review: string | null;
  }>();

  return results.map((row) => ({
    id: row.id,
    name: row.name,
    slug: row.slug,
    city: row.city,
    state: row.state,
    averageRating: Number(row.average_rating || 0),
    reviewCount: Number(row.review_count || 0),
    googleRating: row.google_rating === null ? null : Number(row.google_rating),
    googleReviewCount: Number(row.google_review_count || 0),
    googleMapsUrl: row.google_maps_url,
    tags: parseTags(row.tags_json),
    latestReview: row.latest_review
  }));
}

export async function getHomestayBySlug(db: D1Database, slug: string): Promise<HomestayDetail | null> {
  const row = await db.prepare(`
    SELECT id, name, slug, address, city, district, state, postcode,
           average_rating, review_count, google_rating, google_review_count,
           google_maps_url, google_data_checked_at, tags_json, source_name, source_url
    FROM homestays
    WHERE slug = ? AND status = 'active'
    LIMIT 1
  `).bind(slug).first<{
    id: number;
    name: string;
    slug: string;
    address: string | null;
    city: string;
    district: string | null;
    state: string;
    postcode: string | null;
    average_rating: number;
    review_count: number;
    google_rating: number | null;
    google_review_count: number | null;
    google_maps_url: string | null;
    google_data_checked_at: string | null;
    tags_json: string | null;
    source_name: string | null;
    source_url: string | null;
  }>();

  if (!row) return null;

  const reviewsResult = await db.prepare(`
    SELECT
      r.id,
      r.reviewer_name,
      r.rating,
      r.review_title,
      r.review_body,
      r.stay_month,
      r.stay_year,
      r.approved_at,
      (SELECT COUNT(*) FROM helpful_votes hv WHERE hv.review_id = r.id) AS helpful
    FROM reviews r
    WHERE r.homestay_id = ? AND r.status = 'approved'
    ORDER BY COALESCE(r.approved_at, r.submitted_at) DESC
    LIMIT 200
  `).bind(row.id).all<{
    id: number;
    reviewer_name: string;
    rating: number;
    review_title: string;
    review_body: string;
    stay_month: number | null;
    stay_year: number | null;
    approved_at: string | null;
    helpful: number;
  }>();

  const distributionResult = await db.prepare(`
    SELECT rating, COUNT(*) AS total
    FROM reviews
    WHERE homestay_id = ? AND status = 'approved'
    GROUP BY rating
  `).bind(row.id).all<{ rating: number; total: number }>();

  const counts = new Map(distributionResult.results.map((item) => [Number(item.rating), Number(item.total)]));
  const distribution: [number, number, number, number, number] = [
    counts.get(5) || 0,
    counts.get(4) || 0,
    counts.get(3) || 0,
    counts.get(2) || 0,
    counts.get(1) || 0
  ];

  return {
    id: row.id,
    name: row.name,
    slug: row.slug,
    address: row.address,
    city: row.city,
    district: row.district,
    state: row.state,
    postcode: row.postcode,
    averageRating: Number(row.average_rating || 0),
    reviewCount: Number(row.review_count || 0),
    googleRating: row.google_rating === null ? null : Number(row.google_rating),
    googleReviewCount: Number(row.google_review_count || 0),
    googleMapsUrl: row.google_maps_url,
    googleDataCheckedAt: row.google_data_checked_at,
    tags: parseTags(row.tags_json),
    latestReview: reviewsResult.results[0]?.review_body || null,
    sourceName: row.source_name,
    sourceUrl: row.source_url,
    distribution,
    reviews: reviewsResult.results.map((review) => ({
      id: review.id,
      author: review.reviewer_name,
      rating: Number(review.rating),
      title: review.review_title,
      body: review.review_body,
      stayMonth: review.stay_month,
      stayYear: review.stay_year,
      helpful: Number(review.helpful || 0),
      approvedAt: review.approved_at
    }))
  };
}

export async function findHomestayById(db: D1Database, id: number) {
  return db.prepare(`SELECT id, name, slug, city, state, status FROM homestays WHERE id = ? LIMIT 1`)
    .bind(id)
    .first<{ id: number; name: string; slug: string; city: string; state: string; status: string }>();
}

export async function findHomestayByIdentity(db: D1Database, name: string, city: string, state: string) {
  return db.prepare(`
    SELECT id, name, slug, city, state, status
    FROM homestays
    WHERE lower(name) = lower(?) AND lower(city) = lower(?) AND lower(state) = lower(?)
    LIMIT 1
  `).bind(name, city, state).first<{ id: number; name: string; slug: string; city: string; state: string; status: string }>();
}

export async function listPendingReviews(db: D1Database): Promise<AdminReview[]> {
  const { results } = await db.prepare(`
    SELECT
      r.id,
      r.homestay_id,
      h.name AS homestay_name,
      h.city,
      h.state,
      h.status AS homestay_status,
      r.rating,
      r.review_title,
      r.review_body,
      r.reviewer_name,
      r.reviewer_email,
      r.stay_month,
      r.stay_year,
      r.trip_type,
      r.submitted_at,
      r.status
    FROM reviews r
    JOIN homestays h ON h.id = r.homestay_id
    WHERE r.email_verified = 1 AND r.status IN ('pending', 'flagged', 'needs_changes')
    ORDER BY CASE r.status WHEN 'flagged' THEN 0 WHEN 'needs_changes' THEN 1 ELSE 2 END,
             r.submitted_at DESC
    LIMIT 200
  `).all<{
    id: number;
    homestay_id: number;
    homestay_name: string;
    city: string;
    state: string;
    homestay_status: string;
    rating: number;
    review_title: string;
    review_body: string;
    reviewer_name: string;
    reviewer_email: string;
    stay_month: number | null;
    stay_year: number | null;
    trip_type: string | null;
    submitted_at: string;
    status: string;
  }>();

  return results.map((row) => ({
    id: row.id,
    homestayId: row.homestay_id,
    homestayName: row.homestay_name,
    city: row.city,
    state: row.state,
    homestayStatus: row.homestay_status,
    rating: Number(row.rating),
    title: row.review_title,
    body: row.review_body,
    author: row.reviewer_name,
    email: row.reviewer_email,
    stayMonth: row.stay_month,
    stayYear: row.stay_year,
    tripType: row.trip_type,
    submittedAt: row.submitted_at,
    status: row.status,
    risk: row.homestay_status === 'pending' ? 'New homestay' : row.status === 'flagged' ? 'Flagged' : row.status === 'needs_changes' ? 'Changes requested' : 'Low risk'
  }));
}

export async function getAdminStats(db: D1Database) {
  const row = await db.prepare(`
    SELECT
      SUM(CASE WHEN status = 'pending' AND email_verified = 1 THEN 1 ELSE 0 END) AS pending,
      SUM(CASE WHEN status = 'flagged' THEN 1 ELSE 0 END) AS flagged,
      SUM(CASE WHEN status = 'approved' THEN 1 ELSE 0 END) AS approved,
      SUM(CASE WHEN status = 'rejected' THEN 1 ELSE 0 END) AS rejected,
      SUM(CASE WHEN status = 'approved' AND date(approved_at) = date('now') THEN 1 ELSE 0 END) AS approved_today
    FROM reviews
  `).first<{ pending: number | null; flagged: number | null; approved: number | null; rejected: number | null; approved_today: number | null }>();

  const newListings = await db.prepare(`SELECT COUNT(*) AS total FROM homestays WHERE status = 'pending'`)
    .first<{ total: number }>();

  return {
    pending: Number(row?.pending || 0),
    flagged: Number(row?.flagged || 0),
    approved: Number(row?.approved || 0),
    rejected: Number(row?.rejected || 0),
    approvedToday: Number(row?.approved_today || 0),
    newListings: Number(newListings?.total || 0)
  };
}

export async function refreshHomestayStats(db: D1Database, homestayId: number) {
  await db.prepare(`
    UPDATE homestays
    SET average_rating = COALESCE((
          SELECT ROUND(AVG(rating), 2) FROM reviews WHERE homestay_id = ? AND status = 'approved'
        ), 0),
        review_count = (
          SELECT COUNT(*) FROM reviews WHERE homestay_id = ? AND status = 'approved'
        ),
        updated_at = CURRENT_TIMESTAMP
    WHERE id = ?
  `).bind(homestayId, homestayId, homestayId).run();
}
