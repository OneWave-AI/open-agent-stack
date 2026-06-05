# Stack Binding Notes

How to bind the tokens in `tokens.md` to common frontends. Always write the CSS
custom properties first, then bind the stack to consume them. Never duplicate raw
hex values in component code; reference the tokens.

## Tailwind CSS

Place the `:root` token block in the global stylesheet that Tailwind imports
(for example `app/globals.css` or `src/index.css`). Then extend the theme so
utilities resolve to the custom properties.

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        bg: "var(--owai-bg)",
        surface: "var(--owai-surface)",
        "surface-2": "var(--owai-surface-2)",
        border: "var(--owai-border)",
        terra: "var(--owai-terra)",
        "terra-hover": "var(--owai-terra-hover)",
        sand: "var(--owai-sand)",
        "sand-soft": "var(--owai-sand-soft)",
        ink: "var(--owai-text)",
        "ink-muted": "var(--owai-text-muted)",
      },
      borderRadius: {
        sm: "var(--owai-radius-sm)",
        md: "var(--owai-radius-md)",
        lg: "var(--owai-radius-lg)",
      },
      fontFamily: {
        sans: "var(--owai-font-sans)",
        mono: "var(--owai-font-mono)",
      },
    },
  },
};
```

Usage: `class="bg-bg text-ink"`, `class="bg-terra hover:bg-terra-hover"`.

## Plain CSS

Keep the `:root` block in the single global stylesheet and reference the
variables directly, or define thin utility classes.

```css
.btn-primary {
  background: var(--owai-terra);
  color: var(--owai-sand-soft);
  border-radius: var(--owai-radius-md);
  padding: var(--owai-space-3) var(--owai-space-6);
  font-weight: var(--owai-weight-medium);
}
.btn-primary:hover { background: var(--owai-terra-hover); }
```

## CSS-in-JS or styled-components

Inject the token block once via a global style component, then read variables
with `var(--owai-*)` inside styled blocks. Do not hardcode the hex values in JS.

## Verification checklist

- The global stylesheet contains the full `:root` token block.
- The stack binding resolves to the custom properties, not raw hex.
- No purple value appears in tokens, theme, or components.
- No emoji appears in any generated UI; icons come from a line icon library.
