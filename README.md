# AngusEditor

一个富文本编辑器，支持 Vue3 和 React。

## 特性
- 跨框架支持（Vue3 和 React）
- 支持轻主题和暗主题
- 富文本编辑功能

## 安装
```
npm install angus-editor
```

## 使用
### Vue3 使用示例
```
import { createApp } from 'vue';
import AngusEditor from 'angus-editor/vue';

const app = createApp({});
app.component('AngusEditor', AngusEditor);
app.mount('#app');
```

### React 使用示例
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { AngusEditor } from 'angus-editor/react';

function App() {
  return <AngusEditor />;
}

ReactDOM.render(<App />, document.getElementById('root'));