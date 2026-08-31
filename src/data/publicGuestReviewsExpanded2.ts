import { getExpandedPublicGuestReviews } from './publicGuestReviewsExpanded';
import type { PublicGuestReview } from './publicGuestReviews';

// Second enrichment sweep: more individual, property-specific guest stays.
export const PUBLIC_GUEST_REVIEWS_EXPANDED_2: Record<string, PublicGuestReview[]> = {
  'google-top-048': [
    {
      author: 'Marcus',
      postedAt: '2025-06-16',
      sentiment: 'mixed',
      summary: 'Thought it was a strong budget option for a large group, especially because of the karaoke room and many bathrooms, but mentioned mosquitoes.',
      sourceUrl: 'https://www.agoda.com/en-sg/party-haus/hotel/johor-bahru-my.html'
    },
    {
      author: 'Yoshini',
      postedAt: '2024-11-07',
      sentiment: 'positive',
      summary: 'Praised the responsive owner, karaoke room and overall value for money.',
      sourceUrl: 'https://www.agoda.com/en-sg/party-haus/hotel/johor-bahru-my.html'
    },
    {
      author: 'Chris',
      postedAt: '2024-07-07',
      sentiment: 'mixed',
      summary: 'Found the host friendly and responsive and the house huge and clean, but noted weaker air-conditioning and drain odours in some bathrooms.',
      sourceUrl: 'https://www.agoda.com/en-sg/party-haus/hotel/johor-bahru-my.html'
    },
    {
      author: 'Lee',
      postedAt: '2025-03-25',
      sentiment: 'mixed',
      summary: 'Liked the spacious rooms and hall, but warned that mosquitoes can be an issue for families with children.',
      sourceUrl: 'https://www.agoda.com/en-sg/party-haus/hotel/johor-bahru-my.html'
    }
  ],
  'google-top-052': [
    {
      author: 'Hoe',
      postedAt: '2026-02-21',
      sentiment: 'positive',
      summary: 'Described the house as very comfortable and clean.',
      sourceUrl: 'https://www.agoda.com/en-in/ipoh-south-homestay-8-16pax-10mins-to-attraction/hotel/ipoh-my.html'
    },
    {
      author: 'Choo',
      postedAt: '2025-06-03',
      sentiment: 'positive',
      summary: 'Felt the house was exceptionally well prepared for group travel, with everything needed already provided.',
      sourceUrl: 'https://www.agoda.com/en-in/ipoh-south-homestay-8-16pax-10mins-to-attraction/hotel/ipoh-my.html'
    },
    {
      author: 'juliana',
      postedAt: '2025-04-06',
      sentiment: 'positive',
      summary: 'Praised the clean, comfortable house, complete kitchen setup and friendly host for a large-family stay.',
      sourceUrl: 'https://www.agoda.com/en-in/ipoh-south-homestay-8-16pax-10mins-to-attraction/hotel/ipoh-my.html'
    },
    {
      author: 'Shen',
      postedAt: '2025-03-22',
      sentiment: 'positive',
      summary: 'Highlighted the spotless condition, spacious bedroom layout and strategic location close to Ipoh town, shops and AEON.',
      sourceUrl: 'https://www.agoda.com/en-in/ipoh-south-homestay-8-16pax-10mins-to-attraction/hotel/ipoh-my.html'
    }
  ],
  'google-top-056': [
    {
      author: 'Kalimuthu',
      postedAt: '2025-05-17',
      sentiment: 'positive',
      summary: 'Found the bungalow peaceful and generally clean, with generous living, dining and master-bedroom space.',
      sourceUrl: 'https://en.planetofhotels.com/malaysia/ipoh/single-storey-bungalow-12-pax'
    },
    {
      author: 'Doris',
      postedAt: '2025-03-05',
      sentiment: 'mixed',
      summary: 'Liked the amount of space but reported a leaking ceiling and some beds in poor condition.',
      sourceUrl: 'https://en.planetofhotels.com/malaysia/ipoh/single-storey-bungalow-12-pax'
    },
    {
      author: 'Florina',
      postedAt: '2025-02-01',
      sentiment: 'positive',
      summary: 'Liked the convenient position between Ipoh city centre and the Tambun area.',
      sourceUrl: 'https://en.planetofhotels.com/malaysia/ipoh/single-storey-bungalow-12-pax'
    }
  ],
  'google-top-059': [
    {
      author: 'Moegamat',
      postedAt: '2026-01-19',
      sentiment: 'mixed',
      summary: 'Found the location and facilities excellent and the host accommodating, though the beds felt firmer than expected.',
      sourceUrl: 'https://www.booking.com/reviews/my/hotel/ikiru-villa-18.en-gb.html'
    },
    {
      author: 'Anura',
      postedAt: '2025-11-23',
      sentiment: 'positive',
      summary: 'Praised the beautiful well-maintained villa, private pool, responsive host, short walk to the beach and nearby restaurants.',
      sourceUrl: 'https://www.booking.com/reviews/my/hotel/ikiru-villa-18.en-gb.html'
    },
    {
      author: 'Kelly',
      postedAt: '2025-10-19',
      sentiment: 'mixed',
      summary: 'Loved the huge, clean, well-equipped villa for a big family but wanted more privacy in the master ensuite bathroom.',
      sourceUrl: 'https://www.booking.com/reviews/my/hotel/ikiru-villa-18.en-gb.html'
    },
    {
      author: 'Vidalin',
      postedAt: '2024-06-06',
      sentiment: 'mixed',
      summary: 'Enjoyed the family space, pool, cleanliness and entertainment facilities, while suggesting more bathroom privacy on the upper floor.',
      sourceUrl: 'https://www.booking.com/reviews/my/hotel/ikiru-villa-18.en-gb.html'
    }
  ],
  'google-top-060': [
    {
      author: 'Puad',
      postedAt: '2026-06-28',
      sentiment: 'positive',
      summary: 'A repeat guest who still considered the clean room one of their best Langkawi stays.',
      sourceUrl: 'https://www.booking.com/reviews/my/hotel/la-villa.en-gb.html'
    },
    {
      author: 'Nabil',
      postedAt: '2026-06-18',
      sentiment: 'positive',
      summary: 'Was very happy with the stay and service during a birthday trip with his wife.',
      sourceUrl: 'https://www.booking.com/reviews/my/hotel/la-villa.en-gb.html'
    },
    {
      author: 'Marie',
      postedAt: '2026-06-15',
      sentiment: 'positive',
      summary: 'Liked the on-demand transport to Cenang Beach, direct pool access and generous breakfast, and felt the stay offered excellent value.',
      sourceUrl: 'https://www.agoda.com/en-gb/la-villa-langkawi-private-pool_2/hotel/langkawi-my.html'
    }
  ],
  'google-top-061': [
    {
      author: 'Nur',
      postedAt: '2026-04-15',
      sentiment: 'mixed',
      summary: 'Loved the huge villa, useful appliances and location near shops, but noted water pressure could drop when two bathrooms were used together.',
      sourceUrl: 'https://www.booking.com/reviews/my/hotel/the-langkawi-luxury.html'
    },
    {
      author: 'Anna',
      postedAt: '2026-01-23',
      sentiment: 'mixed',
      summary: 'Praised the enormous rooms, private pool, location near eateries and flexible check-in, while finding housekeeping responses slow at times.',
      sourceUrl: 'https://www.booking.com/reviews/my/hotel/the-langkawi-luxury.html'
    },
    {
      author: 'Pran',
      postedAt: '2026-01-05',
      sentiment: 'mixed',
      summary: 'Enjoyed the indoor pool, large open living spaces and responsive host, but reported slow drainage in the shower and bathroom sink.',
      sourceUrl: 'https://www.booking.com/reviews/my/hotel/the-langkawi-luxury.html'
    },
    {
      author: 'Yen',
      postedAt: '2025-10-20',
      sentiment: 'positive',
      summary: 'Rated the stay highly for cleanliness, comfort, a large deep pool, complete utensils, easy parking and a convenient location.',
      sourceUrl: 'https://www.booking.com/reviews/my/hotel/the-langkawi-luxury.html'
    }
  ],
  'google-top-062': [
    {
      author: 'Bin',
      postedAt: '2026-02-26',
      sentiment: 'positive',
      summary: 'Had a very enjoyable short group stay and found everything satisfactory.',
      sourceUrl: 'https://www.booking.com/reviews/my/hotel/the-heaven-in-sunway-ipoh.en-gb.html'
    },
    {
      author: 'Lisa',
      postedAt: '2025-09-15',
      sentiment: 'positive',
      summary: 'Found the house spacious, very clean and comfortable, with a well-equipped kitchen that worked well for a family trip.',
      sourceUrl: 'https://www.booking.com/reviews/my/hotel/the-heaven-in-sunway-ipoh.en-gb.html'
    },
    {
      author: 'Chee',
      postedAt: '2025-01-31',
      sentiment: 'mixed',
      summary: 'Liked the peaceful environment but felt cleanliness and entertainment facilities could be improved.',
      sourceUrl: 'https://www.booking.com/reviews/my/hotel/the-heaven-in-sunway-ipoh.en-gb.html'
    }
  ],
  'google-top-066': [
    {
      author: 'mohd',
      postedAt: '2025-09-27',
      sentiment: 'mixed',
      summary: 'Loved the location near town but found the water pressure far too low for a large group and disputed a damaged-table deposit charge.',
      sourceUrl: 'https://www.agoda.com/en-za/ipoh-stadium-1min-wahkeongpark-simee-18pax-bungalo/hotel/ipoh-my.html'
    },
    {
      author: 'CHUN',
      postedAt: '2025-08-30',
      sentiment: 'positive',
      summary: 'Found the property clean and tidy with furniture and appliances in good condition for a group stay.',
      sourceUrl: 'https://www.agoda.com/en-za/ipoh-stadium-1min-wahkeongpark-simee-18pax-bungalo/hotel/ipoh-my.html'
    },
    {
      author: 'Mohanambikay',
      postedAt: '2023-12-17',
      sentiment: 'mixed',
      summary: 'Praised the kind host but felt the overall cleanliness needed improvement.',
      sourceUrl: 'https://www.agoda.com/en-za/ipoh-stadium-1min-wahkeongpark-simee-18pax-bungalo/hotel/ipoh-my.html'
    }
  ]
};

export function getExpandedPublicGuestReviews2(slug: string): PublicGuestReview[] {
  return [...getExpandedPublicGuestReviews(slug), ...(PUBLIC_GUEST_REVIEWS_EXPANDED_2[slug] || [])];
}

export const EXPANDED_PUBLIC_GUEST_REVIEW_COVERAGE_2 = {
  listingsWithAdditionalReviews: Object.keys(PUBLIC_GUEST_REVIEWS_EXPANDED_2).length,
  additionalReviewSnippets: Object.values(PUBLIC_GUEST_REVIEWS_EXPANDED_2).reduce((sum, items) => sum + items.length, 0),
  checkedAt: '2026-08-31'
} as const;
