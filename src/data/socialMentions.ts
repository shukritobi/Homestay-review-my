export type SocialMention = {
  author: string;
  profileUrl: string;
  postedAt: string | null;
  sentiment: 'positive' | 'mixed' | 'negative' | 'neutral';
  summary: string;
};

// Public posts supplied by the user and matched to a named property.
// They are shown as community mentions and do not affect H-Score.
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
  ]
};

export function getVerifiedSocialMentions(slug: string): SocialMention[] {
  return VERIFIED_SOCIAL_MENTIONS[slug] || [];
}
