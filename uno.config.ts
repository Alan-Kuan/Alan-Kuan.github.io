import {
  defineConfig,
  presetWind4,
  presetIcons,
  presetWebFonts,
  transformerDirectives,
} from 'unocss';

// TODO: create a concise and meaningful palette
const colors = {
  light: {
    bg: {
      primary: '#ffeecd',
      secondary: '#fee0a8',
      tertiary: '#f6f0e4',
      muted: '#cccccc',
    },
    text: {
      primary: '#4e483f',
      secondary: '#d77b00',
      inverse: '#60a5fa',
    },
    primary: '#74482d',
    secondary: '#85c0da',
    tertiary: '#f87171',
    accent: '',
    success: '',
    info: '',
  },
  dark: {
    bg: {
      primary: '#61594b',
      secondary: '#454038',
      tertiary: '#7d7468',
      muted: '#999999',
    },
    text: {
      primary: '#ffeecd',
      secondary: '#eab18a',
      inverse: '#b4d5fd',
    },
    primary: '#2e2a27',
    secondary: '#7795e0',
    tertiary: '#f87171',
    accent: '',
    success: '',
    info: '',
  },
};

// TODO: update table, code block, etc.
function getCSS({ theme }: any) {
  return `
    :root {
      --footer-height: 3rem;
    }

    article.content {
      h1 {
        font-size: 1.8rem;
        line-height: 2rem;
      }
      h2 {
        font-size: 1.5rem;
        line-height: 2rem;
      }
      h3 {
        font-size: 1.25rem;
        line-height: 1.75rem;
      }
      h4 {
        font-size: 1.125rem;
        line-height: 1.75rem;
      }
      h5 {
        font-size: 1rem;
        line-height: 1.5rem;
      }
      h6 {
        font-size: 1rem;
        line-height: 1.5rem;
      }
      h1, h2, h3, h4, h5, h6 {
        margin-bottom: 1rem;
        scroll-margin-top: 6rem;
        word-break: break-all;
      }

      ol {
        margin-bottom: 1rem;
        padding-left: 1rem;
        list-style-type: number;
      }
      ol ol {
        padding-left: 2rem;
        list-style-type: lower-alpha;
      }
      ol ol ol {
        list-style-type: lower-roman;
      }
      ul {
        margin-bottom: 1rem;
        padding-left: 1rem;
        list-style-type: disc;
      }
      ul ul {
        padding-left: 2rem;
        list-style-type: circle;
      }
      ul ul ul {
        list-style-type: square;
      }
      li ol, li ul {
        margin: 0;
      }

      dl {
        margin-bottom: 1rem;
        dt {
          margin-top: 0.5rem;
          font-weight: bold;
          font-style: italic;
        }
        dd {
          margin-left: 2rem;
          margin-bottom: 0.5rem;
        }
      }

      table {
        display: table;
        margin: 1rem auto;
        color: ${theme.colors.dark.text.inverse};
        th, td {
          padding: 0.5rem 2rem;
          border-width: 0;
          border-style: solid;
          border-color: ${theme.colors.light.bg.muted};
        }
        th {
          background: ${theme.colors.light.bg.secondary};
        }
        td {
          border-top-width: 2px;
          background: ${theme.colors.light.bg.tertiary};
        }
        th:not(:first-child), td:not(:first-child) {
          border-left-width: 2px;
        }
      }
      .dark & table {
        color: ${theme.colors.dark.text.primary};
        th, td {
          border-color: ${theme.colors.dark.bg.muted};
        }
        th {
          background: ${theme.colors.dark.bg.secondary};
        }
        td {
          background: ${theme.colors.dark.bg.muted};
        }
      }

      code:not(pre code) {
        padding: 0.1rem 0.5rem;
        border-radius: 0.25rem;
        background: ${theme.colors.light.bg.muted};
        white-space: pre-wrap;
        word-break: break-all;
      }
      .dark & code:not(pre code) {
        background: ${theme.colors.dark.bg.secondary};
      }
      pre {
        margin-bottom: 1rem;
        padding: 1rem;
        border-radius: 0.375rem;
        line-height: 1.2;
      }

      blockquote {
        padding: 0 1rem;
        border-left: 3px solid ${theme.colors.light.secondary};
        font-size: 1.25rem;
      }
      .dark & blockquote {
        border-color: ${theme.colors.dark.secondary};
      }
      blockquote p {
        padding: 0.25rem 0;
      }

      [data-callout] {
        margin-bottom: 1rem;
        padding: 1rem;
        border-radius: 0.25rem;
        background: ${theme.colors.light.bg.tertiary};
      }
      .dark & [data-callout] {
        background: ${theme.colors.dark.bg.muted};
      }
      [data-callout-body] {
        padding: 0 1rem;
      }
      [data-callout-title] {
        display: flex;
        align-items: center;
        margin: 0.5rem 0;
        font-weight: 700;
        &::before {
          content: '';
          display: block;
          width: 1.5rem;
          height: 1.5rem;
          background: currentColor;
          mask-repeat: no-repeat;
          mask-size: cover;
        }
      }
      [data-callout][data-callout-type="hint"] > [data-callout-title]::before {
        mask-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyLDJBNyw3IDAgMCwwIDUsOUM1LDExLjM4IDYuMTksMTMuNDcgOCwxNC43NFYxN0ExLDEgMCAwLDAgOSwxOEgxNUExLDEgMCAwLDAgMTYsMTdWMTQuNzRDMTcuODEsMTMuNDcgMTksMTEuMzggMTksOUE3LDcgMCAwLDAgMTIsMk05LDIxQTEsMSAwIDAsMCAxMCwyMkgxNEExLDEgMCAwLDAgMTUsMjFWMjBIOVYyMVoiIC8+PC9zdmc+");
      }

      hr {
        margin: 1.5rem 0;
        border: 1px dashed ${theme.colors.light.text.secondary};
      }
      .dark & hr {
        border: 1px dashed ${theme.colors.dark.text.secondary};
      }
    }`;
}

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
  preflights: [{ getCSS }],
  shortcuts: {
    'margin-content': 'mb-4 xl:mb-6',
  },
  transformers: [
    transformerDirectives(),
  ],
  theme: { colors },
});