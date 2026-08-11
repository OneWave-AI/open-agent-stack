---
name: gsap-web
description: GSAP in a React or Next.js app without the leaks -- timelines over stacked tweens, useGSAP and context for cleanup, ScrollTrigger set up so it survives route changes and layout shifts. Use when building GSAP animations in a component-based app.
---

# GSAP for Web Apps

GSAP is straightforward until it meets React. Then every animation that worked in a CodePen starts double-firing in Strict Mode, surviving unmount, and pointing at stale DOM after a route change. The library is not the problem -- lifecycle is. These are the patterns that hold up.

## Setup

Install `gsap` and `@gsap/react`. Register plugins once, at module scope in a client component, never inside render:

```js
'use client'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)
gsap.defaults({ duration: 0.28, ease: 'power3.out' })  // from motion-system
```

In Next.js App Router, anything touching GSAP is a client component. GSAP reads the DOM, so it cannot run during SSR -- a `window is not defined` build error means the import climbed into a server component.

## Workflow

1. **Scope everything.** `useGSAP` with a container ref. It reverts every animation created inside on unmount and handles Strict Mode's double-invoke, which is the source of nearly every "it fires twice" report.

   ```js
   const container = useRef(null)
   useGSAP(() => {
     gsap.from('.card', { y: 24, opacity: 0, stagger: 0.05 })
   }, { scope: container })
   ```

   Selector strings inside the callback resolve within the scope, so `.card` cannot reach into another component's markup.

2. **Timelines, not stacked tweens.** Three sequenced tweens with hand-computed delays become unmaintainable the moment one duration changes. One timeline with the position parameter stays readable:

   ```js
   const tl = gsap.timeline()
   tl.from('.title', { y: 30, opacity: 0 })
     .from('.sub',   { y: 20, opacity: 0 }, '-=0.15')   // overlap
     .from('.cta',   { scale: 0.96, opacity: 0 }, '<')  // with previous
   ```

   Use labels (`tl.addLabel('reveal')`) once a timeline passes about five steps.

3. **`from` vs `fromTo`.** `from` animates *to the element's current CSS*, which is fragile when other code or a re-render changes that state -- an interrupted `from` can leave the element stuck at its start values. For anything that can be interrupted or replayed, use `fromTo` and state both ends explicitly. Add `immediateRender: false` when a `from` inside a timeline flashes its end state on load.

4. **ScrollTrigger, carefully.** Attach the trigger to the animation, not the other way around, and let `useGSAP` clean it up:

   ```js
   gsap.to('.panel', {
     y: -80,
     scrollTrigger: {
       trigger: '.panel',
       start: 'top 80%',
       end: 'bottom 20%',
       scrub: 1,          // number = smoothing lag in seconds
       // markers: true,  // dev only -- never commit this
     },
   })
   ```

   After images, fonts, or async content land, call `ScrollTrigger.refresh()` -- stale start/end positions are the number-one ScrollTrigger bug. In Next.js, refresh on route change too.

5. **Verify the teardown.** Navigate away and back twice. Animations should not stack, ScrollTriggers should not multiply (`ScrollTrigger.getAll().length` stays flat), and nothing should throw about a null element. If any of those fail, something was created outside `useGSAP`'s scope.

## Rules

- Animate `x`/`y`/`scale`/`rotation`/`opacity`. GSAP's `x`/`y` compile to `transform` -- animating `top`/`left` instead costs layout on every frame.
- Never animate in a `useEffect` without cleanup. `useGSAP` exists precisely so you do not have to remember `ctx.revert()`.
- Set `will-change` through GSAP's own `force3D` behavior or not at all; a permanent `will-change: transform` on many elements is a memory cost, not a speedup.
- Kill `markers: true` before committing. It ships to production more often than you would think.
- Respect reduced motion at the source with `gsap.matchMedia()`, so the reduced branch is a real alternative timeline rather than a disabled one:

  ```js
  const mm = gsap.matchMedia()
  mm.add('(prefers-reduced-motion: no-preference)', () => { /* full timeline */ })
  mm.add('(prefers-reduced-motion: reduce)',        () => { /* fades only  */ })
  ```

- Do not reach for GSAP when CSS suffices. A hover state, a fade-in, a spinner -- those are transitions and keyframes. GSAP earns its bundle on sequenced timelines, scroll scrubbing, and anything needing runtime control.
- GSAP's ScrollSmoother, SplitText, and other formerly-paid plugins are free as of GSAP 3.13, but every plugin is bundle weight -- add one only when the effect is core to the page.
