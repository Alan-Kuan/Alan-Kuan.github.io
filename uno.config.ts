import {
  defineConfig,
  presetIcons,
  presetUno,
  presetAttributify,
} from 'unocss';

const safe_list = [
  // safe icons
  'i-mdi-linkedin',
  'i-mdi-github',
  'i-mdi-youtube',

  // safe geometries
  'min-h-50',
  'w-50',

  // safe colors
  'dark:bg-body-dark',
  'dark:text-text-light',
];

export default defineConfig({
  presets: [
    presetIcons(),
    presetUno({ attributifyPseudo: true }),
    presetAttributify(),
  ],
  safelist: safe_list,
  theme: {
    colors: {
      nav: {
        bar: {
          light: '#74482d',
          dark: '#2e2a27',
        },
        indicator: {
          light: '#85c0da',
          dark: '#7795e0',
        },
        highlight: '#ffffff55',
      },
      profile_card: {
        light: '#fee0a8',
        dark: '#454038',
      },
      body: {
        light: '#ffeecd',
        dark: '#61594b',
      },
      page: {
        light: '#f6f0e4',
        dark: '#7d7468',
      },
      text: {
        light: '#ffeecd',
        dark: '#4e483f',
      },
      link: {
        light: '#7d5e4a',
        dark: '#ba9073',
      },
    },
  },
});