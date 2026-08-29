import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://homestayreview.my',
  output: 'server',
  adapter: cloudflare({
    imageService: 'passthrough'
  }),
  trailingSlash: 'never'
});
