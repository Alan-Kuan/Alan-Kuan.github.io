import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro';

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  integrations: [
    vue(),
    UnoCSS({
      injectReset: true,
    }),
  ],
  site: 'https://Alan-Kuan.github.io',
  redirects: {
    '/tags/[tag]': '/tags/[tag]/1',
  },
});