# Quick Start Guide - AngusEditor

Get started with AngusEditor in less than 5 minutes!

---

## Installation

Choose your framework:

### For Vue 3 Projects

```bash
npm install @angus-editor/vue
# or
pnpm add @angus-editor/vue
# or
yarn add @angus-editor/vue
```

### For React Projects

```bash
npm install @angus-editor/react
# or
pnpm add @angus-editor/react
# or
yarn add @angus-editor/react
```

---

## Basic Usage

### Vue 3

**1. Import the component:**

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { AngusEditor } from '@angus-editor/vue';

const content = ref('');
</script>

<template>
  <AngusEditor v-model="content" />
</template>
```

**2. That's it!** You now have a fully functional rich text editor.

### React

**1. Import the component:**

```tsx
import React, { useState } from 'react';
import { AngusEditor } from '@angus-editor/react';

function App() {
  const [content, setContent] = useState('');

  return <AngusEditor content={content} onUpdate={setContent} />;
}

export default App;
```

**2. That's it!** You now have a fully functional rich text editor.

---

## Common Use Cases

### With Initial Content

#### Vue 3

```vue
<script setup>
import { ref } from 'vue';
import { AngusEditor } from '@angus-editor/vue';

const content = ref('<h1>Welcome!</h1><p>Start editing...</p>');
</script>

<template>
  <AngusEditor v-model="content" />
</template>
```

#### React

```tsx
const [content, setContent] = useState('<h1>Welcome!</h1><p>Start editing...</p>');

<AngusEditor content={content} onUpdate={setContent} />
```

### With Dark Theme

#### Vue 3

```vue
<template>
  <AngusEditor v-model="content" theme="dark" />
</template>
```

#### React

```tsx
<AngusEditor content={content} onUpdate={setContent} theme="dark" />
```

### Custom Placeholder

#### Vue 3

```vue
<template>
  <AngusEditor v-model="content" placeholder="Write something amazing..." />
</template>
```

#### React

```tsx
<AngusEditor 
  content={content} 
  onUpdate={setContent} 
  placeholder="Write something amazing..." 
/>
```

### Read-Only Mode

#### Vue 3

```vue
<template>
  <AngusEditor v-model="content" :editable="false" />
</template>
```

#### React

```tsx
<AngusEditor content={content} onUpdate={setContent} editable={false} />
```

### Without Toolbar

#### Vue 3

```vue
<template>
  <AngusEditor v-model="content" :showToolbar="false" />
</template>
```

#### React

```tsx
<AngusEditor content={content} onUpdate={setContent} showToolbar={false} />
```

---

## Full Example with All Options

### Vue 3

```vue
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

<template>
  <div class="editor-container">
    <AngusEditor
      v-model="content"
      :theme="theme"
      @update:theme="handleThemeChange"
      placeholder="Start writing..."
      :editable="true"
      :showToolbar="true"
      :showFooter="true"
    />
  </div>
</template>

<style scoped>
.editor-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style>
```

### React

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
    <div className="editor-container">
      <AngusEditor
        content={content}
        theme={theme}
        onUpdate={setContent}
        onThemeChange={handleThemeChange}
        placeholder="Start writing..."
        editable={true}
        showToolbar={true}
        showFooter={true}
      />
    </div>
  );
}

export default App;
```

---

## Keyboard Shortcuts

Once your editor is running, you can use these keyboard shortcuts:

- **Bold**: `Ctrl/Cmd + B`
- **Italic**: `Ctrl/Cmd + I`
- **Underline**: `Ctrl/Cmd + U`
- **Undo**: `Ctrl/Cmd + Z`
- **Redo**: `Ctrl/Cmd + Shift + Z`
- **Indent**: `Tab`
- **Outdent**: `Shift + Tab`

---

## Next Steps

- Check out the [full example applications](../examples/)
- Read the [Features Guide](./FEATURES.md) to learn about all capabilities
- Explore the [API Documentation](./API.md) for detailed reference
- Customize your editor with [custom themes](./API.md#theming)

---

## Troubleshooting

### Editor not showing?

Make sure the editor container has proper dimensions:

```css
.editor-container {
  min-height: 400px;
  width: 100%;
}
```

### Styles not working?

The styles are automatically imported with the component. If you're having issues, make sure:
1. Your build tool supports CSS imports in node_modules
2. You're not accidentally overriding the CSS variables

### TypeScript errors?

Make sure you're using TypeScript 5.0+ for best compatibility.

---

## Getting Help

- **Issues**: [GitHub Issues](https://github.com/CoderBoyBoy/AngusEditor/issues)
- **Documentation**: [Full Docs](./API.md)
- **Examples**: [Live Examples](../examples/)

---

Enjoy using AngusEditor! 🎉
