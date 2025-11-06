import { Extension } from '@tiptap/core';

export interface IndentOptions {
  types: string[];
  minIndent: number;
  maxIndent: number;
}

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    indent: {
      indent: () => ReturnType;
      outdent: () => ReturnType;
      setIndent: (indent: number) => ReturnType;
    };
  }
}

export const Indent = Extension.create<IndentOptions>({
  name: 'indent',

  addOptions() {
    return {
      types: ['paragraph', 'heading', 'blockquote'],
      minIndent: 0,
      maxIndent: 10,
    };
  },

  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          indent: {
            default: 0,
            parseHTML: element => {
              const indent = element.style.paddingLeft;
              return indent ? parseInt(indent) / 30 : 0;
            },
            renderHTML: attributes => {
              if (!attributes.indent || attributes.indent === 0) {
                return {};
              }
              return {
                style: `padding-left: ${attributes.indent * 30}px`,
              };
            },
          },
        },
      },
    ];
  },

  addCommands() {
    return {
      indent:
        () =>
        ({ commands, state }) => {
          const { selection } = state;
          const { $from } = selection;
          const node = $from.node();
          const currentIndent = node.attrs.indent || 0;

          if (currentIndent >= this.options.maxIndent) {
            return false;
          }

          return this.options.types.every(type =>
            commands.updateAttributes(type, { indent: currentIndent + 1 })
          );
        },
      outdent:
        () =>
        ({ commands, state }) => {
          const { selection } = state;
          const { $from } = selection;
          const node = $from.node();
          const currentIndent = node.attrs.indent || 0;

          if (currentIndent <= this.options.minIndent) {
            return false;
          }

          return this.options.types.every(type =>
            commands.updateAttributes(type, { indent: currentIndent - 1 })
          );
        },
      setIndent:
        (indent: number) =>
        ({ commands }) => {
          if (indent < this.options.minIndent || indent > this.options.maxIndent) {
            return false;
          }

          return this.options.types.every(type => commands.updateAttributes(type, { indent }));
        },
    };
  },

  addKeyboardShortcuts() {
    return {
      Tab: () => this.editor.commands.indent(),
      'Shift-Tab': () => this.editor.commands.outdent(),
    };
  },
});
