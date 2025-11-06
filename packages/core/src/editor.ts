import { Editor as TiptapEditor, EditorOptions } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';
import TextAlign from '@tiptap/extension-text-align';
import TextStyle from '@tiptap/extension-text-style';
import Color from '@tiptap/extension-color';
import Highlight from '@tiptap/extension-highlight';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import Table from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import TaskList from '@tiptap/extension-task-list';
import TaskItem from '@tiptap/extension-task-item';
import Subscript from '@tiptap/extension-subscript';
import Superscript from '@tiptap/extension-superscript';
import Underline from '@tiptap/extension-underline';
import Placeholder from '@tiptap/extension-placeholder';
import CharacterCount from '@tiptap/extension-character-count';
import Typography from '@tiptap/extension-typography';

import { FontSize, FontFamily, LineHeight, Indent } from './extensions';
import { EditorConfig, Theme, ExportFormat } from './types';

/**
 * AngusEditor - A feature-rich text editor
 */
export class AngusEditor {
  private editor: TiptapEditor;
  private theme: Theme = 'light';

  constructor(options: Partial<EditorOptions> & EditorConfig) {
    const { theme = 'light', placeholder = 'Start typing...', ...editorOptions } = options;

    this.theme = theme;

    this.editor = new TiptapEditor({
      extensions: [
        StarterKit.configure({
          heading: {
            levels: [1, 2, 3, 4, 5, 6],
          },
          codeBlock: {
            HTMLAttributes: {
              class: 'code-block',
            },
          },
        }),
        TextAlign.configure({
          types: ['heading', 'paragraph'],
          alignments: ['left', 'center', 'right', 'justify'],
        }),
        TextStyle,
        Color,
        Highlight.configure({
          multicolor: true,
        }),
        Link.configure({
          openOnClick: false,
          HTMLAttributes: {
            class: 'editor-link',
          },
        }),
        Image.configure({
          inline: true,
          allowBase64: true,
          HTMLAttributes: {
            class: 'editor-image',
          },
        }),
        Table.configure({
          resizable: true,
          HTMLAttributes: {
            class: 'editor-table',
          },
        }),
        TableRow,
        TableCell,
        TableHeader,
        TaskList.configure({
          HTMLAttributes: {
            class: 'task-list',
          },
        }),
        TaskItem.configure({
          nested: true,
          HTMLAttributes: {
            class: 'task-item',
          },
        }),
        Subscript,
        Superscript,
        Underline,
        Placeholder.configure({
          placeholder,
        }),
        CharacterCount,
        Typography,
        FontSize,
        FontFamily,
        LineHeight,
        Indent,
      ],
      ...editorOptions,
    });
  }

  /**
   * Get the underlying Tiptap editor instance
   */
  getEditor(): TiptapEditor {
    return this.editor;
  }

  /**
   * Set the editor theme
   */
  setTheme(theme: Theme): void {
    this.theme = theme;
    // Emit theme change event if needed
  }

  /**
   * Get the current theme
   */
  getTheme(): Theme {
    return this.theme;
  }

  /**
   * Get editor content in specified format
   */
  getContent(format: ExportFormat = 'html'): string {
    switch (format) {
      case 'html':
        return this.editor.getHTML();
      case 'json':
        return JSON.stringify(this.editor.getJSON());
      case 'text':
        return this.editor.getText();
      default:
        return this.editor.getHTML();
    }
  }

  /**
   * Set editor content
   */
  setContent(content: string, format: 'html' | 'json' = 'html'): void {
    if (format === 'json') {
      this.editor.commands.setContent(JSON.parse(content));
    } else {
      this.editor.commands.setContent(content);
    }
  }

  /**
   * Clear editor content
   */
  clearContent(): void {
    this.editor.commands.clearContent();
  }

  /**
   * Focus the editor
   */
  focus(): void {
    this.editor.commands.focus();
  }

  /**
   * Blur the editor
   */
  blur(): void {
    this.editor.commands.blur();
  }

  /**
   * Check if editor is editable
   */
  isEditable(): boolean {
    return this.editor.isEditable;
  }

  /**
   * Set editable state
   */
  setEditable(editable: boolean): void {
    this.editor.setEditable(editable);
  }

  /**
   * Destroy the editor
   */
  destroy(): void {
    this.editor.destroy();
  }

  /**
   * Undo last change
   */
  undo(): void {
    this.editor.commands.undo();
  }

  /**
   * Redo last undone change
   */
  redo(): void {
    this.editor.commands.redo();
  }

  /**
   * Insert image
   */
  insertImage(src: string, alt?: string, title?: string): void {
    this.editor.commands.setImage({ src, alt, title });
  }

  /**
   * Insert table
   */
  insertTable(rows = 3, cols = 3, withHeaderRow = true): void {
    this.editor.commands.insertTable({ rows, cols, withHeaderRow });
  }

  /**
   * Insert link
   */
  insertLink(href: string, text?: string): void {
    if (text) {
      this.editor.commands.insertContent(`<a href="${href}">${text}</a>`);
    } else {
      this.editor.commands.setLink({ href });
    }
  }

  /**
   * Export content to markdown (basic implementation)
   */
  exportToMarkdown(): string {
    // This is a basic implementation
    // For production, you'd want to use a proper HTML to Markdown converter
    const html = this.editor.getHTML();
    return html
      .replace(/<h1[^>]*>(.*?)<\/h1>/g, '# $1\n')
      .replace(/<h2[^>]*>(.*?)<\/h2>/g, '## $1\n')
      .replace(/<h3[^>]*>(.*?)<\/h3>/g, '### $1\n')
      .replace(/<strong[^>]*>(.*?)<\/strong>/g, '**$1**')
      .replace(/<em[^>]*>(.*?)<\/em>/g, '*$1*')
      .replace(/<p[^>]*>(.*?)<\/p>/g, '$1\n\n')
      .replace(/<br\s*\/?>/g, '\n');
  }

  /**
   * Get character count
   */
  getCharacterCount(): number {
    return this.editor.storage.characterCount.characters();
  }

  /**
   * Get word count
   */
  getWordCount(): number {
    return this.editor.storage.characterCount.words();
  }
}
