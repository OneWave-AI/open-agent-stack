# Managed Agents

Standalone autonomous agents — each a single-purpose worker with a defined role, a tool list, web-search wiring, and a `.env.example` for keys. Built for open-source adoption: clone, set keys, run.

| Agent | Role | Web search |
|-------|------|:---:|
| `market-researcher` | Researches a market, segment, or company and returns a structured brief. | yes |
| `news-curator` | Pulls and ranks the day's relevant developments for a given topic. | yes |
| `lead-enricher` | Enriches a lead or account from public sources into a clean record. | yes |
| `content-drafter` | Drafts long-form content from a brief, with sources cited. | yes |
| `seo-auditor` | Audits a page or site and returns prioritized SEO fixes. | yes |

Each agent ships in two forms where practical: a Claude Agent SDK definition and a portable spec, so the role isn't locked to one runtime.
