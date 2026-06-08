# Orchestrators

Multi-agent systems. Each orchestrator is a **lead agent** that dispatches a **team of 5 specialist sub-agents**, mirroring the two-layer `agent-army` pattern. Every orchestrator runs in two modes:

- **Human-in-the-loop (HITL)** — the lead pauses for approval at defined gates (plan, before outreach, before publish).
- **Out-of-the-loop** — the lead runs the full cycle autonomously and reports at the end.

## `sales-orchestrator`

Lead agent coordinating a 5-agent sales team:

| Sub-agent | Owns |
|-----------|------|
| `prospector` | Builds the target list against the ICP |
| `researcher` | Deep-researches each account |
| `writer` | Drafts personalized outreach |
| `sequencer` | Plans the multi-touch cadence |
| `qualifier` | Scores replies and routes the hot ones |

**Gates (HITL):** approve target list -> approve messaging -> approve send.

## `marketing-orchestrator`

Lead agent coordinating a 5-agent marketing team:

| Sub-agent | Owns |
|-----------|------|
| `content` | Produces the core asset |
| `social` | Adapts it per channel |
| `seo` | Optimizes for search |
| `competitor-intel` | Benchmarks against rivals |
| `analytics` | Defines metrics and reads results |

**Gates (HITL):** approve brief -> approve drafts -> approve publish.

Each orchestrator documents how to flip between HITL and out-of-the-loop, and where the approval gates sit.
