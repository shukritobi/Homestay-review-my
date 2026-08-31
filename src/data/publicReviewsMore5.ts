import type { PublicReviewSnippet } from './publicReviews';
import { PUBLIC_REVIEW_SNIPPETS_MORE_6 } from './publicReviewsMore6';

export const PUBLIC_REVIEW_SNIPPETS_MORE_5: Record<string, PublicReviewSnippet[]> = {
  'google-top-071': [
    {
      summary: 'Guests repeatedly mention a clean, comfortable apartment, a helpful and responsive host, a convenient central location and useful city views. A better-equipped kitchen is the main improvement suggested.',
      sourceUrl: 'https://trip101.com/article/top-airbnbs-in-kota-bharu-malaysia'
    }
  ],
  'google-top-073': [
    {
      summary: 'Public feedback is extremely limited and inconsistent. One recent listing shows a single 1/10 stay, with facilities, comfort and value scoring particularly poorly.',
      sourceUrl: 'https://www.booking.com/hotel/my/happy-gather-homestay-huan-ju-ge.html'
    },
    {
      summary: 'A separate public listing has only one review and a 4/5 overall score, so there is still too little guest evidence to draw a reliable conclusion.',
      sourceUrl: 'https://www.airbnb.com/rooms/874940588603890725'
    }
  ],
  ...PUBLIC_REVIEW_SNIPPETS_MORE_6
};
