import { defineEcConfig } from 'astro-expressive-code';

import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';

export default defineEcConfig({
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
  useStyleReset: false,
  styleOverrides: {
    frames: {
      frameBoxShadowCssValue: 'none',
    },
  },
});