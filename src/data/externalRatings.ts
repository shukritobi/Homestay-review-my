import type { ScoreSource } from '../lib/score';

export type VerifiedExternalRating = {
  platform: 'booking' | 'agoda' | 'facebook';
  rating: number;
  scale: number;
  reviewCount: number;
  url: string;
  checkedAt: string;
};

export const VERIFIED_EXTERNAL_RATINGS: Record<string, VerifiedExternalRating[]> = {
  "google-top-001": [{"platform":"booking","rating":8.2,"scale":10,"reviewCount":470,"url":"https://www.booking.com/hotel/my/bali-sea-view-suites-melaka.html","checkedAt":"2026-08-31"}],
  "google-top-002": [{"platform":"booking","rating":8.0,"scale":10,"reviewCount":113,"url":"https://www.booking.com/hotel/my/country-garden-danga-bay-sea-view-homestay-by-stayrene.html","checkedAt":"2026-08-31"},{"platform":"agoda","rating":8.5,"scale":10,"reviewCount":3773,"url":"https://www.agoda.com/en-ca/country-garden-danga-bay-sea-view-homestay-by-stayrene/hotel/johor-bahru-my.html","checkedAt":"2026-08-31"}],
  "google-top-003": [{"platform":"agoda","rating":9.0,"scale":10,"reviewCount":615,"url":"https://www.agoda.com/central-residence-libertyhomestay-kuala-lumpur/hotel/kuala-lumpur-my.html","checkedAt":"2026-08-31"}],
  "google-top-005": [{"platform":"booking","rating":8.1,"scale":10,"reviewCount":336,"url":"https://www.booking.com/hotel/my/windmill-upon-hills-serenity-retreat-genting.html","checkedAt":"2026-08-31"},{"platform":"agoda","rating":8.8,"scale":10,"reviewCount":556,"url":"https://www.agoda.com/en-gb/windmill-upon-hills-serenity-retreat-genting/hotel/genting-highlands-my.html","checkedAt":"2026-08-31"}],
  "google-top-006": [{"platform":"booking","rating":9.0,"scale":10,"reviewCount":14,"url":"https://www.booking.com/reviews/my/hotel/7-minutes-driving-to-tc-beach-123-guest-house.html","checkedAt":"2026-08-31"},{"platform":"agoda","rating":8.9,"scale":10,"reviewCount":22,"url":"https://www.agoda.com/7-minutes-driving-to-tc-beach-123-guest-house-h70831078/hotel/kuantan-my.html","checkedAt":"2026-08-31"}],
  "google-top-007": [{"platform":"booking","rating":8.3,"scale":10,"reviewCount":33,"url":"https://www.booking.com/hotel/my/trion-premium-suites-kl.html","checkedAt":"2026-08-31"}],
  "google-top-008": [{"platform":"agoda","rating":9.1,"scale":10,"reviewCount":310,"url":"https://www.agoda.com/exclusive-3-bedroom-homestay-kuala-lumpur/hotel/kuala-lumpur-my.html","checkedAt":"2026-08-31"}],
  "google-top-009": [{"platform":"agoda","rating":9.2,"scale":10,"reviewCount":540,"url":"https://www.agoda.com/penthouse-secret-garden-de-cameron-night-market/hotel/cameron-highlands-my.html","checkedAt":"2026-08-31"}],
  "google-top-010": [{"platform":"agoda","rating":8.9,"scale":10,"reviewCount":273,"url":"https://www.agoda.com/sanitized-hyve-netflix-wifi-parking-new/hotel/kuala-lumpur-my.html","checkedAt":"2026-08-31"}],
  "google-top-012": [{"platform":"agoda","rating":8.8,"scale":10,"reviewCount":217,"url":"https://www.agoda.com/mr-2-homestay-putrajaya-with-pool-garden-and-gym/hotel/kuala-lumpur-my.html","checkedAt":"2026-08-31"}],
  "google-top-013": [{"platform":"agoda","rating":8.4,"scale":10,"reviewCount":232,"url":"https://www.agoda.com/equatorial-hill-resort-copthorne/hotel/cameron-highlands-my.html","checkedAt":"2026-08-31"}],
  "google-top-014": [{"platform":"booking","rating":8.4,"scale":10,"reviewCount":18,"url":"https://www.booking.com/hotel/my/luxury-troika-kota-bharu-by-aura-troika.html","checkedAt":"2026-08-31"},{"platform":"agoda","rating":9.0,"scale":10,"reviewCount":274,"url":"https://www.agoda.com/aura-troika-troika-residence-kota-bharu/hotel/kota-bharu-my.html","checkedAt":"2026-08-31"}],
  "google-top-015": [{"platform":"booking","rating":9.1,"scale":10,"reviewCount":92,"url":"https://www.booking.com/hotel/my/best-moments-studio-balcony-imperium-resident.html","checkedAt":"2026-08-31"},{"platform":"agoda","rating":9.4,"scale":10,"reviewCount":153,"url":"https://www.agoda.com/best-moments-studio-balcony-imperium-resident/hotel/kuantan-my.html","checkedAt":"2026-08-31"}],
  "google-top-017": [{"platform":"booking","rating":8.2,"scale":10,"reviewCount":15,"url":"https://www.booking.com/hotel/my/dual-key-3br-macalister-218-georgetown-32.html","checkedAt":"2026-08-31"}],
  "google-top-019": [{"platform":"agoda","rating":9.4,"scale":10,"reviewCount":109,"url":"https://www.agoda.com/wakaf-homestay-rukaiyah-al-mansouri/hotel/mersing-my.html","checkedAt":"2026-08-31"}],
  "google-top-020": [{"platform":"booking","rating":7.5,"scale":10,"reviewCount":30,"url":"https://www.booking.com/reviews/my/hotel/hb73-cyberjaya-netflix-wi-fi-parking-pool-cyberjaya.en-gb.html","checkedAt":"2026-08-31"}],
  "google-top-021": [{"platform":"agoda","rating":9.5,"scale":10,"reviewCount":101,"url":"https://www.agoda.com/ru-ru/golden-troika-kota-bharu-2-bedrooms/reviews/kota-bharu-my.html","checkedAt":"2026-08-31"}],
  "google-top-022": [{"platform":"agoda","rating":8.6,"scale":10,"reviewCount":107,"url":"https://www.agoda.com/rasa-sayang-at-the-loft-imago/hotel/kota-kinabalu-my.html","checkedAt":"2026-08-31"}],
  "google-top-024": [{"platform":"agoda","rating":9.0,"scale":10,"reviewCount":92,"url":"https://www.agoda.com/en-sg/ksl-city-mall-7-8pax-netflix-smarttv-65inch-k23/hotel/johor-bahru-my.html","checkedAt":"2026-08-31"}],
  "google-top-025": [{"platform":"booking","rating":7.9,"scale":10,"reviewCount":12,"url":"https://www.booking.com/hotel/my/mwholidaya2713-skygalaxy-privatejacuzzi-seavilla.html","checkedAt":"2026-08-31"}],
  "google-top-026": [{"platform":"agoda","rating":9.2,"scale":10,"reviewCount":94,"url":"https://www.agoda.com/en-in/sy-vivacity-homestay-service-apartment/hotel/kuching-my.html","checkedAt":"2026-08-31"}],
  "google-top-028": [{"platform":"agoda","rating":9.5,"scale":10,"reviewCount":49,"url":"https://www.agoda.com/en-us/homestay-mersing-anid-d-lautan-biru/hotel/mersing-my.html","checkedAt":"2026-08-31"}],
  "google-top-030": [{"platform":"booking","rating":8.5,"scale":10,"reviewCount":58,"url":"https://www.booking.com/hotel/my/riverview-6pax-2br-in-kbtown-netflix-wi-fi-b-3a-5.en-gb.html","checkedAt":"2026-08-31"}],
  "google-top-032": [{"platform":"agoda","rating":9.3,"scale":10,"reviewCount":82,"url":"https://www.agoda.com/th-ipoh-homestay-simee-10pax-8mins-to-attraction/hotel/ipoh-my.html","checkedAt":"2026-08-31"}],
  "google-top-034": [{"platform":"booking","rating":9.2,"scale":10,"reviewCount":118,"url":"https://www.booking.com/hotel/my/sweet-loft-homestay.html","checkedAt":"2026-08-31"}],
  "google-top-037": [{"platform":"booking","rating":8.4,"scale":10,"reviewCount":10,"url":"https://www.booking.com/hotel/my/tranquil-arcadia-homestay-by-desaru-bandar-penawar.html","checkedAt":"2026-08-31"},{"platform":"agoda","rating":9.0,"scale":10,"reviewCount":59,"url":"https://www.agoda.com/en-ie/tranquil-arcadia-homestay-by-desaru/hotel/desaru-my.html","checkedAt":"2026-08-31"}],
  "google-top-038": [{"platform":"booking","rating":8.2,"scale":10,"reviewCount":10,"url":"https://www.booking.com/hotel/my/sky-gunung-lang-ipoh-semi-d-bungalow-12-17-pax.html","checkedAt":"2026-08-31"},{"platform":"agoda","rating":9.0,"scale":10,"reviewCount":55,"url":"https://www.agoda.com/en-in/unnamed-property-h35742905/hotel/ipoh-my.html","checkedAt":"2026-08-31"}],
  "google-top-040": [{"platform":"agoda","rating":8.2,"scale":10,"reviewCount":49,"url":"https://www.agoda.com/ria-homestay/hotel/johor-bahru-my.html","checkedAt":"2026-08-31"}],
  "google-top-042": [{"platform":"agoda","rating":9.4,"scale":10,"reviewCount":40,"url":"https://www.agoda.com/glenmarie-austin-20pax-mount-austin-family-stay/hotel/johor-bahru-my.html","checkedAt":"2026-08-31"}],
  "google-top-043": [{"platform":"booking","rating":9.2,"scale":10,"reviewCount":4,"url":"https://www.booking.com/hotel/my/tepak-nusuks-homestay-at-kota-bharu.html","checkedAt":"2026-08-31"},{"platform":"agoda","rating":9.6,"scale":10,"reviewCount":39,"url":"https://www.agoda.com/tepak-nusuk-s-homestay/hotel/kota-bharu-my.html","checkedAt":"2026-08-31"}],
  "google-top-047": [{"platform":"agoda","rating":8.8,"scale":10,"reviewCount":31,"url":"https://www.agoda.com/a-spacious-7br-home-w-private-swimming-pool/hotel/langkawi-my.html","checkedAt":"2026-08-31"}],
  "google-top-048": [{"platform":"agoda","rating":8.8,"scale":10,"reviewCount":28,"url":"https://www.agoda.com/party-haus/hotel/johor-bahru-my.html","checkedAt":"2026-08-31"}],
  "google-top-051": [{"platform":"agoda","rating":9.5,"scale":10,"reviewCount":29,"url":"https://www.agoda.com/6-bedroom-7-bathroom-bungalow-in-langkawi/hotel/langkawi-my.html","checkedAt":"2026-08-31"}],
  "google-top-052": [{"platform":"booking","rating":10.0,"scale":10,"reviewCount":4,"url":"https://www.booking.com/hotel/my/ipoh-south-homestay-8-16pax-10mins-to-attraction.html","checkedAt":"2026-08-31"},{"platform":"agoda","rating":9.8,"scale":10,"reviewCount":20,"url":"https://www.agoda.com/ipoh-south-homestay-8-16pax-10mins-to-attraction/hotel/ipoh-my.html","checkedAt":"2026-08-31"}],
  "google-top-056": [{"platform":"booking","rating":7.3,"scale":10,"reviewCount":39,"url":"https://www.booking.com/hotel/my/single-storey-bungalow-12-pax.html","checkedAt":"2026-08-31"}],
  "google-top-058": [{"platform":"agoda","rating":9.2,"scale":10,"reviewCount":28,"url":"https://www.agoda.com/amjad-homestay/hotel/kota-bharu-my.html","checkedAt":"2026-08-31"}],
  "google-top-059": [{"platform":"booking","rating":9.7,"scale":10,"reviewCount":39,"url":"https://www.booking.com/hotel/my/ikiru-villa-18.html","checkedAt":"2026-08-31"}],
  "google-top-060": [{"platform":"agoda","rating":9.2,"scale":10,"reviewCount":1109,"url":"https://www.agoda.com/la-villa-langkawi-private-pool_2/hotel/langkawi-my.html","checkedAt":"2026-08-31"}],
  "google-top-061": [{"platform":"booking","rating":9.2,"scale":10,"reviewCount":102,"url":"https://www.booking.com/hotel/my/the-langkawi-luxury.html","checkedAt":"2026-08-31"},{"platform":"agoda","rating":9.3,"scale":10,"reviewCount":140,"url":"https://www.agoda.com/langkawi-2-bedroom-pool-villa/hotel/langkawi-my.html","checkedAt":"2026-08-31"}],
  "google-top-062": [{"platform":"booking","rating":8.0,"scale":10,"reviewCount":9,"url":"https://www.booking.com/reviews/my/hotel/the-heaven-in-sunway-ipoh.en-gb.html","checkedAt":"2026-08-31"}],
  "google-top-063": [{"platform":"agoda","rating":8.4,"scale":10,"reviewCount":19,"url":"https://www.agoda.com/ayu-pelangi-indah-near-desa-tebrau-mount-austin/hotel/johor-bahru-my.html","checkedAt":"2026-08-31"}],
  "google-top-065": [{"platform":"agoda","rating":8.6,"scale":10,"reviewCount":17,"url":"https://www.agoda.com/en-sg/new-desaru-baby-kids-friendly-pool-homestay/hotel/desaru-my.html","checkedAt":"2026-08-31"}],
  "google-top-066": [{"platform":"booking","rating":6.6,"scale":10,"reviewCount":10,"url":"https://www.booking.com/hotel/my/ipoh-stadium-1min-wahkeongpark-simee-18pax-bungalow-cottage.html","checkedAt":"2026-08-31"}],
  "google-top-068": [{"platform":"agoda","rating":8.4,"scale":10,"reviewCount":20,"url":"https://www.agoda.com/gran-estancia-villa-jbcity-home/hotel/johor-bahru-my.html","checkedAt":"2026-08-31"}],
  "google-top-069": [{"platform":"agoda","rating":9.6,"scale":10,"reviewCount":11,"url":"https://www.agoda.com/home-stay-3-bedrooms-at-condo-with-poolview-7th/hotel/ipoh-my.html","checkedAt":"2026-08-31"}],
  "google-top-073": [{"platform":"booking","rating":1.0,"scale":10,"reviewCount":1,"url":"https://www.booking.com/hotel/my/happy-gather-homestay-huan-ju-ge.html","checkedAt":"2026-08-31"}],
  "google-top-074": [{"platform":"booking","rating":8.8,"scale":10,"reviewCount":448,"url":"https://www.booking.com/hotel/my/the-royale-chulan-cherating.html","checkedAt":"2026-08-31"},{"platform":"agoda","rating":8.9,"scale":10,"reviewCount":2522,"url":"https://www.agoda.com/en-us/royale-chulan-cherating_2/hotel/cherating-my.html","checkedAt":"2026-08-31"}],
  "google-top-075": [{"platform":"booking","rating":7.9,"scale":10,"reviewCount":1720,"url":"https://www.booking.com/hotel/my/studio-exclusive.html","checkedAt":"2026-08-31"},{"platform":"agoda","rating":8.3,"scale":10,"reviewCount":1551,"url":"https://www.agoda.com/studio-exclusive-kota-bharu-city-point/hotel/kota-bharu-my.html","checkedAt":"2026-08-31"}],
  "google-top-076": [{"platform":"booking","rating":8.6,"scale":10,"reviewCount":309,"url":"https://www.booking.com/hotel/my/the-tudor.html","checkedAt":"2026-08-31"},{"platform":"agoda","rating":9.1,"scale":10,"reviewCount":1625,"url":"https://www.agoda.com/the-tudor/hotel/ipoh-my.html","checkedAt":"2026-08-31"}],
  "google-top-078": [{"platform":"booking","rating":10.0,"scale":10,"reviewCount":6,"url":"https://www.booking.com/hotel/my/villa-family.html","checkedAt":"2026-08-31"},{"platform":"agoda","rating":10.0,"scale":10,"reviewCount":3,"url":"https://www.agoda.com/en-ie/villa-family/hotel/kota-bharu-my.html","checkedAt":"2026-08-31"}],
  "google-top-081": [{"platform":"booking","rating":8.6,"scale":10,"reviewCount":13,"url":"https://www.booking.com/hotel/my/nazrins-homes-kbcp.en-gb.html","checkedAt":"2026-08-31"}],
  "google-top-082": [{"platform":"booking","rating":9.1,"scale":10,"reviewCount":60,"url":"https://www.booking.com/hotel/my/raihan-homestay-kubang-kerian-kota-bharu1.html","checkedAt":"2026-08-31"},{"platform":"agoda","rating":9.9,"scale":10,"reviewCount":6,"url":"https://www.agoda.com/en-gb/raihan-homestay-kubang-kerian/hotel/kota-bharu-my.html","checkedAt":"2026-08-31"}],
  "google-top-085": [{"platform":"booking","rating":7.2,"scale":10,"reviewCount":35,"url":"https://www.booking.com/hotel/my/grazze-homes-canning-bungalow-4r3b-1-9pax-ipoh.html","checkedAt":"2026-08-31"}],
  "google-top-086": [{"platform":"agoda","rating":4.4,"scale":10,"reviewCount":4,"url":"https://www.agoda.com/klcc-view-bungalow-for-party/hotel/kuala-lumpur-my.html","checkedAt":"2026-08-31"}],
  "google-top-087": [{"platform":"booking","rating":7.6,"scale":10,"reviewCount":20,"url":"https://www.booking.com/hotel/my/homestay-hanan-kota-bharu.html","checkedAt":"2026-08-31"}],
  "google-top-090": [{"platform":"booking","rating":10.0,"scale":10,"reviewCount":1,"url":"https://www.booking.com/hotel/my/t-amp-t-kuching-homestay.html","checkedAt":"2026-08-31"}],
  "google-top-091": [{"platform":"booking","rating":10.0,"scale":10,"reviewCount":2,"url":"https://www.booking.com/hotel/my/ameera-family-homestay.html","checkedAt":"2026-08-31"}],
  "google-top-092": [{"platform":"booking","rating":8.9,"scale":10,"reviewCount":517,"url":"https://www.booking.com/hotel/my/homestay-camelia-kuala-terengganu.html","checkedAt":"2026-08-31"}]
};

