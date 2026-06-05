# Run inputs

The lead reads one run input object. Resolve `mode` before anything else.

## Run input schema

```json
{
  "mode": "human_in_the_loop",
  "target_count": 50,
  "channels": ["email"],
  "tone": "direct",
  "offer": "One-line value proposition",
  "success_metric": "meetings booked",
  "exclusions": ["existing-account.example"],
  "cadence_policy": {
    "touches": 4,
    "spacing_business_days": 3,
    "channel_order": ["email"],
    "send_window": "09:00-16:00 local",
    "stop_on_reply": true
  },
  "autonomous_approved": false,
  "approved_segment": null,
  "approved_templates": [],
  "autonomous_send_cap": 0,
  "qualification_rubric": {
    "threshold": 60,
    "criteria": ["fit", "intent", "timing"]
  },
  "routing_map": {
    "qualified": "ae-owner",
    "nurture": "marketing-queue"
  }
}
```

## ICP fields

```json
{
  "industry": ["..."],
  "company_size": "50-500",
  "geography": ["..."],
  "role_titles": ["VP Operations", "Head of RevOps"],
  "signals": ["recent funding", "hiring for the function"]
}
```

## Mode resolution

- `mode` is `human_in_the_loop` or `out_of_the_loop`.
- Missing or invalid `mode` falls back to `human_in_the_loop`.
- `out_of_the_loop` requires all of:
  - `autonomous_approved: true`
  - non-empty `approved_segment`
  - non-empty `approved_templates`
  - `autonomous_send_cap` greater than zero
- If any precondition fails, the lead falls back to `human_in_the_loop` and
  notes the fallback reason in the report.

## Secrets

All tool credentials come from `.env`. Copy `.env.example` to `.env` and fill
real values locally. Never commit `.env`. Never inline a key in any agent file.
