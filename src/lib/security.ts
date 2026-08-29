export function cleanText(value: FormDataEntryValue | null, maxLength: number) {
  if (typeof value !== 'string') return '';
  return value.replace(/\s+/g, ' ').trim().slice(0, maxLength);
}

export function cleanMultiline(value: FormDataEntryValue | null, maxLength: number) {
  if (typeof value !== 'string') return '';
  return value.replace(/\r\n/g, '\n').trim().slice(0, maxLength);
}

export function normalizeEmail(value: string) {
  return value.trim().toLowerCase();
}

export function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 254;
}

export function slugify(value: string) {
  return value
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 90) || 'homestay';
}

export function parseStayMonth(value: string) {
  const match = /^(\d{4})-(\d{2})$/.exec(value);
  if (!match) return null;
  const year = Number(match[1]);
  const month = Number(match[2]);
  if (year < 1990 || month < 1 || month > 12) return null;

  const now = new Date();
  const currentYear = now.getUTCFullYear();
  const currentMonth = now.getUTCMonth() + 1;
  if (year > currentYear || (year === currentYear && month > currentMonth)) return null;
  return { year, month };
}

export async function sha256(value: string) {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, '0')).join('');
}

export function randomToken(byteLength = 32) {
  const bytes = new Uint8Array(byteLength);
  crypto.getRandomValues(bytes);
  let binary = '';
  bytes.forEach((byte) => (binary += String.fromCharCode(byte)));
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
}

type TurnstileResult = {
  success: boolean;
  hostname?: string;
  action?: string;
  'error-codes'?: string[];
};

export async function verifyTurnstile(options: {
  token: string;
  secret: string;
  remoteIp?: string | null;
  expectedAction: string;
  expectedHostnames?: string;
}) {
  const { token, secret, remoteIp, expectedAction, expectedHostnames } = options;
  if (!token || token.length > 2048 || !secret) return { ok: false, reason: 'missing-token' } as const;

  const body = new URLSearchParams({ secret, response: token });
  if (remoteIp) body.set('remoteip', remoteIp);

  let response: Response;
  try {
    response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
      signal: AbortSignal.timeout(10_000)
    });
  } catch {
    return { ok: false, reason: 'verification-unavailable' } as const;
  }

  if (!response.ok) return { ok: false, reason: 'verification-unavailable' } as const;
  const result = (await response.json()) as TurnstileResult;
  if (!result.success) return { ok: false, reason: 'challenge-failed' } as const;
  if (result.action !== expectedAction) return { ok: false, reason: 'action-mismatch' } as const;

  const isTestSecret = secret.startsWith('1x0000000000000000000000000000000');
  const allowedHostnames = (expectedHostnames || '')
    .split(',')
    .map((item) => item.trim().toLowerCase())
    .filter(Boolean);

  if (!isTestSecret && allowedHostnames.length > 0) {
    if (!result.hostname || !allowedHostnames.includes(result.hostname.toLowerCase())) {
      return { ok: false, reason: 'hostname-mismatch' } as const;
    }
  }

  return { ok: true } as const;
}

export function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store'
    }
  });
}
