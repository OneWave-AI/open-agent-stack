# sand-terra — usage reference

## Plain CSS / any framework

1. Copy `theme.css` into your project.
2. Import it once at the app entry: `import "./theme.css";` (or a `<link>` tag).
3. Set the theme on a root element:

   ```html
   <html data-theme="sand-terra"> ... </html>
   ```

4. Consume tokens via custom properties:

   ```css
   .card {
     background: var(--color-surface);
     border: 1px solid var(--color-border);
     border-radius: var(--radius-container);
     box-shadow: var(--elevation-soft);
     color: var(--color-text-primary);
   }
   ```

## Tailwind

```js
// tailwind.config.js
const sandTerra = require("./tailwind.tokens.js");

module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: { extend: sandTerra },
};
```

Then use utilities directly:

```html
<div class="bg-surface text-text-primary rounded-container shadow-soft border border-border">
  <h2 class="font-display text-2xl">Heading</h2>
  <p class="text-text-muted">Body.</p>
  <button class="bg-accent text-on-accent rounded-control hover:bg-accent-strong
                 transition duration-slow ease-emphasized">
    Action
  </button>
</div>
```

## Background treatment

The signature surface is a near-black warm base with a soft terracotta mesh and a
faint film-grain overlay. Recreate it as in `preview.html`:

- `background-color: var(--color-bg-base);`
- Layered `radial-gradient` warm glows in the top-right and bottom-left.
- A fixed, `soft-light` SVG fractal-noise overlay at ~0.5 opacity for grain.

Keep the grain pointer-events none and below content z-index.

## Motion

The signature move is a slow rise-and-settle on reveal: `translateY(18px) -> 0`
with fade, over `--duration-slow` using `--ease-emphasized`. Let easing carry the
feel; avoid bouncy springs. Always honor `prefers-reduced-motion: reduce`.

## Fonts

Load Fraunces (display), Inter (body), JetBrains Mono (mono). The system falls
back to Georgia / system-ui / Menlo if web fonts are unavailable.

## Keys and secrets

This style ships no runtime config. If you wire fonts behind an API or a CDN key,
put placeholders in `.env.example` and never commit real secrets.
