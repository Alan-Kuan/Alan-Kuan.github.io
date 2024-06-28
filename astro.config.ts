import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro';
import vue from '@astrojs/vue';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [
    UnoCSS({ injectReset: true }),
    vue(),
    mdx({ shikiConfig: { theme: 'ayu-dark' } }),
  ],
  site: 'https://Alan-Kuan.github.io',
  redirects: {
    '/': '/articles/1',
    '/articles': '/articles/1',
    '/projects': '/projects/1',
  },
});