# lead-enricher

A managed agent that turns a sparse lead or account into a clean, verified, structured record sourced only from public information.

## What it does
- Takes a partial lead (an email, a domain, a LinkedIn URL, or a company plus name).
- Resolves it to a single real-world person or company.
- Fills in missing firmographic and contact attributes from public sources.
- Verifies each field, attaches a source URL and freshness date, and scores confidence.
- Returns one structured JSON record. Unverifiable fields come back as `null`, never invented.

## When to use it
- Cleaning inbound form fills before they hit the CRM.
- Enriching a thin prospect list with firmographics and titles.
- Deduplicating and normalizing accounts against their canonical domain.
- Pre-call research where provenance and confidence matter.

Do not use it for gated, paywalled, or login-only data, or for sources that forbid automated access.

## Setup
1. Install a Claude Agent SDK runtime with tool access for web search, web fetch, and local file read/write.
2. Copy `.env.example` to `.env` and fill in any keys your web tools require. Never commit real secrets.
3. Point the runtime at `AGENT.md` as the agent definition.
4. Provide input as JSON or free text containing at least one strong identifier.

## Example input
```json
{ "company": "OneWave AI", "name": "Jordan Lee" }
```

## Example output
A single JSON record matching the schema in `AGENT.md` (Output Format), with per-field confidence and a `sources` array.

## Portable spec
The role is runtime-agnostic. Map it as follows:
- Claude Agent SDK: this `AGENT.md` is the system definition; tools bind to `WebSearch`, `WebFetch`, `Read`, `Write`, `Edit`.
- OpenAI Assistants / function calling: move the Operating Procedure into the system prompt; expose `web_search`, `fetch_url`, and a file I/O function with the same names and contracts.
- LangChain / LangGraph: model the procedure as a graph (parse, resolve, verify, enrich, score, assemble); bind a search tool and an HTTP fetch tool; keep the same JSON output schema.
- Plain LLM + scripts: run the steps as an ordered pipeline; the only hard requirements are the strong-identifier gate, per-field provenance, and the fixed output schema.

Keep the output schema identical across runtimes so downstream consumers stay stable. Field definitions and source rules live in `references/`.
