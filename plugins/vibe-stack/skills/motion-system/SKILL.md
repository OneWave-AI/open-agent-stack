---
name: motion-system
description: Define the app's motion language before animating anything -- a small set of durations, easings, and named moves that every animation draws from, so the app feels designed instead of decorated. Use before writing the first animation in a project, or when existing motion feels scattered.
---

# Motion System

Scattered motion is the loudest AI tell there is. Every element gets its own hover transition, every duration is a different number, half the page animates on scroll and the other half does not. The fix is not less motion -- it is fewer decisions, reused everywhere.

Do this before writing any animation code. It takes ten minutes and every later animation becomes a lookup instead of a judgment call.

## Workflow

1. **Pick the temperature.** One choice that governs everything after: is this app *calm* (slower, softer easing, motion recedes -- dashboards, tools, finance), *crisp* (fast, tight, near-instant feedback -- productivity, developer tools), or *expressive* (larger movement, overshoot, motion is part of the brand -- marketing, portfolio, launch pages). Write the choice down. Mixing temperatures is what makes an app feel like three people built it.
2. **Define the tokens.** Three durations and three easings, no more. Put them where the rest of the design tokens live -- CSS custom properties or the Tailwind theme -- so no component ever writes a raw `300ms` again. Defaults per temperature are in `references/motion-tokens.md`; adjust, do not expand.
3. **Name the moves.** A short vocabulary the whole app reuses:
   - **enter** -- how new content arrives (one treatment, applied consistently: usually a small rise plus fade, 8-16px, never more)
   - **exit** -- how it leaves (faster than enter; nobody wants to wait for a goodbye)
   - **emphasis** -- how something says "look here" (scale or color shift, never both plus a rotate)
   - **feedback** -- press, hover, focus (fastest tier, under 150ms; this one must feel instant)
   - **transition** -- moving between views or states
4. **Set the reduced-motion policy now.** Decide per move what happens under `prefers-reduced-motion: reduce` -- usually: opacity survives, movement and scale do not, scrub-driven scroll effects become static. Write it as one global rule, not a per-component afterthought.
5. **Build one reference component.** Implement the moves once on a real component and use it as the pattern for everything after. Then delete any existing animation that does not draw from the system.

## Rules

- Three durations, three easings. A fourth means the system failed, not that the case is special.
- Never animate `top`, `left`, `width`, `height`, or `margin`. `transform` and `opacity` only -- everything else costs layout on the main thread. See `motion-perf`.
- Motion communicates hierarchy and causality: *why* something moved, and *where it came from*. Motion applied because a library is installed is decoration, and decoration ages badly.
- Fast in, slow out for entrances; the reverse reads as sluggish. Nothing on the interaction path exceeds 300ms.
- Stagger lists, do not animate every item independently -- 40-60ms between items, capped so a long list does not take two seconds to appear.
- The system is per-app, not universal. A trading dashboard and a launch page should not share durations.
