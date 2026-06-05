# competitor-watch

Monitor competitor websites, pricing pages, and published content over time, then report what changed since the last check.

## What it does

- Pulls the current state of competitor pages (homepage, pricing, product, blog, changelog) using the built-in web search tool.
- Compares that state against a stored baseline snapshot for each competitor.
- Reports a clear diff: new pages, removed pages, pricing changes, messaging shifts, and freshly published content.
- Saves an updated baseline so the next run compares against the latest known state.

## When to use

- You want a recurring read on what competitors are shipping or changing.
- A competitor just raised a round, launched a product, or changed pricing and you need the specifics.
- You are building a battlecard or sales narrative and need current, sourced competitor facts.
- You want to track promotional cycles and discount patterns on a pricing page.

## Install

```
claude plugin install competitor-watch
```

## Skill it provides

- `watch-competitors` — Given one or more competitor names or URLs, fetch current page state via web search, diff against the stored baseline, report changes with sources, and update the baseline. Triggers on requests to track, monitor, or compare competitors, their pricing, or their content.

No API key is required. The skill uses the built-in web tool, so there is no `.env` to configure.
