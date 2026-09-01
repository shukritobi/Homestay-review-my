import { getRawPublicReviews } from '../data/rawPublicReviews';
import { getVerifiedExternalRatings } from '../data/externalRatings';
import { getPublicReviewSnippets } from '../data/publicReviews';
import { getHomestaySocialLinks } from '../data/socialLinks';
import { getVerifiedSocialMentions } from '../data/socialMentions';

// Exact property images we have positively matched. Only URLs are stored here;
// image bytes remain remote and are resized/cached at the edge.
const DIRECT_PROPERTY_IMAGES: Record<string, string> = {
  'google-top-004': 'https://a0.muscache.com/im/pictures/hosting/Hosting-627430285062581362/original/4fa0453c-5855-497f-8968-3aee90628756.jpeg?im_w=720'
};

export function getDirectPropertyImage(slug: string): string | null {
  return DIRECT_PROPERTY_IMAGES[slug] || null;
}

export function getPropertyImagePageCandidates(slug: string): string[] {
  const candidates = [
    ...getRawPublicReviews(slug).map((item) => item.sourceUrl),
    ...getVerifiedExternalRatings(slug).map((item) => item.url),
    ...getPublicReviewSnippets(slug).map((item) => item.sourceUrl),
    ...getHomestaySocialLinks(slug).map((item) => item.url),
    ...getVerifiedSocialMentions(slug).map((item) => item.profileUrl)
  ];

  return [...new Set(candidates.filter((url): url is string => Boolean(url && /^https?:\/\//i.test(url))))];
}
