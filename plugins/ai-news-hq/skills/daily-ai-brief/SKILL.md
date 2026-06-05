---
name: daily-ai-brief
description: Run the AI-news crew (scout, analyst, editor) to sweep the field with web search and ship a ranked briefing. Trigger when the user asks for an AI news brief, a daily or weekly AI roundup, "what shipped in AI", a model-release recap, or wants the standing cadence run.
---

# Daily AI Brief

Produce a ranked AI-news briefing by running three roles in sequence: scout (sweep), analyst (rank), editor (write). This skill needs the web — use the built-in web search and fetch tools. No API key is required.

## Workflow

1. Set scope. Default to the last 24 hours on weekdays and the last 7 days on Mondays. Honor any window, vertical, or format the user specifies instead.
2. Load the source list from `references/sources.md` and the reader's declared stack from project context (CLAUDE.md or the request).
3. Scout: run web searches across the source groups in priority order — model releases and first-party vendor posts first, then high-cadence feeds, digests, deep dives, and community signal. Collect title, source, date, and link for each candidate.
4. Analyst: dedupe items that report the same event, drop anything outside the scope window, and corroborate community buzz against a primary source before keeping it. Discard items you cannot verify.
5. Analyst: rank by signal. Weight model releases and first-party announcements highest. Flag every item that touches the reader's stack.
6. Editor: write the briefing. Lead with the top item. For each entry give a headline, a one-line why-it-matters, the source link, and a "touches your stack" tag when it applies.
7. Cap the briefing at the most significant items (default 5 to 8). Note anything notable that was cut so nothing important is silently dropped.
8. Close with the scope window covered and the next scheduled run so the cadence stays clear.

## Rules

- Cite a working source link for every claim. Never assert a release or benchmark without a source.
- Prefer primary sources over aggregators when both cover the same item.
- Keep entries tight. The reader wants signal, not recap.

## References

- `references/sources.md` — the full researched source list grouped by job, with ranking guidance.
