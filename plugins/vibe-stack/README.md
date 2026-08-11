# vibe-stack

The gap between "I vibe-coded a thing" and "people think a team built this" is a dozen specific problems. This plugin is those dozen.

Claude can already write the code. What it does not do by default is stop you from scaffolding on default Tailwind, wiring a dashboard to a hardcoded array, giving every button its own hover duration, shipping a key into the browser, or spending an hour in a fix spiral. Each skill below is the discipline for one of those moments.

## Build skills

| Skill | When it fires |
|-------|---------------|
| `new-app` | Starting from a sentence. Next.js + Tailwind scaffolded with real design tokens applied before the first component, so the app never has a default-boilerplate phase. |
| `site-builder` | Building a marketing site, not an app. Page inventory, copy written before layout, one conversion path, real OG and sitemap metadata, and a contact form that actually delivers. |
| `add-feature` | Adding to a codebase you did not read. Extend the patterns already there instead of introducing a second way to do the same thing. |
| `make-it-real` | The app looks done and does nothing. Hardcoded arrays become real queries, the fake login becomes real auth, the contact form actually delivers. |
| `unstick` | It broke and you did not write the code. Find the cause before touching anything -- the alternative is the spiral where every fix adds a bug. |
| `polish-pass` | Before anyone else sees it. Strip the AI tells from design AND copy: editorial layout, purposeful motion, words that survive being read aloud. |
| `ship-it` | Ready for humans. Secrets sweep, env parity, production build, deploy, then verify on the live URL -- not localhost. |
| `demo-video` | It shipped and now something has to show it. Beat sheet before capture, the app prepared for the camera, and the honest cut -- no faked latency, no invented results. |
| `handoff` | Giving it to a client, a contractor, or your future self. Honest README, decisions recorded, shortcuts listed, keys transferred safely. |

## Motion skills

Scattered motion is the loudest AI tell there is -- every element with its own hover effect, every duration a different number. These five treat animation as a system.

| Skill | When it fires |
|-------|---------------|
| `motion-system` | Before the first animation. Three durations, three easings, five named moves, one reduced-motion policy -- so every later animation is a lookup, not a judgment call. |
| `gsap-web` | GSAP inside React or Next.js. `useGSAP` scoping, timelines over stacked tweens, ScrollTrigger that survives route changes and Strict Mode instead of double-firing forever. |
| `scroll-story` | Scroll-driven sections. Reveal vs scrub, pinning without fighting the layout, the scroll-distance dial that sets pacing, and the mobile pass that most of these skip. |
| `micro-interactions` | The app feels static. Hover, press, focus-visible, loading, toggles -- one treatment per element kind, all four states covered, keyboard included. |
| `motion-perf` | It stutters on a real phone. The four causes of jank, how to name yours from a DevTools trace in five minutes, and the transform equivalent for every layout property. |

Token defaults for all five are in [`references/motion-tokens.md`](references/motion-tokens.md) -- CSS custom properties, Tailwind config, and GSAP equivalents for three app temperatures (calm, crisp, expressive).

## Command

`/vibe-check` -- audits the app in the current directory across five axes (real or demo, safe to be public, built to survive change, looks human-made, deployable today) and returns blockers, worth-fixing, and explicitly what to leave alone. Diagnosis only; it routes each finding to the skill that fixes it.

## Agent

`slop-detector` -- reviews frontend code and copy for AI fingerprints and reports located, specific fixes. Runs well after any UI work.

## Install

```bash
claude plugin marketplace add OneWave-AI/open-agent-stack
claude plugin install vibe-stack
```

## Works well with

- The token themes in this repo's [`design-styles/`](../../design-styles) -- `new-app` applies one at scaffold time.
- The deeper design skills in [claude-skills](https://github.com/OneWave-AI/claude-skills): `design-style-installer`, `motion-language-designer`, `dark-mode-converter`, `claude-design-critic`.

No API keys required to scaffold. Deploying needs a Vercel account; `make-it-real` needs whatever backend you choose.

MIT licensed. Built by [OneWave AI](https://www.onewave-ai.com).
