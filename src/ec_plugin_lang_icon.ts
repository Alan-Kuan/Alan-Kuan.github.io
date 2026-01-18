import { definePlugin } from '@expressive-code/core';

export const icon_map: Record<string, string> = {
  'sh': 'i-devicon-plain:bash',
  'c': 'i-devicon-plain:c',
  'cpp': 'i-devicon-plain:cplusplus',
  'py': 'i-devicon-plain:python',
  'js': 'i-devicon-plain:javascript',
  'ts': 'i-devicon-plain:typescript',
  'toml': 'i-vscode-icons:file-type-toml',
  'ini': 'i-vscode-icons:file-type-ini',
};

export function pluginLangIcon() {
  return definePlugin({
    name: 'Display Language Icon',
    baseStyles: () => `
      .lang-icon {
        position: absolute;
        top: 0.75rem;
        right: 0.75rem;
        z-index: 2;
        font-size: 24px;
        transition: opacity 0.3s;
      }
      .frame.has-title .lang-icon {
        top: 2.5rem;
      }
      .frame:hover .lang-icon {
        opacity: 0;
        visibility: hidden;
      }
    `,
    hooks: {
      postprocessRenderedBlock: (ctx) => {
        const pre = ctx.renderData.blockAst.children.find(node =>
          node.type === 'element' && node.tagName === 'pre');
        if (!pre || pre.type !== 'element') return;

        const lang = pre.properties?.dataLanguage as string | undefined;
        if (!lang) return;

        const icon_class = icon_map[lang];
        if (!icon_class) return;

        pre.children.unshift({
          type: 'element',
          tagName: 'div',
          properties: {
            className: `lang-icon ${icon_class}`,
          },
          children: [],
        });
      },
    },
  });
}