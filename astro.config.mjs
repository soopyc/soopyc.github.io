// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare(),
  integrations: [tailwind()]
});