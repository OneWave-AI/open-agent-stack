# news-curator

A managed agent that pulls and ranks the most relevant developments of the day for a given topic, then returns a source-cited briefing.

## What It Does
- Searches current-day coverage for a topic across multiple queries.
- Filters to a lookback window (default 24h), deduplicates clustered stories, and verifies each item's date and source.
- Scores items on relevance, impact, freshness, credibility, and novelty, then returns a ranked briefing with one-line "why it matters" notes and citations.

## When To Use It
- You track a topic daily and want signal over noise.
- You need a verifiable, cited digest rather than a raw search dump.
- You want a repeatable format you can save, diff, or feed into a downstream report.

Do not use it for deep multi-week research syntheses or for anything requiring sources behind authentication it cannot reach.

## Inputs
- `topic` (required), `date` (default today), `lookback_hours` (default 24), `max_items` (default 8), optional `region` / `language`.

## Setup
1. Ensure the agent can run WebSearch and WebFetch in your runtime.
2. Copy `.env.example` to `.env` and fill in a search provider key if your runtime's web search requires one. If your runtime provides built-in web search with no key, you can skip this.
3. (Optional) Place a `watchlist.md` in the working directory to bias entity coverage.
4. Invoke with a topic. To persist output, pass an output path; the agent creates the directory and writes the briefing there.

## Files
- `AGENT.md` — full agent definition: role, tools, procedure, output format.
- `references/ranking-rubric.md` — scoring bands and worked examples.
- `.env.example` — optional search provider key template (no secrets).

## Portable Spec
The role maps cleanly across runtimes. The contract is: input a topic plus window, perform fresh web search, verify and deduplicate, rank by the weighted model in `AGENT.md`, and emit the fixed briefing format.
- Claude Agent SDK: this directory is the native form; expose WebSearch/WebFetch/Read/Write/Edit/Bash as tools.
- OpenAI Assistants / function calling: map WebSearch and WebFetch to a search tool and a URL-fetch tool; keep the ranking model and output schema in the system prompt.
- LangGraph / custom orchestrators: implement the Operating Procedure as nodes (discover, filter, dedupe, verify, score, render); the ranking weights and output format are runtime-independent.
- Any runtime without native search: supply a search API (see `.env.example`) and an HTTP fetcher; the rest of the spec is unchanged.
