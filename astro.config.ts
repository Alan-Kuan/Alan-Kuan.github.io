import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro';
import vue from '@astrojs/vue';
import mdx from '@astrojs/mdx';
import remarkCallout from '@r4ai/remark-callout';
import remarkSectionize from 'remark-sectionize';

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: { theme: 'ayu-dark' },
    remarkPlugins: [
      remarkCallout,
      remarkSectionize,
    ],
  },
  integrations: [
    UnoCSS({ injectReset: true }),
    vue(),
    mdx({ shikiConfig: { theme: 'ayu-dark' } }),
  ],
  site: 'https://Alan-Kuan.github.io',
  redirects: {
    '/articles': '/articles/1',
    '/projects': '/projects/1',
  },
});