# Tidal

Ocean depth as a dark theme. Deep ocean blues and teals fade to abyssal navy,
foam-white text rides over layered depth gradients, and sandy accents catch the
caustic light far below the surface. Mid-to-high contrast, smooth flowing
containers with soft caustic-light shadows, subtle wave-line dividers, a rounded
humanist sans, and slow fluid current-like motion.

## Files

- `tokens.json` — W3C design-tokens source of truth.
- `theme.css` — the same tokens as CSS custom properties under `[data-theme="tidal"]`.
- `tailwind.tokens.js` — a `theme.extend` object for Tailwind.
- `preview.html` — a self-contained page rendering the style.
- `references/contrast.md` — WCAG contrast checks and color rationale.

## Tokens

| Group | Token | Value | Notes |
| --- | --- | --- | --- |
| Color | `color.bg.base` | `#04141f` | Abyssal navy page base |
| Color | `color.bg.raised` | `#072636` | Deep ocean blue raised panels |
| Color | `color.surface` | `#0c3a4f` | Teal-tinted card surface |
| Color | `color.text.primary` | `#eef9fb` | Foam white, ~15.8:1 on base |
| Color | `color.text.muted` | `#9fc4d0` | Sea mist, ~7.6:1 on base |
| Color | `color.accent` | `#3fd0c9` | Caustic teal (interactive) |
| Color | `color.accent-warm` | `#e8c79a` | Sandy gold (secondary) |
| Color | `color.border` | `#16526b` | Tidal border |
| Color | `color.divider` | `#1f6480` | Wave-line stroke |
| Type | `type.font.display` | Quicksand → Nunito | Rounded humanist sans |
| Type | `type.font.body` | Nunito → Quicksand | Rounded humanist sans |
| Type | `type.font.mono` | JetBrains Mono | Code / tabular |
| Type | `type.scale.*` | `0.75rem` → `3.75rem` | xs … 4xl |
| Type | `type.weight.*` | 400 / 500 / 600 / 700 | regular … bold |
| Space | `space.0`–`space.8` | `0rem` → `4rem` | Step scale |
| Radius | `radius.container` | `1.5rem` | Flowing containers |
| Radius | `radius.control` | `0.875rem` | Buttons / inputs |
| Radius | `radius.pill` | `9999px` | Pills |
| Elevation | `elevation.caustic-sm` | `0 .25rem .75rem #02101a` | Soft caustic shadow |
| Elevation | `elevation.caustic-md` | `0 .75rem 1.75rem -.25rem #010a12` | Deeper caustic shadow |
| Elevation | `elevation.caustic-glow` | `0 0 1.5rem #3fd0c933` | Teal focus/accent glow |
| Blur | `blur.glass` | `14px` | Glass backdrop blur |
| Motion | `motion.duration.fast/base/slow/current` | `240/480/900/6000ms` | Current is the ambient drift |
| Motion | `motion.easing.current` | `cubic-bezier(.37,0,.16,1)` | Fluid current ease |
| Motion | `motion.signature` | `drift 6000ms … infinite alternate` | Slow current sway |

See `references/contrast.md` for full contrast ratios. No purple appears anywhere
in this system; all text pairings meet or exceed WCAG AA.

## Usage

### CSS custom properties

Link the stylesheet and set the theme attribute on a root element:

```html
<link rel="stylesheet" href="theme.css" />
<body data-theme="tidal">
  <button style="
    background: var(--tidal-accent);
    color: var(--tidal-bg-base);
    border-radius: var(--tidal-radius-control);
    box-shadow: var(--tidal-elevation-caustic-glow);
  ">Dive in</button>
</body>
```

Recommended page background:

```css
[data-theme="tidal"] body {
  color: var(--tidal-text-primary);
  background-color: var(--tidal-bg-base);
  background-image: var(--tidal-gradient-caustic), var(--tidal-gradient-depth);
  background-attachment: fixed;
}
```

### Tailwind

```js
// tailwind.config.js
const tidal = require("./tailwind.tokens.js");

module.exports = {
  content: ["./**/*.{html,js,jsx,ts,tsx}"],
  theme: { extend: { ...tidal } },
};
```

Then use the namespaced utilities:

```html
<div class="bg-tidal-surface text-tidal-text-primary rounded-tidal-container
            shadow-tidal-caustic-md font-tidal-body">
  <h2 class="font-tidal-display text-tidal-text-primary">Surface</h2>
  <button class="bg-tidal-accent text-tidal-bg-base rounded-tidal-control
                 shadow-tidal-caustic-glow">Dive in</button>
</div>
```

### Motion

Use the signature drift for ambient background elements (light pools, gradients),
the `current` easing for hover/transition state changes, and `swell` for entrances.
All motion respects `prefers-reduced-motion: reduce`, which disables the drift.

## Fonts

Load Quicksand, Nunito, and JetBrains Mono (Google Fonts). System rounded sans
fall back gracefully if the web fonts are unavailable.
