export type PublicGuestReview = {
  author: string;
  postedAt: string | null;
  sentiment: 'positive' | 'mixed' | 'negative' | 'neutral';
  summary: string;
  sourceUrl: string;
};

// Short paraphrases of property-specific public guest reviews.
// Source/platform names are intentionally not shown in the public UI.
export const PUBLIC_GUEST_REVIEWS: Record<string, PublicGuestReview[]> = {
  'google-top-001': [
    {
      author: 'Yasmin J',
      postedAt: '2025-02-01',
      sentiment: 'mixed',
      summary: 'Good, quieter location near Melaka, but the apartment felt basic and some services and toiletries were limited.',
      sourceUrl: 'https://www.tripadvisor.com.my/Hotel_Review-g306997-d26811524-Reviews-Bali_Residences_Sea_View_Suites_Melaka-Melaka_Central_Melaka_District_Melaka_State.html'
    },
    {
      author: 'Nicholas2109',
      postedAt: '2024-11-01',
      sentiment: 'positive',
      summary: 'Described the two-bedroom sea-view apartment as cozy and said the overall stay was a very good experience.',
      sourceUrl: 'https://www.tripadvisor.com.my/Hotel_Review-g306997-d26811524-Reviews-Bali_Residences_Sea_View_Suites_Melaka-Melaka_Central_Melaka_District_Melaka_State.html'
    }
  ],
  'google-top-002': [
    {
      author: 'Rudi',
      postedAt: '2026-06-25',
      sentiment: 'positive',
      summary: 'Spacious and clean apartment with new equipment and sea views from every room.',
      sourceUrl: 'https://www.agoda.com/en-ca/country-garden-danga-bay-sea-view-homestay-by-stayrene/hotel/johor-bahru-my.html'
    },
    {
      author: 'norhadijah',
      postedAt: '2026-07-21',
      sentiment: 'mixed',
      summary: 'Spacious, clean and comfortable for a family with a beautiful sunset view. Service was excellent, though some facilities needed better maintenance.',
      sourceUrl: 'https://www.agoda.com/en-ca/country-garden-danga-bay-sea-view-homestay-by-stayrene/hotel/johor-bahru-my.html'
    },
    {
      author: 'Jo P',
      postedAt: '2025-03-01',
      sentiment: 'positive',
      summary: 'Easy check-in, spectacular views and a clean apartment. Nearby food options and inexpensive transport made the stay convenient.',
      sourceUrl: 'https://www.tripadvisor.com/Hotel_Review-g298278-d26811531-Reviews-Country_Garden_Danga_Bay_Sea_View_by_Stayrene-Johor_Bahru_Johor_Bahru_District_Johor.html'
    }
  ],
  'google-top-013': [
    {
      author: 'AHMAD',
      postedAt: '2025-01-02',
      sentiment: 'positive',
      summary: 'Strategic location near Kea Farm and attractions, clean home, working TV, Wi-Fi and Netflix, with easy check-in and a responsive host.',
      sourceUrl: 'https://www.agoda.com/equatorial-hill-resort-copthorne/hotel/cameron-highlands-my.html'
    },
    {
      author: 'SHARIFAH',
      postedAt: '2026-07-09',
      sentiment: 'mixed',
      summary: 'Very good location and facilities, but bathroom cleanliness could be improved.',
      sourceUrl: 'https://www.agoda.com/equatorial-hill-resort-copthorne/hotel/cameron-highlands-my.html'
    },
    {
      author: 'Hasmidah',
      postedAt: '2026-04-12',
      sentiment: 'positive',
      summary: 'Smooth check-in, quick host support, complete cooking utensils and clean bedding. The cool Cameron Highlands weather made the stay comfortable.',
      sourceUrl: 'https://www.agoda.com/equatorial-hill-resort-copthorne/hotel/cameron-highlands-my.html'
    }
  ],
  'google-top-014': [
    {
      author: 'Sadia',
      postedAt: '2024-09-21',
      sentiment: 'positive',
      summary: 'Convenient location, clean and neatly decorated with the facilities needed for a short family stay.',
      sourceUrl: 'https://www.booking.com/reviews/my/hotel/luxury-troika-kota-bharu-by-aura-troika.en-gb.html'
    },
    {
      author: 'Rosmawati',
      postedAt: '2024-02-11',
      sentiment: 'positive',
      summary: 'Clean, well equipped and right in the city centre. Said they would stay again.',
      sourceUrl: 'https://www.booking.com/reviews/my/hotel/luxury-troika-kota-bharu-by-aura-troika.en-gb.html'
    },
    {
      author: 'Wan',
      postedAt: '2023-08-14',
      sentiment: 'mixed',
      summary: 'Good central location and a responsive host, though some cups were not properly cleaned and basic tissue supplies were missing.',
      sourceUrl: 'https://www.booking.com/reviews/my/hotel/luxury-troika-kota-bharu-by-aura-troika.en-gb.html'
    }
  ],
  'google-top-016': [
    {
      author: 'Tünde',
      postedAt: '2026-07-03',
      sentiment: 'positive',
      summary: 'Spacious house, very clean pool and helpful, flexible staff.',
      sourceUrl: 'https://www.booking.com/reviews/my/hotel/sembilan-langkawi.en-gb.html'
    },
    {
      author: 'Syima',
      postedAt: '2026-06-03',
      sentiment: 'mixed',
      summary: 'Very spacious and calm for a big family, but some facilities, especially the washing machine, felt worn and needed maintenance.',
      sourceUrl: 'https://www.booking.com/reviews/my/hotel/sembilan-langkawi.en-gb.html'
    },
    {
      author: 'Raja',
      postedAt: '2026-04-29',
      sentiment: 'positive',
      summary: 'A short stay that felt cozy and comfortable.',
      sourceUrl: 'https://www.booking.com/reviews/my/hotel/sembilan-langkawi.en-gb.html'
    }
  ],
  'google-top-028': [
    {
      author: 'Sunawr',
      postedAt: '2026-06-09',
      sentiment: 'positive',
      summary: 'Very clean and well equipped, with good air-conditioning, water heater, Wi-Fi, Netflix and parking for two cars.',
      sourceUrl: 'https://www.agoda.com/en-us/homestay-mersing-anid-d-lautan-biru/hotel/mersing-my.html'
    },
    {
      author: 'Sahida',
      postedAt: '2025-03-17',
      sentiment: 'positive',
      summary: 'Clean and comfortable, easy to find, close to food and shops, with clear instructions from the owner.',
      sourceUrl: 'https://www.agoda.com/en-us/homestay-mersing-anid-d-lautan-biru/hotel/mersing-my.html'
    },
    {
      author: 'Fauziah',
      postedAt: '2025-09-05',
      sentiment: 'positive',
      summary: 'Clean house, complete facilities and a responsive host. Prayer mats were available in every room.',
      sourceUrl: 'https://www.agoda.com/en-us/homestay-mersing-anid-d-lautan-biru/hotel/mersing-my.html'
    }
  ],
  'google-top-032': [
    {
      author: 'arinah',
      postedAt: '2025-04-07',
      sentiment: 'positive',
      summary: 'Clean, spacious, cozy and well located, with good value for family or group trips.',
      sourceUrl: 'https://www.agoda.com/th-ipoh-homestay-simee-10pax-8mins-to-attraction/hotel/ipoh-my.html'
    },
    {
      author: 'Kong',
      postedAt: '2025-02-10',
      sentiment: 'mixed',
      summary: 'Very clean and close to town. The main suggestion was adding fans in rooms that currently rely on air-conditioning.',
      sourceUrl: 'https://www.agoda.com/th-ipoh-homestay-simee-10pax-8mins-to-attraction/hotel/ipoh-my.html'
    },
    {
      author: 'YOOK',
      postedAt: '2024-12-01',
      sentiment: 'positive',
      summary: 'Quiet corner-lot stay around ten minutes from Ipoh town, with easy check-in and parking for several cars.',
      sourceUrl: 'https://www.agoda.com/th-ipoh-homestay-simee-10pax-8mins-to-attraction/hotel/ipoh-my.html'
    }
  ],
  'google-top-037': [
    {
      author: 'Vijay',
      postedAt: null,
      sentiment: 'positive',
      summary: 'Extremely clean and well maintained with a helpful host, open space, swimming, karaoke and group activities.',
      sourceUrl: 'https://www.booking.com/hotel/my/tranquil-arcadia-homestay-by-desaru-bandar-penawar.html'
    },
    {
      author: 'NORFAZIELA',
      postedAt: '2025-06-01',
      sentiment: 'positive',
      summary: 'Smooth check-in, responsive host and a spacious clean house that comfortably handled a group of about 25 people.',
      sourceUrl: 'https://www.agoda.com/en-in/tranquil-arcadia-homestay-by-desaru/hotel/desaru-my.html'
    }
  ],
  'google-top-058': [
    {
      author: 'TG',
      postedAt: '2025-02-02',
      sentiment: 'positive',
      summary: 'Comfortable and clean with good air-conditioning, easy communication and pool access at a reasonable price.',
      sourceUrl: 'https://www.agoda.com/amjad-homestay/hotel/kota-bharu-my.html'
    },
    {
      author: 'Alia',
      postedAt: '2025-02-06',
      sentiment: 'positive',
      summary: 'Spotless, nicely decorated and well equipped, with a responsive host and a convenient but peaceful location.',
      sourceUrl: 'https://www.agoda.com/amjad-homestay/hotel/kota-bharu-my.html'
    },
    {
      author: 'Noor',
      postedAt: '2024-06-23',
      sentiment: 'mixed',
      summary: 'Satisfied overall, but suggested better cleaning of floors, sofa and bedding plus repairs to a shower hose and damaged kitchen tiles.',
      sourceUrl: 'https://www.agoda.com/amjad-homestay/hotel/kota-bharu-my.html'
    }
  ],
  'google-top-065': [
    {
      author: 'Hidayu',
      postedAt: '2026-02-19',
      sentiment: 'positive',
      summary: 'Very child-friendly and easy to deal with.',
      sourceUrl: 'https://www.agoda.com/en-sg/new-desaru-baby-kids-friendly-pool-homestay/hotel/desaru-my.html'
    },
    {
      author: 'Siti',
      postedAt: '2025-11-20',
      sentiment: 'mixed',
      summary: 'Overall very good, but the microwave was not working and the steep parking slope could scrape a car bumper.',
      sourceUrl: 'https://www.agoda.com/en-sg/new-desaru-baby-kids-friendly-pool-homestay/hotel/desaru-my.html'
    },
    {
      author: 'Jocelyn',
      postedAt: '2024-04-18',
      sentiment: 'positive',
      summary: 'Convenient for driving to shops and attractions, with plenty of space for a big family and fun room themes.',
      sourceUrl: 'https://www.agoda.com/en-sg/new-desaru-baby-kids-friendly-pool-homestay/hotel/desaru-my.html'
    }
  ],
  'google-top-068': [
    {
      author: 'Pristin',
      postedAt: '2026-07-01',
      sentiment: 'positive',
      summary: 'A good large-family stay with facilities that worked well for spending time together.',
      sourceUrl: 'https://www.agoda.com/gran-estancia-villa-jbcity-home/hotel/johor-bahru-my.html'
    }
  ],
  'google-top-069': [
    {
      author: 'Mohd',
      postedAt: '2022-11-07',
      sentiment: 'positive',
      summary: 'A good option for a family stay.',
      sourceUrl: 'https://www.agoda.com/home-stay-3-bedrooms-at-condo-with-poolview-7th/hotel/ipoh-my.html'
    }
  ],
  'google-top-074': [
    {
      author: 'GeorgeLeong',
      postedAt: '2026-07-14',
      sentiment: 'positive',
      summary: 'Sea-facing room with a strong sunrise view, relaxing wave sounds and a good breakfast.',
      sourceUrl: 'https://my.trip.com/hotels/balok-hotel-detail-7808928/royale-chulan-cherating/review.html'
    },
    {
      author: 'Anonymous guest',
      postedAt: '2026-08-23',
      sentiment: 'mixed',
      summary: 'Very good location and private beach, but the property felt older and monkeys near the balcony were a concern for children.',
      sourceUrl: 'https://my.trip.com/hotels/balok-hotel-detail-7808928/royale-chulan-cherating/review.html'
    },
    {
      author: 'Zuraida',
      postedAt: '2026-06-28',
      sentiment: 'positive',
      summary: 'Repeat guest who liked the view, beach, large pool, breakfast, helpful staff and buggy rides for the children.',
      sourceUrl: 'https://www.agoda.com/en-us/royale-chulan-cherating_2/hotel/cherating-my.html'
    }
  ],
  'google-top-076': [
    {
      author: 'jimaldo',
      postedAt: '2026-03-30',
      sentiment: 'negative',
      summary: 'The attic bedroom became very hot and stuffy during the day even with the air-conditioning running.',
      sourceUrl: 'https://www.trip.com/hotels/ipoh-hotel-detail-28762601/the-tudor/review.html'
    },
    {
      author: 'Anonymous guest',
      postedAt: '2025-01-18',
      sentiment: 'mixed',
      summary: 'Felt more like a homestay than a hotel and the reception experience came across as cold, making the stay feel average.',
      sourceUrl: 'https://www.trip.com/hotels/ipoh-hotel-detail-28762601/the-tudor/review.html'
    }
  ],
  'google-top-092': [
    {
      author: 'Iera',
      postedAt: '2026-05-16',
      sentiment: 'positive',
      summary: 'Clean and fresh-smelling home in a convenient central location near Kuala Terengganu attractions. Would stay again.',
      sourceUrl: 'https://www.booking.com/reviews/my/hotel/homestay-camelia-kuala-terengganu.ms.html'
    },
    {
      author: 'Fadli',
      postedAt: '2026-03-31',
      sentiment: 'positive',
      summary: 'Well kept, tidy and clean, with a comfortable overall stay.',
      sourceUrl: 'https://www.booking.com/reviews/my/hotel/homestay-camelia-kuala-terengganu.ms.html'
    }
  ]
};

export function getPublicGuestReviews(slug: string): PublicGuestReview[] {
  return PUBLIC_GUEST_REVIEWS[slug] || [];
}

export const PUBLIC_GUEST_REVIEW_COVERAGE = {
  listingsWithReviews: Object.keys(PUBLIC_GUEST_REVIEWS).length,
  reviewSnippets: Object.values(PUBLIC_GUEST_REVIEWS).reduce((sum, items) => sum + items.length, 0),
  checkedAt: '2026-08-31'
} as const;
