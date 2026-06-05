# Final report structure

The lead aggregates all five sub-agent outputs and every gate decision into one
report. Use this structure.

## Sections

1. Campaign summary
   - Mode used (and any fallback reason), segment, offer, channels, tone,
     target count, success metric.

2. Target list
   - Final targets with disposition: included, trimmed, disqualified. Include
     the fit reason and the trim or disqualify reason.

3. Messaging
   - Drafts per target with subject variants and the personalization source.
     Note any skipped targets.

4. Cadence
   - Touch plan per target: steps, channels, send dates, stop-on-reply state.

5. Send results
   - Scheduled and sent touches with provider message ids and status. Failures
     called out explicitly.

6. Qualified leads
   - Replies processed, classification, score, qualified flag, routing
     destination, CRM stage, suppressions.

7. Gate decision log
   - One row per gate: gate name, decision (approve / edit / reject), who
     decided (human or auto), timestamp, and rationale. For auto-approvals,
     record the guardrail that authorized it.

## Rules

- Imperative voice. No emoji. No purple in any token, chart, or preview.
- Report only verifiable outcomes. Mark unknowns explicitly; do not infer
  results that were not produced.