const SOURCE_WEIGHTS: Record<VerifiedExternalRating['platform'], number> = {
  booking: 0.24,
  agoda: 0.22,
  facebook: 0.10
};

const SOURCE_LABELS: Record<VerifiedExternalRating['platform'], string> = {
  booking: 'Booking.com',
  agoda: 'Agoda',
  facebook: 'Facebook'
};

export function getVerifiedExternalRatings(slug: string): VerifiedExternalRating[] {
  return VERIFIED_EXTERNAL_RATINGS[slug] || [];
}

export function getAdditionalScoreSources(slug: string): ScoreSource[] {
  return getVerifiedExternalRatings(slug).map((item) => ({
    key: item.platform,
    label: SOURCE_LABELS[item.platform],
    rating: item.rating,
    scale: item.scale,
    reviewCount: item.reviewCount,
    baseWeight: SOURCE_WEIGHTS[item.platform]
  }));
}

export const EXTERNAL_RATING_COVERAGE = {
  checkedListings: 100,
  matchedListings: Object.keys(VERIFIED_EXTERNAL_RATINGS).length,
  bookingMatches: Object.values(VERIFIED_EXTERNAL_RATINGS).filter((items) => items.some((item) => item.platform === 'booking')).length,
  agodaMatches: Object.values(VERIFIED_EXTERNAL_RATINGS).filter((items) => items.some((item) => item.platform === 'agoda')).length,
  facebookScoreMatches: Object.values(VERIFIED_EXTERNAL_RATINGS).filter((items) => items.some((item) => item.platform === 'facebook')).length,
  checkedAt: '2026-08-31'
} as const;
