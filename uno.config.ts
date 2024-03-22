import { defineConfig } from 'unocss';
import presetIcons from '@unocss/preset-icons';
import presetUno from '@unocss/preset-uno';

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
      light: {
        bg: {
          page: '#ffeecd',
          profile_card: '#fee0a8',
        },
        primary: '#74482d',
        secondary: '#2b8ebb',
        accent: '#fda229',
        text: '#3f454e',
      },
      dark: {
        bg: {
          page: '#2f2a20',
          profile_card: '',  // TODO: find a better color
        },
        primary: '#74482d',
        secondary: '#2b8ebb',
        accent: '#fda229',
        text: '#c4c4c4',
      },
    },
  },
});