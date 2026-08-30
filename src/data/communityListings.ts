export type CommunityListing = {
  name: string;
  slug: string;
  city: string;
  state: string;
};

// Properties identified from user-supplied public social screenshots.
// These remain lightweight community-discovered listings until matched to D1 records.
export const COMMUNITY_LISTINGS: CommunityListing[] = [
  {
    name: 'Homestay Tok Jembal',
    slug: 'homestay-tok-jembal',
    city: 'Tok Jembal',
    state: 'Terengganu'
  },
  {
    name: 'RR Homestay Sekinchan Tali Air 7 (Paddy View)',
    slug: 'rr-homestay-sekinchan-tali-air-7',
    city: 'Sekinchan',
    state: 'Selangor'
  },
  {
    name: 'Zara Homestay KLIA',
    slug: 'zara-homestay-klia',
    city: 'KLIA',
    state: 'Selangor'
  }
];

export function getCommunityListing(slug: string) {
  return COMMUNITY_LISTINGS.find((item) => item.slug === slug) || null;
}
