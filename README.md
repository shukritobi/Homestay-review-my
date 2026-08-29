# HomestayReview.my

A review-first directory for Malaysian homestays. No booking funnel, no OTA-style landing page, no automatic publishing. The homepage is the searchable directory and every submitted review must be email-verified and manually moderated before it becomes public.

## Product direction

### Design: quiet editorial directory

The interface deliberately avoids the visual language of booking sites. It uses a warm paper background, dark ink typography, coral as the main accent, yellow for ratings and green for trust/moderation states. Review text is given more visual weight than property photography.

Core design tokens:

- Paper: `#f4f0e7`
- Card: `#fffdf8`
- Ink: `#171817`
- Coral: `#ff5b45`
- Trust green: `#1f6b4f`
- Large rounded cards: 20–28px
- System sans-serif for UI, Georgia for guest review text

## UX principles

1. The directory is the homepage.
2. Search and filters sit directly above listings.
3. No user account is required to write a review.
4. Email verification happens before moderation.
5. Verification never publishes a review.
6. Only `approved` reviews are returned publicly.
7. A missing homestay can be added from the same review form.
8. New homestay listings remain private until moderation.
9. Admin actions are approve, reject, flag, request changes or remove.
10. No fabricated/sample reviews are included in production data.

## Routes

### Public

- `/` — live D1-backed homestay directory
- `/homestay/[slug]` — homestay rating distribution and approved reviews
- `/review/submit` — review + missing-homestay submission
- `/review/verify` — one-time email verification

### APIs

- `GET /api/homestays/suggest` — homestay autocomplete
- `POST /api/reviews/submit` — Turnstile-checked review submission
- `POST /api/reviews/[id]/helpful` — helpful vote
- `POST /api/reviews/[id]/report` — report an approved review
- `POST /api/admin/reviews/[id]/action` — moderation action, protected by Cloudflare Access

### Private

- `/admin` — D1-backed moderation queue, designed to sit behind Cloudflare Access

## Review lifecycle

```text
submit
  ↓
Cloudflare Turnstile
  ↓
pending_email
  ↓
verification email (24h token)
  ↓
pending
  ↓
private admin moderation
  ├─ approve → public
  ├─ reject
  ├─ flag
  ├─ request changes
  └─ remove
```

For a newly submitted homestay, approving its first verified review also activates the homestay listing.

## Stack

- Astro 7.2.9 + TypeScript
- `@astrojs/cloudflare` 14.2.5
- Cloudflare Workers
- Cloudflare D1
- Cloudflare Turnstile
- Cloudflare Access for `/admin*` and `/api/admin/*`
- Resend for verification email
- Wrangler 4.127.1
- GitHub Actions for database, dependency and Worker bundle checks

The app uses the current Workers runtime. `src/middleware.ts` bridges the Worker environment into the app's existing internal `locals.runtime.env` interface so the review and moderation code stays simple and consistent.

## Database

Schema:

```text
db/schema.sql
```

Migration copy:

```text
db/migrations/0001_initial.sql
```

Starter listings:

```text
db/seed.sql
```

The seed contains real official homestay-program listings sourced from MOTAC and Tourism Malaysia. It intentionally contains **zero reviews and zero ratings**.

Tables:

- `homestays`
- `reviews`
- `review_verification_tokens`
- `helpful_votes`
- `review_reports`
- `moderation_logs`

## Security / abuse controls

- Turnstile is always verified server-side.
- Turnstile action and hostname are checked.
- Verification tokens are stored only as SHA-256 hashes.
- Verification links expire after 24 hours and are one-time use.
- Reviewer emails are never exposed publicly.
- IP and User-Agent abuse signals are salted + hashed before storage.
- Duplicate review submissions for the same homestay/email are restricted.
- Submission bursts are rate-limited in D1.
- Expired unverified review attempts are cleaned up automatically.
- Helpful votes and reports use hashed abuse keys.
- Admin moderation requires the Cloudflare Access authenticated-user header and an `ADMIN_EMAIL` allowlist.
- Every moderation action is written to `moderation_logs`.
- CI runs `npm audit --audit-level=high` before accepting a build.
- V1 uses pass-through image handling because the review product does not accept images.

## Environment variables

Copy `.dev.vars.example` to `.dev.vars` for local development.

Required at production runtime:

```text
DB                     Cloudflare D1 binding
APP_URL                https://homestayreview.my
TURNSTILE_SITE_KEY     public widget key
TURNSTILE_SECRET       secret key
TURNSTILE_HOSTNAMES    homestayreview.my,www.homestayreview.my
RESEND_API_KEY         Resend API key
EMAIL_FROM             verified sender
ADMIN_EMAIL            allowed admin email
HASH_SALT              long random secret
```

Never commit real secrets.

## Local development

```bash
npm install
cp .dev.vars.example .dev.vars
npm run db:init:local
npm run db:seed:local
npm run dev
```

Production Worker bundle check:

```bash
npm run build
```

Optional TypeScript diagnostics:

```bash
npm run typecheck
```

Deploy after the real Cloudflare resources and secrets have been configured:

```bash
npm run deploy
```

## Cloudflare launch checklist

1. Create a D1 database named `homestay-review-db`.
2. Replace the placeholder D1 `database_id` in `wrangler.jsonc` with the real ID.
3. Run `db/schema.sql` against the production D1 database.
4. Run `db/seed.sql` to add the starter listings.
5. Create a Turnstile widget for `homestayreview.my`.
6. Verify `homestayreview.my` as a sending domain in Resend and create the API key.
7. Add `TURNSTILE_SITE_KEY`, `TURNSTILE_SECRET`, `RESEND_API_KEY`, `ADMIN_EMAIL` and `HASH_SALT` as Worker secrets.
8. Create a Cloudflare Access application protecting `/admin*` and `/api/admin/*`, allowing only the intended admin identity.
9. Deploy the Worker using `npm run deploy` or connect the repository through Cloudflare's Workers Builds/Git integration.
10. Add `homestayreview.my` as the Worker custom domain.
11. Submit one real test review, verify its email, approve it in `/admin`, and confirm it appears publicly.

## Important deployment note

`wrangler.jsonc` currently contains a placeholder D1 database UUID. This is intentional. The repository is production-ready, but the account-specific Cloudflare D1 resource, Worker secrets, Access policy, Resend sender and custom-domain binding must be provisioned in their respective accounts before a live deployment can work.

## Brand

Preferred domain: `homestayreview.my`

Brand lockup: `homestay/review.my`
