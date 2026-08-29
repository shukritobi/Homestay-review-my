export type Review = {
  id: string;
  author: string;
  rating: number;
  title: string;
  body: string;
  stay: string;
  helpful: number;
};

export type Homestay = {
  slug: string;
  name: string;
  city: string;
  state: string;
  rating: number;
  reviewCount: number;
  tags: string[];
  summary: string;
  distribution: [number, number, number, number, number];
  reviews: Review[];
};

export const homestays: Homestay[] = [
  {
    slug: 'rumah-rimbun-janda-baik',
    name: 'Rumah Rimbun',
    city: 'Janda Baik',
    state: 'Pahang',
    rating: 4.8,
    reviewCount: 184,
    tags: ['Family', 'Quiet', 'Clean'],
    summary: 'A leafy family stay people return to for the calm setting and well-kept common spaces.',
    distribution: [151, 24, 6, 2, 1],
    reviews: [
      { id: 'rr-1', author: 'Aina', rating: 5, title: 'Exactly the quiet weekend we wanted', body: 'The house felt cared for, the kitchen was properly equipped and the river area was much nicer than expected. Our parents were comfortable too.', stay: 'August 2026', helpful: 31 },
      { id: 'rr-2', author: 'Farid', rating: 4, title: 'Very good for a family group', body: 'Clean rooms and easy check-in. Parking gets a little tight when everyone arrives with separate cars, but the stay itself was excellent.', stay: 'July 2026', helpful: 18 }
    ]
  },
  {
    slug: 'senja-bayu-melaka',
    name: 'Senja Bayu',
    city: 'Melaka City',
    state: 'Melaka',
    rating: 4.6,
    reviewCount: 129,
    tags: ['Pool', 'Groups', 'Central'],
    summary: 'Popular with larger groups for its pool, practical layout and short drive into central Melaka.',
    distribution: [88, 28, 9, 3, 1],
    reviews: [
      { id: 'sb-1', author: 'Nadia', rating: 5, title: 'Easy stay for our big family', body: 'Enough space for everyone without feeling crowded. The pool was clean and the host instructions were straightforward.', stay: 'August 2026', helpful: 22 },
      { id: 'sb-2', author: 'Hakim', rating: 4, title: 'Good base for a Melaka trip', body: 'Location worked well for us and the house matched the listing. Some road noise in the front room but nothing major.', stay: 'June 2026', helpful: 12 }
    ]
  },
  {
    slug: 'dusun-kecil-kuala-kangsar',
    name: 'Dusun Kecil',
    city: 'Kuala Kangsar',
    state: 'Perak',
    rating: 4.9,
    reviewCount: 96,
    tags: ['Nature', 'Couples', 'Quiet'],
    summary: 'A compact orchard stay with consistently strong comments about privacy, atmosphere and thoughtful hosting.',
    distribution: [87, 7, 2, 0, 0],
    reviews: [
      { id: 'dk-1', author: 'Sarah', rating: 5, title: 'Simple, peaceful and beautifully done', body: 'No unnecessary gimmicks. Just a comfortable room, greenery and a very peaceful evening. We would come back.', stay: 'July 2026', helpful: 27 },
      { id: 'dk-2', author: 'Wei Jian', rating: 5, title: 'One of our favourite short escapes', body: 'Everything was clean and the small details made it feel personal rather than commercial.', stay: 'May 2026', helpful: 19 }
    ]
  },
  {
    slug: 'pantai-38-port-dickson',
    name: 'Pantai 38',
    city: 'Port Dickson',
    state: 'Negeri Sembilan',
    rating: 4.4,
    reviewCount: 243,
    tags: ['Beach', 'Groups', 'BBQ'],
    summary: 'A frequently reviewed beach-area house valued for group trips, with more mixed feedback around peak-weekend upkeep.',
    distribution: [142, 61, 25, 10, 5],
    reviews: [
      { id: 'p38-1', author: 'Imran', rating: 4, title: 'Great location for a group trip', body: 'Beach access was the main win. Common area is large and the BBQ setup worked well for us.', stay: 'August 2026', helpful: 35 },
      { id: 'p38-2', author: 'Mira', rating: 3, title: 'Good space, could be maintained better', body: 'The layout is excellent for families but a few fixtures felt overdue for maintenance. Still a decent stay overall.', stay: 'July 2026', helpful: 29 }
    ]
  },
  {
    slug: 'hujan-pagi-kundasang',
    name: 'Hujan Pagi',
    city: 'Kundasang',
    state: 'Sabah',
    rating: 4.7,
    reviewCount: 211,
    tags: ['View', 'Cool weather', 'Family'],
    summary: 'A hillside stay praised for its mountain outlook and calm mornings, especially by family travellers.',
    distribution: [158, 38, 11, 3, 1],
    reviews: [
      { id: 'hp-1', author: 'Liyana', rating: 5, title: 'The morning view is the reason to stay', body: 'We woke up early and had a clear mountain view. Rooms were warm enough at night and everything felt clean.', stay: 'August 2026', helpful: 44 },
      { id: 'hp-2', author: 'Jason', rating: 4, title: 'Beautiful, but arrive before dark', body: 'The final drive is easier in daylight. Once there, the place is peaceful and the view is excellent.', stay: 'June 2026', helpful: 21 }
    ]
  },
  {
    slug: 'rumah-kayu-besut',
    name: 'Rumah Kayu Besut',
    city: 'Besut',
    state: 'Terengganu',
    rating: 4.6,
    reviewCount: 77,
    tags: ['Traditional', 'Family', 'Value'],
    summary: 'A traditional-style house that scores well for value, space and a relaxed village setting.',
    distribution: [51, 19, 5, 2, 0],
    reviews: [
      { id: 'rkb-1', author: 'Sofea', rating: 5, title: 'Comfortable kampung atmosphere', body: 'Our kids loved the open space. The house has character without sacrificing basic comfort.', stay: 'July 2026', helpful: 16 },
      { id: 'rkb-2', author: 'Azlan', rating: 4, title: 'Very worth the price', body: 'Good size, easy parking and friendly communication. A few mosquitoes outside, which is expected for the area.', stay: 'May 2026', helpful: 9 }
    ]
  },
  {
    slug: 'kota-lama-loft-georgetown',
    name: 'Kota Lama Loft',
    city: 'George Town',
    state: 'Penang',
    rating: 4.5,
    reviewCount: 318,
    tags: ['Walkable', 'Couples', 'Heritage'],
    summary: 'A highly reviewed heritage-area stay where location and character are the biggest strengths.',
    distribution: [190, 78, 33, 12, 5],
    reviews: [
      { id: 'kll-1', author: 'Mei Ling', rating: 5, title: 'Walk everywhere from here', body: 'We barely used the car. Food, coffee and the heritage streets were all close. The room itself was compact but comfortable.', stay: 'August 2026', helpful: 38 },
      { id: 'kll-2', author: 'Daniel', rating: 4, title: 'Loads of character', body: 'Old building means you hear a little more from the corridor, but the location and atmosphere make up for it.', stay: 'July 2026', helpful: 20 }
    ]
  },
  {
    slug: 'sawah-house-sekinchan',
    name: 'Sawah House',
    city: 'Sekinchan',
    state: 'Selangor',
    rating: 4.3,
    reviewCount: 154,
    tags: ['View', 'Family', 'Parking'],
    summary: 'An easy family option near the paddy fields with strong space and parking, plus seasonal differences in scenery.',
    distribution: [82, 43, 20, 7, 2],
    reviews: [
      { id: 'sh-1', author: 'Khalis', rating: 4, title: 'Good uncomplicated family stay', body: 'Plenty of parking, beds were comfortable and check-in was easy. The field view depends on the season so check before going.', stay: 'June 2026', helpful: 23 },
      { id: 'sh-2', author: 'Nurin', rating: 4, title: 'Spacious and practical', body: 'Not a luxury place, but clean and easy for a family with children. We liked the open dining area.', stay: 'May 2026', helpful: 11 }
    ]
  }
];

export const states = [...new Set(homestays.map((stay) => stay.state))].sort();
