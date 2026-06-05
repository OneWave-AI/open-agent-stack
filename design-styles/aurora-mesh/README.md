# aurora-mesh

Soft futuristic dark theme. Animated gradient-mesh backgrounds in teal, amber, and rose drift
slowly behind glassy, low-opacity cards. Low contrast, blurred orbs, gradient-fade dividers,
rounded geometric sans, and ambient motion that never fully settles. No purple anywhere.
Text and accent colors are verified WCAG AA+ on the deep base canvas.

## Files

- `tokens.json` — W3C design-tokens source of truth (color, type, space, radius, blur, elevation, motion).
- `theme.css` — the same tokens as CSS custom properties under `[data-theme="aurora-mesh"]`.
- `tailwind.tokens.js` — a `theme.extend` object for Tailwind.
- `preview.html` — a self-contained page showing the real mesh + glass treatment.
- `references/contrast.md` — full WCAG contrast worksheet.

## Tokens

| Group | Token | Value | Notes |
| --- | --- | --- | --- |
| Color | `bg.base` | `#0a1118` | Deep dark canvas |
| Color | `bg.raised` | `#101a24` | Raised dark panel |
| Color | `surface` | `rgba(22,34,46,0.55)` | Glass card fill (with blur) |
| Color | `text.primary` | `#eef4f7` | 15.6:1 on base |
| Color | `text.muted` | `#a9bcc7` | 7.9:1 on base (AAA) |
| Color | `accent.teal` | `#3fd4c5` | 9.4:1 on base |
| Color | `accent.amber` | `#f5b94d` | 10.7:1 on base |
| Color | `accent.rose` | `#f5849b` | 7.6:1 on base |
| Color | `border` | `rgba(143,178,196,0.18)` | Hairline glass border |
| Color | `divider` | `rgba(143,178,196,0.28)` | Base for gradient-fade dividers |
| Type | `font.display` | Space Grotesk → Outfit | Rounded geometric sans |
| Type | `font.body` | Outfit → system-ui | Rounded geometric sans |
| Type | `font.mono` | JetBrains Mono | Labels, code |
| Type | `scale` | `0.75 → 3.5rem` | xs, sm, base, lg, xl, 2xl, 3xl |
| Type | `weight` | `400 / 500 / 600 / 700` | regular → bold |
| Space | `space` | `0 → 4rem` | 0,1,2,3,4,5,6,7,8 ramp |
| Radius | `container` | `1.5rem` | Cards, panels |
| Radius | `control` | `0.75rem` | Buttons, inputs |
| Radius | `pill` | `9999px` | Dots, pills |
| Blur | `glass` | `18px` | Backdrop blur on surfaces |
| Blur | `orb` | `90px` | Heavy blur on ambient orbs |
| Elevation | `card` | `0 18px 48px -12px rgba(4,10,16,0.45)` | Soft diffuse drop |
| Elevation | `glow` | `0 0 32px rgba(63,212,197,0.30)` | Teal accent glow |
| Motion | `duration` | `180 / 320 / 640 / 24000ms` | fast, base, slow, drift |
| Motion | `easing.soft` | `cubic-bezier(0.33,1,0.68,1)` | Gentle ease-out |
| Motion | `easing.drift` | `cubic-bezier(0.45,0,0.55,1)` | Looping ambient ease |
| Motion | `signature` | drifting mesh, 24s alternate loop | Slow moving gradient light |

## Usage

### Plain CSS

Link the stylesheet and set the theme attribute on a root element.

```html
<html data-theme="aurora-mesh">
  <head><link rel="stylesheet" href="theme.css" /></head>
  <body style="background: var(--color-bg-base); color: var(--color-text-primary);">
    ...
  </body>
</html>
```

Reproduce the signature background with a fixed, blurred, multi-radial layer animated on the
`drift` duration/easing (see `preview.html` for the exact `.mesh` rules). Respect
`prefers-reduced-motion` by disabling the drift animation.

### Tailwind

```js
// tailwind.config.js
const auroraMesh = require("./tailwind.tokens.js");
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: { extend: auroraMesh },
};
```

Then use the generated utilities, e.g. `bg-bg-base text-text-primary`, `rounded-container`,
`backdrop-blur-glass`, `shadow-card`, `font-display`, `text-accent-teal`,
`duration-drift ease-drift`.

### Fonts and secrets

Load Space Grotesk, Outfit, and JetBrains Mono (Google Fonts links are in `preview.html`).
This is a static token theme and requires no secrets; if a consuming app needs keys, store
them in a local `.env` from a committed `.env.example` — never commit real values.

## Accessibility

All text and accent colors meet or exceed WCAG AA for their use. Decorative mesh and orbs are
`aria-hidden`, sit behind a `z-index` layer, and stop animating under
`prefers-reduced-motion: reduce`. See `references/contrast.md` for the full worksheet.
