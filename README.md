# HomestayReview.my

A review-first directory for Malaysian homestays. No booking funnel, no OTA-style landing page and no automatic publishing. The product opens directly into searchable homestay listings and every submitted review must pass moderation before it becomes public.

## Product direction

### Design idea: Quiet editorial directory

The interface deliberately avoids the visual language of booking sites. It uses a warm paper background, dark ink typography, coral as the only strong accent and serif text inside review excerpts. Ratings are treated as clear information blocks rather than promotional badges.

Design tokens:

- Paper: `#f4f0e7`
- Card: `#fffdf8`
- Ink: `#171817`
- Coral accent: `#ff5b45`
- Trust green: `#1f6b4f`
- Large rounded cards: 20 to 28px
- System sans-serif for UI, Georgia for guest review text

### UX principles

1. The directory is the homepage.
2. Search and filtering stay above the listings.
3. A visitor can judge a listing from its score, review count, location, tags and one useful review excerpt.
4. Detail pages put score distribution and reviews before secondary information.
5. Writing a review does not require an account.
6. Every review is email-verified and moderated before publication in the production flow.
7. Missing homestays can be submitted from the same review form.
8. Admin actions are simple: approve, reject, flag or request a change.
9. The public UI is mobile-first and does not depend on property photography.
10. Demo content is explicitly labeled so sample reviews are never presented as real user reviews.

## Current prototype routes

- `/` searchable homestay directory
- `/homestay/[slug]` listing and review detail
- `/review/submit` review submission experience
- `/admin` moderation dashboard prototype

## Current prototype features

- Live text search
- State filter
- Rating filter
- Category chips
- Most-reviewed, highest-rated and alphabetical sorting
- Responsive listing cards
- Rating distribution
- Guest review cards
- Helpful interaction demo
- Review form with rating, stay date, trip type, review and email fields
- Client-side prototype submission confirmation
- Admin moderation queue
- Demo approve, reject, flag and request-change interactions
- Cloudflare D1 schema in `db/schema.sql`

## Production architecture

```text
Browser
  |
Cloudflare
  |-- Astro UI
  |-- Workers API
  |-- Turnstile
  |
  |-- D1
  |     |-- homestays
  |     |-- reviews
  |     |-- helpful_votes
  |     |-- review_reports
  |     `-- moderation_logs
  |
  `-- Resend email verification

Review submission
  -> Turnstile
  -> rate limit
  -> email verification
  -> pending review
  -> admin moderation
  -> approved
  -> public
```

## Recommended production stack

- Astro + TypeScript
- Cloudflare Workers
- Cloudflare D1
- Cloudflare Turnstile
- Cloudflare Access for `/admin`
- Resend for email verification
- Cloudflare R2 only if review or listing images are added later

## Database

The starter D1 schema is in:

```text
db/schema.sql
```

Only records with `reviews.status = 'approved'` should ever be returned by public review endpoints.

## Local development

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
```

## Production work remaining

The current repository is a working UI/UX prototype with static demo data. Before launch:

1. Switch Astro to the Cloudflare adapter.
2. Create the D1 database and run `db/schema.sql`.
3. Replace demo data with database queries.
4. Create review submission and moderation API endpoints.
5. Add Turnstile validation server-side.
6. Add Resend email-verification tokens.
7. Protect `/admin` with Cloudflare Access.
8. Add rate limiting and hashed abuse signals.
9. Add report-review flow.
10. Add moderation audit entries for every admin action.
11. Import the first real Malaysian homestay listing dataset.
12. Remove demo records before enabling review structured data for SEO.

## Brand

Preferred domain: `homestayreview.my`

Brand lockup used in the interface: `homestay/review.my`
