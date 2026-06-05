# neo-terminal

An AI-console / cyber design style. Near-black base with phosphor-green and amber
monospace accents, dot-grid and scanline backgrounds, bordered panels with corner
ticks, and dotted/dashed dividers. High contrast, monospace throughout, with
typewriter and cursor-blink motion as the signature.

No purple anywhere. All text/background pairings meet WCAG AA+ (most exceed 7:1).

## Files

| File | Purpose |
| --- | --- |
| `tokens.json` | W3C design-tokens source of truth. |
| `theme.css` | Same tokens as CSS custom properties under `[data-theme="neo-terminal"]`. |
| `tailwind.tokens.js` | `theme.extend` object for Tailwind. |
| `preview.html` | Self-contained page rendering the style. |
| `references/tokens.md` | Full token table and rationale. |

## Token summary

| Token | Value | Notes |
| --- | --- | --- |
| `color.bg.base` | `#05080a` | Page background, near-black. |
| `color.bg.raised` | `#0a1014` | Raised regions, console blocks. |
| `color.surface` | `#0e161b` | Panel / card surface. |
| `color.text.primary` | `#d6f5e3` | 14.8:1 on base. |
| `color.text.muted` | `#7fa394` | 6.1:1 on base. |
| `color.accent` | `#39ff8b` | Phosphor green, 13.6:1 on base. |
| `accent.alt` | `#ffb627` | Amber, 11.1:1 on base. |
| `accent.danger` | `#ff5c5c` | Error red, 6.4:1 on base. |
| `color.border` | `#1d3a2f` | Panel borders, corner ticks. |
| `color.divider` | `#16302a` | Dotted/dashed dividers. |
| `type.font.*` | JetBrains Mono | Monospace stack everywhere. |
| `radius.container` | `2px` | Near-square terminal frames. |
| `radius.control` | `1px` | Crisp control edges. |
| `elevation.glow` | green 18px blur | Focus/active phosphor glow. |
| `motion.duration.type` | `2200ms` | Typewriter line reveal. |
| `motion.duration.blink` | `1000ms` | Cursor blink cycle. |

See `references/tokens.md` for the complete table including space scale, type
scale, tracking, easing, and background-treatment recipes.

## Usage — CSS

Link the stylesheet and set the theme attribute on any container (or `<html>`):

```html
<link rel="stylesheet" href="theme.css" />
<body data-theme="neo-terminal"> ... </body>
```

Reference tokens via the custom properties:

```css
.panel {
  background: var(--nt-color-surface);
  border: 1px solid var(--nt-color-border);
  border-radius: var(--nt-radius-container);
  box-shadow: var(--nt-elevation-panel);
}
.panel:focus-within { box-shadow: var(--nt-elevation-glow); }
```

### Background treatment

Combine the scanline and dot-grid layers on the page body:

```css
body[data-theme="neo-terminal"] {
  background-color: var(--nt-color-bg-base);
  background-image: var(--nt-bg-scanline), var(--nt-bg-dotgrid);
  background-size: auto, var(--nt-bg-dotgrid-size);
}
```

## Usage — Tailwind

```js
// tailwind.config.js
const neoTerminal = require("./tailwind.tokens.js");
module.exports = {
  content: ["./**/*.{html,js,jsx,ts,tsx}"],
  theme: { extend: neoTerminal },
};
```

Then use the namespaced utilities:

```html
<div class="bg-nt-surface text-nt-text border border-nt-border rounded-nt-container shadow-nt-panel font-nt-mono">
  <button class="bg-nt-accent text-nt-bg-base rounded-nt-control hover:shadow-nt-glow">Run</button>
</div>
```

## Motion

- Typewriter reveal: animate `max-width` with `steps(...)` over `--nt-duration-type`.
- Cursor blink: hard on/off with `steps(2, jump-none)` over `--nt-duration-blink`.
- Glow pulse: transition `box-shadow` to `--nt-elevation-glow` on hover/focus.

All motion is disabled under `prefers-reduced-motion: reduce`.

## Secrets

This is a static token theme and ships no keys. If you wire it into an app that
needs credentials, place them in a local `.env` (template them in `.env.example`)
and never commit real values.
