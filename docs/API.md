# AngusEditor API Documentation

## Core Package (@angus-editor/core)

### AngusEditor Class

The core editor class that manages the rich text editing functionality.

#### Constructor

```typescript
new AngusEditor(options: Partial<EditorOptions> & EditorConfig)
```

#### Configuration Options

```typescript
interface EditorConfig {
  theme?: 'light' | 'dark';
  placeholder?: string;
  editable?: boolean;
  autofocus?: boolean;
  content?: string;
  onUpdate?: (content: string) => void;
  onCreate?: () => void;
  onDestroy?: () => void;
}
```

#### Methods

##### Content Management

- `getContent(format?: ExportFormat): string` - Get editor content in specified format (html, json, text, markdown)
- `setContent(content: string, format?: 'html' | 'json'): void` - Set editor content
- `clearContent(): void` - Clear all content

##### Editor State

- `focus(): void` - Focus the editor
- `blur(): void` - Blur the editor
- `isEditable(): boolean` - Check if editor is editable
- `setEditable(editable: boolean): void` - Set editable state

##### History

- `undo(): void` - Undo last change
- `redo(): void` - Redo last undone change

##### Element Insertion

- `insertImage(src: string, alt?: string, title?: string): void` - Insert an image
- `insertTable(rows?: number, cols?: number, withHeaderRow?: boolean): void` - Insert a table
- `insertLink(href: string, text?: string): void` - Insert a link

##### Export

- `exportToMarkdown(): string` - Export content to Markdown format

##### Stats

- `getCharacterCount(): number` - Get character count
- `getWordCount(): number` - Get word count

##### Theme

- `setTheme(theme: 'light' | 'dark'): void` - Set editor theme
- `getTheme(): Theme` - Get current theme

---

## Vue 3 Package (@angus-editor/vue)

### AngusEditor Component

A Vue 3 component wrapper for the core editor.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `string` | `''` | Editor content (HTML) - v-model support |
| `theme` | `'light' \| 'dark'` | `'light'` | Editor theme |
| `placeholder` | `string` | `'Start typing...'` | Placeholder text |
| `editable` | `boolean` | `true` | Whether editor is editable |
| `showToolbar` | `boolean` | `true` | Show/hide toolbar |
| `showFooter` | `boolean` | `true` | Show/hide footer |

#### Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `string` | Emitted when content changes |
| `update:theme` | `'light' \| 'dark'` | Emitted when theme changes |

#### Usage Example

```vue
<template>
  <AngusEditor
    v-model="content"
    :theme="theme"
    @update:theme="handleThemeChange"
    placeholder="Start typing..."
    :editable="true"
    :showToolbar="true"
    :showFooter="true"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { AngusEditor } from '@angus-editor/vue';

const content = ref('<p>Hello World!</p>');
const theme = ref<'light' | 'dark'>('light');

const handleThemeChange = (newTheme: 'light' | 'dark') => {
  theme.value = newTheme;
  console.log('Theme changed to:', newTheme);
};
</script>
```

---

## React Package (@angus-editor/react)

### AngusEditor Component

A React component wrapper for the core editor.

#### Props

```typescript
interface AngusEditorProps {
  content?: string;
  theme?: 'light' | 'dark';
  placeholder?: string;
  editable?: boolean;
  showToolbar?: boolean;
  showFooter?: boolean;
  onUpdate?: (content: string) => void;
  onThemeChange?: (theme: 'light' | 'dark') => void;
}
```

#### Usage Example

```tsx
import React, { useState } from 'react';
import { AngusEditor } from '@angus-editor/react';

function App() {
  const [content, setContent] = useState('<p>Hello World!</p>');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const handleThemeChange = (newTheme: 'light' | 'dark') => {
    setTheme(newTheme);
    console.log('Theme changed to:', newTheme);
  };

  return (
    <AngusEditor
      content={content}
      theme={theme}
      onUpdate={setContent}
      onThemeChange={handleThemeChange}
      placeholder="Start typing..."
      editable={true}
      showToolbar={true}
      showFooter={true}
    />
  );
}
```

---

## Custom Extensions

AngusEditor includes several custom extensions beyond the standard Tiptap extensions:

### FontSize Extension

Allows setting custom font sizes for text.

**Commands:**
- `setFontSize(size: string)` - Set font size (e.g., '16px', '1.5em')
- `unsetFontSize()` - Remove font size styling

### FontFamily Extension

Allows setting custom font families for text.

**Commands:**
- `setFontFamily(family: string)` - Set font family (e.g., 'Arial, sans-serif')
- `unsetFontFamily()` - Remove font family styling

### LineHeight Extension

Allows setting line height for paragraphs and headings.

**Commands:**
- `setLineHeight(height: string)` - Set line height (e.g., '1.5', '2.0')
- `unsetLineHeight()` - Reset to default line height

### Indent Extension

Allows indenting and outdenting paragraphs.

**Commands:**
- `indent()` - Increase indent level
- `outdent()` - Decrease indent level
- `setIndent(level: number)` - Set specific indent level (0-10)

**Keyboard Shortcuts:**
- `Tab` - Increase indent
- `Shift+Tab` - Decrease indent

---

## Keyboard Shortcuts

### Text Formatting
- `Ctrl/Cmd + B` - Bold
- `Ctrl/Cmd + I` - Italic
- `Ctrl/Cmd + U` - Underline

### History
- `Ctrl/Cmd + Z` - Undo
- `Ctrl/Cmd + Shift + Z` or `Ctrl/Cmd + Y` - Redo

### Lists
- `Ctrl/Cmd + Shift + 8` - Toggle bullet list
- `Ctrl/Cmd + Shift + 7` - Toggle ordered list

### Indentation
- `Tab` - Increase indent
- `Shift + Tab` - Decrease indent

### Headings
- `Ctrl/Cmd + Alt + 1-6` - Set heading level
- `Ctrl/Cmd + Alt + 0` - Set paragraph

---

## Performance Tips

1. **Lazy Loading**: For large documents, consider implementing pagination or virtual scrolling
2. **Image Optimization**: Use compressed images and lazy loading for better performance
3. **Content Limits**: Set reasonable character limits for very large documents
4. **Debounce Updates**: When syncing with a backend, debounce the `onUpdate` callback
