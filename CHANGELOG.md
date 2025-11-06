# Changelog

All notable changes to AngusEditor will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2024-11-06

### Added

#### Core Features
- Initial release of AngusEditor monorepo
- Core editor package (@angus-editor/core) based on Tiptap/ProseMirror
- Vue 3 integration package (@angus-editor/vue)
- React integration package (@angus-editor/react)
- Comprehensive example applications for both Vue 3 and React

#### Text Editing Features
- Rich text formatting: bold, italic, underline, strikethrough
- Superscript and subscript support
- Font family selection (9 built-in fonts)
- Font size customization (10 preset sizes)
- Text color and highlight support
- Inline code formatting

#### Paragraph & Layout Features
- Six heading levels (H1-H6)
- Text alignment (left, center, right, justify)
- Line height adjustment (6 preset values)
- Paragraph indentation with Tab/Shift+Tab support
- Custom indent levels (0-10)
- Blockquotes for quotations
- Horizontal rules as dividers

#### Lists
- Unordered (bullet) lists
- Ordered (numbered) lists
- Task lists with checkboxes
- Nested lists support
- List item management

#### Tables
- Table insertion with customizable dimensions
- Resizable columns
- Header row support
- Table cell editing
- Row and column management
- Theme-aware table styling

#### Multimedia
- Image insertion via URL
- Base64 image support
- Inline image display
- Image selection and highlighting
- Link insertion and management
- Link styling with hover effects

#### Code Support
- Inline code with monospace font
- Multi-line code blocks
- Syntax preservation
- Auto-indentation

#### Themes
- Light theme (default)
- Dark theme
- One-click theme switching
- CSS custom properties for easy customization
- Theme-aware styling for all elements

#### Import & Export
- HTML export
- JSON export
- Plain text export
- Basic Markdown export

#### User Interface
- Full-featured toolbar with all editing controls
- Toolbar button states (active/inactive)
- Footer with character and word count
- Responsive design for mobile and desktop
- Keyboard shortcuts for common operations
- Placeholder text support

#### Developer Experience
- TypeScript support throughout
- Comprehensive type definitions
- Modular architecture
- Extensible plugin system
- Workspace-based monorepo structure
- Vite-based build system

#### Documentation
- Comprehensive README with features overview
- Quick Start guide for rapid integration
- Complete API documentation
- Features guide with examples
- Contributing guidelines
- MIT License

#### Extensions
- Custom FontSize extension
- Custom FontFamily extension
- Custom LineHeight extension
- Custom Indent extension with keyboard shortcuts

### Technical Details

#### Build System
- Monorepo managed with pnpm workspaces
- Vite for fast builds and development
- TypeScript compilation with declaration files
- ES modules and CommonJS outputs
- CSS bundling and optimization

#### Dependencies
- Tiptap 2.1.13 for core editing functionality
- ProseMirror for document model
- Vue 3.3.0+ for Vue integration
- React 18.2.0+ for React integration

#### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Android)
- ES2020+ JavaScript features

### Repository Structure
```
AngusEditor/
├── packages/
│   ├── core/          # Core editor functionality
│   ├── vue/           # Vue 3 integration
│   └── react/         # React integration
├── examples/
│   ├── vue/           # Vue 3 example app
│   └── react/         # React example app
├── docs/
│   ├── API.md         # API reference
│   ├── FEATURES.md    # Features guide
│   └── QUICKSTART.md  # Quick start guide
└── README.md          # Main documentation
```

---

## Future Plans

### Planned for v0.2.0
- Advanced image editing (crop, rotate, resize)
- Video and audio embedding
- Format painter tool
- Find and replace functionality
- Spell checking
- Table cell merging and splitting
- Advanced table operations (sorting, formulas)

### Planned for v0.3.0
- Import from Word/PDF/Markdown/HTML
- Export to PDF/Word
- Multi-column layouts
- Advanced collaboration features
- Real-time collaborative editing
- Comments and annotations

### Planned for v0.4.0
- Plugin marketplace
- Custom toolbar builder
- Template system
- Math equation support
- Chart and diagram support
- Drawing and annotation tools

---

## Links
- [Repository](https://github.com/CoderBoyBoy/AngusEditor)
- [Documentation](./docs/)
- [Issues](https://github.com/CoderBoyBoy/AngusEditor/issues)
- [License](./LICENSE)
