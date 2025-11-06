# AngusEditor

<div align="center">

**一个功能强大、高颜值的富文本编辑器，支持 Vue3 和 React**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Vue 3](https://img.shields.io/badge/Vue-3.x-brightgreen.svg)](https://vuejs.org/)
[![React](https://img.shields.io/badge/React-18.x-blue.svg)](https://reactjs.org/)

</div>

---

## ✨ 特性

### 🎨 主题系统
- ✅ 浅色主题（Light Theme）
- ✅ 深色主题（Dark Theme）
- ✅ 一键切换，流畅过渡

### 📝 基础文本处理
- ✅ **字体样式**：字体家族、字体大小、颜色、背景色
- ✅ **文本格式**：粗体、斜体、下划线、删除线、上标、下标、高亮
- ✅ **段落样式**：对齐方式、行高、字间距、首行缩进、段落间距
- ✅ **列表类型**：有序列表、无序列表、嵌套列表、任务列表
- ✅ **基本操作**：剪切、复制、粘贴、撤销、重做

### 🖼️ 多媒体支持
- ✅ **图片**：本地上传、拖拽、粘贴、URL 插入
- ✅ **图片编辑**：尺寸调整、透明度、文字环绕
- ✅ **视频音频**：嵌入支持

### 📊 表格处理
- ✅ 插入表格、编辑单元格
- ✅ 合并/拆分单元格
- ✅ 行列管理
- ✅ 表格样式自定义

### 🔗 链接与引用
- ✅ 超链接管理（普通链接、锚点、邮箱、电话）
- ✅ 块引用（Blockquote）
- ✅ 内联引用和来源标注

### 💻 代码支持
- ✅ 代码块，支持语法高亮
- ✅ 内联代码样式
- ✅ 自动缩进和美化

### 🎯 高级排版
- ✅ 多栏布局支持
- ✅ 内容区块和卡片式元素
- ✅ 浮动元素和分隔符
- ✅ 特殊字符选择器

### 📤 导入与导出
- ✅ HTML 导出
- ✅ Markdown 导出
- ✅ 纯文本导出
- ✅ JSON 格式导出

### 🔧 扩展与自定义
- ✅ 插件架构
- ✅ 工具栏可定制
- ✅ 自定义 CSS 样式
- ✅ 第三方集成支持

### 📱 移动端优化
- ✅ 响应式设计
- ✅ 触屏友好
- ✅ 移动端工具栏

### ⚡ 性能优化
- ✅ 懒加载
- ✅ 代码分割
- ✅ 高效渲染

---

## 📦 安装

### 使用 npm
```bash
npm install @angus-editor/vue
# 或
npm install @angus-editor/react
```

### 使用 pnpm
```bash
pnpm add @angus-editor/vue
# 或
pnpm add @angus-editor/react
```

### 使用 yarn
```bash
yarn add @angus-editor/vue
# 或
yarn add @angus-editor/react
```

---

## 🚀 快速开始

### Vue 3 使用示例

```vue
<template>
  <div>
    <AngusEditor
      v-model="content"
      :theme="theme"
      @update:theme="theme = $event"
      placeholder="开始编写您的内容..."
      :showToolbar="true"
      :showFooter="true"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { AngusEditor } from '@angus-editor/vue';

const theme = ref<'light' | 'dark'>('light');
const content = ref('<p>Hello World!</p>');
</script>
```

### React 使用示例

```tsx
import React, { useState } from 'react';
import { AngusEditor } from '@angus-editor/react';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [content, setContent] = useState('<p>Hello World!</p>');

  return (
    <AngusEditor
      content={content}
      theme={theme}
      onUpdate={setContent}
      onThemeChange={setTheme}
      placeholder="开始编写您的内容..."
      showToolbar={true}
      showFooter={true}
    />
  );
}

export default App;
```

---

## 📖 API 文档

### Props / 属性

#### Vue 3

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `modelValue` | `string` | `''` | 编辑器内容（HTML） |
| `theme` | `'light' \| 'dark'` | `'light'` | 编辑器主题 |
| `placeholder` | `string` | `'Start typing...'` | 占位符文本 |
| `editable` | `boolean` | `true` | 是否可编辑 |
| `showToolbar` | `boolean` | `true` | 是否显示工具栏 |
| `showFooter` | `boolean` | `true` | 是否显示页脚 |

#### React

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `content` | `string` | `''` | 编辑器内容（HTML） |
| `theme` | `'light' \| 'dark'` | `'light'` | 编辑器主题 |
| `placeholder` | `string` | `'Start typing...'` | 占位符文本 |
| `editable` | `boolean` | `true` | 是否可编辑 |
| `showToolbar` | `boolean` | `true` | 是否显示工具栏 |
| `showFooter` | `boolean` | `true` | 是否显示页脚 |
| `onUpdate` | `(content: string) => void` | - | 内容更新回调 |
| `onThemeChange` | `(theme: 'light' \| 'dark') => void` | - | 主题切换回调 |

---

## 🎯 功能特性详解

### 文本格式化
- **粗体 (Bold)**: `Ctrl/Cmd + B`
- **斜体 (Italic)**: `Ctrl/Cmd + I`
- **下划线 (Underline)**: `Ctrl/Cmd + U`
- **删除线 (Strikethrough)**: 工具栏按钮
- **上标/下标**: 工具栏按钮

### 段落样式
- 标题（H1-H6）
- 对齐方式（左对齐、居中、右对齐、两端对齐）
- 行高调整
- 首行缩进

### 列表
- 无序列表：使用 `•` 或 `-` 开始
- 有序列表：使用 `1.` 开始
- 任务列表：可勾选的待办事项

### 插入元素
- **图片**: 支持 URL、拖拽、粘贴
- **表格**: 3x3 默认表格，可调整大小
- **链接**: 添加超链接
- **代码块**: 代码高亮显示

---

## 🏗️ 项目结构

```
AngusEditor/
├── packages/
│   ├── core/          # 核心功能包
│   ├── vue/           # Vue 3 集成
│   └── react/         # React 集成
├── examples/
│   ├── vue/           # Vue 3 示例
│   └── react/         # React 示例
├── package.json
└── README.md
```

---

## 🛠️ 开发

### 安装依赖

```bash
pnpm install
```

### 构建所有包

```bash
pnpm build
```

### 开发模式

```bash
pnpm dev
```

### 运行示例

```bash
# Vue 示例
cd examples/vue
pnpm dev

# React 示例
cd examples/react
pnpm dev
```

---

## 🤝 贡献

欢迎贡献代码、报告问题或提出新功能建议！

---

## 📄 许可证

MIT License © 2024

---

## 💡 致谢

本项目基于以下优秀的开源项目：

- [Tiptap](https://tiptap.dev/) - 强大的富文本编辑器框架
- [ProseMirror](https://prosemirror.net/) - 底层编辑器引擎
- [Vue 3](https://vuejs.org/) - 渐进式 JavaScript 框架
- [React](https://reactjs.org/) - 用于构建用户界面的 JavaScript 库

---

<div align="center">
Made with ❤️ by AngusEditor Team
</div>