# sales-desk

The rep's daily loop as one plugin. Four skills that cover a selling day end to end: walk into every call briefed, keep the pipeline honest, know every account cold, and never let a follow-up slip.

## Skills

| Skill | What it does |
|-------|--------------|
| `call-prep` | 15-minute pre-call brief: company research, attendee intel, discovery questions, likely objections with answers |
| `pipeline-review` | Weekly pipeline hygiene: stalled deals surfaced, next actions per deal, an honest forecast read |
| `account-brief` | Everything about one account on one page: history, stakeholders, health, renewal clock, expansion openings |
| `follow-up-writer` | Post-call recap email in your voice, CRM-ready notes, and the next-step task list -- from your rough notes or a transcript |

## Install

```bash
claude plugin marketplace add OneWave-AI/open-agent-stack
claude plugin install sales-desk
```

## Works well with

- A connected CRM MCP (HubSpot, Salesforce, or your own) -- skills read from and write drafts against it when available, and work from pasted exports when not.
- The deeper single-purpose skills in [claude-skills](https://github.com/OneWave-AI/claude-skills): `deal-review-framework`, `objection-pattern-detector`, `champion-identifier`, `cowork-qbr-builder`.

No API keys required. Web search is used for company research where available.
