import type { APIRoute } from 'astro';
import { getDirectPropertyImage, getPropertyImagePageCandidates } from '../../lib/listingImage';

export const prerender = false;

const PRESETS = {
  card: { width: 208, height: 156, quality: 52 },
  hero: { width: 720, height: 420, quality: 58 }
} as const;

const decodeHtml = (value: string) => value
  .replace(/&amp;/g, '&')
  .replace(/&quot;/g, '"')
  .replace(/&#39;/g, "'")
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>');

function extractPreviewImage(html: string, pageUrl: string): string | null {
  const patterns = [
    /<meta[^>]+property=["']og:image(?::secure_url)?["'][^>]+content=["']([^"']+)["'][^>]*>/i,
    /<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image(?::secure_url)?["'][^>]*>/i,
    /<meta[^>]+name=["']twitter:image(?::src)?["'][^>]+content=["']([^"']+)["'][^>]*>/i,
    /<meta[^>]+content=["']([^"']+)["'][^>]+name=["']twitter:image(?::src)?["'][^>]*>/i
  ];

  for (const pattern of patterns) {
    const match = html.match(pattern);
    if (!match?.[1]) continue;
    try {
      const url = new URL(decodeHtml(match[1]), pageUrl);
      if (url.protocol === 'http:' || url.protocol === 'https:') return url.toString();
    } catch {
      // Try the next metadata candidate.
    }
  }
  return null;
}

async function readHead(response: Response, limit = 384 * 1024): Promise<string> {
  if (!response.body) return '';
  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let output = '';
  let total = 0;

  try {
    while (total < limit) {
      const { value, done } = await reader.read();
      if (done || !value) break;
      total += value.byteLength;
      output += decoder.decode(value, { stream: true });
      if (/<\/head>/i.test(output)) break;
    }
  } finally {
    reader.cancel().catch(() => undefined);
  }

  return output;
}

async function discoverImage(pageUrl: string): Promise<string | null> {
  try {
    const response = await fetch(pageUrl, {
      redirect: 'follow',
      headers: {
        'user-agent': 'Mozilla/5.0 (compatible; HomestayReview/1.0; +https://homestayreview.my)',
        accept: 'text/html,application/xhtml+xml,image/avif,image/webp,image/*;q=0.8,*/*;q=0.5'
      },
      cf: { cacheTtl: 604800, cacheEverything: true }
    } as RequestInit & { cf?: Record<string, unknown> });

    if (!response.ok) return null;
    const type = response.headers.get('content-type') || '';
    if (type.startsWith('image/')) return response.url || pageUrl;
    if (!type.includes('text/html') && !type.includes('application/xhtml+xml')) return null;

    const head = await readHead(response);
    return extractPreviewImage(head, response.url || pageUrl);
  } catch {
    return null;
  }
}

function weservFallback(source: string, preset: (typeof PRESETS)[keyof typeof PRESETS]): string {
  const url = new URL('https://images.weserv.nl/');
  url.searchParams.set('url', source);
  url.searchParams.set('w', String(preset.width));
  url.searchParams.set('h', String(preset.height));
  url.searchParams.set('fit', 'cover');
  url.searchParams.set('q', String(preset.quality));
  url.searchParams.set('output', 'webp');
  return url.toString();
}

export const GET: APIRoute = async ({ params, request }) => {
  const slug = params.slug || '';
  const size = new URL(request.url).searchParams.get('size') === 'hero' ? 'hero' : 'card';
  const preset = PRESETS[size];

  let source = getDirectPropertyImage(slug);
  if (!source) {
    const candidates = getPropertyImagePageCandidates(slug).slice(0, 5);
    for (const candidate of candidates) {
      source = await discoverImage(candidate);
      if (source) break;
    }
  }

  if (!source) {
    return new Response(null, {
      status: 404,
      headers: { 'cache-control': 'public, max-age=900' }
    });
  }

  try {
    const transformed = await fetch(source, {
      headers: {
        accept: request.headers.get('accept') || 'image/avif,image/webp,image/*,*/*;q=0.8'
      },
      cf: {
        image: {
          width: preset.width,
          height: preset.height,
          fit: 'cover',
          quality: preset.quality,
          format: 'auto'
        }
      }
    } as RequestInit & { cf?: { image?: Record<string, unknown> } });

    if (transformed.ok && (transformed.headers.get('content-type') || '').startsWith('image/')) {
      const headers = new Headers(transformed.headers);
      headers.set('cache-control', 'public, max-age=86400, s-maxage=2592000');
      headers.set('vary', 'Accept');
      return new Response(transformed.body, { status: transformed.status, headers });
    }
  } catch {
    // The public resize fallback below keeps this route working if remote
    // origin restrictions have not yet been enabled in Cloudflare Images.
  }

  return Response.redirect(weservFallback(source, preset), 302);
};
