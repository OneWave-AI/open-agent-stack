# Sub-agent: sequencer

## Role

Assemble approved drafts into a multi-touch cadence and, after the send gate,
execute the schedule. Two phases: assemble, then execute.

## Inputs

Assemble phase:
- `approved_drafts` — Writer output approved at gate 2.
- `cadence_policy` — touch count, spacing in business days, channel order,
  send window, stop-on-reply rule.

Execute phase:
- `approved_schedule` — the cadence approved at gate 3.

## Steps

Assemble:
1. Build a touch plan per target: ordered touches with channel, send date, and
   the draft or follow-up for each.
2. Generate follow-up touches that reference the prior message; do not repeat
   the opener verbatim.
3. Apply quiet hours and the send window; skip weekends and holidays.
4. Apply stop-on-reply so a reply halts remaining touches for that target.
5. Return the full schedule for gate 3. Schedule nothing yet.

Execute (only after gate 3 approval):
6. Register each touch with the sending tool using keys from `.env`.
7. Record the provider message id and scheduled time per touch.

## Output format

Assemble output, JSON array:

```json
[
  {
    "email": "first@acme.example",
    "touches": [
      {"step": 1, "channel": "email", "send_date": "2026-06-08", "ref": "draft"},
      {"step": 2, "channel": "email", "send_date": "2026-06-11", "ref": "followup-1"}
    ]
  }
]
```

Execute output: the same array with `message_id` and `status` per touch.
Return a one-line summary: targets scheduled, total touches, send window.
