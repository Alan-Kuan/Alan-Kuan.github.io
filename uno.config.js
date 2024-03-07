import { defineConfig } from 'unocss';
import presetIcons from '@unocss/preset-icons';
import presetUno from '@unocss/preset-uno';

export default defineConfig({
  presets: [
    presetIcons(),
    presetUno(),
  ],
  theme: {
    colors: {
      light: {
        bg: '#fee0a8',
        primary: '#74482d',
        secondary: '#2b8ebb',
        accent: '#fda229',
        text: '#3f454e',
      },
      dark: {
        bg: '#2f2a20',
        primary: '#74482d',
        secondary: '#2b8ebb',
        accent: '#fda229',
        text: '#c4c4c4',
      },
    },
  },
});