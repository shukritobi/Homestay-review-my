PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS homestays (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  address TEXT,
  city TEXT NOT NULL,
  district TEXT,
  state TEXT NOT NULL,
  postcode TEXT,
  latitude REAL,
  longitude REAL,
  google_maps_url TEXT,
  website_url TEXT,
  facebook_url TEXT,
  instagram_url TEXT,
  airbnb_url TEXT,
  booking_url TEXT,
  agoda_url TEXT,
  average_rating REAL NOT NULL DEFAULT 0,
  review_count INTEGER NOT NULL DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('active','pending','hidden','closed','duplicate')),
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS reviews (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  homestay_id INTEGER NOT NULL,
  reviewer_name TEXT NOT NULL,
  reviewer_email TEXT NOT NULL,
  email_verified INTEGER NOT NULL DEFAULT 0,
  rating INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),
  review_title TEXT NOT NULL,
  review_body TEXT NOT NULL,
  stay_month INTEGER,
  stay_year INTEGER,
  trip_type TEXT,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','approved','rejected','needs_changes','flagged','removed')),
  submitted_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  approved_at TEXT,
  rejected_at TEXT,
  moderator_note TEXT,
  ip_hash TEXT,
  user_agent_hash TEXT,
  FOREIGN KEY (homestay_id) REFERENCES homestays(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS helpful_votes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  review_id INTEGER NOT NULL,
  voter_key_hash TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(review_id, voter_key_hash),
  FOREIGN KEY (review_id) REFERENCES reviews(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS review_reports (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  review_id INTEGER NOT NULL,
  reason TEXT NOT NULL,
  detail TEXT,
  reporter_email TEXT,
  status TEXT NOT NULL DEFAULT 'open' CHECK (status IN ('open','resolved','dismissed')),
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  resolved_at TEXT,
  FOREIGN KEY (review_id) REFERENCES reviews(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS moderation_logs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  review_id INTEGER,
  homestay_id INTEGER,
  moderator_id TEXT NOT NULL,
  action TEXT NOT NULL,
  previous_status TEXT,
  new_status TEXT,
  reason TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (review_id) REFERENCES reviews(id) ON DELETE SET NULL,
  FOREIGN KEY (homestay_id) REFERENCES homestays(id) ON DELETE SET NULL
);

CREATE INDEX IF NOT EXISTS idx_homestays_slug ON homestays(slug);
CREATE INDEX IF NOT EXISTS idx_homestays_state_city ON homestays(state, city);
CREATE INDEX IF NOT EXISTS idx_homestays_status ON homestays(status);
CREATE INDEX IF NOT EXISTS idx_reviews_homestay_status ON reviews(homestay_id, status);
CREATE INDEX IF NOT EXISTS idx_reviews_status_submitted ON reviews(status, submitted_at DESC);
CREATE INDEX IF NOT EXISTS idx_reports_status ON review_reports(status, created_at DESC);
