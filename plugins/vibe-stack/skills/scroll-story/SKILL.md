---
name: scroll-story
description: Build scroll-driven sections that feel authored rather than twitchy -- pinned scenes, scrubbed timelines, reveals, and parallax with the timing and cleanup that make them work on a phone. Use for landing pages, product tours, and any section where scrolling advances a narrative.
---

# Scroll Story

Scroll-driven sections are the highest-impact thing on a marketing page and the easiest to get wrong. Done well, scrolling feels like operating a machine. Done badly, elements pop in late, the pinned section fights the scrollbar, and on a phone it is a broken mess. The difference is almost entirely in the timing and the mobile pass.

## The two mechanics

**Reveal** -- an animation *triggered* by scroll position, then it plays on its own clock. Use for content arriving: headings, cards, images, stats. Cheap, robust, works everywhere.

**Scrub** -- an animation whose playhead *is* scroll position. The user scrubs it forward and backward. Use when the scroll is the interaction: a product rotating, a diagram assembling, a number counting, a phone screen advancing.

Most sections want reveal. Scrub is expensive to build and to run, so spend it on the one or two moments that carry the page.

## Workflow

1. **Storyboard in words first.** For each scene: what the user sees at 0%, at 50%, at 100% of the scroll through it, and how many viewport heights it takes. If that cannot be written in three lines, the scene is doing too much. Cap the whole page at two or three scroll-driven scenes -- past that, the page feels like a hostage situation.
2. **Reveals: use the native tool.** `IntersectionObserver` or CSS `animation-timeline: view()` handles reveals with no library and no scroll listener. Trigger when the element is ~15-20% into the viewport, animate once, then unobserve -- content that re-animates every time it scrolls back into view is a widely disliked pattern.

   ```js
   const io = new IntersectionObserver((entries) => {
     for (const e of entries) {
       if (!e.isIntersecting) continue
       e.target.dataset.revealed = 'true'   // CSS does the animating
       io.unobserve(e.target)
     }
   }, { rootMargin: '0px 0px -15% 0px' })
   ```

   Never animate a reveal from `opacity: 0` in CSS that ships before the observer runs -- if the script fails, the content is invisible forever. Gate the hidden state on a `js-enabled` class or start from the visible state and let the observer add motion.

3. **Scrub: pin, then map.** A scrubbed scene pins the container for a defined scroll distance and maps progress to a timeline. With GSAP (see `gsap-web`):

   ```js
   const tl = gsap.timeline({
     scrollTrigger: {
       trigger: sceneRef.current,
       start: 'top top',
       end: '+=200%',        // scroll distance, not a page position
       pin: true,
       scrub: 1,             // 1s smoothing -- raw scrub feels twitchy
       anticipatePin: 1,
       invalidateOnRefresh: true,
     },
   })
   tl.to('.device', { rotateY: 180 })
     .to('.caption', { opacity: 0 }, '<')
     .to('.caption-2', { opacity: 1 })
   ```

   `end: '+=200%'` means two extra viewport heights of scroll. That number *is* the pacing dial: too small and the scene flies past, too large and the user thinks the page is stuck. Start at 150-200% for a three-beat scene.

4. **Fix the layout before the animation.** Pinning inserts a spacer element, so anything with `overflow: hidden` on an ancestor, a `transform` on a parent creating a containing block, or a sticky header will misbehave. Get the section holding its own height with the animation stubbed out, then animate.
5. **Do the mobile pass, and mean it.** Test on a real phone, not a narrow desktop window -- mobile browsers resize the viewport when the URL bar hides, which retriggers ScrollTrigger's refresh and makes pinned scenes jump. Most scrub scenes should degrade to a stacked, static, or reveal-only version below the tablet breakpoint. Shipping a scrub scene that only works on desktop is fine; shipping one that is broken on mobile is not.
6. **Refresh after everything loads.** Images, web fonts, and lazy content all change page height and invalidate every start/end position. Call `ScrollTrigger.refresh()` after load and on route change.

## Rules

- Never hijack the scroll. No forced scrolling, no custom wheel handlers that fight the OS, no smooth-scroll library that adds lag to ordinary browsing. Pinning is acceptable because the scrollbar still means what it says.
- Scrub value `0.5`-`1.5`. `scrub: true` is raw and reads as jittery on trackpads.
- Parallax that exceeds ~20% differential in movement stops reading as depth and starts reading as broken.
- Under `prefers-reduced-motion: reduce`, scrub scenes become their end state, statically. Not disabled and blank -- the content must still be there and readable.
- Text is the last thing to scrub. Users read at their own pace; moving words under them is hostile.
- Keep the pinned scene's DOM small. Pinning a section containing a hundred nodes forces the compositor to re-layer all of them.
- If the page has a sticky nav, decide who wins before building. Two elements both claiming the top of the viewport is a layout bug that no amount of z-index fixes.
