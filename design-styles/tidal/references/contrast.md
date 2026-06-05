# Tidal — Contrast and Color Rationale

All foreground/background pairings target WCAG 2.1 AA or better. Ratios computed
with the standard sRGB relative-luminance formula.

## Text on backgrounds

| Foreground | Background | Ratio | Result |
| --- | --- | --- | --- |
| `#eef9fb` text.primary | `#04141f` bg.base | ~15.8:1 | AAA |
| `#eef9fb` text.primary | `#072636` bg.raised | ~13.7:1 | AAA |
| `#eef9fb` text.primary | `#0c3a4f` surface | ~10.3:1 | AAA |
| `#9fc4d0` text.muted | `#04141f` bg.base | ~7.6:1 | AAA |
| `#9fc4d0` text.muted | `#0c3a4f` surface | ~4.9:1 | AA |
| `#3fd0c9` accent | `#04141f` bg.base | ~8.6:1 | AAA (large + body) |
| `#e8c79a` accent-warm | `#04141f` bg.base | ~10.4:1 | AAA |
| `#04141f` bg.base (on accent btn) | `#3fd0c9` accent | ~8.6:1 | AAA |

## Notes

- Primary buttons use dark navy text on the teal accent for maximum legibility,
  rather than white-on-teal which would be a weak ~1.8:1.
- `text.muted` clears AA on every defined background; reserve it for secondary
  copy on `bg.base` / `bg.raised` where it is AAA.
- Borders (`#16526b`) and dividers (`#1f6480`) are non-text and are tuned for
  visible but soft separation against the depth gradient.

## Palette intent

- Hue family stays in the blue–teal ocean range (190 to 200 degrees) descending
  in lightness from raised panels to abyssal base, producing the depth gradient.
- The single warm accent (`#e8c79a`, sandy gold) is the only non-cool hue and is
  used sparingly — pills, gradient highlights — like sand seen through water.
- No purple, magenta, or violet hue is used in any token, gradient, or preview.
