<template>
  <div :class="['angus-editor', `theme-${theme}`]" ref="editorRef">
    <div v-if="showToolbar" class="editor-toolbar">
      <div class="toolbar-group">
        <!-- Text Formatting -->
        <button @click="editor?.chain().focus().toggleBold().run()" :class="{ 'is-active': editor?.isActive('bold') }" title="Bold (Ctrl+B)">
          <strong>B</strong>
        </button>
        <button @click="editor?.chain().focus().toggleItalic().run()" :class="{ 'is-active': editor?.isActive('italic') }" title="Italic (Ctrl+I)">
          <em>I</em>
        </button>
        <button @click="editor?.chain().focus().toggleUnderline().run()" :class="{ 'is-active': editor?.isActive('underline') }" title="Underline (Ctrl+U)">
          <u>U</u>
        </button>
        <button @click="editor?.chain().focus().toggleStrike().run()" :class="{ 'is-active': editor?.isActive('strike') }" title="Strikethrough">
          <s>S</s>
        </button>
      </div>

      <div class="toolbar-divider"></div>

      <div class="toolbar-group">
        <!-- Headings -->
        <select @change="setHeading($event)" class="toolbar-select">
          <option value="">Paragraph</option>
          <option value="1">Heading 1</option>
          <option value="2">Heading 2</option>
          <option value="3">Heading 3</option>
          <option value="4">Heading 4</option>
          <option value="5">Heading 5</option>
          <option value="6">Heading 6</option>
        </select>
      </div>

      <div class="toolbar-divider"></div>

      <div class="toolbar-group">
        <!-- Alignment -->
        <button @click="editor?.chain().focus().setTextAlign('left').run()" :class="{ 'is-active': editor?.isActive({ textAlign: 'left' }) }" title="Align Left">
          ≡
        </button>
        <button @click="editor?.chain().focus().setTextAlign('center').run()" :class="{ 'is-active': editor?.isActive({ textAlign: 'center' }) }" title="Align Center">
          ≣
        </button>
        <button @click="editor?.chain().focus().setTextAlign('right').run()" :class="{ 'is-active': editor?.isActive({ textAlign: 'right' }) }" title="Align Right">
          ≡
        </button>
        <button @click="editor?.chain().focus().setTextAlign('justify').run()" :class="{ 'is-active': editor?.isActive({ textAlign: 'justify' }) }" title="Justify">
          ≣
        </button>
      </div>

      <div class="toolbar-divider"></div>

      <div class="toolbar-group">
        <!-- Lists -->
        <button @click="editor?.chain().focus().toggleBulletList().run()" :class="{ 'is-active': editor?.isActive('bulletList') }" title="Bullet List">
          •••
        </button>
        <button @click="editor?.chain().focus().toggleOrderedList().run()" :class="{ 'is-active': editor?.isActive('orderedList') }" title="Numbered List">
          123
        </button>
        <button @click="editor?.chain().focus().toggleTaskList().run()" :class="{ 'is-active': editor?.isActive('taskList') }" title="Task List">
          ☑
        </button>
      </div>

      <div class="toolbar-divider"></div>

      <div class="toolbar-group">
        <!-- Other formatting -->
        <button @click="editor?.chain().focus().toggleBlockquote().run()" :class="{ 'is-active': editor?.isActive('blockquote') }" title="Blockquote">
          "
        </button>
        <button @click="editor?.chain().focus().toggleCodeBlock().run()" :class="{ 'is-active': editor?.isActive('codeBlock') }" title="Code Block">
          &lt;/&gt;
        </button>
        <button @click="insertTable" title="Insert Table">
          ⊞
        </button>
        <button @click="insertImage" title="Insert Image">
          🖼
        </button>
        <button @click="insertLink" title="Insert Link">
          🔗
        </button>
      </div>

      <div class="toolbar-divider"></div>

      <div class="toolbar-group">
        <!-- Undo/Redo -->
        <button @click="editor?.chain().focus().undo().run()" :disabled="!editor?.can().undo()" title="Undo (Ctrl+Z)">
          ↶
        </button>
        <button @click="editor?.chain().focus().redo().run()" :disabled="!editor?.can().redo()" title="Redo (Ctrl+Shift+Z)">
          ↷
        </button>
      </div>

      <div class="toolbar-divider"></div>

      <div class="toolbar-group">
        <!-- Theme Toggle -->
        <button @click="toggleTheme" title="Toggle Theme">
          {{ theme === 'light' ? '🌙' : '☀️' }}
        </button>
      </div>
    </div>

    <editor-content :editor="editor" />

    <div v-if="showFooter" class="editor-footer">
      <span class="character-count">
        {{ characterCount }} characters · {{ wordCount }} words
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeUnmount, watch, computed } from 'vue';
import { useEditor, EditorContent } from '@tiptap/vue-3';
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

