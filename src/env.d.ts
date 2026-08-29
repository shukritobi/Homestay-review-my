/// <reference types="astro/client" />
/// <reference types="@cloudflare/workers-types" />

interface Env {
  DB: D1Database;
  APP_URL: string;
  TURNSTILE_SITE_KEY: string;
  TURNSTILE_SECRET: string;
  TURNSTILE_HOSTNAMES?: string;
  RESEND_API_KEY: string;
  EMAIL_FROM: string;
  ADMIN_EMAIL?: string;
  HASH_SALT: string;
}

type Runtime = import('@astrojs/cloudflare').Runtime<Env>;

declare namespace App {
  interface Locals extends Runtime {}
}
