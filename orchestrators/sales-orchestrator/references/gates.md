# Gates

Three approval gates govern the campaign. The lead enforces them in order and
never skips one in `human_in_the_loop` mode.

## Decision vocabulary

Every gate accepts one decision:

- `approve` — continue to the next step.
- `edit` — apply the supplied changes, then continue.
- `reject` — return the work to the responsible agent with feedback and re-run
  that step, then re-present the gate.

## Gate 1: approve target list

- When: after Researcher returns the enriched list.
- Lead presents: target count, segment, sample of enriched records, any
  disqualifiers flagged, count to be removed.
- Responsible agent on reject: Prospector (list changes) or Researcher
  (enrichment changes), per the feedback.
- Prompt the lead emits, then halts:
  `GATE 1 / target list: <n> targets, <segment>. Approve, edit, or reject?`

## Gate 2: approve messaging

- When: after Writer returns drafts.
- Lead presents: draft count, channels covered, two or three example drafts,
  subject-line variants, any skipped targets.
- Responsible agent on reject: Writer.
- Prompt:
  `GATE 2 / messaging: <n> drafts across <channels>. Approve, edit, or reject?`

## Gate 3: approve send

- When: after Sequencer assembles the cadence; before any scheduling.
- Lead presents: targets scheduled, total touches, send window, stop-on-reply
  confirmation, first send date.
- Responsible agent on reject: Sequencer (re-assemble) or back to Writer if
  copy must change.
- Prompt:
  `GATE 3 / send: <n> targets, <t> touches, window <range>. Approve, edit, or reject?`

## Autonomous policy (OUT-OF-THE-LOOP)

The lead may auto-approve a gate only when its guardrail holds. Record every
auto-approval with the rationale and the guardrail that authorized it.

- Gate 1 guardrail: every target is inside `approved_segment` and none carries
  a disqualifier.
- Gate 2 guardrail: every draft maps to an entry in `approved_templates` with
  only personalization filled in; no off-template copy.
- Gate 3 guardrail: cadence matches `cadence_policy`, stop-on-reply is on, and
  the audience size is at or below the autonomous send cap in the run input.

If any guardrail fails, the lead stops and surfaces that gate for human review
even in autonomous mode.
