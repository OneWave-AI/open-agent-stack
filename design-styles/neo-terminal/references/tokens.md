# neo-terminal — full token reference

Source of truth is `../tokens.json` (W3C design-tokens format). CSS mirrors live
in `../theme.css` as `--nt-*` custom properties; Tailwind mirrors in
`../tailwind.tokens.js`. This file documents every token and its intent.

## Color

| Token | Hex | CSS var | Tailwind | Contrast vs base |
| --- | --- | --- | --- | --- |
| `color.bg.base` | `#05080a` | `--nt-color-bg-base` | `nt-bg-base` | — |
| `color.bg.raised` | `#0a1014` | `--nt-color-bg-raised` | `nt-bg-raised` | — |
| `color.surface` | `#0e161b` | `--nt-color-surface` | `nt-surface` | — |
| `color.text.primary` | `#d6f5e3` | `--nt-color-text-primary` | `nt-text` | 14.8:1 |
| `color.text.muted` | `#7fa394` | `--nt-color-text-muted` | `nt-text-muted` | 6.1:1 |
| `color.accent` | `#39ff8b` | `--nt-color-accent` | `nt-accent` | 13.6:1 |
| `accent.alt` | `#ffb627` | `--nt-color-accent-alt` | `nt-accent-alt` | 11.1:1 |
| `accent.danger` | `#ff5c5c` | `--nt-color-accent-danger` | `nt-danger` | 6.4:1 |
| `color.border` | `#1d3a2f` | `--nt-color-border` | `nt-border` | structural |
| `color.divider` | `#16302a` | `--nt-color-divider` | `nt-divider` | structural |

All foreground colors clear WCAG AA (4.5:1) on `bg.base`; primary text, accents,
and amber clear AAA (7:1). No hue in the system falls in the purple/magenta range.

## Type

Monospace throughout — display, body, and code share the JetBrains Mono stack
(`IBM Plex Mono` / `ui-monospace` / `monospace` fallbacks). Headings differ from
body by weight (700) and wide tracking, not family.

### Scale

| Step | Value |
| --- | --- |
| `xs` | 0.75rem |
| `sm` | 0.875rem |
| `base` | 1rem |
| `lg` | 1.25rem |
| `xl` | 1.625rem |
| `2xl` | 2.125rem |
| `3xl` | 2.875rem |

### Weight / tracking / leading

| Token | Value |
| --- | --- |
| `weight.regular` | 400 |
| `weight.medium` | 500 |
| `weight.bold` | 700 |
| `tracking.tight` | -0.01em |
| `tracking.normal` | 0em |
| `tracking.wide` | 0.08em |
| `tracking.caps` | 0.18em |
| `leading.tight` | 1.15 |
| `leading.normal` | 1.55 |

Use `tracking.caps` for uppercase labels and eyebrows; `tracking.wide` for
buttons and chips.

## Space scale

`0`–`8`: 0, 0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4 rem. A near-linear-to-modular ramp
that keeps panels dense without crowding.

## Radius

| Token | Value | Use |
| --- | --- | --- |
| `radius.container` | 2px | Panels, cards, console blocks. |
| `radius.control` | 1px | Buttons, inputs, chips. |

Edges stay near-square so containers read as terminal frames.

## Elevation (glow-based)

Terminal panels do not float on soft drop shadows. They lift with a hairline ring
plus a phosphor glow on focus.

| Token | Value | Use |
| --- | --- | --- |
| `elevation.flat` | none | Inline / flush elements. |
| `elevation.panel` | `0 1px 0 rgba(0,0,0,.55), 0 0 0 1px rgba(57,255,139,.06)` | Resting panel. |
| `elevation.glow` | `0 0 18px rgba(57,255,139,.35)` | Active/focused green. |
| `elevation.glow-amber` | `0 0 16px rgba(255,182,39,.32)` | Active/focused amber. |

## Background treatments

| Layer | Recipe |
| --- | --- |
| Dot-grid | `radial-gradient(rgba(57,255,139,.10) 1px, transparent 1px)` at `22px 22px`. |
| Scanline | `repeating-linear-gradient(to bottom, rgba(57,255,139,.035) 0 1px, transparent 1px 3px)`. |

Stack scanline over dot-grid on the page background. Keep opacities low so text
contrast is never compromised.

Dividers use `1px dashed` or `1px dotted` in `color.divider`.

## Motion

| Token | Value | Use |
| --- | --- | --- |
| `duration.instant` | 80ms | Press feedback. |
| `duration.fast` | 160ms | Color/opacity transitions. |
| `duration.base` | 240ms | Glow pulse. |
| `duration.slow` | 420ms | Panel enter. |
| `duration.type` | 2200ms | Typewriter line reveal. |
| `duration.blink` | 1000ms | Cursor blink cycle. |
| `easing.standard` | `cubic-bezier(0.2,0,0.2,1)` | General transitions. |
| `easing.step` | `steps(24, end)` | Typewriter character stepping. |
| `easing.blink-step` | `steps(2, jump-none)` | Hard on/off cursor. |

### Signature

1. Typewriter line reveal — animate `max-width` from 0 with `easing.step`.
2. Block cursor blink — `steps(2, jump-none)` over `duration.blink`, infinite.
3. Glow pulse — transition `box-shadow` into `elevation.glow` on hover/focus.

Respect `prefers-reduced-motion: reduce`: freeze typing at full width and stop
the cursor blink (handled in `theme.css` and `preview.html`).
