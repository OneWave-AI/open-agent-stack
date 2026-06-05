# Report Format

Keep the report scannable. Lead with stack impact, then list other activity briefly. Cite a live URL for every item.

## Header

State the scan window and the stack scanned.

```
Release Radar scan
Window: <start date> to <end date>
Stack scanned: <comma-separated items>
```

## Affects your stack

Sort by severity (breaking, then behavioral, then additive, then informational). One block per item.

```
[<SEVERITY>] <vendor> <item> <version> - <date>
Change: <one-line concrete change>
Affects: <which stack item and how>
Action: <migrate now | plan before <cutoff> | adopt optionally | no action>
Source: <url>
```

## Other activity

One line each. Only entries within the window that do not touch the stack.

```
- <vendor> <item> <version> (<date>): <one-line change> - <url>
```

## Footer

If no impacting items were found, say so plainly and give the count of entries reviewed.

```
No stack-impacting changes in window. Reviewed <n> entries across <m> sources.
```
