import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://homestayreview.my',
  output: 'server',
  session: false,
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    }
  }),
  trailingSlash: 'never'
});
