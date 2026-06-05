# Run modes: gates, checklists, and rules

This reference defines the two run modes, the three gate checklists, and the
revision and halt rules the lead applies. Keep entry files lean and consult this
file for the detail.

## Mode resolution

The lead reads `mode` from the run invocation:

- `human-in-the-loop` (default): pause at each gate and wait for a human decision.
- `out-of-the-loop`: run gates as automated checklists; no pauses.

Default to `human-in-the-loop` when `mode` is absent or unrecognized.

## Decisions accepted at each gate

- approve: proceed to the next wave.
- revise: route the named artifact back to its owning sub-agent for one revision
  pass, then re-present at the same gate.
- reject: halt the cycle and report. Do not publish.

In out-of-the-loop mode, the lead makes the equivalent decision itself by running
the checklist below: a clean pass is an approve, a fixable miss triggers one
revision pass, and a persistent miss is a halt with a blocked report.

## Gate 1: approve brief

Present the brief plus competitor-intel and seo inputs. Checklist:

- Objective, audience, and core message are explicit and aligned.
- Differentiators from competitor-intel are truthful and ownable.
- Primary and secondary keywords are present with intent noted.
- Brand voice and color rules are stated; no purple anywhere.

## Gate 2: approve drafts

Present content drafts, social posts, and seo metadata. Checklist:

- Primary asset has a clear headline, structure, and single CTA.
- Keywords appear naturally; no stuffing; on-page pass is a pass.
- Social posts are channel-native and every link is UTM-tagged.
- No emoji, no purple, and no dead placeholders in any draft.

## Gate 3: approve publish

Present the final package and the analytics plan. Checklist:

- Every required artifact is present and reconciled across agents.
- Analytics instrumentation is ready: KPIs, UTMs, and events defined.
- All asset requests are resolved; no broken media references.
- Brand, voice, emoji, and color rules hold across the full package.

## Revision and halt rules

- Allow one revision pass per artifact per gate. Send specific notes to the
  owning sub-agent, then re-check at the same gate.
- If a revised artifact still fails, halt the cycle, mark it blocked, and report
  the failure with the unmet checklist items.
- Never publish on a failed gate in either mode.
- In out-of-the-loop mode, record every auto-decision and surface them all in the
  single end-of-cycle report.
