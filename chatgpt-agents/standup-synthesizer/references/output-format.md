# Output Format Reference

Canonical formats the agent emits. Keep lines short. No emoji. No purple in any rendered theme.

## Standup Digest

```
Standup — {date} (window: {window})

By person
{Name}
  Progress: {line} [sources]
  Next: {line} [sources]
  Blockers: {line or "None"}

Blockers (team)
- {owner}: {blocker} — needs {who/what}

Action list (priority order)
1. [{owner}] {action} — due {date or "n/a"} — {link}

Sources skipped: {list or "None"}
```

Rules:
- Window is stated explicitly, for example "last 24h" or "since Friday".
- Every item carries a named owner. Unknown owner is written as "Unassigned".
- Source tags use bracketed tool names, for example [Slack, Jira, Notion].
- Merge duplicate signals across tools into one line.
- When a person or project has nothing, write "No updates."

## Blocker Sweep

```
Blocker Sweep — {date}

1. [{owner}] {blocker} — blocked on {dependency} — age {days}d — {link}
2. ...

Nothing blocking: {names or "—"}
```

Rules:
- Sort by impact first, then age.
- Each blocker names the dependency and who can clear it.
- Include a source link per line.

## Priority order for actions

1. Blockers.
2. Due today.
3. Due this week.
4. Everything else.

Deduplicate before sorting. An action that appears in two tools is one action with both sources tagged.
