---
description: Audit a vibe-coded app across the six things that actually block shipping, and get a prioritized fix list
---

# Vibe Check

Audit the app in the current directory and report where it really stands. Do not fix anything yet -- the output is a diagnosis and a plan the user chooses from.

Assess these six axes. For each, give a one-line verdict and the specific evidence (file paths, line references) behind it.

1. **Real or demo** -- Is the UI telling the truth? Hunt hardcoded arrays feeding lists and charts, `useState` standing in for a session, form handlers with no network call, and routes returning fixtures. Anything on the money path that is fake is the highest-severity finding in this audit.
2. **Safe to be public** -- Secrets in source or committed `.env` files, keys exposed to the browser (`NEXT_PUBLIC_` and anything used client-side), mutating API routes with no auth check, and unvalidated user input hitting the database.
3. **Built to survive change** -- Duplicated primitives (two button components, two fetch helpers), raw hex instead of design tokens, dead code, and dependencies nothing imports. Note the two files most likely to break when the next feature lands.
4. **Looks human-made** -- The AI tells: centered gradient hero, symmetric three-card grid, emoji used as icons, uniform radius and shadow on everything, "Unlock/Supercharge/Seamlessly" copy, identical section rhythm throughout.
5. **Motion holds together** -- Count the distinct animation durations and easings in the codebase; more than three or four of either means there is no motion system. Then check for the specific failures: layout properties being animated (`width`, `height`, `top`, `left`) instead of `transform`, `transition: all`, missing `:focus-visible` styles, missing `:active` press states, no `prefers-reduced-motion` handling anywhere, `markers: true` left in a ScrollTrigger, and GSAP created outside `useGSAP` or a `useEffect` with no cleanup.
6. **Deployable today** -- Does `npm run build` pass (run it), does typecheck pass, is every `process.env` variable the code reads actually documented and set, and do error, empty, and loading states exist on the main screens.

Then output:

- **Blockers** -- ship-stopping, in severity order, each with the skill that fixes it (`make-it-real`, `ship-it`, `unstick`, `add-feature`, `polish-pass`, `motion-system`, `gsap-web`, `scroll-story`, `micro-interactions`, `motion-perf`, `handoff`).
- **Worth fixing** -- real problems that are not blockers.
- **Fine as-is** -- so the user knows what not to spend time on. Say this explicitly; an audit that flags everything is useless.

Be specific and be honest. "Consider improving error handling" helps nobody -- "`app/dashboard/page.tsx:34` renders a hardcoded revenue array while the UI implies live data" does.
