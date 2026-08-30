import type { PublicReview } from './db';

export type ScoreSource = {
  key: 'homestayreview' | 'google' | 'facebook' | 'booking' | 'agoda';
  label: string;
  rating: number | null;
  scale: number;
  reviewCount: number;
  baseWeight: number;
};

export type ScoreBreakdown = {
  key: ScoreSource['key'];
  label: string;
  normalizedScore: number;
  confidence: number;
  effectiveWeight: number;
  reviewCount: number;
};

export type HomestayScore = {
  score: number | null;
  confidence: 'none' | 'low' | 'medium' | 'high';
  sourceCount: number;
  evidenceCount: number;
  breakdown: ScoreBreakdown[];
};

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

function sourceConfidence(source: ScoreSource) {
  if (!source.rating || source.reviewCount <= 0) return 0;
  const target = source.key === 'homestayreview' ? 20 : 1000;
  return clamp(Math.log10(source.reviewCount + 1) / Math.log10(target + 1), 0.08, 1);
}

function bayesianNormalize(source: ScoreSource) {
  if (!source.rating || source.reviewCount <= 0) return 0;
  const raw = clamp(source.rating / source.scale, 0, 1);
  const prior = 0.8;
  const priorWeight = source.key === 'homestayreview' ? 4 : 12;
  const adjusted = ((raw * source.reviewCount) + (prior * priorWeight)) / (source.reviewCount + priorWeight);
  return adjusted * 100;
}

export function calculateHomestayScore(input: {
  homestayReviewRating: number;
  homestayReviewCount: number;
  googleRating: number | null;
  googleReviewCount: number;
  additionalSources?: ScoreSource[];
}): HomestayScore {
  const sources: ScoreSource[] = [
    {
      key: 'homestayreview',
      label: 'HomestayReview',
      rating: input.homestayReviewCount > 0 ? input.homestayReviewRating : null,
      scale: 5,
      reviewCount: input.homestayReviewCount,
      baseWeight: 0.72
    },
    {
      key: 'google',
      label: 'Google',
      rating: input.googleRating,
      scale: 5,
      reviewCount: input.googleReviewCount,
      baseWeight: 0.28
    },
    ...(input.additionalSources || [])
  ];

  const breakdown = sources
    .filter((source) => source.rating !== null && source.reviewCount > 0)
    .map((source) => {
      const confidence = sourceConfidence(source);
      return {
        key: source.key,
        label: source.label,
        normalizedScore: bayesianNormalize(source),
        confidence,
        effectiveWeight: source.baseWeight * confidence,
        reviewCount: source.reviewCount
      } satisfies ScoreBreakdown;
    });

  if (!breakdown.length) {
    return { score: null, confidence: 'none', sourceCount: 0, evidenceCount: 0, breakdown: [] };
  }

  const totalWeight = breakdown.reduce((sum, source) => sum + source.effectiveWeight, 0);
  const score = breakdown.reduce((sum, source) => sum + (source.normalizedScore * source.effectiveWeight), 0) / totalWeight;
  const evidenceCount = breakdown.reduce((sum, source) => sum + source.reviewCount, 0);
  const sourceCount = breakdown.length;
  const confidenceIndex = clamp((totalWeight / 0.72) * 0.65 + Math.min(sourceCount / 3, 1) * 0.35, 0, 1);
  const confidence = confidenceIndex >= 0.82 ? 'high' : confidenceIndex >= 0.5 ? 'medium' : 'low';

  return {
    score: Math.round(score),
    confidence,
    sourceCount,
    evidenceCount,
    breakdown: breakdown.sort((a, b) => b.effectiveWeight - a.effectiveWeight)
  };
}

const themes = [
  { key: 'cleanliness', label: 'Cleanliness', terms: ['clean', 'cleanliness', 'spotless', 'dirty', 'dust', 'smell', 'mould', 'mold'] },
  { key: 'host', label: 'Host & service', terms: ['host', 'owner', 'staff', 'service', 'helpful', 'friendly', 'responsive', 'rude'] },
  { key: 'location', label: 'Location & access', terms: ['location', 'near', 'walk', 'access', 'easy to find', 'far', 'traffic'] },
  { key: 'comfort', label: 'Comfort', terms: ['comfortable', 'comfort', 'bed', 'mattress', 'aircond', 'air con', 'air-conditioning', 'hot', 'cold'] },
  { key: 'facilities', label: 'Facilities', terms: ['facility', 'facilities', 'kitchen', 'pool', 'bathroom', 'toilet', 'shower', 'tv'] },
  { key: 'value', label: 'Value', terms: ['value', 'price', 'worth', 'expensive', 'cheap', 'affordable'] },
  { key: 'parking', label: 'Parking', terms: ['parking', 'park car', 'car park'] },
  { key: 'noise', label: 'Noise', terms: ['noise', 'noisy', 'quiet', 'peaceful', 'loud'] },
  { key: 'wifi', label: 'Wi‑Fi', terms: ['wifi', 'wi-fi', 'internet'] },
  { key: 'family', label: 'Family friendly', terms: ['family', 'kids', 'children', 'child', 'baby'] }
];

export type GuestInsight = {
  key: string;
  label: string;
  mentions: number;
  evidence: 'limited' | 'growing' | 'strong';
};

export function extractGuestInsights(reviews: PublicReview[]) {
  const positive = new Map<string, number>();
  const negative = new Map<string, number>();

  for (const review of reviews) {
    const text = `${review.title} ${review.body}`.toLowerCase();
    for (const theme of themes) {
      if (!theme.terms.some((term) => text.includes(term))) continue;
      if (review.rating >= 4) positive.set(theme.key, (positive.get(theme.key) || 0) + 1);
      if (review.rating <= 3) negative.set(theme.key, (negative.get(theme.key) || 0) + 1);
    }
  }

  const rank = (bucket: Map<string, number>): GuestInsight[] => [...bucket.entries()]
    .map(([key, mentions]) => {
      const theme = themes.find((item) => item.key === key)!;
      return {
        key,
        label: theme.label,
        mentions,
        evidence: mentions >= 5 ? 'strong' : mentions >= 2 ? 'growing' : 'limited'
      } satisfies GuestInsight;
    })
    .sort((a, b) => b.mentions - a.mentions || a.label.localeCompare(b.label))
    .slice(0, 3);

  return {
    loves: rank(positive),
    watchouts: rank(negative),
    reviewSampleSize: reviews.length
  };
}
