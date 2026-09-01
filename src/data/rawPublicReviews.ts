export type RawPublicReview = {
  author: string;
  postedAt: string | null;
  dateLabel?: string;
  rating?: number;
  text: string;
  sourceUrl: string;
  sourceLabel: string;
  authorUrl?: string;
};

// Verbatim public review excerpts only. No summaries, no sentiment rewriting.
// Preserve the reviewer's original wording, including grammar and typos.
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
  'google-top-004': [
    {
      author: 'Kylie',
      postedAt: null,
      dateLabel: '2 weeks ago',
      rating: 5,
      text: 'very nice hosts that replied rlly quickly! estate was also rlly nice and all the amenities worked well & we loved the cat',
      sourceUrl: 'https://www.airbnb.com/rooms/627430285062581362/reviews',
      sourceLabel: 'Airbnb',
      authorUrl: 'https://www.airbnb.com/users/profile/1495186074223615451'
    },
    {
      author: 'Hugo',
      postedAt: null,
      dateLabel: '2 weeks ago',
      rating: 5,
      text: 'Had a really pleasant stay here! The place was clean, comfortable, and exactly as described. The location was convenient, and the host was friendly, responsive, and easy to communicate with. Overall, a great stay and I’d definitely recommend this Airbnb to others.',
      sourceUrl: 'https://www.airbnb.com/rooms/627430285062581362/reviews',
      sourceLabel: 'Airbnb',
      authorUrl: 'https://www.airbnb.com/users/profile/1744690046891293384'
    },
    {
      author: 'Chan Keong',
      postedAt: null,
      dateLabel: '3 weeks ago',
      rating: 5,
      text: 'Enjoyed ourselves fully at this place.\nInstructions were clear and check in was a breeze.\nPlace was very well kept, neat and clean.\nPlace is windy and there are lots of fans inside the house so we were always feeling comfortable while at home. Aircon was in perfect condition as well.\nLove this place and will return!',
      sourceUrl: 'https://www.airbnb.com/rooms/627430285062581362/reviews',
      sourceLabel: 'Airbnb',
      authorUrl: 'https://www.airbnb.com/users/profile/1482252165436763223'
    },
    {
      author: 'Bryan',
      postedAt: '2026-08-01',
      dateLabel: 'August 2026',
      rating: 5,
      text: 'Great stay at Mount Austin area. Would love to return again!',
      sourceUrl: 'https://www.airbnb.com/rooms/627430285062581362/reviews',
      sourceLabel: 'Airbnb',
      authorUrl: 'https://www.airbnb.com/users/profile/1486049394721330265'
    },
    {
      author: 'Nana',
      postedAt: '2026-07-01',
      dateLabel: 'July 2026',
      rating: 5,
      text: 'Good clean and easy check in. Will stay again. One note just neighbour dogs bark very loudly when u are around but not big issue. The curtains a bit dusty so some started sneezing. Will be good if can be cleaned. The glass door is very dirty and oily from fingerprints. Should be cleaned. Also very squeaky and noisy when open close, should fix it. Generally all ok and Will stay again.',
      sourceUrl: 'https://www.airbnb.com/rooms/627430285062581362/reviews',
      sourceLabel: 'Airbnb',
      authorUrl: 'https://www.airbnb.com/users/profile/1502653036789321381'
    },
    {
      author: 'Andy',
      postedAt: '2026-07-01',
      dateLabel: 'July 2026',
      rating: 5,
      text: "Quiet neighborhood with ample parking space. My family absolutely loved the amenities provided: karaoke, foosball table, and there's even a mini swimming pool for my kid to waddle around. We stayed in the house for the entire morning!\nConveniently located in the Mount Austin area, where it's a 5-min drive from the nice restaurants (You Kee XO, Dai Tou LALA, Hua Mui etc), a 15-20 min drive away from Toppan and Aeon Tebrau.\nTake note: There's a very smart stray cat (she knows how long we are staying, the moment we loaded our luggage into the car, she ran out of the compound!) LOL\nWill recommend this place if you are looking at a short stay in Mount Austin!",
      sourceUrl: 'https://www.airbnb.com/rooms/627430285062581362/reviews',
      sourceLabel: 'Airbnb',
      authorUrl: 'https://www.airbnb.com/users/profile/1482655189523932732'
    },
    {
      author: 'Steve',
      postedAt: '2026-07-01',
      dateLabel: 'July 2026',
      rating: 5,
      text: 'We had a really great stay at Bryce and Miki’s place. The house was clean, spacious, and had everything we needed for a relaxing trip. We especially enjoyed the pool, karaoke, and other activities around the house, which kept everyone entertained.\nBryce and Miki were easy to communicate with and always quick to respond whenever we had questions. The check-in process was smooth and hassle-free.\nA special mention to their cat, which was super cute and surprisingly clingy with us. It definitely made our stay even more memorable.\nOverall, we had a wonderful time and felt right at home. We’d happily stay here again if we get the chance. Thanks again for hosting us!',
      sourceUrl: 'https://www.airbnb.com/rooms/627430285062581362/reviews',
      sourceLabel: 'Airbnb',
      authorUrl: 'https://www.airbnb.com/users/profile/1474700768209331096'
    },
    {
      author: 'Nurul',
      postedAt: '2026-07-01',
      dateLabel: 'July 2026',
      rating: 5,
      text: 'it was a great place to staycation. just the iron is not functioning well enough',
      sourceUrl: 'https://www.airbnb.com/rooms/627430285062581362/reviews',
      sourceLabel: 'Airbnb',
      authorUrl: 'https://www.airbnb.com/users/profile/1488239948513673326'
    },
    {
      author: 'Helen',
      postedAt: '2026-07-01',
      dateLabel: 'July 2026',
      rating: 5,
      text: "The place is in a great neighborhood with many restaurants and cafes. We had fun with the foosball table and karaoke system as well. Loved that bath towels were provided. There was a stray cat that slipped through the gates and tried to enter the house the whole night and meowed for a long time. It was a very cute and friendly cat, but it wouldn't leave until we fed it something in the morning. Great if you like cats, but wouldn't recommend to people with cat allergies. Nonetheless, it was a comfortable and enjoyable stay!",
      sourceUrl: 'https://www.airbnb.com/rooms/627430285062581362/reviews',
      sourceLabel: 'Airbnb',
      authorUrl: 'https://www.airbnb.com/users/profile/1493078593415722560'
    },
    {
      author: 'Terrence',
      postedAt: '2026-07-01',
      dateLabel: 'July 2026',
      rating: 5,
      text: 'We had a wonderful stay at this villa and would highly recommend it to anyone seeking a relaxing place to spend quality time with family/friends.\nThe villa is spacious, clean, and very comfortable. We especially appreciated the facilities, including the swimming pool, karaoke system, and mahjong table, which kept everyone entertained throughout our stay. It was an ideal setting for a small gathering.\nWhat truly stood out was the exceptional hospitality of the host and their team. They were highly responsive and always quick to reply to our messages. Whenever we encountered an issue, they went above and beyond to assist us. They even arranged for their staff to come by after dinner to check on the situation and returned the following day to ensure everything had been resolved. Their dedication and willingness to go the extra mile made us feel very well cared for.\nThank you for your excellent hospitality and for making our stay so enjoyable. We would be delighted to stay here again!',
      sourceUrl: 'https://www.airbnb.com/rooms/627430285062581362/reviews',
      sourceLabel: 'Airbnb',
      authorUrl: 'https://www.airbnb.com/users/profile/1475030635562699519'
    },
    {
      author: 'Jeremy',
      postedAt: '2026-04-01',
      dateLabel: 'April 2026',
      rating: 4,
      text: 'great place, great host. would recommend especially for friends gathering. only down side is bathroom accessibility and slight mold',
      sourceUrl: 'https://www.airbnb.com/rooms/627430285062581362/reviews',
      sourceLabel: 'Airbnb',
      authorUrl: 'https://www.airbnb.com/users/profile/1483271998903841432'
    },
    {
      author: 'Toh',
      postedAt: '2026-04-01',
      dateLabel: 'April 2026',
      rating: 5,
      text: 'all in all its a nice place to live in just with alot of dogs barking from the nearby houses. not recommended for those with infants. nice ambience with pool and its very clean. its near to the shop houses at austin and within 10mins drive to aeon tebrau. recommended if having activities around this area.',
      sourceUrl: 'https://www.airbnb.com/rooms/627430285062581362/reviews',
      sourceLabel: 'Airbnb',
      authorUrl: 'https://www.airbnb.com/users/profile/1490883888427567260'
    },
    {
      author: 'Khairul',
      postedAt: '2026-03-01',
      dateLabel: 'March 2026',
      rating: 5,
      text: 'Had a great time at Timber Homestay. The pool and karaoke system were the best parts of the house! The 3 bedrooms are cozy, especially the pillows.\n​The kitchen has everything (including a Cuckoo dispenser and oven), just no microwave. Check-in was seamless, and we really appreciated the 12 PM checkout.. much better than the usual 11 AM elsewhere in JB. Plus, you can’t beat the Mount Austin location. Just watch your step around the pool edges as it gets slippery!',
      sourceUrl: 'https://www.airbnb.com/rooms/627430285062581362/reviews',
      sourceLabel: 'Airbnb',
      authorUrl: 'https://www.airbnb.com/users/profile/1485962817751012644'
    },
    {
      author: 'Nur',
      postedAt: '2026-02-01',
      dateLabel: 'February 2026',
      rating: 5,
      text: 'Amazing stay. Super clean, the wooden floors are so comfortable, exactly like the photos, everything works well, it’s comfortable, peaceful, safe. Aircon works well, heater works well, tv works well, kitchen, pool. Easy to grab to the place, peaceful neighbourhood. Responsive and friendly host!! Really appreciate our host and made us feel assured. Will definitely come back again.',
      sourceUrl: 'https://www.airbnb.com/rooms/627430285062581362/reviews',
      sourceLabel: 'Airbnb',
      authorUrl: 'https://www.airbnb.com/users/profile/1477153515492900957'
    },
    {
      author: 'Sue',
      postedAt: '2026-02-01',
      dateLabel: 'February 2026',
      rating: 4,
      text: "Clean and comfy for our family of six. Having a dip pool is also a plus for this property. Only that there's no bbq. But we had fun with the ktv unit.",
      sourceUrl: 'https://www.airbnb.com/rooms/627430285062581362/reviews',
      sourceLabel: 'Airbnb',
      authorUrl: 'https://www.airbnb.com/users/profile/1505965266771177745'
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
