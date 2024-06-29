import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetIcons,
  presetWebFonts,
  transformerAttributifyJsx,
} from 'unocss';

const safe_list = [
  // safe icons
  'i-mdi-linkedin',
  'i-mdi-github',
  'i-mdi-youtube',

  // safe colors
  'dark:bg-body-dark',
  'dark:text-text-light',
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
};

const preflight = `
  article.content {
    h1 {
      margin: 1rem 0;
      font-size: 1.8rem;
      line-height: 2rem;
    }
    h2 {
      margin: 1rem 0;
      font-size: 1.5rem;
      line-height: 2rem;
    }
    h3 {
      margin: 1rem 0;
      font-size: 1.25rem;
      line-height: 1.75rem;
    }
    h4 {
      margin: 1rem 0;
      font-size: 1.125rem;
      line-height: 1.75rem;
    }
    h5 {
      margin: 1rem 0;
      font-size: 1rem;
      line-height: 1.5rem;
    }
    h6 {
      margin: 1rem 0;
      font-size: 1rem;
      line-height: 1.5rem;
    }

    ol {
      margin: 1rem 0;
      padding-left: 1rem;
      list-style-type: number;
    }
    ul {
      margin: 1rem 0;
      padding-left: 1rem;
      list-style-type: disc;
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
      color: ${colors.text.dark};
      th, td {
        padding: 0.5rem 2rem;
        border-width: 0;
        border-style: solid;
        border-color: ${colors.body.light};
      }
      th {
        background: ${colors.table.header.light};
      }
      td {
        border-top-width: 2px;
        background: ${colors.table.body.light};
      }
      th:not(:first-child), td:not(:first-child) {
        border-left-width: 2px;
      }
    }
    .dark & table {
      color: ${colors.text.light};
      th, td {
        border-color: ${colors.body.dark};
      }
      th {
        background: ${colors.table.header.dark};
      }
      td {
        background: ${colors.table.body.dark};
      }
    }

    :not(pre) code {
      padding: 0.1rem 0.5rem;
      border-radius: 0.25rem;
      background: ${colors.code.light};
    }
    .dark & :not(pre) code {
      background: ${colors.code.dark};
    }
    pre {
      margin: 1rem 0;
      padding: 1rem;
      border-radius: 0.375rem;
      line-height: 1.2;
    }

    blockquote {
      padding: 0 1rem;
      border-left: 3px solid ${colors.blockquote.light};
      font-size: 1.25rem;
    }
    .dark & blockquote {
      border-color: ${colors.blockquote.dark};
    }
    blockquote p {
      padding: 0.25rem 0;
    }

    hr {
      margin: 1.5rem 0;
      border: 1px dashed ${colors.text.dark};
    }
    .dark & hr {
      border: 1px dashed ${colors.text.light};
    }
  }
`;

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
  preflights: [
    {
      getCSS: () => preflight,
    },
  ],
  transformers: [
    transformerAttributifyJsx(),
  ],
  safelist: safe_list,
  theme: { colors },
});