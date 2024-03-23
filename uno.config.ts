import { defineConfig, presetIcons, presetUno } from 'unocss';

const safe_icons = [
  'linkedin',
  'github',
  'youtube',
].map(icon => `i-mdi-${icon}`);

const safe_geometry = [
  'min-h-50',
  'w-50',
];

export default defineConfig({
  presets: [
    presetIcons(),
    presetUno(),
  ],
  safelist: safe_icons.concat(safe_geometry),
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