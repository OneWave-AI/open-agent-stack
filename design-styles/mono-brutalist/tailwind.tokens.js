/**
 * mono-brutalist Tailwind tokens.
 * Stark monochrome, light base. Maximum contrast, zero radius, thick black borders. No purple. WCAG AA+.
 * Usage: const mono = require('./tailwind.tokens'); then `theme: { extend: mono }` in tailwind.config.js
 */
module.exports = {
  colors: {
    'bg-base': '#FFFFFF',
    'bg-raised': '#F2F2F2',
    surface: '#FFFFFF',
    'text-primary': '#000000',
    'text-muted': '#4A4A4A',
    accent: '#000000',
    border: '#000000',
    divider: '#000000',
  },
  borderRadius: {
    container: '0',
    control: '0',
  },
  borderWidth: {
    rule: '1px',
    solid: '3px',
    heavy: '5px',
  },
  fontFamily: {
    display: ['Archivo Narrow', 'Arial Narrow', 'Helvetica Neue', 'Arial', 'sans-serif'],
    body: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
    mono: ['JetBrains Mono', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
  },
  fontSize: {
    xs: '0.75rem', sm: '0.875rem', base: '1rem', lg: '1.25rem',
    xl: '1.75rem', '2xl': '2.5rem', '3xl': '3.75rem', '4xl': '5.5rem',
  },
  fontWeight: {
    regular: '400', medium: '500', bold: '700', black: '900',
  },
  boxShadow: {
    none: 'none',
    hard: '6px 6px 0 0 #000000',
  },
  transitionDuration: {
    instant: '0ms',
    fast: '60ms',
  },
}
