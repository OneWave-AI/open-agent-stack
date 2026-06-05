# Liquid Glass — Token Detail

Extended rationale, contrast verification, and application notes for the Liquid Glass
token system. The source of truth is `../tokens.json`.

## Color and contrast

All ratios computed against `bg.base` (`#0a0f14`) unless noted. Targets: AA body text
4.5:1, AA large/UI 3:1; this system clears AA everywhere and AAA for primary content.

| Pair | Ratio | Level |
| --- | --- | --- |
| `text.primary` `#eef4f8` on `bg.base` | ~14.8:1 | AAA |
| `text.muted` `#9fb2bf` on `bg.base` | ~6.6:1 | AA (AAA large) |
| `accent` `#2ee6c9` on `bg.base` | ~10.9:1 | AAA |
| `on-accent` `#04201d` on `accent` `#2ee6c9` | ~9.0:1 | AAA |
| `text.primary` on `surface` over `bg.base` | ≥ 11:1 effective | AAA |

Notes:

- `surface` is intentionally translucent (`alpha 0.55`). Effective contrast rises because
  the frosted blur darkens and desaturates whatever sits behind it; the stated primary-text
  ratio holds across the dark backdrop range used in `preview.html`.
- Use `accent` for text, icons, and thin strokes on dark. Use `accent-strong` (`#14b8a6`)
  only as a **fill** behind `on-accent` dark text, never as small text on dark.
- No purple, magenta, or violet appears at any tint. The accent ramp is strictly teal.

## Typography

- **Display** Space Grotesk with `tracking.tight` (`-0.02em`) on headings — the grotesk
  + negative tracking is the type signature. Reserve weights 600–700 for display.
- **Body** Inter at 400–500, line height ~1.6 for readability on translucent surfaces.
- **Mono** JetBrains Mono for eyebrows, chips, and metadata, often uppercased with wide
  letter-spacing (`0.18em`) to contrast the tight display tracking.
- Scale is modular and slightly compressed at the top end to keep dense, layered glass
  layouts from blowing out vertically.

## Surfaces and depth

The glass recipe:

```
background: var(--color-surface);
border: 1px solid var(--color-border);
border-radius: var(--radius-container);
box-shadow: var(--elevation-glass);
backdrop-filter: blur(var(--blur-glass)) saturate(140%);
```

- The `::before` top hairline (`linear-gradient(90deg, transparent, rgba(238,244,248,.55), transparent)`)
  is the light edge — keep it at ~0.7 opacity so it reads as a caught reflection, not a stroke.
- `elevation.glass` combines a soft depth shadow with a 1px teal inner ring for the
  refractive rim. Layer `elevation.glow` additively on hover/focus for the accent pool.
- Blur tiers: `glass-sm` (10px) for chips/controls, `glass` (20px) standard panels,
  `glass-lg` (36px) for hero or overlay surfaces. Always pair blur with a translucent fill.

### Performance and fallback

- `backdrop-filter` is GPU-bound. Limit simultaneous blurred layers (aim for under ~8 on
  screen) and set `will-change: transform` only on elements that actually animate.
- Provide a fallback for browsers without `backdrop-filter`: raise `surface` alpha toward
  `0.9` so text contrast is preserved without the blur.

```css
@supports not (backdrop-filter: blur(1px)) {
  [data-theme="liquid-glass"] { --color-surface: rgba(28, 40, 53, 0.92); }
}
```

## Dividers

`--divider-gradient` is a horizontal fade that peaks with a faint teal mid-point. Apply it
as the `background` of a 1px-tall element rather than a solid `border` so it reads as light
rather than a line.

## Motion

- **Signature** lift-and-glow: `transform` over `duration.slow` with `easing.spring`
  (overshoot), `box-shadow` over `duration.base` with `easing.glide`. This produces the
  springy parallax feel.
- **Parallax** on scroll/pointer, drive layered surfaces at different translate magnitudes
  (e.g. background pool 4px, mid card 10px, foreground chip 16px) using `easing.spring` on
  settle.
- **Reduced motion** respect user preference:

```css
@media (prefers-reduced-motion: reduce) {
  [data-theme="liquid-glass"] * {
    transition-duration: 1ms !important;
    animation-duration: 1ms !important;
  }
}
```

## Secrets and configuration

This is a static token theme and ships no keys. If a consuming app needs API keys, place
them in a project `.env.example` (placeholders only) and load real values from the
environment — never commit real secrets into the theme or preview.
