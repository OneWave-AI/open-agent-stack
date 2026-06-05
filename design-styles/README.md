# Design Styles

Seven universal design-token themes, each a genuinely distinct visual system — not light/dark variants of one look. Every style defines its own mix of **color, contrast, container treatment, background, dividers, type, and motion**, tuned for a 2026, AI-native feel.

Each style ships a token set (W3C design-tokens JSON), a live theme preview, and exports (Tailwind config + CSS variables) so it drops into any stack.

> Scaffolding — specs below; token sets being filled in.
> House rules: **no purple**, accessible contrast (WCAG AA+), motion that respects `prefers-reduced-motion`.

## Every style is defined across these dimensions

`color palette` · `contrast level` · `surface / container style (radius, border, shadow, blur)` · `background treatment` · `divider style` · `typography` · `motion signature`

## The five styles

### 1. `sand-terra` — warm editorial-organic
Signature OneWave. Warm sand and terracotta on near-black, low-to-mid contrast, soft film grain. Rounded containers with warm diffuse shadows, hairline dividers. Serif display + humanist sans. Slow, easing-led motion.

### 2. `liquid-glass` — translucent depth
Frosted, refractive glass surfaces over a deep slate base. High-vibrancy single accent, mid contrast. Containers are blurred translucent panels with light edges and glow; dividers are soft light gradients. Tight grotesk type. Springy, parallax motion. (2026 Liquid Glass lineage — no purple.)

### 3. `mono-brutalist` — stark monochrome
Pure black/white, maximum contrast, zero grain. Hard rectangular containers, no radius, thick solid borders and rule dividers. Oversized condensed type, exposed grid. Instant, no-easing state changes. Loud and structural.

### 4. `aurora-mesh` — soft futuristic
Animated gradient-mesh backgrounds in teal, amber, and rose (no purple). Low contrast, glassy low-opacity cards, blurred orbs behind content. Dividers fade as gradients. Rounded geometric sans. Ambient drifting motion.

### 5. `neo-terminal` — AI-console / cyber
Near-black with phosphor green and amber mono accents. High contrast, subtle dot-grid and scanline texture backgrounds. Containers are bordered "panels" with corner ticks; dotted/dashed dividers. Monospace throughout. Typewriter and cursor-blink motion. Native to an AI tool.

### 6. `tidal` — ocean depth
Deep ocean blues and teals fading to abyssal navy, with foam-white text and sandy accents. Mid-to-high contrast, layered depth gradients suggesting water column. Containers are smooth flowing panels with soft caustic-light shadows; dividers are subtle wave lines. Rounded humanist sans. Slow, fluid, current-like motion.

### 7. `cirrus` — cloud / sky
Soft whites and pale sky blues, very light contrast, airy and weightless. Containers are barely-there frosted cards with large soft shadows and generous radius; dividers fade to nothing. Light geometric sans with lots of breathing room. Gentle drifting, floating motion. Calm and spacious.

## Token shape (every style)

```
color:    bg.base / bg.raised / surface / text.primary / text.muted / accent / border / divider
type:     font.display / font.body / font.mono / scale / weight
space:    scale + container padding
radius:   container / control
elevation:shadow tokens (or blur tokens for glass)
motion:   duration / easing / signature
```

Same token keys across all five, so swapping a style is a one-line theme change.
