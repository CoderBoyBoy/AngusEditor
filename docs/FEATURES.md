# AngusEditor Features Guide

Complete guide to all features available in AngusEditor.

---

## Table of Contents

1. [Text Formatting](#text-formatting)
2. [Paragraph Styling](#paragraph-styling)
3. [Lists](#lists)
4. [Tables](#tables)
5. [Images](#images)
6. [Links](#links)
7. [Code](#code)
8. [Themes](#themes)
9. [Import & Export](#import--export)

---

## Text Formatting

### Basic Formatting

AngusEditor supports all standard text formatting options:

- **Bold**: Make text bold using `Ctrl/Cmd + B` or the toolbar button
- **Italic**: Italicize text using `Ctrl/Cmd + I` or the toolbar button
- **Underline**: Underline text using `Ctrl/Cmd + U` or the toolbar button
- **Strikethrough**: Strike through text using the toolbar button

### Advanced Formatting

- **Superscript**: Raise text above the baseline (e.g., x²)
- **Subscript**: Lower text below the baseline (e.g., H₂O)
- **Highlight**: Highlight text with a background color
- **Inline Code**: Format text as inline code with monospace font

### Font Customization

#### Font Family

Change the font family of selected text:

```typescript
editor.chain().focus().setFontFamily('Arial, sans-serif').run();
```

Available font families:
- Arial
- Times New Roman
- Courier New
- Georgia
- Verdana
- Comic Sans MS
- Impact
- Trebuchet MS

#### Font Size

Change the font size of selected text:

```typescript
editor.chain().focus().setFontSize('18px').run();
```

Common sizes: 12px, 14px, 16px, 18px, 20px, 24px, 28px, 32px, 36px, 48px

---

## Paragraph Styling

### Headings

Six levels of headings (H1-H6) are supported:

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

### Text Alignment

Four alignment options:
- **Left**: Align text to the left (default)
- **Center**: Center text horizontally
- **Right**: Align text to the right
- **Justify**: Justify text to both margins

```typescript
editor.chain().focus().setTextAlign('center').run();
```

### Line Height

Adjust spacing between lines:

```typescript
editor.chain().focus().setLineHeight('1.5').run();
```

Available options: 1.0, 1.15, 1.5, 1.75, 2.0, 2.5

### Indentation

Indent paragraphs using Tab key or commands:

```typescript
// Increase indent
editor.chain().focus().indent().run();

// Decrease indent
editor.chain().focus().outdent().run();

// Set specific level (0-10)
editor.chain().focus().setIndent(2).run();
```

**Keyboard Shortcuts:**
- `Tab` - Increase indent
- `Shift+Tab` - Decrease indent

---

## Lists

### Bullet Lists

Create unordered lists:

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

### Numbered Lists

Create ordered lists:

```html
<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>
```

### Task Lists

Create interactive task lists with checkboxes:

```html
<ul data-type="taskList">
  <li data-type="taskItem" data-checked="true">Completed task</li>
  <li data-type="taskItem" data-checked="false">Pending task</li>
</ul>
```

### Nested Lists

Lists can be nested by pressing Tab:

```html
<ul>
  <li>Parent item
    <ul>
      <li>Child item 1</li>
      <li>Child item 2</li>
    </ul>
  </li>
</ul>
```

---

## Tables

### Creating Tables

Insert a table with specified dimensions:

```typescript
editor.chain().focus().insertTable({ 
  rows: 3, 
  cols: 3, 
  withHeaderRow: true 
}).run();
```

### Table Operations

#### Adding Rows/Columns

```typescript
// Add row before
editor.chain().focus().addRowBefore().run();

// Add row after
editor.chain().focus().addRowAfter().run();

// Add column before
editor.chain().focus().addColumnBefore().run();

// Add column after
editor.chain().focus().addColumnAfter().run();
```

#### Deleting Rows/Columns

```typescript
// Delete current row
editor.chain().focus().deleteRow().run();

// Delete current column
editor.chain().focus().deleteColumn().run();

// Delete entire table
editor.chain().focus().deleteTable().run();
```

#### Cell Operations

```typescript
// Merge cells
editor.chain().focus().mergeCells().run();

// Split cell
editor.chain().focus().splitCell().run();

// Toggle header cell
editor.chain().focus().toggleHeaderCell().run();
```

### Table Styling

Tables automatically include:
- Header row styling
- Border styling that adapts to theme
- Resizable columns
- Cell selection highlighting

---

## Images

### Inserting Images

#### From URL

```typescript
editor.chain().focus().setImage({ src: 'https://example.com/image.jpg' }).run();
```

#### From Dialog

The toolbar provides an "Insert Image" button that prompts for a URL.

### Image Options

```typescript
editor.chain().focus().setImage({
  src: 'image.jpg',
  alt: 'Description',
  title: 'Hover title'
}).run();
```

### Image Features

- **Inline Display**: Images display inline with text
- **Base64 Support**: Can use base64-encoded images
- **Selection**: Selected images show a highlight border
- **Responsive**: Images are responsive by default (max-width: 100%)

---

## Links

### Creating Links

#### Basic Link

```typescript
editor.chain().focus().setLink({ href: 'https://example.com' }).run();
```

#### Link with Custom Text

```typescript
editor.chain().focus()
  .insertContent('<a href="https://example.com">Link Text</a>')
  .run();
```

### Link Options

```typescript
editor.chain().focus().setLink({
  href: 'https://example.com',
  target: '_blank',
  rel: 'noopener noreferrer',
  title: 'Visit Example'
}).run();
```

### Removing Links

```typescript
editor.chain().focus().unsetLink().run();
```

### Link Behavior

- Links are styled with theme-appropriate colors
- Hover effects for better UX
- Links don't open by default in edit mode
- Support for external attributes (target, rel)

---

## Code

### Inline Code

Format text as inline code:

```typescript
editor.chain().focus().toggleCode().run();
```

Result: `inline code`

### Code Blocks

Create multi-line code blocks:

```typescript
editor.chain().focus().toggleCodeBlock().run();
```

Result:
```
function hello() {
  console.log('Hello, world!');
}
```

### Code Features

- **Monospace Font**: Uses Courier New font family
- **Syntax Preservation**: Preserves indentation and whitespace
- **Theme Styling**: Adapts background and borders to theme
- **Auto-indent**: Maintains indentation on new lines

---

## Themes

### Built-in Themes

AngusEditor includes two built-in themes:

1. **Light Theme** (default)
   - Clean white background
   - Dark text on light background
   - Blue accent colors

2. **Dark Theme**
   - Dark background
   - Light text on dark background
   - Adjusted accent colors for better visibility

### Switching Themes

#### Vue 3

```vue
<template>
  <AngusEditor v-model="content" :theme="theme" @update:theme="theme = $event" />
</template>

<script setup>
import { ref } from 'vue';
const theme = ref('light');
</script>
```

#### React

```tsx
const [theme, setTheme] = useState<'light' | 'dark'>('light');

<AngusEditor theme={theme} onThemeChange={setTheme} />
```

### Theme Toggle Button

Both Vue and React components include a built-in theme toggle button in the toolbar (sun/moon icon).

---

## Import & Export

### Export Formats

#### HTML Export

```typescript
const html = editor.getContent('html');
// Returns: '<p>Content</p>'
```

#### JSON Export

```typescript
const json = editor.getContent('json');
// Returns: '{"type":"doc","content":[...]}'
```

#### Plain Text Export

```typescript
const text = editor.getContent('text');
// Returns: 'Content'
```

#### Markdown Export

```typescript
const markdown = editor.exportToMarkdown();
// Returns: Basic markdown format
```

### Import Formats

#### HTML Import

```typescript
editor.setContent('<p>New content</p>', 'html');
```

#### JSON Import

```typescript
editor.setContent(jsonString, 'json');
```

---

## Character & Word Count

### Display Statistics

Both Vue and React components show character and word count in the footer by default.

### Programmatic Access

```typescript
const charCount = editor.getCharacterCount();
const wordCount = editor.getWordCount();
```

---

## Blockquotes

### Creating Blockquotes

```typescript
editor.chain().focus().toggleBlockquote().run();
```

Result:
> This is a blockquote
> It can span multiple lines

### Features

- Styled with left border
- Italic text by default
- Muted text color
- Theme-aware styling

---

## Horizontal Rules

### Inserting Dividers

```typescript
editor.chain().focus().setHorizontalRule().run();
```

Creates a horizontal line to separate content sections.

---

## Best Practices

1. **Performance**: Keep content reasonably sized for best performance
2. **Accessibility**: Use proper heading hierarchy (H1 → H2 → H3)
3. **Images**: Optimize images before inserting them
4. **Links**: Use descriptive link text for better accessibility
5. **Tables**: Keep tables simple and avoid deeply nested structures

---

## Future Features

Features planned for future releases:

- Advanced image editing (crop, rotate, resize)
- Video/audio embedding
- Multi-column layouts
- Advanced find & replace
- Format painter
- Spell checking
- Collaboration features
- Word/PDF import
- Advanced table operations (sorting, formulas)

---

For more information, see the [API Documentation](./API.md).
