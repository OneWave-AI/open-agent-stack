# content-drafter

A managed agent that turns a content brief into a finished long-form draft with every factual claim cited to a verified source.

## What it does

- Reads a structured brief (topic, audience, angle, tone, length, format, constraints).
- Searches the web for current facts, statistics, and primary sources.
- Verifies each source by opening it before citing it.
- Drafts the piece to the target length and tone with inline `[S#]` citation markers.
- Maintains a source ledger mapping every marker to a verified source.
- Self-checks against a quality checklist before returning.

## When to use it

- You have a brief and need a publication-ready first draft fast.
- The piece makes factual or statistical claims that must be defensible.
- You want citations tracked rather than bolted on afterward.

Do not use it for pure ideation with no draft output, or for tasks that require running code, deploying, or touching version control.

## Setup

1. Provide a brief. Pass it inline or as a file the agent can `Read`.
2. Grant the tools listed in `AGENT.md`: `Read`, `Write`, `Edit`, `WebSearch`, `WebFetch`.
3. Run the agent. It writes `draft.md` and `references/sources.md` and returns a structured report.

This agent needs no API keys of its own. `WebSearch` and `WebFetch` are provided by the host runtime. There is no `.env.example` because no secrets are required; if your runtime injects search credentials, manage them in the runtime, never in this folder.

## Files

- `AGENT.md` — the agent definition: role, objective, tools, procedure, output format.
- `references/sources.md` — the source ledger schema and running list.
- `references/quality-checklist.md` — the pre-finish self-check.
- `draft.md` — produced at run time (the deliverable).

## Portable spec

The role maps cleanly across runtimes; only the wiring changes.

- Claude Agent SDK: define a subagent with `tools: [Read, Write, Edit, WebSearch, WebFetch]` and load `AGENT.md` as the system prompt. The report block is the return contract.
- OpenAI Assistants / Responses: set `AGENT.md` body as instructions, enable the web search tool, and use a file tool for `draft.md` and the ledger.
- LangGraph or custom loop: implement the operating procedure as nodes (plan, search, verify, draft, self-check) with a tool node bound to a search client and a filesystem writer. Persist the ledger between the search and draft steps.
- Any runtime without native web search: swap `WebSearch`/`WebFetch` for an equivalent retrieval tool and keep the verify-before-cite rule. The contract is: read brief, gather and verify sources, draft with `[S#]` markers, emit the report.

The global rules (imperative voice, no emoji, no purple, no dead placeholders, secrets only in env files) are runtime-independent and apply everywhere.
