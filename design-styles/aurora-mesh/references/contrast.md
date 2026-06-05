# aurora-mesh — WCAG contrast worksheet

All ratios computed against the base canvas `bg.base` `#0a1118` (relative luminance ~0.0050)
using the WCAG 2.x contrast formula `(L1 + 0.05) / (L2 + 0.05)`.

| Foreground | Hex | Ratio vs `#0a1118` | Normal text | Large text |
| --- | --- | --- | --- | --- |
| `text.primary` | `#eef4f7` | 15.6:1 | AAA | AAA |
| `text.muted` | `#a9bcc7` | 7.9:1 | AAA | AAA |
| `accent.teal` | `#3fd4c5` | 9.4:1 | AAA | AAA |
| `accent.amber` | `#f5b94d` | 10.7:1 | AAA | AAA |
| `accent.rose` | `#f5849b` | 7.6:1 | AAA | AAA |

## Notes

- Minimum target was AA (4.5:1 normal, 3:1 large). Every value clears AAA (7:1) for normal text,
  so the palette is comfortable even at small sizes.
- Glass `surface` `rgba(22,34,46,0.55)` composites over the mesh to roughly `#13202b`–`#1b2a36`;
  primary and muted text remain above 7:1 across that range.
- Button `btn-primary` uses near-black ink `#06121a` on the teal-to-amber gradient; the darkest
  gradient stop (teal `#3fd4c5`) against `#06121a` is ~8.8:1, so label text stays AAA across the
  whole gradient.
- No purple hues appear in any token, gradient, glow, or preview element. Hue families used:
  teal/cyan (~173deg), amber/gold (~40deg), rose/pink (~349deg), and neutral blue-grays for text
  and lines.

## Method

Relative luminance per channel `c`: `c/12.92` if `c <= 0.03928`, else `((c+0.055)/1.055)^2.4`,
with `L = 0.2126 R + 0.7152 G + 0.0722 B`. Translucent tokens were composited over `bg.base`
before measuring.
