-- External Google review metadata is kept separate from HomestayReview.my's own moderated reviews.
ALTER TABLE homestays ADD COLUMN google_rating REAL;
ALTER TABLE homestays ADD COLUMN google_review_count INTEGER NOT NULL DEFAULT 0;
ALTER TABLE homestays ADD COLUMN google_data_checked_at TEXT;

CREATE INDEX IF NOT EXISTS idx_homestays_google_rank
ON homestays(google_rating DESC, google_review_count DESC);
