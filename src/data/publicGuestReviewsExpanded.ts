import { getPublicGuestReviews, type PublicGuestReview } from './publicGuestReviews';

// Additional individual, property-specific guest experiences gathered from
// publicly visible verified-review pages. Text is intentionally paraphrased.
export const PUBLIC_GUEST_REVIEWS_EXPANDED: Record<string, PublicGuestReview[]> = {
  'google-top-006': [
    {
      author: 'Isma',
      postedAt: '2026-06-25',
      sentiment: 'positive',
      summary: 'Found the guest house attractive, very clean and well kept during a short couple stay.',
      sourceUrl: 'https://www.booking.com/reviews/my/hotel/7-minutes-driving-to-tc-beach-123-guest-house.html'
    },
    {
      author: 'Abu',
      postedAt: '2026-06-08',
      sentiment: 'mixed',
      summary: 'Described the room as clean and comfortable, while pointing to parking as the main drawback.',
      sourceUrl: 'https://www.booking.com/reviews/my/hotel/7-minutes-driving-to-tc-beach-123-guest-house.html'
    }
  ],
  'google-top-007': [
    {
      author: 'Jayne',
      postedAt: null,
      sentiment: 'positive',
      summary: 'Liked the friendly self check-in, newer facilities and the convenience of having parking provided.',
      sourceUrl: 'https://www.booking.com/hotel/my/trion-premium-suites-kl.html'
    },
    {
      author: 'Wani',
      postedAt: null,
      sentiment: 'positive',
      summary: 'Found the room cozy and attractive, with straightforward check-in and check-out instructions and very helpful customer service.',
      sourceUrl: 'https://www.booking.com/hotel/my/trion-premium-suites-kl.html'
    },
    {
      author: 'Rebecca',
      postedAt: null,
      sentiment: 'mixed',
      summary: 'Praised the clean comfortable room, pool and fast lifts, but found the deposit instructions confusing and the refund process frustrating.',
      sourceUrl: 'https://www.booking.com/hotel/my/trion-premium-suites-kl.html'
    }
  ],
  'google-top-008': [
    {
      author: 'Mok',
      postedAt: '2025-08-20',
      sentiment: 'positive',
      summary: 'Clean, spacious and conveniently located, with a friendly host, complete facilities and strong value for money.',
      sourceUrl: 'https://www.agoda.com/exclusive-3-bedroom-homestay-kuala-lumpur/hotel/kuala-lumpur-my.html'
    },
    {
      author: 'Kabilan',
      postedAt: '2026-02-25',
      sentiment: 'positive',
      summary: 'Said the stay was convenient, worth the price and very smooth from start to finish.',
      sourceUrl: 'https://www.agoda.com/exclusive-3-bedroom-homestay-kuala-lumpur/hotel/kuala-lumpur-my.html'
    },
    {
      author: 'EMMA',
      postedAt: '2026-06-05',
      sentiment: 'positive',
      summary: 'Comfortable and clean, close to shops and restaurants, and a place the guest would choose again on another Kuala Lumpur trip.',
      sourceUrl: 'https://www.agoda.com/exclusive-3-bedroom-homestay-kuala-lumpur/hotel/kuala-lumpur-my.html'
    },
    {
      author: 'Lau',
      postedAt: '2025-10-29',
      sentiment: 'positive',
      summary: 'Liked the clean rooms and living area, easy check-in, two parking spaces and convenient access to nearby attractions.',
      sourceUrl: 'https://www.agoda.com/en-gb/exclusive-3-bedroom-homestay-kuala-lumpur/hotel/kuala-lumpur-my.html'
    }
  ],
  'google-top-009': [
    {
      author: 'Masirah',
      postedAt: '2026-04-29',
      sentiment: 'positive',
      summary: 'Found the apartment comfortable and well decorated, within walking distance of restaurants, with clear check-in instructions and a responsive host.',
      sourceUrl: 'https://www.agoda.com/penthouse-secret-garden-de-cameron-night-market/hotel/cameron-highlands-my.html'
    },
    {
      author: 'NUR',
      postedAt: '2026-07-19',
      sentiment: 'mixed',
      summary: 'Praised the sparkling-clean home, well-equipped kitchen, ensuite bathrooms, parking and responsive owner, but noted weak towels, a sagging mattress and an uneasy basement parking area at night.',
      sourceUrl: 'https://www.agoda.com/penthouse-secret-garden-de-cameron-night-market/hotel/cameron-highlands-my.html'
    },
    {
      author: 'RAZAANAH',
      postedAt: '2025-08-23',
      sentiment: 'positive',
      summary: 'Loved the peaceful location near attractions, clean comfortable rooms, mountain-weather views and responsive host, and would return.',
      sourceUrl: 'https://www.agoda.com/penthouse-secret-garden-de-cameron-night-market/hotel/cameron-highlands-my.html'
    },
    {
      author: 'aisha',
      postedAt: '2026-04-01',
      sentiment: 'mixed',
      summary: 'Thought the penthouse was clean and well located with good beds and a helpful host, but felt the old hard sofa was unsuitable for a large family.',
      sourceUrl: 'https://www.agoda.com/penthouse-secret-garden-de-cameron-night-market/hotel/cameron-highlands-my.html'
    }
  ],
  'google-top-015': [
    {
      author: 'Abdul',
      postedAt: '2026-06-22',
      sentiment: 'positive',
      summary: 'Easy smooth check-in, good cleanliness and facilities, convenient nearby parking and solid value for a budget stay.',
      sourceUrl: 'https://www.agoda.com/best-moments-studio-balcony-imperium-resident/hotel/kuantan-my.html'
    },
    {
      author: 'Yi',
      postedAt: '2026-05-31',
      sentiment: 'positive',
      summary: 'Liked the location near the city centre, small sea-view balcony, parking directly outside the room and responsive host.',
      sourceUrl: 'https://www.agoda.com/best-moments-studio-balcony-imperium-resident/hotel/kuantan-my.html'
    },
    {
      author: 'Maggie',
      postedAt: '2025-04-16',
      sentiment: 'mixed',
      summary: 'Praised the clean studio, sea-view balcony, Wi-Fi, convenient parking and helpful caretaker, while noting there was no room service or complimentary coffee and tea.',
      sourceUrl: 'https://www.agoda.com/best-moments-studio-balcony-imperium-resident/hotel/kuantan-my.html'
    }
  ],
  'google-top-020': [
    {
      author: 'Ranji',
      postedAt: '2026-01-24',
      sentiment: 'mixed',
      summary: 'Liked the location, room arrangement and value, but reported broken or poorly maintained bathroom fixtures and a body-wash dispenser that did not work.',
      sourceUrl: 'https://www.booking.com/reviews/my/hotel/hb73-cyberjaya-netflix-wi-fi-parking-pool-cyberjaya.en-gb.html'
    }
  ],
  'google-top-022': [
    {
      author: 'Y',
      postedAt: '2026-07-15',
      sentiment: 'positive',
      summary: 'Found the rooms spotless, location convenient and customer service excellent, with good value for a family stay.',
      sourceUrl: 'https://www.agoda.com/rasa-sayang-at-the-loft-imago/hotel/kota-kinabalu-my.html'
    },
    {
      author: 'Haura',
      postedAt: '2025-05-23',
      sentiment: 'positive',
      summary: 'Liked the spacious rooms, responsive staff, washing and cooking facilities, direct access to Imago Mall and the swimming pools.',
      sourceUrl: 'https://www.agoda.com/rasa-sayang-at-the-loft-imago/hotel/kota-kinabalu-my.html'
    },
    {
      author: 'Sherry',
      postedAt: '2024-09-21',
      sentiment: 'positive',
      summary: 'Recommended it for groups, highlighting helpful staff, direct mall access, useful appliances, clean rooms, working air-conditioning and a sunrise view.',
      sourceUrl: 'https://www.agoda.com/rasa-sayang-at-the-loft-imago/hotel/kota-kinabalu-my.html'
    },
    {
      author: 'Norini',
      postedAt: '2025-04-07',
      sentiment: 'mixed',
      summary: 'Had a comfortable stay overall but encountered an air-conditioner issue and a partly blocked shower drain.',
      sourceUrl: 'https://www.agoda.com/rasa-sayang-at-the-loft-imago/hotel/kota-kinabalu-my.html'
    }
  ],
  'google-top-024': [
    {
      author: 'MASTURAH',
      postedAt: null,
      sentiment: 'positive',
      summary: 'Found the unit very clean and convenient for going downstairs to buy food at any time.',
      sourceUrl: 'https://www.agoda.com/en-sg/ksl-city-mall-7-8pax-netflix-smarttv-65inch-k23/hotel/johor-bahru-my.html'
    },
    {
      author: 'Benzley',
      postedAt: null,
      sentiment: 'positive',
      summary: 'Said the room was clean, pleasant and a good place to stay.',
      sourceUrl: 'https://www.agoda.com/en-sg/ksl-city-mall-7-8pax-netflix-smarttv-65inch-k23/hotel/johor-bahru-my.html'
    }
  ],
  'google-top-025': [
    {
      author: 'Azmi',
      postedAt: null,
      sentiment: 'positive',
      summary: 'Found the apartment clean and strategically located for the city, with decent facilities and very helpful management.',
      sourceUrl: 'https://www.booking.com/hotel/my/mwholidaya2713-skygalaxy-privatejacuzzi-seavilla.html'
    }
  ],
  'google-top-030': [
    {
      author: 'Shahruddin',
      postedAt: '2025-01-30',
      sentiment: 'mixed',
      summary: 'Liked the apartment cleanliness and value, but found the pool access confusing and frustrating while the adult pool was closed for maintenance.',
      sourceUrl: 'https://www.booking.com/reviews/my/hotel/riverview-8pax-2br-in-kbtown-wi-fi-a-10-7.html'
    },
    {
      author: 'Norzuliana',
      postedAt: '2025-11-07',
      sentiment: 'mixed',
      summary: 'Liked the family-friendly location but wanted an additional access card because the lift required one even to reach the ground floor.',
      sourceUrl: 'https://www.booking.com/reviews/my/hotel/riverview-8pax-2br-in-kbtown-wi-fi-a-10-7.html'
    },
    {
      author: 'Norizzati',
      postedAt: '2026-04-19',
      sentiment: 'mixed',
      summary: 'Praised the complete kitchenware, spacious layout, good location and easy check-in, while flagging missing toiletries, dust and several small practical issues.',
      sourceUrl: 'https://www.booking.com/reviews/my/hotel/riverview-8pax-2br-in-kbtown-wi-fi-a-10-7.html'
    }
  ],
  'google-top-034': [
    {
      author: 'Hunter',
      postedAt: '2025-11-22',
      sentiment: 'positive',
      summary: 'Praised the host for excellent communication, personalised breakfast and helpful service, and found the accommodation comfortable and well equipped.',
      sourceUrl: 'https://en.planetofhotels.com/malaysia/johor-bahru/sweet-loft-homestay'
    },
    {
      author: 'Alexa',
      postedAt: null,
      sentiment: 'positive',
      summary: 'Described it as a home away from home, praising the kind host and breakfast enough to extend the stay.',
      sourceUrl: 'https://www.booking.com/hotel/my/sweet-loft-homestay.html'
    }
  ],
  'google-top-040': [
    {
      author: 'Arlene',
      postedAt: '2026-08-02',
      sentiment: 'positive',
      summary: 'Appreciated the thorough cleaning, huge layout and impressive master bathroom, saying the house handled a large family comfortably.',
      sourceUrl: 'https://www.agoda.com/ria-homestay/hotel/johor-bahru-my.html'
    },
    {
      author: 'Weldani',
      postedAt: '2026-07-20',
      sentiment: 'mixed',
      summary: 'Enjoyed a second family stay with good cleanliness and a fast friendly host, but noted the swimming pool was not suitable for children.',
      sourceUrl: 'https://www.agoda.com/ria-homestay/hotel/johor-bahru-my.html'
    },
    {
      author: 'Ghobhi',
      postedAt: '2025-08-18',
      sentiment: 'positive',
      summary: 'Liked the huge house, facilities, green outdoor area and pool, and felt it offered good value for a family gathering.',
      sourceUrl: 'https://www.agoda.com/ria-homestay/hotel/johor-bahru-my.html'
    },
    {
      author: 'Mohamad',
      postedAt: '2026-04-12',
      sentiment: 'negative',
      summary: 'Reported several maintenance problems, including a non-working whirlpool, leaking shower hose, stagnant pool water and faulty room doors.',
      sourceUrl: 'https://www.agoda.com/ria-homestay/hotel/johor-bahru-my.html'
    }
  ],
  'google-top-042': [
    {
      author: 'najied',
      postedAt: null,
      sentiment: 'positive',
      summary: 'Found the bungalow very spacious and appreciated that plenty of extra futons were provided for the family group.',
      sourceUrl: 'https://www.agoda.com/en-us/glenmarie-austin-20pax-mount-austin-family-stay/hotel/johor-bahru-my.html'
    }
  ],
  'google-top-043': [
    {
      author: 'Nur',
      postedAt: '2025-01-29',
      sentiment: 'positive',
      summary: 'Was impressed by the hotel-like feel for the price, complete facilities and very responsive owner, and would return on another Kelantan trip.',
      sourceUrl: 'https://www.agoda.com/tepak-nusuk-s-homestay/hotel/kota-bharu-my.html'
    },
    {
      author: 'Noor',
      postedAt: '2026-06-16',
      sentiment: 'positive',
      summary: 'Found the home very comfortable for a large family, with air-conditioning in every room, and would happily stay again.',
      sourceUrl: 'https://www.agoda.com/tepak-nusuk-s-homestay/hotel/kota-bharu-my.html'
    },
    {
      author: 'Nur',
      postedAt: '2025-06-03',
      sentiment: 'positive',
      summary: 'Called it one of the best homestays they had used, praising the interior, cleanliness and value.',
      sourceUrl: 'https://www.agoda.com/tepak-nusuk-s-homestay/hotel/kota-bharu-my.html'
    },
    {
      author: 'Rizal',
      postedAt: '2026-04-06',
      sentiment: 'positive',
      summary: 'Said the homestay was very clean, complete with facilities and particularly well suited to a family stay.',
      sourceUrl: 'https://www.agoda.com/tepak-nusuk-s-homestay/hotel/kota-bharu-my.html'
    }
  ],
  'google-top-047': [
    {
      author: 'Soo',
      postedAt: '2025-05-11',
      sentiment: 'positive',
      summary: 'Liked the bungalow, swimming pool and BBQ area for a family or friends gathering.',
      sourceUrl: 'https://www.agoda.com/a-spacious-7br-home-w-private-swimming-pool/hotel/langkawi-my.html'
    },
    {
      author: 'UTAYA',
      postedAt: '2024-11-02',
      sentiment: 'positive',
      summary: 'Loved the homestay and facilities, found the host friendly and said they would come back.',
      sourceUrl: 'https://www.agoda.com/a-spacious-7br-home-w-private-swimming-pool/hotel/langkawi-my.html'
    },
    {
      author: 'Vicky',
      postedAt: '2024-11-19',
      sentiment: 'mixed',
      summary: 'Thought the facilities were fairly complete but said dusty rooms and maintenance items needed attention.',
      sourceUrl: 'https://www.agoda.com/a-spacious-7br-home-w-private-swimming-pool/hotel/langkawi-my.html'
    },
    {
      author: 'Sin',
      postedAt: '2025-09-15',
      sentiment: 'mixed',
      summary: 'Liked the many rooms and tidy well-equipped kitchen for several families, but found the pool somewhat dirty and noted maintenance problems around the pool area.',
      sourceUrl: 'https://www.agoda.com/a-spacious-7br-home-w-private-swimming-pool/hotel/langkawi-my.html'
    }
  ]
};

export function getExpandedPublicGuestReviews(slug: string): PublicGuestReview[] {
  return [...getPublicGuestReviews(slug), ...(PUBLIC_GUEST_REVIEWS_EXPANDED[slug] || [])];
}

export const EXPANDED_PUBLIC_GUEST_REVIEW_COVERAGE = {
  listingsWithAdditionalReviews: Object.keys(PUBLIC_GUEST_REVIEWS_EXPANDED).length,
  additionalReviewSnippets: Object.values(PUBLIC_GUEST_REVIEWS_EXPANDED).reduce((sum, items) => sum + items.length, 0),
  checkedAt: '2026-08-31'
} as const;
