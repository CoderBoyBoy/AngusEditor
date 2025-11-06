# 🎨 AngusEditor - Feature Showcase

Visual guide to all the amazing features in AngusEditor!

---

## 📝 Text Formatting

### Basic Formatting
| Feature | Example | Shortcut |
|---------|---------|----------|
| **Bold** | **This is bold text** | `Ctrl/Cmd + B` |
| *Italic* | *This is italic text* | `Ctrl/Cmd + I` |
| <u>Underline</u> | Underlined text | `Ctrl/Cmd + U` |
| ~~Strikethrough~~ | ~~Crossed out~~ | Button |
| Superscript | X² or E=mc² | Button |
| Subscript | H₂O or CO₂ | Button |

### Font Customization
🎨 **9 Font Families**
- Arial (Sans-serif)
- Times New Roman (Serif)
- Courier New (Monospace)
- Georgia (Serif)
- And 5 more...

📏 **10 Font Sizes**
- 12px → 48px with preset options
- Smooth scaling

🌈 **Color Options**
- Text color picker
- Background highlight
- Theme-aware styling

---

## 📋 Content Structure

### Headings
```
# Heading 1 - Main Title
## Heading 2 - Section
### Heading 3 - Subsection
#### Heading 4 - Minor Section
##### Heading 5 - Tiny Section
###### Heading 6 - Micro Section
```

### Lists

**📌 Bullet Lists**
- First item
- Second item
  - Nested item
  - Another nested
- Back to main level

**🔢 Numbered Lists**
1. First step
2. Second step
   1. Sub-step A
   2. Sub-step B
3. Third step

**✅ Task Lists**
- [x] Completed task
- [x] Another done task
- [ ] Todo item
- [ ] Another todo

---

## 📊 Tables

Create professional tables with ease:

| Feature | Supported | Notes |
|---------|-----------|-------|
| **Resizable Columns** | ✅ | Drag to resize |
| **Header Row** | ✅ | Auto-styled |
| **Cell Editing** | ✅ | Click to edit |
| **Add/Delete Rows** | ✅ | Easy controls |
| **Theme Styling** | ✅ | Adapts to theme |

**Table Features:**
- 📏 Resizable columns with drag handles
- 🎯 Click to select cells
- ➕ Add rows/columns before or after
- 🗑️ Delete rows/columns
- 🎨 Theme-aware borders and headers

---

## 🖼️ Multimedia

### Images
- 📸 Insert from URL
- 🎯 Base64 support
- 📱 Fully responsive
- ✨ Selection highlighting
- 🔗 Alt text and titles

### Links
- 🔗 Create hyperlinks
- 🎯 Custom text
- 🌐 External link support
- 🎨 Hover effects
- ⚙️ Custom attributes (target, rel)

---

## 💻 Code Support

### Inline Code
Type code `inline` with monospace font: `const x = 42;`

### Code Blocks
```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
  return true;
}
```

**Features:**
- 🎨 Syntax preservation
- 📝 Auto-indentation
- 🔤 Monospace font (Courier New)
- 🎯 Theme-aware styling

---

## 🎯 Paragraph Styling

### Alignment
- ⬅️ **Left** - Default alignment
- ↔️ **Center** - Centered text
- ➡️ **Right** - Right aligned
- ↕️ **Justify** - Full justification

### Line Height
Adjust spacing between lines:
- 1.0 (Compact)
- 1.5 (Comfortable) ⭐ Default
- 2.0 (Spacious)
- Custom values

### Indentation
```
No indent
    First level (Tab)
        Second level (Tab Tab)
            Third level (Tab Tab Tab)
```
**Shortcuts:**
- `Tab` → Increase indent
- `Shift+Tab` → Decrease indent

---

## 💬 Quotes & Dividers

### Blockquotes
> "Design is not just what it looks like and feels like.
> Design is how it works."
> — Steve Jobs

### Horizontal Rules
Use to separate sections:

---

---

## 🌓 Theme System

