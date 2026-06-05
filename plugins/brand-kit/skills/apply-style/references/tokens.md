# OneWave Token Reference

Canonical values for the OneWave design style. Warm, earth-toned, dark-first.
No purple anywhere. No emoji in any generated UI.

## Color

Emit these as CSS custom properties on `:root`.

```css
:root {
  /* Surfaces (dark-first) */
  --owai-bg: #1a1612;          /* deep warm near-black */
  --owai-surface: #241f1a;     /* raised panel */
  --owai-surface-2: #2f2920;   /* nested panel */
  --owai-border: #3a332a;      /* hairline border */

  /* Brand */
  --owai-terra: #c8643c;       /* terra cotta, primary action */
  --owai-terra-hover: #b1542f; /* darker terra cotta */
  --owai-sand: #e3cba8;        /* sand, warm accent */
  --owai-sand-soft: #f2e6d4;   /* light sand for fills */

  /* Text */
  --owai-text: #f3ece2;        /* primary on dark */
  --owai-text-muted: #b8aa97;  /* secondary on dark */
  --owai-text-invert: #1a1612; /* text on light sand fills */

  /* State */
  --owai-success: #5f8a5f;
  --owai-warning: #d49a3a;
  --owai-danger: #b1463a;
}
```

## Typography

```css
:root {
  --owai-font-sans: ui-sans-serif, system-ui, -apple-system, "Segoe UI",
    Roboto, Helvetica, Arial, sans-serif;
  --owai-font-mono: ui-monospace, SFMono-Regular, "SF Mono", Menlo,
    Consolas, monospace;

  --owai-text-xs: 0.75rem;
  --owai-text-sm: 0.875rem;
  --owai-text-base: 1rem;
  --owai-text-lg: 1.125rem;
  --owai-text-xl: 1.5rem;
  --owai-text-2xl: 2.25rem;
  --owai-text-3xl: 3.5rem;

  --owai-weight-normal: 400;
  --owai-weight-medium: 500;
  --owai-weight-bold: 700;

  --owai-leading-tight: 1.1;
  --owai-leading-normal: 1.5;
}
```

## Spacing and radius

```css
:root {
  --owai-space-1: 0.25rem;
  --owai-space-2: 0.5rem;
  --owai-space-3: 0.75rem;
  --owai-space-4: 1rem;
  --owai-space-6: 1.5rem;
  --owai-space-8: 2rem;
  --owai-space-12: 3rem;

  --owai-radius-sm: 0.375rem;
  --owai-radius-md: 0.625rem;
  --owai-radius-lg: 1rem;
  --owai-radius-full: 9999px;
}
```

## Icons

Use a line icon library (Lucide or Heroicons) for any glyph. Never substitute an
emoji for an icon in generated UI.

## Preview snippet

A minimal preview that consumes only tokens.

```html
<section style="background: var(--owai-bg); color: var(--owai-text);
  font-family: var(--owai-font-sans); padding: var(--owai-space-12);">
  <h1 style="font-size: var(--owai-text-3xl); line-height: var(--owai-leading-tight);
    margin: 0 0 var(--owai-space-4);">OneWave</h1>
  <p style="color: var(--owai-text-muted); margin: 0 0 var(--owai-space-6);">
    Warm, earth-toned, production-ready.</p>
  <div style="background: var(--owai-surface); border: 1px solid var(--owai-border);
    border-radius: var(--owai-radius-lg); padding: var(--owai-space-6);
    max-width: 28rem;">
    <button style="background: var(--owai-terra); color: var(--owai-sand-soft);
      border: none; border-radius: var(--owai-radius-md);
      padding: var(--owai-space-3) var(--owai-space-6);
      font-weight: var(--owai-weight-medium); cursor: pointer;">
      Get started
    </button>
  </div>
</section>
```
