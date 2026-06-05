# release-radar

Track new AI model and tool releases, changelogs, and deprecations, then flag exactly what affects your stack.

## What it does

Release Radar scans official sources for recent activity across the AI vendors and dev tools you depend on. It surfaces:

- New model and tool releases (with version, date, and headline changes)
- Changelog entries that change behavior, defaults, or pricing
- Deprecations and end-of-life notices with cutoff dates
- A prioritized list of items that touch your declared stack, with a recommended action for each

The goal is signal, not noise. Anything that does not affect your stack is summarized briefly or dropped.

## When to use it

Use Release Radar when you want to:

- Catch up on AI releases since a given date
- Check whether a model or API you use has been deprecated or changed
- Decide if a new release is worth migrating to
- Run a periodic sweep before planning sprint work

## Install

```
claude plugin install release-radar
```

## Skill it provides

- `scan-releases` — Scans official release notes, changelogs, and deprecation pages for AI models and tools, then flags items that affect your declared stack and recommends an action for each. Triggers on requests like "what AI releases happened this week," "check if my models are deprecated," or "scan for changelog updates affecting my stack."

The skill uses the built-in web tool to read live sources. No API key or credentials are required.