### 🌞 Light Theme
- Clean white background
- Dark text (#1a1a1a)
- Blue accents (#4a90e2)
- Professional appearance

### 🌙 Dark Theme
- Dark background (#1e1e1e)
- Light text (#e0e0e0)
- Adjusted accents (#5ca3e6)
- Easy on the eyes

**Toggle instantly** with the toolbar button! 🎨

---

## ⌨️ Keyboard Shortcuts

### Text Formatting
| Action | Windows/Linux | Mac |
|--------|---------------|-----|
| Bold | `Ctrl + B` | `⌘ + B` |
| Italic | `Ctrl + I` | `⌘ + I` |
| Underline | `Ctrl + U` | `⌘ + U` |

### History
| Action | Windows/Linux | Mac |
|--------|---------------|-----|
| Undo | `Ctrl + Z` | `⌘ + Z` |
| Redo | `Ctrl + Shift + Z` | `⌘ + ⇧ + Z` |

### Lists
| Action | Windows/Linux | Mac |
|--------|---------------|-----|
| Bullet List | `Ctrl + Shift + 8` | `⌘ + ⇧ + 8` |
| Ordered List | `Ctrl + Shift + 7` | `⌘ + ⇧ + 7` |

### Indentation
| Action | Shortcut |
|--------|----------|
| Increase Indent | `Tab` |
| Decrease Indent | `Shift + Tab` |

---

## 📤 Export Options

Export your content in multiple formats:

| Format | Use Case | Example |
|--------|----------|---------|
| **HTML** | Web pages, emails | `<p>Content</p>` |
| **JSON** | Storage, API | `{"type":"doc"...}` |
| **Markdown** | Documentation | `# Title\n\nText` |
| **Plain Text** | Simple text | `Content` |

---

## 📊 Statistics

Real-time tracking:
- 📝 **Character Count** - Total characters
- 📄 **Word Count** - Total words
- 🔄 **Live Updates** - Updates as you type

---

## 🎯 User Interface

### Toolbar
```
[B] [I] [U] [S] | [H▾] | [≡][≣][≡][≣] | [•••][123][☑] | ["][</>][⊞][🖼][🔗] | [↶][↷] | [🌙]
```

**Features:**
- 🎨 Visual button states (active/inactive)
- 📱 Responsive layout
- 🖱️ Hover effects
- 💡 Tooltips with shortcuts
- 🎯 Grouped by function

### Footer
```
📊 1,234 characters · 187 words
```

---

## 🚀 Getting Started

### Vue 3 - Just 3 Steps!

```vue
<script setup>
import { ref } from 'vue';
import { AngusEditor } from '@angus-editor/vue';

const content = ref('');
</script>

<template>
  <AngusEditor v-model="content" />
</template>
```

### React - Just 3 Steps!

```tsx
import React, { useState } from 'react';
import { AngusEditor } from '@angus-editor/react';

function App() {
  const [content, setContent] = useState('');
  return <AngusEditor content={content} onUpdate={setContent} />;
}
```

---

## 🎨 Customization

### Theme Variables
Easily customize with CSS:

```css
.angus-editor {
  --editor-text-color: #your-color;
  --editor-bg-color: #your-color;
  --editor-border-color: #your-color;
  /* ... more variables */
}
```

---

## 📱 Responsive Design

✅ **Desktop** - Full toolbar with all features
✅ **Tablet** - Optimized layout
✅ **Mobile** - Touch-friendly controls
✅ **All Devices** - Consistent experience

---

## 🎯 Use Cases

Perfect for:
- 📝 Blog platforms
- 💼 CMS systems
- 📧 Email composers
- 📄 Document editors
- 💬 Comment systems
- 📖 Note-taking apps
- 🎓 Educational platforms
- 📰 News publishers

---

## 🌟 Why AngusEditor?

✅ **Easy to Use** - Simple API, quick integration
✅ **Feature Rich** - Everything you need out of the box
✅ **Beautiful** - Professional appearance with themes
✅ **TypeScript** - Full type safety
✅ **Well Documented** - Comprehensive guides
✅ **Framework Flexible** - Vue 3 and React support
✅ **Customizable** - Adapt to your brand
✅ **Production Ready** - Battle-tested, secure

---

## 📚 Learn More

- 📖 [Quick Start Guide](./QUICKSTART.md) - Get started in 5 minutes
- 🔧 [API Documentation](./API.md) - Complete reference
- ✨ [Features Guide](./FEATURES.md) - Detailed feature docs
- 📋 [Changelog](../CHANGELOG.md) - Version history

---

<div align="center">

## Ready to build something amazing? 🚀

[Get Started](./QUICKSTART.md) · [View Examples](../examples/) · [Read Docs](./API.md)

---

Made with ❤️ by the AngusEditor Team

</div>
