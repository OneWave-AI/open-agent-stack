# Cirrus

A light cloud-and-sky design style. Soft whites and pale sky blues, very low
contrast, and lots of air. Containers are barely-there frosted glass with large
soft shadows and generous radius; dividers fade to nothing. Type is a light
geometric sans with generous breathing room, and motion drifts gently like
clouds.

- Light base, never dark.
- No purple anywhere — accent and neutrals live on the blue/slate side.
- Text contrast meets WCAG AA or better (see `references/contrast.md`).

## Tokens

| Group | Token | Value |
| --- | --- | --- |
| Color | `bg.base` | `#eef4fb` |
| Color | `bg.raised` | `#f6fafe` |
| Color | `surface` | `#fbfdff` |
| Color | `text.primary` | `#1c2b3a` |
| Color | `text.muted` | `#4a5f73` |
| Color | `accent` | `#1d6fb8` |
| Color | `accent-contrast` | `#ffffff` |
| Color | `border` | `#d4e2f0` |
| Color | `divider` | `#e3edf7` |
| Type | `font.display` | Quicksand, Avenir Next, system-ui |
| Type | `font.body` | Inter, Segoe UI, system-ui |
| Type | `font.mono` | JetBrains Mono, Menlo, monospace |
| Type | `scale` | 0.75 / 0.875 / 1 / 1.25 / 1.625 / 2.125 / 2.875 / 3.75 rem |
| Type | `weight` | 300 / 400 / 500 / 600 |
| Space | `space` | 0 / .25 / .5 / .75 / 1 / 1.5 / 2 / 3 / 4 / 6 rem |
| Radius | `container` | `1.75rem` |
| Radius | `control` | `0.875rem` |
| Blur | `frost` | `16px` |
| Blur | `frost-strong` | `28px` |
| Elevation | `soft` | `0 12px 32px -8px rgba(91,140,191,.18)` |
| Elevation | `float` | `0 28px 60px -12px rgba(91,140,191,.22)` |
| Motion | `duration` | fast 200ms / base 420ms / slow 900ms / float 7000ms |
| Motion | `easing.standard` | `cubic-bezier(.4,0,.2,1)` |
| Motion | `easing.drift` | `cubic-bezier(.37,0,.27,1)` |
| Motion | `signature` | `float` — slow vertical drift, clouds adrift |

Full machine-readable source: `tokens.json` (W3C design-tokens format).

## Usage

### CSS custom properties

Link the stylesheet and set the theme attribute on a root element:

```html
<html data-theme="cirrus">
  <head><link rel="stylesheet" href="theme.css" /></head>
  ...
</html>
```

Then reference variables, e.g. `background: var(--color-surface);`,
`border-radius: var(--radius-container);`, `box-shadow: var(--elevation-soft);`.
Add the class `cirrus-floating` to opt an element into the signature drift
animation (it respects `prefers-reduced-motion`).

### Tailwind

Merge the exported tokens into your config:

```js
// tailwind.config.js
const cirrus = require("./tailwind.tokens.js");
module.exports = {
  theme: { extend: cirrus },
};
```

Utilities become available such as `bg-cirrus-surface`, `text-cirrus-text-primary`,
`rounded-cirrus-container`, `shadow-cirrus-soft`, `font-cirrus-display`,
`backdrop-blur-cirrus-frost`, and `animate-cirrus-float`.

## Preview

Open `preview.html` in a browser to see the full treatment: a sky-wash cloud
background, frosted floating cards, a fade-to-nothing divider, primary and ghost
buttons, and body type.

## Files

- `tokens.json` — W3C design tokens (source of truth)
- `theme.css` — CSS custom properties under `[data-theme="cirrus"]`
- `tailwind.tokens.js` — Tailwind `theme.extend` object
- `preview.html` — self-contained live preview
- `references/contrast.md` — WCAG contrast verification table
