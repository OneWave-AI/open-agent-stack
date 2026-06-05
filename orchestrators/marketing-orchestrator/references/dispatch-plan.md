# Dispatch plan: waves, parallelism, and dependencies

This reference details how the lead sequences the five sub-agents. Keep `lead.md`
lean and consult this file for wave-level detail.

## Wave one: inputs (parallel)

Dispatch competitor-intel and seo at the same time. They have no dependency on
each other and both feed the brief presented at Gate 1.

- competitor-intel produces positioning and differentiators.
- seo produces the keyword set and draft metadata.

## Wave two: drafting (dependent)

Dispatch content first, then social.

- content consumes the approved brief, competitor differentiators, and seo
  keywords to produce the primary asset and social angles.
- seo runs the on-page pass against the content draft.
- social consumes the approved content angles and the analytics UTM scheme to
  produce channel-native posts and the schedule.

Social depends on content output, so it must not start until content angles
exist. The seo on-page pass depends on the content draft.

## Wave three: instrumentation

Dispatch analytics to define KPIs, the UTM scheme, and the tracking event list
for the assembled package. The UTM scheme is required before social finalizes its
links, so deliver the scheme early enough for wave two to consume it; if timing
forces it, treat UTM definition as a wave-one analytics sub-task.

## Wave four: readout (post-publish)

After the package is live, dispatch analytics again for the readout: actuals
versus targets, channel breakdown, and next-cycle recommendations.

## Conflict reconciliation

When two agents disagree (for example, an seo keyword that fights the content
angle, or a social format that breaks a differentiator), the lead decides,
records the resolution, and routes the affected artifact back for one revision
pass before the next gate.

## Failure handling

If any sub-agent returns incomplete or off-brand output, the lead returns it with
specific notes for one revision pass. If it still fails, the lead halts the cycle
and reports per the rules in `run-modes.md`.
