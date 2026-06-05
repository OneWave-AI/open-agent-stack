# sand-terra — contrast verification

All ratios computed with the WCAG 2.x relative-luminance formula. AA requires
4.5:1 for normal text and 3:1 for large text and UI components; AAA requires 7:1.

| Foreground | Background | Ratio | Verdict |
| --- | --- | --- | --- |
| text.primary `#f3e7d8` | bg.base `#16110d` | 15.39:1 | AAA |
| text.primary `#f3e7d8` | bg.raised `#1f1813` | 14.38:1 | AAA |
| text.primary `#f3e7d8` | surface `#2a201a` | 13.06:1 | AAA |
| text.muted `#bda88f` | bg.base `#16110d` | 8.18:1 | AAA |
| text.muted `#bda88f` | surface `#2a201a` | 6.94:1 | AA (near AAA) |
| accent `#e07a4f` | bg.base `#16110d` | 6.31:1 | AA |
| accent `#e07a4f` | surface `#2a201a` | 5.35:1 | AA |
| accent-strong `#f0a079` | bg.base `#16110d` | 8.94:1 | AAA |
| on-accent `#1a1008` | accent `#e07a4f` | 6.30:1 | AA |

## Notes

- Use `accent-strong` rather than `accent` for any small accent text on `surface`
  if you want an AAA margin.
- `border` and `divider` are intentionally low-contrast (decorative, non-text),
  so they are exempt from the 4.5:1 text requirement; they exceed the 3:1
  guidance only where they act as the visible boundary of an interactive control,
  in which case pair the control with `accent` on focus.
- No color in the system is purple or contains a blue-violet hue; the palette
  runs strictly warm (red-orange through warm neutral).
