import { getExpandedPublicGuestReviews2 } from './publicGuestReviewsExpanded2';
import type { PublicGuestReview } from './publicGuestReviews';

// Third enrichment sweep: individual verified/public guest experiences for
// listings that previously depended mainly on aggregate review summaries.
export const PUBLIC_GUEST_REVIEWS_EXPANDED_3: Record<string, PublicGuestReview[]> = {
  'google-top-003': [
    {
      author: 'Low',
      postedAt: '2024-11-18',
      sentiment: 'positive',
      summary: 'Found the apartment exceptionally clean and well maintained, with comfortable furnishings and an attentive, friendly host.',
      sourceUrl: 'https://www.agoda.com/central-residence-libertyhomestay-kuala-lumpur/hotel/kuala-lumpur-my.html'
    },
    {
      author: 'Zuraihan',
      postedAt: '2024-08-17',
      sentiment: 'positive',
      summary: 'Felt the stay offered excellent value, with a clean spacious home, good facilities, friendly staff and detailed check-in instructions.',
      sourceUrl: 'https://www.agoda.com/central-residence-libertyhomestay-kuala-lumpur/hotel/kuala-lumpur-my.html'
    },
    {
      author: 'MOHAMAD',
      postedAt: '2026-04-20',
      sentiment: 'positive',
      summary: 'Praised the spotless condition, complete kitchen and laundry amenities, air-conditioning, pool, gym and reasonable price.',
      sourceUrl: 'https://www.agoda.com/central-residence-libertyhomestay-kuala-lumpur/hotel/kuala-lumpur-my.html'
    }
  ],
  'google-top-005': [
    {
      author: 'adibah',
      postedAt: '2026-06-19',
      sentiment: 'positive',
      summary: 'Liked the spacious clean room, storage, family comfort and convenient location near restaurants and the Genting cable-car area.',
      sourceUrl: 'https://www.agoda.com/en-gb/windmill-upon-hills-serenity-retreat-genting/hotel/genting-highlands-my.html'
    },
    {
      author: 'Aireen',
      postedAt: '2026-04-28',
      sentiment: 'positive',
      summary: 'A repeat guest who liked the clean spacious rooms, responsive service, easy booking changes and warm swimming pools for the children.',
      sourceUrl: 'https://www.agoda.com/en-gb/windmill-upon-hills-serenity-retreat-genting/hotel/genting-highlands-my.html'
    },
    {
      author: 'Kumaresan',
      postedAt: '2026-06-14',
      sentiment: 'mixed',
      summary: 'Found the stay very clean and enjoyable overall, but noted an unpleasant bathroom smell that needed attention.',
      sourceUrl: 'https://www.agoda.com/en-gb/windmill-upon-hills-serenity-retreat-genting/hotel/genting-highlands-my.html'
    },
    {
      author: 'Nur',
      postedAt: '2026-05-12',
      sentiment: 'mixed',
      summary: 'Returned for the strategic location and hill view, enjoying the spacious room while noting couch stains, low water pressure and a slow heater.',
      sourceUrl: 'https://www.agoda.com/en-gb/windmill-upon-hills-serenity-retreat-genting/hotel/genting-highlands-my.html'
    }
  ],
  'google-top-027': [
    {
      author: 'CZ',
      postedAt: '2025-09-10',
      sentiment: 'mixed',
      summary: 'Liked the apartment directly above Vivacity Mall and found the stay good overall, although a power outage affected the visit.',
      sourceUrl: 'https://www.tiket.com/en-my/hotel/malaysia/ds-vivacitymall-jazz-suite-1101-511001669029936265'
    },
    {
      author: 'VN',
      postedAt: '2025-09-05',
      sentiment: 'mixed',
      summary: 'Found the room clean and well maintained with a choice of views, but said the entrance was difficult to locate because signage was limited.',
      sourceUrl: 'https://www.tiket.com/en-my/hotel/malaysia/ds-vivacitymall-jazz-suite-1101-511001669029936265'
    }
  ],
  'google-top-038': [
    {
      author: 'Darwisyah',
      postedAt: '2026-04-18',
      sentiment: 'positive',
      summary: 'Found the bungalow very spacious, comfortable and clean, and strongly recommended it for a large family.',
      sourceUrl: 'https://www.agoda.com/en-in/unnamed-property-h35742905/hotel/ipoh-my.html'
    },
    {
      author: 'Yogesvary',
      postedAt: '2026-03-09',
      sentiment: 'positive',
      summary: 'Praised the cleanliness, space, easy check-in, responsible host and overall value for money.',
      sourceUrl: 'https://www.agoda.com/en-in/unnamed-property-h35742905/hotel/ipoh-my.html'
    },
    {
      author: 'Yee',
      postedAt: '2024-07-08',
      sentiment: 'positive',
      summary: 'Enjoyed the comfortable house, complete amenities, good air-conditioning and well-maintained cleanliness, and would book again.',
      sourceUrl: 'https://www.agoda.com/en-in/unnamed-property-h35742905/hotel/ipoh-my.html'
    },
    {
      author: 'TengShuen',
      postedAt: '2025-02-24',
      sentiment: 'positive',
      summary: 'Liked the condition of the facilities and the convenient location for visiting Ipoh attractions.',
      sourceUrl: 'https://www.agoda.com/en-in/unnamed-property-h35742905/hotel/ipoh-my.html'
    }
  ],
  'google-top-072': [
    {
      author: 'Eunice',
      postedAt: '2026-08-20',
      sentiment: 'mixed',
      summary: 'Liked the short walk from Tekek jetty and the on-site bicycle and snorkelling services, but encountered a room-allocation mistake after requesting a chalet.',
      sourceUrl: 'https://www.agoda.com/en-us/cheers-chalet/hotel/tioman-island-my.html'
    },
    {
      author: 'Wa',
      postedAt: '2026-08-16',
      sentiment: 'positive',
      summary: 'Found the nearby family rooms comfortable and practical, with useful hooks, outdoor seating, services and a convenience store near reception.',
      sourceUrl: 'https://www.agoda.com/en-us/cheers-chalet/hotel/tioman-island-my.html'
    },
    {
      author: 'Mohamad',
      postedAt: '2026-06-01',
      sentiment: 'positive',
      summary: 'Praised the very clean room and bathroom, air-conditioning, hot water, friendly staff and reasonably priced bicycle and motorcycle rental.',
      sourceUrl: 'https://www.agoda.com/en-us/cheers-chalet/hotel/tioman-island-my.html'
    },
    {
      author: 'Teck',
      postedAt: '2026-05-21',
      sentiment: 'mixed',
      summary: 'Liked the clean chalet setup, nearby restaurants and shop, while noting that daily cleaning and towel changes had to be requested.',
      sourceUrl: 'https://www.agoda.com/en-us/cheers-chalet/hotel/tioman-island-my.html'
    }
  ],
  'google-top-075': [
    {
      author: 'Siti',
      postedAt: null,
      sentiment: 'positive',
      summary: 'Liked the central location and price, and found the room spacious and well kept.',
      sourceUrl: 'https://www.booking.com/hotel/my/studio-exclusive.html'
    },
    {
      author: 'Amin',
      postedAt: null,
      sentiment: 'positive',
      summary: 'Liked both the unit and owner and said they would choose the stay again for another Kota Bharu trip.',
      sourceUrl: 'https://www.booking.com/hotel/my/studio-exclusive.html'
    },
    {
      author: 'Zagi',
      postedAt: null,
      sentiment: 'positive',
      summary: 'Found the room neat and clean with Wi-Fi, TV and a useful hanging rack.',
      sourceUrl: 'https://www.booking.com/hotel/my/studio-exclusive.en-gb.html'
    }
  ],
  'google-top-081': [
    {
      author: 'Carsten',
      postedAt: null,
      sentiment: 'positive',
      summary: 'Liked the quiet central apartment, walkable surroundings, basement parking and smooth communication through messaging.',
      sourceUrl: 'https://www.booking.com/hotel/my/nazrins-homes-kbcp.en-gb.html'
    }
  ],
  'google-top-082': [
    {
      author: 'Syafini',
      postedAt: null,
      sentiment: 'positive',
      summary: 'Praised the kind helpful owner, clean house and complete basic necessities and planned to book again.',
      sourceUrl: 'https://www.booking.com/hotel/my/raihan-homestay-kubang-kerian-kota-bharu1.en-gb.html'
    },
    {
      author: 'Hanim',
      postedAt: null,
      sentiment: 'positive',
      summary: 'Found the house attractive, clean and cozy and the owner friendly, and would return on a future trip.',
      sourceUrl: 'https://www.booking.com/hotel/my/raihan-homestay-kubang-kerian-kota-bharu1.en-gb.html'
    },
    {
      author: 'fina',
      postedAt: '2025-07-09',
      sentiment: 'positive',
      summary: 'Enjoyed the peaceful village setting, child-friendly surroundings, friendly owner and family facilities and would return.',
      sourceUrl: 'https://www.agoda.com/en-gb/raihan-homestay-kubang-kerian/hotel/kota-bharu-my.html'
    },
    {
      author: 'Fazril',
      postedAt: '2023-09-14',
      sentiment: 'positive',
      summary: 'Found the home affordable, clean, tidy and well organised, with the three bedrooms offering strong value for a group.',
      sourceUrl: 'https://www.agoda.com/en-gb/raihan-homestay-kubang-kerian/hotel/kota-bharu-my.html'
    }
  ],
  'google-top-087': [
    {
      author: 'Rose',
      postedAt: null,
      sentiment: 'positive',
      summary: 'Liked the very spacious house, strong air-conditioning and fans, easy access to attractions and nearby Kelantan food options.',
      sourceUrl: 'https://www.booking.com/hotel/my/homestay-hanan-kota-bharu.en-gb.html'
    },
    {
      author: 'Khairoul',
      postedAt: null,
      sentiment: 'positive',
      summary: 'Loved the amount of space and facilities, helpful neighbourhood and location relatively close to the city centre.',
      sourceUrl: 'https://www.booking.com/hotel/my/homestay-hanan-kota-bharu.en-gb.html'
    },
    {
      author: 'Aziz',
      postedAt: null,
      sentiment: 'positive',
      summary: 'Recommended the large spacious house and felt the price was very reasonable.',
      sourceUrl: 'https://www.booking.com/hotel/my/homestay-hanan-kota-bharu.en-gb.html'
    },
    {
      author: 'Faezzullah',
      postedAt: null,
      sentiment: 'positive',
      summary: 'Found the house comfortable, spacious and not far from town, with enough room for a very large group.',
      sourceUrl: 'https://www.booking.com/hotel/my/homestay-hanan-kota-bharu.en-gb.html'
    }
  ]
};

export function getExpandedPublicGuestReviews3(slug: string): PublicGuestReview[] {
  return [...getExpandedPublicGuestReviews2(slug), ...(PUBLIC_GUEST_REVIEWS_EXPANDED_3[slug] || [])];
}

export const EXPANDED_PUBLIC_GUEST_REVIEW_COVERAGE_3 = {
  listingsWithAdditionalReviews: Object.keys(PUBLIC_GUEST_REVIEWS_EXPANDED_3).length,
  additionalReviewSnippets: Object.values(PUBLIC_GUEST_REVIEWS_EXPANDED_3).reduce((sum, items) => sum + items.length, 0),
  checkedAt: '2026-08-31'
} as const;
