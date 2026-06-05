# sales-orchestrator

Coordinate a five-agent sales team end to end. A single lead agent plans the
campaign, dispatches five specialist sub-agents, enforces approval gates, and
aggregates the results into one report. This mirrors a two-layer agent-army:
the lead is layer one, the five sub-agents are layer two.

## Team

| Agent | File | Responsibility |
|-------|------|----------------|
| Lead | `lead.md` | Plan, dispatch, enforce gates, aggregate |
| Prospector | `agents/prospector.md` | Build the raw target list from the ICP |
| Researcher | `agents/researcher.md` | Enrich each target with context and signals |
| Writer | `agents/writer.md` | Draft personalized messaging per target |
| Sequencer | `agents/sequencer.md` | Assemble a multi-touch cadence and schedule |
| Qualifier | `agents/qualifier.md` | Score replies and route qualified leads |

## Run modes

The orchestrator runs in one of two modes. Set the mode in the run input (see
`references/inputs.md`). Default is HUMAN-IN-THE-LOOP.

### HUMAN-IN-THE-LOOP

The lead pauses at three gates and waits for explicit human approval before
continuing. Use this mode for new campaigns, new segments, or any send against
a live audience.

Gates, in order:

1. Approve target list — after Prospector and Researcher finish, the lead
   presents the enriched target list and waits for approval. The human may
   approve, trim, or reject and send back.
2. Approve messaging — after Writer finishes, the lead presents drafts and
   waits for approval. The human may approve, edit, or reject and send back.
3. Approve send — after Sequencer assembles the cadence, the lead presents the
   final schedule and waits for approval before anything is scheduled or sent.

At each gate the lead stops and emits a gate prompt, then halts. It resumes
only when it receives an approval decision. See `references/gates.md`.

### OUT-OF-THE-LOOP

The lead runs the full cycle autonomously with no pauses, then reports at the
end. Use this mode only for trusted, pre-approved segments and templates where
the guardrails in `references/gates.md` (autonomous policy) are satisfied. The
lead still records every gate decision in the final report as auto-approved
with the rationale and the guardrail that authorized it.

### How to switch modes

Set `mode` in the run input to `human_in_the_loop` or `out_of_the_loop`.

- Missing or invalid value falls back to `human_in_the_loop`.
- `out_of_the_loop` requires `autonomous_approved: true` and a non-empty
  `approved_segment` and `approved_templates`; otherwise the lead refuses to
  run autonomously and falls back to `human_in_the_loop`.

See `references/inputs.md` for the full input schema and `references/gates.md`
for the autonomous policy.

## Dispatch flow

```
Lead: plan campaign from ICP + run input
  |
  +-- Prospector  --> raw target list
  |
  +-- Researcher  --> enriched target list      [depends on Prospector]
  |
  GATE 1: approve target list
  |
  +-- Writer      --> drafts per target          [depends on Researcher]
  |
  GATE 2: approve messaging
  |
  +-- Sequencer   --> cadence + schedule         [depends on Writer]
  |
  GATE 3: approve send
  |
  +-- Sequencer   --> execute scheduled send
  |
  +-- Qualifier   --> score replies, route leads [runs as replies arrive]
  |
Lead: aggregate -> final report
```

Prospector and Researcher are sequential because Researcher consumes the raw
list. Writer depends on enriched targets. Sequencer depends on approved drafts.
Qualifier runs after send and processes replies as they arrive. The lead never
skips a gate in HUMAN-IN-THE-LOOP mode.

## Files

- `lead.md` — lead agent definition
- `agents/prospector.md`
- `agents/researcher.md`
- `agents/writer.md`
- `agents/sequencer.md`
- `agents/qualifier.md`
- `references/gates.md` — gate prompts, approval handling, autonomous policy
- `references/inputs.md` — run input schema and ICP fields
- `references/report.md` — final report structure
- `.env.example` — keys for connected tools (copy to `.env`, never commit)
