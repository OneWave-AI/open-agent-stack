---
name: new-app
description: Scaffold a new app from one sentence -- Next.js + TypeScript + Tailwind with a real design-token theme applied from the first commit, opinionated structure, and honest slots for auth and data. Use when starting any new project, prototype, or client build.
---

# New App

The first hour sets the ceiling: apps that start as default-Tailwind boilerplate stay looking like it. Scaffold with the design system already in, the structure already opinionated, and the lies already removed (no fake data wired to nothing).

## Workflow

1. **One question round, maximum.** From the idea sentence, infer the app shape (marketing site, dashboard, tool, storefront) and confirm only what changes the scaffold: does it need auth, does it need a database, who is it for. Everything else gets a sensible default now and a refactor later.
2. **Pick the skin.** Choose (or let the user choose) a theme from the Open Agent Stack `design-styles/` collection -- aurora-mesh, cirrus, liquid-glass, mono-brutalist, neo-terminal, sand-terra, tidal -- and wire its tokens into Tailwind before writing any component. House rules apply regardless of theme: no purple, no emoji in UI, icons from Lucide.
3. **Scaffold.** Next.js App Router + TypeScript + Tailwind. Structure: route groups by audience, `components/ui` for primitives consuming tokens only, `lib` for real logic. Auth slot (middleware + provider stub wired to real session shape) and data slot (typed client, one real example query) if needed -- stubs that state what they are, never mock data pretending to be live.
4. **Set the motion language.** Run `motion-system` before the first animated component -- three durations, three easings, and the reduced-motion policy go into the theme alongside the color tokens. Ten minutes here is what stops the app accumulating fourteen different hover durations by week two.
5. **First real screen.** Build the landing/home screen properly against the theme -- type scale, spacing, one signature motion -- so every screen after has a quality bar to match, not a placeholder to excuse.
6. **Boot it.** `npm run dev`, verify it renders, commit. The scaffold is done when it runs, not when the files exist.

## Rules

- Never ship hardcoded/mock data wired to look live -- if a real backend exists, query it; if not, the empty state is the honest UI.
- Tokens from minute one: no raw hex in components, ever, so the theme swap stays a one-file change.
- Opinionated beats configurable at this stage -- one good default now, options when the app earns them.
- The README the scaffold writes says what is real, what is stubbed, and what the next three build steps are.
