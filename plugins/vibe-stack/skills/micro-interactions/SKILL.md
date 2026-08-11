---
name: micro-interactions
description: The small motion that makes an app feel built rather than generated -- hover, press, focus, toggles, loading, and state changes done as a consistent system in plain CSS. Use when UI feels static or lifeless, or when hover effects are scattered and inconsistent.
---

# Micro-Interactions

Big animations impress once. Micro-interactions are what make an app feel expensive on the hundredth use: the button that acknowledges a press, the toggle that moves like an object, the row that tells you it is clickable before you click it. This is also where scattered, per-element effects do the most damage -- ten different hover treatments read as ten different authors.

Draw every value from the motion system (`--dur-fast`, `--ease-out`); this skill is about *which* interactions get motion and what they do.

## The interaction set

**Hover** -- available on the element, not a new element appearing. Background, border, or foreground shift; at most a 1-2px lift or `scale(1.02)`. Never reveal essential information only on hover: it does not exist on touch. Guard hover styles with `@media (hover: hover)` so mobile does not get sticky hover states after a tap.

**Press** -- the most underrated one. `scale(0.97)` on `:active`, at `--dur-fast`. It costs one line and is the difference between a div and a button.

**Focus** -- designed, never default. A visible ring using the brand's accent, on `:focus-visible` so it appears for keyboard users and not on mouse click. Removing focus outlines without replacing them is an accessibility failure, not a style choice.

**Loading** -- state-appropriate. Under ~300ms show nothing (a flashed spinner is worse than a pause). Up to a few seconds, a spinner or an inline button state. Longer, and for content-shaped waits, use a skeleton that matches the real layout. A skeleton whose shape does not match what loads causes a layout jump, which is worse than a spinner.

**Success / error** -- the result must be felt, not just rendered. A brief color shift, a checkmark that draws, an error that shakes once (one cycle, 300ms, never a loop). Errors also need to be announced, not only shown -- `aria-live` on the message.

**Toggles, accordions, tabs** -- these move something that exists, so the motion is positional and continuous. `--ease-in-out`. For accordions use `grid-template-rows: 0fr → 1fr` (animatable, unlike `height: auto`) or the newer `interpolate-size: allow-keywords`.

## Workflow

1. **Inventory the interactive surface.** Every element a user can hover, press, focus, or toggle. Most apps have five or six kinds -- button, link, card, input, row, toggle -- not fifty. That list is the entire scope.
2. **Assign one treatment per kind.** All buttons behave the same. All cards behave the same. Write these as component styles or utility classes, not per-instance.
3. **Cover all four states per kind.** Rest, hover, active, focus-visible -- plus disabled where it applies. The commonly-missed ones are active and focus-visible, and they are the two that make the UI feel responsive and usable.
4. **Handle the transitional states.** Buttons that trigger async work need pressed → loading → result, with the width held stable so the layout does not jump when the label changes to a spinner.
5. **Test with the keyboard only.** Tab through the whole page. Every stop should be obvious, in a sensible order, and never trapped. If you cannot tell where focus is, the interaction design is incomplete regardless of how the hover states look.

## Rules

- Transition specific properties, never `transition: all` -- it animates things you did not intend, including layout properties, and it is a common source of unexplained jank.
- Feedback under 150ms. Anything slower stops reading as a response and starts reading as latency.
- One idea per interaction. Scale *or* shadow *or* color -- stacking three is the generated-UI signature.
- Never animate a hover state's `width`, `height`, or `padding`. Layout on hover is jank on hover.
- No looping animations on idle UI. A pulsing button is fine for exactly one primary CTA and intolerable on three.
- Disabled elements do nothing on hover and press -- an animating disabled button suggests it will work.
- Touch targets stay at least 44px regardless of visual size, and a `scale(0.97)` press must not shrink the hit area (it does not -- `transform` leaves layout alone, which is another reason to use it).
