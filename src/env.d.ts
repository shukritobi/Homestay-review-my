/// <reference types="astro/client" />

interface Env {
  TURNSTILE_SITE_KEY?: string;
  TURNSTILE_SECRET?: string;
  RESEND_API_KEY?: string;
  ADMIN_EMAIL?: string;
  HASH_SALT?: string;
}

type Runtime = import('@astrojs/cloudflare').Runtime<Env>;

declare namespace App {
  interface Locals extends Runtime {}
}
