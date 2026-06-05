---
name: scan-releases
description: Scan official AI release notes, changelogs, and deprecation pages, then flag what affects the user's stack and recommend an action for each item. Trigger on requests like "what AI releases happened recently," "check if my models or tools are deprecated," "any changelog updates that affect my stack," or periodic release sweeps.
---

# Scan Releases

Find recent AI model and tool activity, then report only what matters to the user's stack. This skill needs live web access; use the built-in web tool. No API key is required.

## Workflow

1. Establish the stack. Ask the user which models, APIs, SDKs, and tools they depend on, or infer from the project (package manifests, config files, env var names). Record exact names and current versions.
2. Establish the time window. Default to the last 14 days unless the user gives a date or range. Note the cutoff date explicitly.
3. Build the source list. For each stack item, identify its official release notes, changelog, and deprecation or end-of-life page. See `references/sources.md` for canonical URLs by vendor and how to find missing ones.
4. Fetch each source with the web tool. Read the actual pages; do not rely on memory or summaries. Capture version, date, and the concrete change for every entry inside the window.
5. Classify each entry as Release, Change, or Deprecation. Drop entries older than the cutoff. Discard marketing items with no behavioral or version impact.
6. Flag stack impact. Mark every entry that touches a declared stack item. For each flagged item, assign severity using `references/impact-rubric.md` (breaking, behavioral, additive, informational).
7. Recommend an action per flagged item: migrate now, plan migration before a stated cutoff, adopt optionally, or no action. Include the deprecation deadline when one exists.
8. Verify before reporting. Confirm each claim against its source URL, dates are within the window, and version strings are exact. Drop anything you cannot source.
9. Report using the format in `references/report-format.md`: a short stack-impact section first (sorted by severity), then a brief other-activity section. Cite the source URL for every item.

## Rules

- Source every claim with a live URL. No unsourced or remembered releases.
- Lead with what affects the user. Keep non-impacting activity to one line each.
- State exact versions, dates, and deprecation deadlines. Avoid vague terms like "recently."
