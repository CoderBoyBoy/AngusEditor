import React, { useState } from 'react';
import { AngusEditor } from '@angus-editor/react';
import './App.css';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [content, setContent] = useState(`
    <h1>Welcome to AngusEditor!</h1>
    <p>This is a powerful rich text editor built with React and Tiptap.</p>
    <h2>Features</h2>
    <ul>
      <li>Rich text formatting (bold, italic, underline, etc.)</li>
      <li>Headings and paragraphs</li>
      <li>Lists (ordered, unordered, and task lists)</li>
      <li>Tables</li>
      <li>Images and links</li>
      <li>Code blocks</li>
      <li>Light and dark themes</li>
    </ul>
    <h2>Try It Out</h2>
    <p>Feel free to edit this text and explore all the features!</p>
  `);

  return (
    <div id="app">
      <header className="app-header">
        <h1>AngusEditor - React Example</h1>
        <p>A feature-rich text editor with light and dark themes</p>
      </header>

      <main className="app-main">
        <AngusEditor
          content={content}
          theme={theme}
          onUpdate={setContent}
          onThemeChange={setTheme}
          placeholder="Start writing your amazing content..."
          showToolbar={true}
          showFooter={true}
        />

        <div className="output-section">
          <h2>HTML Output</h2>
          <pre>{content}</pre>
        </div>
      </main>
    </div>
  );
}

export default App;
