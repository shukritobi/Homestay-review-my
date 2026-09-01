export type SocialPlatform = 'facebook' | 'instagram' | 'tiktok' | 'threads';

export type HomestaySocialLink = {
  platform: SocialPlatform;
  url: string;
  account?: string;
};

// Property/operator social pages that were matched to a specific listing.
// Deliberately omit a platform when the account could not be verified.
export const HOMESTAY_SOCIAL_LINKS: Record<string, HomestaySocialLink[]> = {
  'google-top-002': [
    { platform: 'facebook', url: 'https://www.facebook.com/stayrene', account: 'Stayrene' },
    { platform: 'instagram', url: 'https://www.instagram.com/stayrenehomestay/', account: 'Stayrene' }
  ],
  'google-top-005': [
    { platform: 'facebook', url: 'https://www.facebook.com/BYONGROUP', account: 'BYON' },
    { platform: 'instagram', url: 'https://www.instagram.com/byongroup/', account: 'BYON' },
    { platform: 'tiktok', url: 'https://www.tiktok.com/@byongroup', account: 'BYON' }
  ],
  'google-top-033': [
    { platform: 'facebook', url: 'https://www.facebook.com/tiongtrovefamilyfarm/', account: 'Tiong Trove Family Farm' }
  ],
  'google-top-039': [
    { platform: 'facebook', url: 'https://fb.me/c4CQuFCq0', account: 'Blissful Homestay @Horizon Ipoh' }
  ],
  'google-top-045': [
    { platform: 'facebook', url: 'https://www.facebook.com/langkawigoofficial', account: 'LangkawiGO' },
    { platform: 'instagram', url: 'https://www.instagram.com/langkawigo/', account: 'LangkawiGO' }
  ],
  'google-top-081': [
    { platform: 'facebook', url: 'http://www.facebook.com/nazrinsstudioapartment', account: 'Nazrins Studio Apartment' }
  ],
  'google-top-093': [
    { platform: 'facebook', url: 'https://www.facebook.com/thecocojourneymlk', account: 'The Coco Journey' },
    { platform: 'instagram', url: 'https://www.instagram.com/the.coco.journey', account: 'The Coco Journey' },
    { platform: 'tiktok', url: 'https://www.tiktok.com/@thecocojourney', account: 'The Coco Journey' }
  ],
  'rr-homestay-sekinchan-tali-air-7': [
    { platform: 'tiktok', url: 'https://www.tiktok.com/@rrstaycationsekinchan', account: 'RR Staycation Sekinchan' }
  ],
  'zara-homestay-klia': [
    { platform: 'threads', url: 'https://www.threads.net/@zara.homestay_klia', account: 'Zara Homestay KLIA' }
  ],
  'homestay-pepadi-sekinchan': [
    { platform: 'instagram', url: 'https://www.instagram.com/homestaypepadi/', account: 'Homestay Pepadi Sekinchan' }
  ],
  'anjung-pool-villa-sekinchan': [
    { platform: 'facebook', url: 'https://www.facebook.com/Anjungpoolvilla/', account: 'Anjung Pool Villa' },
    { platform: 'instagram', url: 'https://www.instagram.com/anjungpoolvilla/', account: 'Anjung Pool Villa' }
  ],
  'homestay-d-ledang-tangkak': [
    { platform: 'facebook', url: 'https://www.facebook.com/545592062614271', account: "Ssantai D'Ledang Homestay" }
  ]
};

export function getHomestaySocialLinks(slug: string): HomestaySocialLink[] {
  return HOMESTAY_SOCIAL_LINKS[slug] || [];
}
