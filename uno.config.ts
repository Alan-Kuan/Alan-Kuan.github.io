import {
  defineConfig,
  presetWind4,
  presetIcons,
  presetWebFonts,
  transformerDirectives,
} from 'unocss';

const colors = {
  light: {
    bg: {
      top: 'oklch(0.45 0.07 50)',
      side: 'oklch(0.95 0.08 84)',
      body: 'oklch(0.95 0.05 84)',
      card: 'oklch(0.95 0.02 84)',
      muted: 'oklch(0.91 0.02 79)',
    },
    text: {
      normal: 'oklch(0.40 0.02 84)',
      link: 'oklch(0.50 0.07 62)',
    },
    indicator: {
      info: 'oklch(0.75 0.12 250)',
      catchy: 'oklch(0.65 0.18 22)',
    },
  },
  dark: {
    bg: {
      top: 'oklch(0.30 0.01 67)',
      side: 'oklch(0.25 0.01 67)',
      body: 'oklch(0.20 0.01 67)',
      card: 'oklch(0.25 0.01 67)',
      muted: 'oklch(0.25 0.02 79)',
    },
    text: {
      normal: 'oklch(0.95 0.05 84)',
      link: 'oklch(0.65 0.08 62)',
    },
    indicator: {
      info: 'oklch(0.65 0.10 265)',
      catchy: 'oklch(0.65 0.18 22)',
    },
  },
};

export default defineConfig({
  presets: [
    presetWind4({
      preflights: {
        reset: true,
      },
    }),
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
  shortcuts: {
    'margin-content': 'not-last:mb-4 xl:not-last:mb-6',
  },
  transformers: [
    transformerDirectives(),
  ],
  theme: { colors },
});