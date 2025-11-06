import React, { useEffect, useState, useCallback } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
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
import { FontSize, FontFamily, LineHeight, Indent } from '@angus-editor/core';
import './AngusEditor.css';

export interface AngusEditorProps {
  content?: string;
  theme?: 'light' | 'dark';
  placeholder?: string;
  editable?: boolean;
  showToolbar?: boolean;
  showFooter?: boolean;
  onUpdate?: (content: string) => void;
  onThemeChange?: (theme: 'light' | 'dark') => void;
}

export const AngusEditor: React.FC<AngusEditorProps> = ({
  content = '',
  theme: initialTheme = 'light',
  placeholder = 'Start typing...',
  editable = true,
  showToolbar = true,
  showFooter = true,
  onUpdate,
  onThemeChange,
}) => {
  const [theme, setTheme] = useState<'light' | 'dark'>(initialTheme);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3, 4, 5, 6],
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
      }),
      Image.configure({
        inline: true,
        allowBase64: true,
      }),
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableCell,
      TableHeader,
      TaskList,
      TaskItem.configure({
        nested: true,
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
    content,
    editable,
    onUpdate: ({ editor }) => {
      onUpdate?.(editor.getHTML());
    },
  });

  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content);
    }
  }, [content, editor]);

  useEffect(() => {
    if (editor) {
      editor.setEditable(editable);
    }
  }, [editable, editor]);

  const setHeading = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const level = event.target.value;
      if (level && editor) {
        editor.chain().focus().setHeading({ level: parseInt(level) as 1 | 2 | 3 | 4 | 5 | 6 }).run();
      } else if (editor) {
        editor.chain().focus().setParagraph().run();
      }
    },
    [editor]
  );

  const insertTable = useCallback(() => {
    editor?.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run();
  }, [editor]);

  const insertImage = useCallback(() => {
    const url = window.prompt('Enter image URL:');
    if (url && editor) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  const insertLink = useCallback(() => {
    const url = window.prompt('Enter URL:');
    if (url && editor) {
      editor.chain().focus().setLink({ href: url }).run();
    }
  }, [editor]);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    onThemeChange?.(newTheme);
  }, [theme, onThemeChange]);

  const characterCount = editor?.storage.characterCount.characters() || 0;
  const wordCount = editor?.storage.characterCount.words() || 0;

  if (!editor) {
    return null;
  }

  return (
    <div className={`angus-editor theme-${theme}`}>
      {showToolbar && (
        <div className="editor-toolbar">
          <div className="toolbar-group">
            {/* Text Formatting */}
            <button
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={editor.isActive('bold') ? 'is-active' : ''}
              title="Bold (Ctrl+B)"
            >
              <strong>B</strong>
            </button>
            <button
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={editor.isActive('italic') ? 'is-active' : ''}
              title="Italic (Ctrl+I)"
            >
              <em>I</em>
            </button>
            <button
              onClick={() => editor.chain().focus().toggleUnderline().run()}
              className={editor.isActive('underline') ? 'is-active' : ''}
              title="Underline (Ctrl+U)"
            >
              <u>U</u>
            </button>
            <button
              onClick={() => editor.chain().focus().toggleStrike().run()}
              className={editor.isActive('strike') ? 'is-active' : ''}
              title="Strikethrough"
            >
              <s>S</s>
            </button>
          </div>

          <div className="toolbar-divider"></div>

          <div className="toolbar-group">
            {/* Headings */}
            <select onChange={setHeading} className="toolbar-select">
              <option value="">Paragraph</option>
              <option value="1">Heading 1</option>
              <option value="2">Heading 2</option>
              <option value="3">Heading 3</option>
              <option value="4">Heading 4</option>
              <option value="5">Heading 5</option>
              <option value="6">Heading 6</option>
            </select>
          </div>

          <div className="toolbar-divider"></div>

          <div className="toolbar-group">
            {/* Alignment */}
            <button
              onClick={() => editor.chain().focus().setTextAlign('left').run()}
              className={editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}
              title="Align Left"
            >
              ≡
            </button>
            <button
              onClick={() => editor.chain().focus().setTextAlign('center').run()}
              className={editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}
              title="Align Center"
            >
              ≣
            </button>
            <button
              onClick={() => editor.chain().focus().setTextAlign('right').run()}
              className={editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}
              title="Align Right"
            >
              ≡
            </button>
            <button
              onClick={() => editor.chain().focus().setTextAlign('justify').run()}
              className={editor.isActive({ textAlign: 'justify' }) ? 'is-active' : ''}
              title="Justify"
            >
              ≣
            </button>
          </div>

          <div className="toolbar-divider"></div>

          <div className="toolbar-group">
            {/* Lists */}
            <button
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              className={editor.isActive('bulletList') ? 'is-active' : ''}
              title="Bullet List"
            >
              •••
            </button>
            <button
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
              className={editor.isActive('orderedList') ? 'is-active' : ''}
              title="Numbered List"
            >
              123
            </button>
            <button
              onClick={() => editor.chain().focus().toggleTaskList().run()}
              className={editor.isActive('taskList') ? 'is-active' : ''}
              title="Task List"
            >
              ☑
            </button>
          </div>

          <div className="toolbar-divider"></div>

          <div className="toolbar-group">
            {/* Other formatting */}
            <button
              onClick={() => editor.chain().focus().toggleBlockquote().run()}
              className={editor.isActive('blockquote') ? 'is-active' : ''}
              title="Blockquote"
            >
              "
            </button>
            <button
              onClick={() => editor.chain().focus().toggleCodeBlock().run()}
              className={editor.isActive('codeBlock') ? 'is-active' : ''}
              title="Code Block"
            >
              &lt;/&gt;
            </button>
            <button onClick={insertTable} title="Insert Table">
              ⊞
            </button>
            <button onClick={insertImage} title="Insert Image">
              🖼
            </button>
            <button onClick={insertLink} title="Insert Link">
              🔗
            </button>
          </div>

          <div className="toolbar-divider"></div>

          <div className="toolbar-group">
            {/* Undo/Redo */}
            <button
              onClick={() => editor.chain().focus().undo().run()}
              disabled={!editor.can().undo()}
              title="Undo (Ctrl+Z)"
            >
              ↶
            </button>
            <button
              onClick={() => editor.chain().focus().redo().run()}
              disabled={!editor.can().redo()}
              title="Redo (Ctrl+Shift+Z)"
            >
              ↷
            </button>
          </div>

          <div className="toolbar-divider"></div>

          <div className="toolbar-group">
            {/* Theme Toggle */}
            <button onClick={toggleTheme} title="Toggle Theme">
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>
        </div>
      )}

      <EditorContent editor={editor} />

      {showFooter && (
        <div className="editor-footer">
          <span className="character-count">
            {characterCount} characters · {wordCount} words
          </span>
        </div>
      )}
    </div>
  );
};
