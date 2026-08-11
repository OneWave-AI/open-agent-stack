# Motion Tokens

Starting values for `motion-system`. Pick the column matching the app's temperature, drop it into the theme, adjust once, then never write a raw duration in a component again.

## Durations

| Token | Calm | Crisp | Expressive | Used by |
|---|---|---|---|---|
| `--dur-fast` | 160ms | 120ms | 180ms | feedback: hover, press, focus, toggle |
| `--dur-base` | 280ms | 200ms | 340ms | enter, exit, most state changes |
| `--dur-slow` | 480ms | 360ms | 640ms | transition: view changes, modals, large surfaces |

Exits run at roughly 0.7x their entrance. Anything above `--dur-slow` is a scroll-driven or ambient effect, not an interaction, and does not belong in these tokens.

## Easings

| Token | Curve | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | Default. Entrances, anything arriving or expanding. Fast start, long settle. |
| `--ease-in-out` | `cubic-bezier(0.65, 0, 0.35, 1)` | Movement between two on-screen positions, view transitions. |
| `--ease-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Emphasis only, expressive apps only. Overshoots -- do not use on text or anything a user reads. |

Exits use `--ease-in-out` or a plain `ease-in`; a long settle on the way out reads as lag. Never use CSS default `ease` or `linear` for UI motion -- `linear` is correct only for continuous loops (spinners, marquees) and scroll-scrubbed timelines.

## CSS

```css
:root {
  --dur-fast: 160ms;
  --dur-base: 280ms;
  --dur-slow: 480ms;
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  --enter-rise: 12px;
  --stagger: 50ms;
}

@media (prefers-reduced-motion: reduce) {
  :root {
    --dur-fast: 1ms;
    --dur-base: 1ms;
    --dur-slow: 1ms;
    --enter-rise: 0px;
    --stagger: 0ms;
  }
  *, *::before, *::after {
    animation-duration: 1ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 1ms !important;
    scroll-behavior: auto !important;
  }
}
```

Zeroing the tokens at the root is what makes reduced-motion a one-line policy instead of a per-component audit. Keep opacity fades if they read better than an instant swap -- set those durations to ~1ms only if the swap is not jarring.

## Tailwind

```js
// tailwind.config.js
theme: {
  extend: {
    transitionDuration: { fast: '160ms', base: '280ms', slow: '480ms' },
    transitionTimingFunction: {
      out: 'cubic-bezier(0.16, 1, 0.3, 1)',
      'in-out': 'cubic-bezier(0.65, 0, 0.35, 1)',
      spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    },
  },
}
```

Then `duration-base ease-out` everywhere, and a temperature change is one config edit.

## Named moves

| Move | Implementation |
|---|---|
| enter | `opacity: 0 → 1`, `translateY(var(--enter-rise)) → 0`, `--dur-base`, `--ease-out` |
| exit | `opacity: 1 → 0`, no movement, `--dur-fast`, `ease-in` |
| emphasis | `scale(1 → 1.02)` on surfaces, `1 → 1.05` on icons, `--dur-fast` |
| feedback | press `scale(0.97)`, hover background/border shift, `--dur-fast` |
| transition | `--dur-slow`, `--ease-in-out`, exit resolves before enter begins |

## Stagger

50ms between items, capped at ~8 items (400ms total). Longer lists: stagger the first 8 and let the rest appear with the last one. A 40-item list staggered at 50ms takes two seconds and feels broken.

## GSAP equivalents

```js
gsap.defaults({ duration: 0.28, ease: 'power3.out' })
```

`power3.out` ≈ `--ease-out`. `power2.inOut` ≈ `--ease-in-out`. `back.out(1.7)` ≈ `--ease-spring`. Set defaults once at app init so no tween carries its own numbers.
