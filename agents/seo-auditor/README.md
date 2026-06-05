# seo-auditor

Audits a page or site and returns a prioritized list of SEO fixes.

## What it does

Fetches the target, inspects on-page, technical, performance, and content signals, and returns a ranked fix list. Every finding carries a location pointer, an impact rating, an effort rating, and an imperative fix. Claims that depend on current information are verified with web search and cited.

## When to use it

- Auditing a landing page or marketing site before launch.
- Triaging an organic-traffic drop.
- Reviewing a client site and producing a fix backlog a developer can act on.

Use it when you want a prioritized backlog, not a single metric. For keyword research or content writing, route to a dedicated skill instead.

## Setup

1. Provide the agent the tools listed in `AGENT.md`: `WebFetch`, `WebSearch`, `Read`, `Bash`.
2. Pass the target as a single URL, a newline-separated URL list, or a site root.
3. Optional: set a crawl cap (default 25 URLs) for site-wide audits.

No API keys are required. If you wire this to a search provider that needs a key, copy `.env.example` to `.env` and fill it in.

## Portable spec

The role is runtime-agnostic. Map it as follows.

- Claude Agent SDK: load `AGENT.md` as the system prompt; register the four tools by name.
- OpenAI Assistants / function calling: use `AGENT.md` as instructions; expose `WebFetch`/`WebSearch` as a fetch tool and a search tool; gate `Bash` to read-only commands.
- LangGraph or custom orchestrator: treat the operating procedure as the node sequence (resolve scope, fetch, audit, score, emit) and enforce the output schema as the final node's contract.

In every runtime the contract is the same: input is a target plus optional crawl cap; output is the Markdown report defined in `AGENT.md`. Swap tool implementations freely as long as fetch and search capabilities exist.

## Files

- `AGENT.md` — agent definition (role, tools, procedure, output format).
- `references/checklist.md` — per-signal audit checklist.
- `references/scoring.md` — impact/effort rubric.
- `.env.example` — optional search-provider key, only if your runtime needs one.
