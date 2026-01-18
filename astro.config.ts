import { defineConfig } from 'astro/config';

import UnoCSS from 'unocss/astro';
import vue from '@astrojs/vue';
import expressiveCode from 'astro-expressive-code';
import mdx from '@astrojs/mdx';

import remarkCallout from '@r4ai/remark-callout';
import remarkSectionize from 'remark-sectionize';

import ecConfig from './ec.config';

export default defineConfig({
  markdown: {
    remarkPlugins: [
      remarkCallout,
      remarkSectionize,
    ],
  },
  integrations: [
    UnoCSS({ injectReset: true }),
    vue(),
    expressiveCode(ecConfig),
    mdx(),
  ],
  site: 'https://Alan-Kuan.github.io',
  redirects: {
    '/articles': '/articles/1',
    '/projects': '/projects/1',
  },
});