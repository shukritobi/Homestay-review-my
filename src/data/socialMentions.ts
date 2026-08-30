export type SocialMention = {
  platform: 'threads' | 'x';
  author: string;
  url: string;
  postedAt: string | null;
  sentiment: 'positive' | 'mixed' | 'negative' | 'neutral';
  summary: string;
  checkedAt: string;
};

// Only exact, confidently matched public posts belong here.
// Social posts are displayed as external chatter and never affect H-Score.
export const VERIFIED_SOCIAL_MENTIONS: Record<string, SocialMention[]> = {};

export function getVerifiedSocialMentions(slug: string): SocialMention[] {
  return VERIFIED_SOCIAL_MENTIONS[slug] || [];
}

export function socialSearchUrls(propertyName: string) {
  const query = encodeURIComponent(`\"${propertyName}\"`);
  return {
    threads: `https://www.threads.net/search?q=${query}`,
    x: `https://x.com/search?q=${query}&src=typed_query&f=live`
  };
}

export const SOCIAL_MENTION_COVERAGE = {
  checkedListings: 100,
  verifiedMentions: Object.values(VERIFIED_SOCIAL_MENTIONS).reduce((sum, items) => sum + items.length, 0),
  checkedAt: '2026-08-31',
  note: 'No exact property-level Threads or X posts were confidently verifiable through public indexing in this pass.'
} as const;
