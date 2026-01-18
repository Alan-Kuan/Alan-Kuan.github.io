import { defineEcConfig } from 'astro-expressive-code';

import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';
import { pluginLangIcon } from './src/ec_plugin_lang_icon';

export default defineEcConfig({
  themes: ['ayu-dark', 'everforest-light'],
  useDarkModeMediaQuery: false,
  themeCssSelector: (theme, _context) => {
    return theme.name === 'ayu-dark' ?
      '.dark &' : ':root';
  },
  plugins: [
    pluginLineNumbers(),
    pluginLangIcon(),
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