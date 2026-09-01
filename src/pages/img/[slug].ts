import type { APIRoute } from 'astro';
import { getDirectPropertyImage, getEmbeddedPropertyImage } from '../../lib/listingImage';

export const prerender = false;

const PRESETS = {
  card: { width: 208, height: 156, quality: 52 },
  hero: { width: 720, height: 420, quality: 58 }
} as const;

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

function decodeBase64(base64: string): Uint8Array {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

export const GET: APIRoute = async ({ params, request }) => {
  const slug = params.slug || '';
  const size = new URL(request.url).searchParams.get('size') === 'hero' ? 'hero' : 'card';
  const preset = PRESETS[size];

  const embedded = getEmbeddedPropertyImage(slug);
  if (embedded) {
    return new Response(decodeBase64(embedded.base64), {
      headers: {
        'content-type': embedded.mime,
        'cache-control': 'public, max-age=31536000, immutable'
      }
    });
  }

  const source = getDirectPropertyImage(slug);
  if (!source) {
    return new Response(null, {
      status: 404,
      headers: { 'cache-control': 'public, max-age=3600' }
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
    // Use the public resize/cache fallback below.
  }

  return Response.redirect(weservFallback(source, preset), 302);
};
