import { defineConfig } from 'astro/config';

import UnoCSS from 'unocss/astro';
import vue from '@astrojs/vue';
import expressiveCode from 'astro-expressive-code';
import mdx from '@astrojs/mdx';

import remarkCallout from '@r4ai/remark-callout';
import remarkSectionize from 'remark-sectionize';

import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';

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
    expressiveCode({
      themes: ['ayu-dark', 'everforest-light'],
      useDarkModeMediaQuery: false,
      themeCssSelector: (theme, _context) => {
        return theme.name === 'ayu-dark' ?
          '.dark &' : ':root';
      },
      plugins: [
        pluginLineNumbers(),
      ],
      defaultProps: {
        frame: 'none',
        overridesByLang: {
          // disable for empty language and `sh`
          ',sh': {
            showLineNumbers: false,
          },
        },
      },
      styleOverrides: {
        frames: {
          frameBoxShadowCssValue: 'none',
        },
      },
    }),
    mdx(),
  ],
  site: 'https://Alan-Kuan.github.io',
  redirects: {
    '/articles': '/articles/1',
    '/projects': '/projects/1',
  },
});