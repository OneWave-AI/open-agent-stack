# Liquid Glass

Translucent depth on a dark base. Frosted refractive glass surfaces sit over deep slate,
lit by one high-vibrancy teal accent. Mid contrast, light edges and glow, soft
light-gradient dividers, tight grotesk type, and springy parallax motion.

## Style Intent

- **Base** — deep slate (`#0a0f14`), layered light-pools behind the glass for refraction.
- **Surfaces** — translucent frosted containers (`backdrop-filter: blur`) with light edges and a subtle glow ring.
- **Accent** — a single vibrant teal (`#2ee6c9`) for focus, active states, and hover glow. No purple anywhere.
- **Type** — tight grotesk display (Space Grotesk) over Inter body, JetBrains Mono for labels.
- **Motion** — springy parallax: surfaces lift and gain glow with a spring overshoot.

## Token Table

| Group | Token | Value | Notes |
| --- | --- | --- | --- |
| Color | `bg.base` | `#0a0f14` | Deepest slate canvas |
| Color | `bg.raised` | `#111922` | Lifted base for stacked sections |
| Color | `surface` | `rgba(28,40,53,0.55)` | Frosted glass fill (pair with blur) |
| Color | `text.primary` | `#eef4f8` | 14.8:1 on `bg.base` (AAA) |
| Color | `text.muted` | `#9fb2bf` | 6.6:1 on `bg.base` (AA) |
| Color | `accent` | `#2ee6c9` | 10.9:1 on `bg.base` (AAA) |
| Color | `accent-strong` | `#14b8a6` | Deeper teal for fills behind dark text |
| Color | `on-accent` | `#04201d` | Dark text on accent fills, AAA on accent |
| Color | `border` | `rgba(190,224,240,0.18)` | Light refractive edge |
| Color | `divider` | `rgba(190,224,240,0.12)` | Soft light-gradient divider base |
| Type | `font.display` | Space Grotesk | Tight grotesk headings |
| Type | `font.body` | Inter | Body and UI |
| Type | `font.mono` | JetBrains Mono | Labels, code, chips |
| Type | `scale` | `0.75rem` → `3.5rem` | xs, sm, base, lg, xl, 2xl, 3xl |
| Type | `weight` | 400 / 500 / 600 / 700 | regular → bold |
| Space | `space` | `0` → `6rem` | 0,1,2,3,4,6,8,12,16,24 steps |
| Radius | `control` | `0.625rem` | Buttons, inputs, chips |
| Radius | `container` | `1.25rem` | Glass cards and panels |
| Blur | `glass` | `20px` | Standard frosted backdrop (sm `10px`, lg `36px`) |
| Elevation | `glass` | depth + edge ring | `0 12px 40px -8px rgba(0,0,0,.45)` plus teal inner ring |
| Elevation | `glow` | teal glow | `0 0 28px rgba(46,230,201,.35)` for interactive states |
| Motion | `duration` | `160 / 280 / 520ms` | fast / base / slow |
| Motion | `easing.spring` | `cubic-bezier(0.34,1.56,0.64,1)` | Springy overshoot |
| Motion | `easing.glide` | `cubic-bezier(0.22,1,0.36,1)` | Smooth deceleration |

All contrast ratios meet WCAG AA or better. Full per-token detail and rationale live in
[`references/tokens-detail.md`](references/tokens-detail.md).

## Usage

### Plain CSS

```html
<html data-theme="liquid-glass">
  <link rel="stylesheet" href="theme.css" />
</html>
```

Then reference variables, e.g.:

```css
.panel {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-container);
  box-shadow: var(--elevation-glass);
  backdrop-filter: blur(var(--blur-glass)) saturate(140%);
  transition: var(--motion-signature);
}
.panel:hover {
  transform: translateY(-6px);
  box-shadow: var(--elevation-glass), var(--elevation-glow);
}
```

### Tailwind

```js
// tailwind.config.js
const liquidGlass = require("./tailwind.tokens.js");
module.exports = {
  content: ["./**/*.{html,js,jsx,ts,tsx}"],
  theme: { extend: liquidGlass },
};
```

```html
<div class="bg-surface border border-border rounded-container shadow-glass
            backdrop-blur-glass text-text-primary transition duration-slow ease-spring
            hover:-translate-y-1.5 hover:shadow-glow">
  Frosted glass panel
</div>
```

### Tokens source of truth

`tokens.json` is W3C Design Tokens format. `theme.css` and `tailwind.tokens.js` are derived
mirrors of it — change a value in `tokens.json`, then propagate to both.

## Preview

Open `preview.html` in a browser to see the background treatment, glass cards, a
light-gradient divider, buttons, chips, and body type rendered with the real tokens.

## Files

- `tokens.json` — W3C design tokens (source of truth)
- `theme.css` — tokens as CSS custom properties under `[data-theme="liquid-glass"]`
- `tailwind.tokens.js` — `theme.extend` object
- `preview.html` — self-contained rendered preview
- `references/tokens-detail.md` — extended token rationale and contrast notes
