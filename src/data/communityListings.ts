export type CommunityListing = {
  name: string;
  slug: string;
  city: string;
  state: string;
};

// Community-discovered properties collected from public web results or user-supplied screenshots.
// These remain lightweight listings until matched to canonical D1 records.
export const COMMUNITY_LISTINGS: CommunityListing[] = [
  { name: 'Homestay Tok Jembal', slug: 'homestay-tok-jembal', city: 'Tok Jembal', state: 'Terengganu' },
  { name: 'RR Homestay Sekinchan Tali Air 7 (Paddy View)', slug: 'rr-homestay-sekinchan-tali-air-7', city: 'Sekinchan', state: 'Selangor' },
  { name: 'Zara Homestay KLIA', slug: 'zara-homestay-klia', city: 'KLIA', state: 'Selangor' },
  { name: 'Homestay Pepadi Sekinchan', slug: 'homestay-pepadi-sekinchan', city: 'Sekinchan', state: 'Selangor' },
  { name: 'Anjung Pool Villa', slug: 'anjung-pool-villa-sekinchan', city: 'Sekinchan', state: 'Selangor' },
  { name: 'SmartHouse i-City', slug: 'smarthouse-i-city-shah-alam', city: 'Shah Alam', state: 'Selangor' },
  { name: 'Homestay Annur Kamunting', slug: 'homestay-annur-kamunting', city: 'Kamunting', state: 'Perak' },
  { name: 'NN Homestay Jasin', slug: 'nn-homestay-jasin', city: 'Jasin', state: 'Melaka' },
  { name: 'Dusun Tok Pa', slug: 'dusun-tok-pa-slim-river', city: 'Slim River', state: 'Perak' },
  { name: 'Hovel Glamping Homestay', slug: 'hovel-glamping-homestay-alor-setar', city: 'Alor Setar', state: 'Kedah' },
  { name: "Homestay D'Ledang", slug: 'homestay-d-ledang-tangkak', city: 'Tangkak', state: 'Johor' }
];

export function getCommunityListing(slug: string) {
  return COMMUNITY_LISTINGS.find((item) => item.slug === slug) || null;
}
