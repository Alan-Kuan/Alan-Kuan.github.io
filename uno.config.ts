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
        th, td {
          padding: 0.5rem 2rem;
          border-width: 0;
        }
        td {
          border-top-width: 1px;
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
        background: ${theme.colors.dark.bg.muted};
      }
      pre {
        margin-bottom: 1rem;
        padding: 1rem;
        border-radius: 0.375rem;
        line-height: 1.2;
      }

      blockquote {
        margin-bottom: 1rem;
        padding: 1rem;
        border-left: 3px solid ${theme.colors.light.indicator.info};
        background: ${theme.colors.light.bg.card};
      }
      .dark & blockquote {
        border-color: ${theme.colors.dark.indicator.info};
        background: ${theme.colors.dark.bg.card};
      }
      blockquote p {
        padding: 0.25rem 0;
      }

      [data-callout] {
        margin-bottom: 1rem;
        padding: 1rem;
        border-radius: 0.25rem;
        background: ${theme.colors.light.bg.card};
      }
      .dark & [data-callout] {
        background: ${theme.colors.dark.bg.card};
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
        border: 1px dashed;
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