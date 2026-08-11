---
name: motion-perf
description: Find and fix animation jank -- the layout thrash, paint storms, and layer explosions that make motion stutter on real devices even when it is smooth on your laptop. Use when animations feel choppy, scroll stutters, or before shipping any animation-heavy page.
---

# Motion Perf

Animation runs at 60fps on your machine and stutters on the client's phone. The cause is almost always one of four things, and a profiler finds it in five minutes -- far faster than the usual approach of removing animations one at a time until it improves.

The budget: 16.7ms per frame at 60Hz, and modern phones often target 120Hz, which halves it. Anything the main thread does during an animation eats into that.

## The four causes

**1. Animating layout properties.** `width`, `height`, `top`, `left`, `margin`, `padding` force the browser to recompute geometry every frame -- for the element and often its siblings. This is the single most common cause. `transform` and `opacity` are the only two properties the compositor can animate without touching layout or paint. Almost every layout animation has a transform equivalent: `left` → `translateX`, `width` → `scaleX` (with a counter-scale on children if needed), `height: auto` → `grid-template-rows: 0fr/1fr`.

**2. Layout thrash in a loop.** Reading a layout value (`offsetTop`, `getBoundingClientRect`, `scrollHeight`, `getComputedStyle`) after writing a style forces a synchronous reflow. In a scroll handler or rAF loop, that is a forced reflow per frame. Fix by batching: read all measurements first, then write all styles.

**3. Too many layers.** `will-change: transform` and `translateZ(0)` promote an element to its own compositor layer. That is a real speedup for a few animating elements and a memory disaster for fifty -- especially on mobile, where layer memory is what causes the tab to reload. Apply `will-change` just before an animation and remove it after, or leave it off entirely and let the browser decide.

**4. Main-thread work during animation.** A heavy React re-render, an unthrottled scroll or resize listener, an expensive filter, or a large image decode landing mid-animation blows the frame budget regardless of how clean the animation itself is.

## Workflow

1. **Reproduce on a real device or throttle honestly.** Chrome DevTools Performance panel with 4x-6x CPU throttling, or a mid-range Android. A desktop with a discrete GPU will tell you everything is fine.
2. **Record the interaction.** Perform the janky scroll or transition while recording. Read the frames row: long frames are the jank, and the flame chart under them names the cause.
3. **Classify what you see.**
   - Purple "Layout" bars in every frame → cause 1 or 2. Find the property or the read-after-write.
   - Green "Paint" / "Rasterize" dominating → large repaints; check for animated `box-shadow`, `filter`, `background-position`, or a huge element being repainted.
   - Yellow "Scripting" dominating → cause 4. Find the handler or the re-render.
   - Frames fine but memory climbing / mobile tab reloading → cause 3. Count promoted layers in the Layers panel.
4. **Fix the top cause only, then re-measure.** Changing four things at once teaches nothing about which mattered, and usually two of them were unnecessary.
5. **Verify the whole page, not the fixed component.** Scroll the full page, open and close the modals, resize once. Confirm no listener leaks: navigate away and back twice, then check that scroll and resize listener counts and `ScrollTrigger.getAll().length` are flat.

## Rules

- `transform` and `opacity` for anything animating continuously. Everything else needs a reason.
- Throttle scroll and resize handlers to `requestAnimationFrame`, or replace them with `IntersectionObserver` / `ResizeObserver`, which do not run on every event.
- Never animate `box-shadow` or `filter: blur()` -- both repaint large areas. For a shadow, animate the `opacity` of a pseudo-element carrying the larger shadow. For blur, animate opacity between two pre-blurred layers.
- Images inside animating containers get explicit dimensions and, above the fold, priority loading. A late-decoding image is a layout shift mid-animation.
- Off the main thread where possible: CSS transitions/animations and WAAPI can run on the compositor; a JS rAF loop cannot.
- Reduced motion is a performance feature too -- it is the fallback for low-power devices, not only a preference.
- Measure the cost of the animation library itself. If a page uses one fade and imports a full animation library to do it, the bundle is the performance problem.
