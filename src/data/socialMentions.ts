export type SocialMention = {
  author: string;
  profileUrl: string;
  postedAt: string | null;
  sentiment: 'positive' | 'mixed' | 'negative' | 'neutral';
  summary: string;
};

// Short paraphrases of property-specific public reviews or mentions.
// Sources are retained internally for traceability but the public UI stays source-neutral.
// These do not directly alter H-Score unless a structured rating source is separately verified.
export const VERIFIED_SOCIAL_MENTIONS: Record<string, SocialMention[]> = {
  'homestay-tok-jembal': [
    {
      author: 'nenaholidays',
      profileUrl: 'https://www.threads.net/@nenaholidays',
      postedAt: '2026-08-10',
      sentiment: 'mixed',
      summary: 'A guest accidentally damaged the sofa bed. The host said the guest paid compensation and they planned to replace the sofa.'
    }
  ],
  'rr-homestay-sekinchan-tali-air-7': [
    {
      author: 'fayesnatasya',
      profileUrl: 'https://www.threads.net/@fayesnatasya',
      postedAt: '2026-07-16',
      sentiment: 'positive',
      summary: 'Shared as a premium Sekinchan staycation with two house units and a paddy-view setting.'
    }
  ],
  'zara-homestay-klia': [
    {
      author: 'zara.homestay_klia',
      profileUrl: 'https://www.threads.net/@zara.homestay_klia',
      postedAt: '2026-07-20',
      sentiment: 'neutral',
      summary: 'The owner introduced the newly set-up homestay business and said the account was still building trust and followers.'
    }
  ],
  'homestay-pepadi-sekinchan': [
    {
      author: 'ly',
      profileUrl: 'https://www.tripadvisor.com/Attraction_Review-g2050021-d7194631-Reviews-Sekinchan_Paddy_Field-Sekinchan_Selangor.html',
      postedAt: '2025-06-23',
      sentiment: 'positive',
      summary: 'Wonderful stay with a beautiful paddy-field view, spacious accommodation for a group and a welcoming host.'
    },
    {
      author: 'Mohd',
      profileUrl: 'https://www.agoda.com/homestay-pepadi-2-beautiful-view-in-sekinchan/hotel/sabak-bernam-my.html',
      postedAt: '2026-02-18',
      sentiment: 'positive',
      summary: 'A repeat guest described the homestay as clean and comfortable for a small family, with an outdoor kitchen facing the rice fields.'
    },
    {
      author: 'Nur',
      profileUrl: 'https://www.agoda.com/homestay-pepadi-2-beautiful-view-in-sekinchan/hotel/sabak-bernam-my.html',
      postedAt: '2025-09-09',
      sentiment: 'positive',
      summary: 'Praised the large comfortable room, convenient location and the ability to fish right in front of the homestay.'
    },
    {
      author: 'Zarina',
      profileUrl: 'https://www.agoda.com/homestay-pepadi-2-beautiful-view-in-sekinchan/hotel/sabak-bernam-my.html',
      postedAt: '2026-04-10',
      sentiment: 'positive',
      summary: 'Recommended it for a peaceful break from the city, especially for the calm paddy-field setting and modern kampung feel.'
    }
  ],
  'anjung-pool-villa-sekinchan': [
    {
      author: 'Eh',
      profileUrl: 'https://my.worldorgs.com/katalog/sekinchan/tempat-peranginan/anjungpoolvilla',
      postedAt: null,
      sentiment: 'negative',
      summary: 'Reported a poor arrival experience with several electrical items and upstairs air-conditioning not working, slow technician response and cleanliness/drainage issues.'
    }
  ],
  'smarthouse-i-city-shah-alam': [
    {
      author: 'Nufaa',
      profileUrl: 'https://azraq-hydrangea.blogspot.com/2020/08/homestay-review-smarthouse-di-i-city.html',
      postedAt: '2020-08-07',
      sentiment: 'positive',
      summary: 'Found the stay affordable, comfortable and easy to self-check-in, with Wi-Fi, parking, kitchen basics and convenient access to i-City.'
    }
  ],
  'homestay-annur-kamunting': [
    {
      author: 'Blog Sal',
      profileUrl: 'https://blognisalpunya.blogspot.com/2022/03/review-homestay-annur-kamunting-taiping.html',
      postedAt: '2022-03-28',
      sentiment: 'positive',
      summary: 'Overall satisfied with the stay. The review highlighted parking for two cars, family-friendly space, kitchen and washing machine, while noting it is a little farther from central Taiping attractions.'
    }
  ],
  'nn-homestay-jasin': [
    {
      author: 'Rodiah Amir',
      profileUrl: 'https://www.rodiahamir.com/2026/05/review-nn-homestay-jasin-check-in-masa.html',
      postedAt: '2026-05-29',
      sentiment: 'positive',
      summary: 'Very satisfied with the stay, especially the clean comfortable house, complete family facilities, easy self check-in and straightforward communication with the owner.'
    }
  ],
  'dusun-tok-pa-slim-river': [
    {
      author: 'TAHAN Outdoor',
      profileUrl: 'https://www.tahanoutdoor.com/blogs/camping/dusun-tok-pa-review',
      postedAt: null,
      sentiment: 'positive',
      summary: 'Reviewers consistently liked the traditional kampung-house setting, clean green surroundings, fresh air and helpful host. Heavy rain can cause minor flooding around the low-lying compound.'
    }
  ],
  'hovel-glamping-homestay-alor-setar': [
    {
      author: 'TAHAN Outdoor',
      profileUrl: 'https://www.tahanoutdoor.com/blogs/camping/hovel-glamping-homestay-review',
      postedAt: null,
      sentiment: 'positive',
      summary: 'Described as a clean spacious option for large groups, with a private pool, BBQ setup and a responsive helpful owner.'
    }
  ],
  'homestay-d-ledang-tangkak': [
    {
      author: 'Sabree Hussin',
      profileUrl: 'https://www.sabreehussin.com/pakej-pengiklanan-bisnes-homestay-di-blog/',
      postedAt: null,
      sentiment: 'positive',
      summary: 'The writer said he personally stayed here and described the Tangkak homestay as comfortable with a reasonable rental rate.'
    }
  ]
};

export function getVerifiedSocialMentions(slug: string): SocialMention[] {
  return VERIFIED_SOCIAL_MENTIONS[slug] || [];
}
