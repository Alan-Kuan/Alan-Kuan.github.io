import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetIcons,
  presetWebFonts,
  transformerAttributifyJsx,
} from 'unocss';

import { getCSS } from '@/preflight';
import { colors } from '@/theme';

const safe_list = [
  // for profile card
  'i-mdi-linkedin',
  'i-mdi-github',
  'i-mdi-mastodon',
  'i-mdi-youtube',

  // for avatar image
  'rounded-xl',

  // for post outline
  '[pl~="2"]',
  '[pl~="4"]',
  '[pl~="6"]',
  '[pl~="8"]',
  '[pl~="10"]',
];

export default defineConfig({
  presets: [
    presetUno({ attributifyPseudo: true }),
    presetAttributify(),
    presetIcons(),
    presetWebFonts({
      provider: 'bunny',
      fonts: {
        sans: [
          'Noto Sans:300,400,500,700',
          'Noto Sans TC:300,400,500,700',
        ],
        serif: [
          'Noto Serif',
          'Noto Serif TC',
        ],
        mono: 'Source Code Pro',
      },
    }),
  ],
  preflights: [{ getCSS }],
  transformers: [
    transformerAttributifyJsx(),
  ],
  rules: [
    ['transition-shape', { 'transition-property': 'width,transform' }],
    ['transition-font-size', { 'transition-property': 'font-size' }],
  ],
  shortcuts: {
    'margin-content': 'mb-4 xl:mb-6',
    'columns': 'grid grid-cols-16',
    'img-gap': 'gap-x-4 gap-y-2',
  },
  safelist: safe_list,
  theme: { colors },
});