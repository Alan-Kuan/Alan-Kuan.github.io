import {
  defineConfig,
  presetWind4,
  presetIcons,
  presetWebFonts,
  transformerDirectives,
} from 'unocss';

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
          'Noto Sans:300,400,500,600,700',
          'Noto Sans TC:300,400,500,600,700',
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
    'margin-content': 'mb-4 xl:mb-6',
  },
  transformers: [
    transformerDirectives(),
  ],
  theme: {
    colors: {
      bg: {
        top: 'var(--bg-top)',
        side: 'var(--bg-side)',
        body: 'var(--bg-body)',
        card: 'var(--bg-card)',
        muted: 'var(--bg-muted)',
      },
      text: {
        normal: 'var(--text-normal)',
        link: 'var(--text-link)',
        light: 'var(--text-light)',
        dark: 'var(--text-dark)',
      },
      indicator: {
        info: 'var(--indicator-info)',
        catchy: 'var(--indicator-catchy)',
      },
    },
  },
});