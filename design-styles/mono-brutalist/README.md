# mono-brutalist

Stark monochrome, light base. Pure black on white, maximum contrast, zero grain. Hard rectangular containers with no radius, thick solid borders and rule dividers, oversized condensed type, and an exposed grid. State changes are instant — a binary fill/text invert with no easing.

## Tokens

| Group | Token | Value |
|-------|-------|-------|
| Color | bg.base | `#FFFFFF` |
| | bg.raised | `#F2F2F2` |
| | surface | `#FFFFFF` |
| | text.primary | `#000000` (21:1 on white) |
| | text.muted | `#4A4A4A` (8.9:1, AA+) |
| | accent / border / divider | `#000000` |
| Type | display | Archivo Narrow → Arial Narrow → system |
| | body | Helvetica Neue → Arial |
| | mono | JetBrains Mono → system mono |
| | scale | xs `.75` → 4xl `5.5rem` |
| Radius | container / control | `0` (hard rectangles) |
| Border | rule / solid / heavy | `1px` / `3px` / `5px` |
| Elevation | none / hard | flat / `6px 6px 0 0 #000` block |
| Motion | duration | `0ms` instant, `60ms` fast |
| | easing | linear / `steps(1, end)` |

See [tokens.json](tokens.json) for the full W3C source.

## Usage

**CSS** — load `theme.css` and set the theme on a root element:

```html
<link rel="stylesheet" href="theme.css" />
<body data-theme="mono-brutalist"> ... </body>
```

Then reference variables, e.g. `border: var(--border-solid) solid var(--color-border);` and `box-shadow: var(--elevation-hard);`.

**Tailwind** — extend your config with the exported tokens:

```js
const mono = require('./tailwind.tokens')
module.exports = { theme: { extend: mono } }
```

See [preview.html](preview.html) for the style rendered in full. No purple; WCAG AA+ throughout.
