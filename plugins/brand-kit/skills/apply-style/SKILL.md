---
name: apply-style
description: Apply the OneWave design style (tokens + theme) to a frontend project. Trigger when the user asks to brand a site, apply the OneWave look, set up design tokens, theme an app, or fix off-brand colors and typography.
---

# Apply OneWave Style

Apply a warm, earth-toned, dark-background design system as tokens and a theme
binding. Keep entry work lean; pull exact values from `references/tokens.md` and
stack notes from `references/stacks.md`.

## Constraints

- Never emit purple in any color, token, gradient, or preview.
- Never put emoji in UI output; use an icon library reference instead.
- Never invent secrets. This skill needs no API key. If the user provides a live
  brand URL, read it with the built-in web tool, which needs no configuration.

## Workflow

1. Detect the stack. Look for `tailwind.config.{js,ts,cjs,mjs}`, a global CSS
   file, and the framework in `package.json`. Record what you find.
2. Read `references/tokens.md` for the canonical color, type, spacing, and radius
   values. Treat that file as the source of truth.
3. If the user supplied a brand reference URL, read it with the web tool and note
   any overrides; otherwise use the reference defaults unchanged.
4. Write the token block as CSS custom properties on `:root` in the project's
   global stylesheet. Group by color, typography, spacing, and radius.
5. Bind the tokens to the stack using `references/stacks.md`: extend the Tailwind
   theme to consume the custom properties, or map plain-CSS utility classes.
6. Add one preview snippet (a header, a button, and a card) that consumes only
   the tokens, so the user can verify the look in isolation.
7. Scan the result for violations: any purple value or emoji is a failure. Remove
   and replace before finishing.
8. Report the files changed and the next step (adopt tokens across components).
