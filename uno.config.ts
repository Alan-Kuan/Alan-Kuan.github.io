import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetIcons,
  presetWebFonts,
  transformerAttributifyJsx,
} from 'unocss';

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
const colors = {
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
    link: {
      light: '#7d5e4a',
      dark: '#ba9073',
    },
  },
  article_card: {
    img_bg: {
      light: '#cccccc',
      dark: '#999999',
    },
    link: {
      light: '#60a5fa',
      dark: '#b4d5fd',
    },
  },
  pagination: {
    indicator: {
      light: '#f87171',
      dark: '#f87171',
      hovered: {
        light: 'orange',
        dark: '#c68f77',
      },
    },
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
    light: '#d77b00',
    dark: '#eab18a',
  },
  table: {
    header: {
      light: '#9cd69c',
      dark: '#ba9073',
    },
    body: {
      light: '#ffffff',
      dark: '#7d7468',
    },
  },
  code: {
    light: '#e7e0d5',
    dark: '#454038',
  },
  blockquote: {
    light: '#65c2fa',
    dark: '#ba9073',
  },
  callout: {
    hint: {
      light: '#ffffff',
      dark: '#867f6f',
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
        margin: 1rem 0;
        scroll-margin-top: 6rem;
        word-break: break-all;
      }

      ol {
        margin: 1rem 0;
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
        margin: 1rem 0;
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
        margin: 1rem 0;
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
        color: ${theme.colors.text.dark};
        th, td {
          padding: 0.5rem 2rem;
          border-width: 0;
          border-style: solid;
          border-color: ${theme.colors.body.light};
        }
        th {
          background: ${theme.colors.table.header.light};
        }
        td {
          border-top-width: 2px;
          background: ${theme.colors.table.body.light};
        }
        th:not(:first-child), td:not(:first-child) {
          border-left-width: 2px;
        }
      }
      .dark & table {
        color: ${theme.colors.text.light};
        th, td {
          border-color: ${theme.colors.body.dark};
        }
        th {
          background: ${theme.colors.table.header.dark};
        }
        td {
          background: ${theme.colors.table.body.dark};
        }
      }

      code:not(pre code) {
        padding: 0.1rem 0.5rem;
        border-radius: 0.25rem;
        background: ${theme.colors.code.light};
        white-space: pre-wrap;
        word-break: break-all;
      }
      .dark & code:not(pre code) {
        background: ${theme.colors.code.dark};
      }
      pre {
        margin: 1rem 0;
        padding: 1rem;
        border-radius: 0.375rem;
        line-height: 1.2;
      }

      blockquote {
        padding: 0 1rem;
        border-left: 3px solid ${theme.colors.blockquote.light};
        font-size: 1.25rem;
      }
      .dark & blockquote {
        border-color: ${theme.colors.blockquote.dark};
      }
      blockquote p {
        padding: 0.25rem 0;
      }

      [data-callout] {
        padding: 1rem;
        border-radius: 0.25rem;
        background: ${theme.colors.callout.hint.light};
      }
      .dark & [data-callout] {
        background: ${theme.colors.callout.hint.dark};
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
        border: 1px dashed ${theme.colors.text.dark};
      }
      .dark & hr {
        border: 1px dashed ${theme.colors.text.light};
      }
    }`;
}

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