interface Props {
  modelValue?: string;
  theme?: 'light' | 'dark';
  placeholder?: string;
  editable?: boolean;
  showToolbar?: boolean;
  showFooter?: boolean;
}

interface Emits {
  (e: 'update:modelValue', value: string): void;
  (e: 'update:theme', value: 'light' | 'dark'): void;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  theme: 'light',
  placeholder: 'Start typing...',
  editable: true,
  showToolbar: true,
  showFooter: true,
});

const emit = defineEmits<Emits>();

const editorRef = ref<HTMLElement>();
const theme = ref(props.theme);

const editor = useEditor({
  content: props.modelValue,
  editable: props.editable,
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
      placeholder: props.placeholder,
    }),
    CharacterCount,
    Typography,
    FontSize,
    FontFamily,
    LineHeight,
    Indent,
  ],
  onUpdate: ({ editor }) => {
    emit('update:modelValue', editor.getHTML());
  },
});

const characterCount = computed(() => {
  return editor.value?.storage.characterCount.characters() || 0;
});

const wordCount = computed(() => {
  return editor.value?.storage.characterCount.words() || 0;
});

watch(() => props.modelValue, (value) => {
  const isSame = editor.value?.getHTML() === value;
  if (isSame) return;
  editor.value?.commands.setContent(value, false);
});

watch(() => props.editable, (value) => {
  editor.value?.setEditable(value);
});

const setHeading = (event: Event) => {
  const level = (event.target as HTMLSelectElement).value;
  if (level) {
    editor.value?.chain().focus().setHeading({ level: parseInt(level) as 1 | 2 | 3 | 4 | 5 | 6 }).run();
  } else {
    editor.value?.chain().focus().setParagraph().run();
  }
};

const insertTable = () => {
  editor.value?.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run();
};

const insertImage = () => {
  const url = window.prompt('Enter image URL:');
  if (url) {
    editor.value?.chain().focus().setImage({ src: url }).run();
  }
};

const insertLink = () => {
  const url = window.prompt('Enter URL:');
  if (url) {
    editor.value?.chain().focus().setLink({ href: url }).run();
  }
};

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light';
  emit('update:theme', theme.value);
};

onBeforeUnmount(() => {
  editor.value?.destroy();
});
</script>

<style scoped>
.editor-toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  padding: 8px;
  border-bottom: 1px solid var(--editor-border-color);
  background-color: var(--editor-secondary-bg);
  border-radius: 8px 8px 0 0;
}

.toolbar-group {
  display: flex;
  gap: 2px;
}

.toolbar-divider {
  width: 1px;
  background-color: var(--editor-border-color);
  margin: 0 4px;
}

.editor-toolbar button,
.editor-toolbar select {
  padding: 6px 10px;
  border: 1px solid var(--editor-border-color);
  background-color: var(--editor-bg-color);
  color: var(--editor-text-color);
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s;
}

.editor-toolbar button:hover:not(:disabled),
.editor-toolbar select:hover {
  background-color: var(--editor-secondary-bg);
  border-color: var(--editor-focus-border-color);
}

.editor-toolbar button.is-active {
  background-color: var(--editor-focus-border-color);
  color: white;
  border-color: var(--editor-focus-border-color);
}

.editor-toolbar button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.toolbar-select {
  min-width: 120px;
}

.editor-footer {
  padding: 8px 16px;
  border-top: 1px solid var(--editor-border-color);
  background-color: var(--editor-secondary-bg);
  border-radius: 0 0 8px 8px;
  font-size: 12px;
  color: var(--editor-secondary-text);
  display: flex;
  justify-content: flex-end;
}

@media (max-width: 768px) {
  .editor-toolbar {
    font-size: 12px;
  }

  .editor-toolbar button,
  .editor-toolbar select {
    padding: 4px 8px;
    font-size: 12px;
  }
}
</style>
