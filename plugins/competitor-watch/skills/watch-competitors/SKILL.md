---
name: watch-competitors
description: Use when the user wants to monitor, track, or compare competitors, their pricing pages, or their published content, and report what changed since the last check. Triggers on requests like "watch competitor X", "did their pricing change", "what did they ship", or "diff competitors against last time".
---

# Watch Competitors

Fetch the current state of competitor pages, diff against a stored baseline, report changes with sources, then update the baseline.

This skill requires web access. Use the built-in web search and fetch tools; no API key is needed.

## Workflow

1. Resolve the target list. Take competitor names or URLs from the user. For each name without a URL, search the web to find the canonical domain. Confirm the homepage, pricing page, and content surface (blog, changelog, or newsroom) for each.

2. Load the baseline. Read `references/baseline.json` if it exists. If it is missing, treat this as a first run with no prior state and note that the report will be a baseline capture, not a diff.

3. Capture current state. For each competitor, fetch the homepage, pricing page, and content surface. Record for each page: the headline messaging, listed plans and prices, plan features, and the titles and dates of the most recent content items. Keep the source URL for every captured fact.

4. Diff against baseline. For each competitor, compare current state to the stored snapshot. Identify: pricing changes (amount, plan name, billing terms), new or removed plans, messaging or positioning shifts, new pages, removed pages, and newly published content since the last run.

5. Report the diff. Produce a per-competitor summary. Lead with material changes (pricing, plans, launches), then secondary changes (messaging, content). Cite the source URL for each change. If nothing changed for a competitor, state that explicitly. On a first run, report the captured baseline instead.

6. Update the baseline. Write the current captured state back to `references/baseline.json` so the next run diffs against it. Stamp each competitor entry with the capture date.

## Notes

- Always attach a source URL to every reported fact; never report a change you cannot point to.
- Distinguish a real change from a page you simply could not reach. If a fetch fails, flag it as unverified rather than as a removal.
- See `references/baseline-schema.md` for the baseline file structure.
