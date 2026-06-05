# Scope Rules Reference

Define exactly what the agent may read. Narrow scope keeps output dense and private content out.

## Allowlist, not denylist

The agent reads only what is listed below. It never reaches outside the allowlist.

## Slack

- Read only channels in `SLACK_CHANNELS`.
- Never read direct messages or private channels not in the list.
- Ignore reactions, greetings, join/leave events, and off-topic chatter.
- Capture: decisions, status updates, blockers, direct requests.

## Notion

- Read only pages and databases whose IDs are in `NOTION_SCOPE`.
- Capture: status field changes, new tasks, owner changes, due-date changes.
- Ignore: unrelated pages, archived content.

## Atlassian

- Read only Jira projects and Confluence spaces whose keys are in `ATLASSIAN_SCOPE`.
- Capture: status transitions, new issues, risk-signal comments, due-date changes.
- Ignore: issues outside listed projects.

## Time window

- Default: last 24 hours.
- After a weekend or holiday: widen to cover the gap and state the window used.
- Blocker Sweep default: last 48 hours.

## Privacy

- Never output secrets, tokens, or credentials.
- Never quote private direct messages.
- If a source is unavailable, skip it, finish the run, and note what was skipped.

## Changing scope

Edit the connector config and the env values. Do not loosen the system prompt to widen scope.
