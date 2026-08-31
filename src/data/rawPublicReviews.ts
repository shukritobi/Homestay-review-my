export type RawPublicReview = {
  author: string;
  postedAt: string | null;
  text: string;
  sourceUrl: string;
  sourceLabel: string;
};

// Verbatim public review excerpts only. No summaries, no sentiment rewriting.
// Keep excerpts short and preserve the reviewer's original wording, including grammar/typos.
export const RAW_PUBLIC_REVIEWS: Record<string, RawPublicReview[]> = {
  'google-top-001': [
    {
      author: 'dom',
      postedAt: '2025-10-09',
      text: "Location is great! But the cleanliness is questionable as we found cockcroach running around and the mattress carry it's smell",
      sourceUrl: 'https://www.tripadvisor.com/Hotel_Review-g306997-d26811524-Reviews-Bali_Residences_Sea_View_Suites_Melaka-Melaka_Central_Melaka_District_Melaka_State.html',
      sourceLabel: 'Tripadvisor'
    }
  ],
  'google-top-002': [
    {
      author: 'Jo P',
      postedAt: '2025-03-01',
      text: 'What a lovely place! Easy check in and out. The view was exceptional',
      sourceUrl: 'https://www.tripadvisor.com/Hotel_Review-g298278-d26811531-Reviews-Country_Garden_Danga_Bay_Sea_View_by_Stayrene-Johor_Bahru_Johor_Bahru_District_Johor.html',
      sourceLabel: 'Tripadvisor'
    }
  ],
  'google-top-016': [
    {
      author: 'Tünde',
      postedAt: '2026-07-03',
      text: 'The house was spacious, the pool very clean and the staff really helpful and flexible.',
      sourceUrl: 'https://www.booking.com/reviews/my/hotel/sembilan-langkawi.en-gb.html',
      sourceLabel: 'Booking.com'
    }
  ],
  'google-top-028': [
    {
      author: 'Sunawr',
      postedAt: '2026-06-09',
      text: 'Have Netflix, YouTube and Good Wifi Connection.',
      sourceUrl: 'https://www.agoda.com/homestay-mersing-anid-d-lautan-biru/hotel/mersing-my.html',
      sourceLabel: 'Agoda'
    }
  ]
};

export function getRawPublicReviews(slug: string): RawPublicReview[] {
  return RAW_PUBLIC_REVIEWS[slug] || [];
}
