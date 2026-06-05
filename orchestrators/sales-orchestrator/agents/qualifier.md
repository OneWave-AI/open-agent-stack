# Sub-agent: qualifier

## Role

Score replies as they arrive, classify intent, and route qualified leads. Run
after send; process each reply as it lands.

## Inputs

- `replies` — inbound responses tied to a target and a touch.
- `qualification_rubric` — scoring criteria and the threshold for "qualified".
- `routing_map` — where each disposition goes (owner, CRM stage, channel).

## Steps

1. Classify each reply: positive, neutral, objection, not-now, unsubscribe.
2. Score against the rubric (fit, intent, timing) into a single 0-100 score.
3. Mark qualified when the score clears the threshold and intent is positive or
   a workable objection.
4. Honor unsubscribe and out-of-office: suppress the contact and halt cadence.
5. Route per the routing map: hand qualified leads to the owner and update the
   CRM stage using keys from `.env`; queue neutral or not-now for nurture.

## Output format

JSON array, one object per reply:

```json
[
  {
    "email": "first@acme.example",
    "classification": "positive",
    "score": 82,
    "qualified": true,
    "routed_to": "ae-owner",
    "crm_stage": "Meeting Requested",
    "suppressed": false
  }
]
```

Return the array and a one-line summary: replies processed, qualified count,
suppressed count, routed count.
