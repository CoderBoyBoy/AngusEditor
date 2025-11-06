/**
 * Theme type definition
 */
export type Theme = 'light' | 'dark';

/**
 * Editor configuration options
 */
export interface EditorConfig {
  theme?: Theme;
  placeholder?: string;
  editable?: boolean;
  autofocus?: boolean;
  content?: string;
  onUpdate?: (content: string) => void;
  onCreate?: () => void;
  onDestroy?: () => void;
}

/**
 * Font family options
 */
export const FONT_FAMILIES = [
  { label: 'Default', value: '' },
  { label: 'Arial', value: 'Arial, sans-serif' },
  { label: 'Times New Roman', value: '"Times New Roman", serif' },
  { label: 'Courier New', value: '"Courier New", monospace' },
  { label: 'Georgia', value: 'Georgia, serif' },
  { label: 'Verdana', value: 'Verdana, sans-serif' },
  { label: 'Comic Sans MS', value: '"Comic Sans MS", cursive' },
  { label: 'Impact', value: 'Impact, fantasy' },
  { label: 'Trebuchet MS', value: '"Trebuchet MS", sans-serif' },
] as const;

/**
 * Font size options
 */
export const FONT_SIZES = [
  { label: '12px', value: '12px' },
  { label: '14px', value: '14px' },
  { label: '16px', value: '16px' },
  { label: '18px', value: '18px' },
  { label: '20px', value: '20px' },
  { label: '24px', value: '24px' },
  { label: '28px', value: '28px' },
  { label: '32px', value: '32px' },
  { label: '36px', value: '36px' },
  { label: '48px', value: '48px' },
] as const;

/**
 * Text alignment options
 */
export const TEXT_ALIGNMENTS = ['left', 'center', 'right', 'justify'] as const;

/**
 * Heading levels
 */
export const HEADING_LEVELS = [1, 2, 3, 4, 5, 6] as const;

/**
 * Line height options
 */
export const LINE_HEIGHTS = [
  { label: '1.0', value: '1.0' },
  { label: '1.15', value: '1.15' },
  { label: '1.5', value: '1.5' },
  { label: '1.75', value: '1.75' },
  { label: '2.0', value: '2.0' },
  { label: '2.5', value: '2.5' },
] as const;

/**
 * Table options
 */
export interface TableOptions {
  rows: number;
  cols: number;
  withHeaderRow?: boolean;
}

/**
 * Image options
 */
export interface ImageOptions {
  src: string;
  alt?: string;
  title?: string;
  width?: number | string;
  height?: number | string;
}

/**
 * Link options
 */
export interface LinkOptions {
  href: string;
  target?: string;
  rel?: string;
  title?: string;
}

/**
 * Export format types
 */
export type ExportFormat = 'html' | 'markdown' | 'text' | 'json';
