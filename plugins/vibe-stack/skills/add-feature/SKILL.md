---
name: add-feature
description: Add a feature to an app you vibe-coded without breaking the three things that already worked -- read the existing patterns first, extend them instead of inventing a second way to do the same thing. Use when adding any new screen, flow, or capability to an existing codebase.
---

# Add Feature

Feature five is where vibe-coded apps fall apart. Not because the feature is hard, but because it gets built as if the first four did not exist: a second button component, a second way to fetch, a second set of colors. Entropy, not complexity, is what makes these apps unmaintainable.

## Workflow

1. **Read before you write.** Find the closest existing thing to what is being added and read it fully -- a similar route, a similar form, a similar data fetch. The answer to "how should I build this" is usually already in the repo. Note the conventions actually in use, not the ones the README claims.
2. **Name the blast radius.** List what this feature touches: routes, shared components, types, the data layer, anything that reads the same state. If it touches something on the money path (signup, checkout, the core action), say so out loud before starting.
3. **Extend, do not duplicate.** Reuse the existing primitives and add variants to them. A second `Button.tsx`, a second fetch helper, or a second color scale is a bug being introduced on purpose. If the existing primitive genuinely cannot flex, refactor it once and migrate the old callers -- do not fork it.
4. **Build the whole feature.** Real data path, loading state, empty state, error state, mobile layout. A feature that only handles the happy path is not shipped, it is demoed.
5. **Verify what you broke.** Run the app and walk the new flow AND the flow nearest to it. Run the build (`npm run build`, not just dev). Typecheck clean. If tests exist, they pass; if they do not exist, say so rather than implying coverage.

## Rules

- Match the surrounding code's idiom -- naming, file layout, comment density -- even where you would have chosen differently. Consistency beats your preference.
- No new dependency without saying why the existing stack cannot do it. Every package is a future upgrade problem.
- Touch the design tokens, not the components' hardcoded values; a feature that introduces raw hex undoes the theme.
- If the feature reveals that an earlier shortcut has to go (mock data, a stubbed auth check), fix it now or write it down in the summary -- never build on top of it silently.
- Summarize as: what was added, what was changed that already existed, what to click to verify.
