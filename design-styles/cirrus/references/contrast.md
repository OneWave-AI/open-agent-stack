# Cirrus — Contrast Verification

All text pairings meet or exceed WCAG AA (4.5:1 for normal text, 3:1 for large
text and UI). Ratios computed against the relevant background.

| Foreground | Background | Ratio | Use | Result |
| --- | --- | --- | --- | --- |
| `#1c2b3a` text.primary | `#eef4fb` bg.base | 12.4:1 | body text | AAA |
| `#1c2b3a` text.primary | `#fbfdff` surface | 13.6:1 | text on cards | AAA |
| `#4a5f73` text.muted | `#eef4fb` bg.base | 6.1:1 | secondary text | AA |
| `#4a5f73` text.muted | `#fbfdff` surface | 6.7:1 | secondary on cards | AA |
| `#1d6fb8` accent | `#fbfdff` surface | 4.9:1 | links / ghost button text | AA |
| `#1d6fb8` accent | `#eef4fb` bg.base | 4.5:1 | links on page bg | AA |
| `#ffffff` accent-contrast | `#1d6fb8` accent | 5.0:1 | text on primary button | AA |

## Notes

- Frosted surfaces in the preview use a translucent fill over a near-white
  sky wash, so effective text contrast is at or above the opaque-surface
  figures above.
- `border` (`#d4e2f0`) and `divider` (`#e3edf7`) are decorative hairlines, not
  text, so the 3:1 non-text rule is intentionally relaxed for them to keep the
  "barely-there" look. Dividers are rendered as a fade-to-transparent gradient.
- No purple hues appear in any token: the accent and all neutrals sit on the
  blue/slate side of the wheel (hue ~205-215 degrees).
