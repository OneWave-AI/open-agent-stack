# sand-terra

Warm editorial-organic design style on a dark base. Warm sand and terracotta over
near-black, low-to-mid contrast, soft film grain. Rounded containers with warm
diffuse shadows and hairline dividers. Serif display paired with a humanist sans.
Motion is slow and easing-led: a rise-and-settle on reveal.

No purple anywhere. All text and UI colors verified WCAG AA or better.

## Files

| File | Purpose |
| --- | --- |
| `tokens.json` | W3C design-tokens source of truth. |
| `theme.css` | Same tokens as CSS custom properties under `[data-theme="sand-terra"]`. |
| `tailwind.tokens.js` | `theme.extend` object (colors, radius, fonts, shadow, motion). |
| `preview.html` | Self-contained page rendering the style with its real background. |
| `references/usage.md` | Apply via CSS or Tailwind; background and motion recipes. |
| `references/contrast.md` | Full contrast table and verdicts. |
| `.env.example` | Placeholders for optional font CDN keys. No real secrets. |

## Preview

Open `preview.html` in any browser. No build, no network beyond Google Fonts
(falls back to system fonts offline).

## Token reference

### Color

| Token | Value | Role |
| --- | --- | --- |
| `bg.base` | `#16110d` | Page background (near-black warm brown). |
| `bg.raised` | `#1f1813` | Raised section / panel. |
| `surface` | `#2a201a` | Card / container surface. |
| `text.primary` | `#f3e7d8` | Primary text (15.4:1 on base). |
| `text.muted` | `#bda88f` | Secondary text (8.2:1 on base). |
| `accent` | `#e07a4f` | Terracotta accent (6.3:1 on base). |
| `accent-strong` | `#f0a079` | Accent hover / emphasis (8.9:1 on base). |
| `on-accent` | `#1a1008` | Foreground on accent fills (6.3:1 on accent). |
| `border` | `#3b2e24` | Container border. |
| `divider` | `#2f241c` | Hairline divider. |

### Type

| Token | Value |
| --- | --- |
| `font.display` | Fraunces, Georgia, serif |
| `font.body` | Inter, system-ui, sans-serif |
| `font.mono` | JetBrains Mono, Menlo, monospace |
| `scale` | xs `0.75` · sm `0.875` · base `1` · lg `1.25` · xl `1.625` · 2xl `2.125` · 3xl `2.875` · 4xl `3.875` rem |
| `weight` | regular `400` · medium `500` · semibold `600` · display `460` |
| `leading` | tight `1.12` · snug `1.3` · normal `1.6` |

### Space

`0 · 0.25 · 0.5 · 0.75 · 1 · 1.5 · 2 · 3 · 4 · 6` rem (steps 0 through 9).

### Radius

| Token | Value |
| --- | --- |
| `container` | `1.25rem` |
| `control` | `0.625rem` |
| `pill` | `999px` |

### Elevation

| Token | Value |
| --- | --- |
| `soft` | `0 .5rem 1.5rem -.25rem rgba(10,6,3,.45)` + faint terracotta top hairline |
| `lifted` | `0 1.25rem 3rem -.5rem rgba(8,5,2,.55)` + faint terracotta top hairline |

Warm, diffuse, low-spread shadows; the terracotta hairline keeps edges glowing
rather than crisp.

### Motion

| Token | Value |
| --- | --- |
| `duration` | fast `180ms` · base `320ms` · slow `560ms` · ambient `1200ms` |
| `easing.standard` | `cubic-bezier(0.22, 0.61, 0.36, 1)` |
| `easing.emphasized` | `cubic-bezier(0.16, 1, 0.3, 1)` |
| `easing.exit` | `cubic-bezier(0.4, 0, 0.7, 0.2)` |
| `signature` | `560ms` emphasized rise-and-settle (translateY + fade) on reveal |

## Usage

### CSS

Import `theme.css`, set `data-theme="sand-terra"` on a root element, then read
tokens through `var(--color-surface)` and friends. See `references/usage.md`.

### Tailwind

```js
const sandTerra = require("./tailwind.tokens.js");
module.exports = { theme: { extend: sandTerra } };
```

Use `bg-surface`, `text-text-primary`, `rounded-container`, `shadow-soft`,
`font-display`, `ease-emphasized`, `duration-slow`, and the rest. Full examples in
`references/usage.md`.

## Accessibility

Every text and UI color pair meets WCAG AA (most reach AAA). Decorative `border`
and `divider` are intentionally low-contrast. Full table in
`references/contrast.md`. The preview honors `prefers-reduced-motion`.
