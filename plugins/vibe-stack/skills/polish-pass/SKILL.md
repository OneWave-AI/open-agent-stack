---
name: polish-pass
description: The de-AI pass -- audit a vibe-coded app for template smell in design and copy, then fix it with editorial layout, purposeful motion, and human-sounding words. Use after any build session, before anyone else sees it.
---

# Polish Pass

Everyone can tell. The centered-hero-with-gradient-text, the three-feature-cards-with-icons, the "Unlock the power of" copy -- AI-built apps share a look, and losing it is the difference between a demo and a product. This pass hunts the tells and replaces them with decisions.

## Workflow

1. **The tells audit.** Sweep design and copy for the fingerprints: symmetric three-card grids, gradient text on dark hero, purple anywhere, emoji as icons, identical border-radius-and-shadow on every element, "Unlock/Supercharge/Seamlessly" copy, feature names that describe categories not benefits, every section the same width and rhythm. List each with location.
2. **Break the symmetry.** Editorial moves: vary section rhythm (one full-bleed, one narrow, one asymmetric), let one element be genuinely large, use whitespace as a feature, align to a real grid but break it once deliberately. The page should read like it was art-directed, not generated.
3. **Rewrite the words.** Copy passes the read-aloud test: specific over sweeping ("invoices chase themselves" not "streamline your workflow"), numbers where they exist, the user's vocabulary, zero filler adjectives. Microcopy too -- buttons, empty states, and errors are where products feel human or robotic.
4. **Motion with intent.** Replace scattered hover effects with a small motion system: one entrance treatment, one emphasis move, consistent durations and easings. Motion that communicates hierarchy, not motion because an animation library was installed. If the app has more than three or four distinct durations, stop and run `motion-system` -- this is a systemic fix, not a per-element one. `micro-interactions` covers the hover/press/focus set, and `motion-perf` covers it stuttering on a phone.
5. **Detail sweep.** Favicon and OG image real, focus states designed (not default blue), empty/loading/error states written, dark surfaces layered by elevation not one flat color, and typography checked at actual phone size.

## Rules

- Every fix is a decision, not a randomization -- "different from the template" only helps if it is also better.
- Copy claims stay true: de-AI-ing the words never means inflating them.
- One pass, shippable result: prioritize the tells visible above the fold and on the money path over exhaustiveness.
- Keep a before/after note per change so the user learns the patterns and stops generating them.
