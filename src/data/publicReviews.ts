export type PublicReviewSnippet = {
  summary: string;
  author?: string;
  postedAt?: string;
  sourceUrl: string;
};

// Short paraphrases of exact-property public guest feedback discovered on the open web.
// Source URLs are retained for provenance but are intentionally not surfaced in the public UI.
export const PUBLIC_REVIEW_SNIPPETS: Record<string, PublicReviewSnippet[]> = {
  'google-top-001': [
    {
      summary: 'Great sea views and a useful location, but unit condition and cleanliness can vary. One guest also noted very limited toiletries and extra charges for fresh linen.',
      postedAt: '2025-02-01',
      sourceUrl: 'https://www.tripadvisor.com.my/Hotel_Review-g306997-d26811524-Reviews-Bali_Residences_Sea_View_Suites_Melaka-Melaka_Central_Melaka_District_Melaka_State.html'
    }
  ],
  'google-top-002': [
    {
      summary: 'Spacious, clean apartment with strong sea views and helpful service. Some guests felt parts of the facilities needed better maintenance.',
      postedAt: '2026-07-21',
      sourceUrl: 'https://www.agoda.com/country-garden-danga-bay-sea-view-homestay-by-stayrene/hotel/johor-bahru-my.html'
    }
  ],
  'google-top-006': [
    {
      summary: 'Guests describe the rooms as very clean and comfortable, with good value. Parking was the main drawback mentioned in one recent stay.',
      postedAt: '2026-06-08',
      sourceUrl: 'https://www.booking.com/reviews/my/hotel/7-minutes-driving-to-tc-beach-123-guest-house.html'
    }
  ],
  'google-top-007': [
    {
      summary: 'Clean, comfortable unit with a good pool, useful facilities and easy self check-in. One guest found the deposit instructions confusing and slow to resolve.',
      sourceUrl: 'https://www.booking.com/hotel/my/trion-premium-suites-kl.html'
    }
  ],
  'google-top-009': [
    {
      summary: 'A clean, spacious option for larger groups with multiple bathrooms. Guests also liked the simple key collection process.',
      sourceUrl: 'https://www.booking.com/hotel/my/penthouse-secret-garden-de-cameron-night-market.html'
    }
  ],
  'google-top-014': [
    {
      summary: 'Convenient location, neat decoration and a clean, organised apartment. One guest noted that the second bedroom has no window.',
      postedAt: '2024-09-21',
      sourceUrl: 'https://www.booking.com/reviews/my/hotel/luxury-troika-kota-bharu-by-aura-troika.en-gb.html'
    }
  ],
  'google-top-016': [
    {
      summary: 'Very spacious and peaceful for families, with a clean pool and helpful staff. A few older facilities may need maintenance.',
      postedAt: '2026-06-03',
      sourceUrl: 'https://www.booking.com/reviews/my/hotel/sembilan-langkawi.en-gb.html'
    }
  ],
  'google-top-019': [
    {
      summary: 'Guests consistently praise the cleanliness, comfort and well-equipped setup. The host and location are also repeatedly rated highly.',
      sourceUrl: 'https://www.agoda.com/wakaf-homestay-rukaiyah-al-mansouri/hotel/mersing-my.html'
    }
  ],
  'google-top-020': [
    {
      summary: 'Good value with a convenient location and practical room setup. Bathroom fixtures and maintenance were the main issues raised in a recent stay.',
      postedAt: '2026-01-24',
      sourceUrl: 'https://www.booking.com/reviews/my/hotel/hb73-cyberjaya-netflix-wi-fi-parking-pool-cyberjaya.en-gb.html'
    }
  ],
  'google-top-024': [
    {
      summary: 'Clean, comfortable and very convenient for KSL Mall, with easy self check-in and helpful hosts. Families and groups regularly mention the spacious layout.',
      postedAt: '2025-06-03',
      sourceUrl: 'https://www.agoda.com/en-sg/ksl-city-mall-7-8pax-netflix-smarttv-65inch-k23/hotel/johor-bahru-my.html'
    }
  ],
  'google-top-025': [
    {
      summary: 'Clean apartment in a strategic city location with useful facilities and helpful management. Guests particularly like the sea-view and private-jacuzzi setup.',
      sourceUrl: 'https://www.booking.com/hotel/my/mwholidaya2713-skygalaxy-privatejacuzzi-seavilla.html'
    }
  ],
  'google-top-028': [
    {
      summary: 'Super clean, well-equipped and easy to check in. Guests also like the short drive to the beach and Mersing jetty.',
      postedAt: '2026-06-09',
      sourceUrl: 'https://www.agoda.com/en-us/homestay-mersing-anid-d-lautan-biru/hotel/mersing-my.html'
    }
  ],
  'google-top-030': [
    {
      summary: 'Good location and suitable for families. Guests have flagged small practical issues such as needing another access card, missing toiletries and occasional streaming problems.',
      postedAt: '2026-04-19',
      sourceUrl: 'https://www.booking.com/reviews/my/hotel/riverview-8pax-2br-in-kbtown-wi-fi-a-10-7.html'
    }
  ],
  'google-top-033': [
    {
      summary: 'Large countryside setting that works well for family gatherings, with a river, orchard and BBQ space. Guests describe it as peaceful and relaxing.',
      sourceUrl: 'https://my.worldorgs.com/katalog/sungkai/inap-ladang/tiongtrovefamilyfarm'
    }
  ],
  'google-top-034': [
    {
      summary: 'Very clean and comfortable with a warm, helpful host and homemade breakfast. The steep, narrow stairs can be awkward with heavy luggage.',
      sourceUrl: 'https://www.booking.com/reviews/my/hotel/sweet-loft-homestay.html'
    }
  ],
  'google-top-037': [
    {
      summary: 'Very clean and well maintained with a welcoming host and plenty of group activities such as swimming and karaoke. Guests also like the open space.',
      sourceUrl: 'https://www.booking.com/hotel/my/tranquil-arcadia-homestay-by-desaru-bandar-penawar.html'
    }
  ],
  'google-top-039': [
    {
      summary: 'Repeatedly praised for exceptional cleanliness, mountain views and a friendly responsive host. Guests also like the modern facilities and clear check-in instructions.',
      postedAt: '2025-06-24',
      sourceUrl: 'https://wanderlog.com/place/details/9246236/blissful-homestay-horizon-ipoh'
    }
  ],
  'google-top-042': [
    {
      summary: 'Clean, spacious and comfortable for extended families, with an easy check-in and useful kitchen facilities. Most nearby food and shopping is easier by car.',
      postedAt: '2024-02-14',
      sourceUrl: 'https://www.agoda.com/glenmarie-austin-20pax-mount-austin-family-stay/hotel/johor-bahru-my.html'
    }
  ],
  'google-top-043': [
    {
      summary: 'Clean, complete and comfortable for large families, with a responsive owner and plenty of facilities. Several guests said they would stay again.',
      postedAt: '2026-06-16',
      sourceUrl: 'https://www.agoda.com/tepak-nusuk-s-homestay/hotel/kota-bharu-my.html'
    }
  ],
  'google-top-044': [
    {
      summary: 'Guests consistently highlight the spacious house, cleanliness and family-friendly setup. Hospitality and comfort are among the most-mentioned positives.',
      sourceUrl: 'https://www.airbnb.com.my/rooms/1297100867397235998'
    }
  ],
  'google-top-048': [
    {
      summary: 'Strong value for large groups with helpful hosts and plenty of facilities. Feedback is mostly positive, though cleanliness and kid-friendliness were mixed in a small number of comments.',
      sourceUrl: 'https://www.agoda.com/en-us/party-haus/hotel/johor-bahru-my.html'
    }
  ],
  'google-top-059': [
    {
      summary: 'Huge, spotless villa with a private pool, strong facilities and a responsive host. A few guests found the beds firm and wanted more bathroom privacy.',
      postedAt: '2026-01-19',
      sourceUrl: 'https://www.booking.com/reviews/my/hotel/ikiru-villa-18.en-gb.html'
    }
  ],
  'google-top-060': [
    {
      summary: 'Clean, spacious rooms with a strong resort feel and attentive service. Guests especially like the pool and location, though occasional check-in delays were mentioned.',
      postedAt: '2026-06-28',
      sourceUrl: 'https://www.booking.com/reviews/my/hotel/la-villa.en-gb.html'
    }
  ],
  'google-top-061': [
    {
      summary: 'Very large, well-equipped villa with a private pool and a convenient location near food and the beach. Some guests mentioned slow housekeeping or minor drainage issues.',
      postedAt: '2026-01-28',
      sourceUrl: 'https://www.booking.com/reviews/my/hotel/the-langkawi-luxury.html'
    }
  ],
  'google-top-065': [
    {
      summary: 'A genuinely kid-friendly stay with responsive staff and plenty of family space. One guest flagged the steep parking slope and a microwave that was not working.',
      postedAt: '2025-11-20',
      sourceUrl: 'https://www.agoda.com/en-sg/new-desaru-baby-kids-friendly-pool-homestay/hotel/desaru-my.html'
    }
  ],
  'google-top-068': [
    {
      summary: 'A good large-group option with useful facilities and plenty of space for family time. Guests also rate the location and cleanliness well.',
      postedAt: '2026-07-01',
      sourceUrl: 'https://www.agoda.com/gran-estancia-villa-jbcity-home/hotel/johor-bahru-my.html'
    }
  ],
  'google-top-074': [
    {
      summary: 'Guests love the sea views, beach access and helpful staff. The main recurring complaints are ageing facilities, maintenance and inconsistent breakfast quality.',
      postedAt: '2026-08-23',
      sourceUrl: 'https://my.trip.com/hotels/balok-hotel-detail-7808928/royale-chulan-cherating/review.html'
    }
  ],
  'google-top-076': [
    {
      summary: 'Cozy rooms, distinctive design and very friendly staff. First-time visitors may find the turn-in from the main road easy to miss at night.',
      postedAt: '2025-12-24',
      sourceUrl: 'https://www.booking.com/reviews/my/hotel/the-tudor.html'
    }
  ],
  'google-top-092': [
    {
      summary: 'Clean, fragrant and comfortable with a very convenient central location near key Kuala Terengganu attractions. Guests frequently say it is worth repeating.',
      postedAt: '2026-05-16',
      sourceUrl: 'https://www.booking.com/reviews/my/hotel/homestay-camelia-kuala-terengganu.ms.html'
    }
  ],
  'google-top-093': [
    {
      summary: 'Popular with families for the nature setting and activities. Guests frequently mention the glamping atmosphere, cycling, kayaks and on-site facilities.',
      sourceUrl: 'https://www.google.com.my/travel/hotels/entity/ChoIlqnzia_hg7KJARoNL2cvMTFsNXM1Yzk2eRAB'
    }
  ]
};

export function getPublicReviewSnippets(slug: string): PublicReviewSnippet[] {
  return PUBLIC_REVIEW_SNIPPETS[slug] || [];
}
