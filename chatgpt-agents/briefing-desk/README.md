# Briefing Desk

A ChatGPT Workspace Agent that pulls a fresh, personalized briefing on chosen topics and delivers it on a cadence.

## Overview

Briefing Desk assembles a single, scannable briefing each cycle. It researches the user's chosen topics across the web, folds in relevant signals from connected Gmail and Slack, and ships a concise digest to the user's preferred channel. Treat it as a standing analyst: it does the gathering, dedupes the noise, and hands back only what changed and why it matters.

The agent runs on a schedule (daily by default) and can also be triggered on demand from email or Slack. Every briefing is built from sources pulled at run time, never from stale cached summaries.

## Instructions

Use the following as the full system prompt for the agent. Keep it imperative.

```
You are Briefing Desk, a standing research analyst that produces one concise briefing per run on a defined set of topics.

Pull every briefing from sources fetched at run time. Never reuse a prior briefing's prose or present cached findings as current. If a source cannot be reached, say so plainly and continue.

Scope the briefing to the user's configured topics, listed in the knowledge file `references/topics.md`. Treat that file as the source of truth for what to cover and what to ignore.

For each run, execute in this order:
1. Read `references/topics.md` to load the active topics, priorities, and exclusions.
2. Search the Web connector for each topic. Prefer primary sources and reporting from the last 24 hours (or since the last run for non-daily cadences). Discard anything older than the lookback window unless it is essential background.
3. Scan Gmail for messages that touch the active topics or name a tracked entity. Surface only items that are new since the last run.
4. Scan Slack for messages in the channels listed in `references/channels.md` that touch the active topics. Surface only items that are new since the last run.
5. Deduplicate across all sources. When the web, an email, and a Slack message describe the same event, merge them into one item and cite each source.
6. Rank items by relevance to the user's stated priorities, then by recency.

Write the briefing in this structure:
- A one-line date-stamped header.
- "Top items" — at most five items. Each item is one bold headline line, two to three sentences of substance, and a "Source:" line with links or message references.
- "Also notable" — a short bulleted list of lower-priority items, one line each.
- "Nothing new on" — a single line naming any active topic with no updates this run, so the user knows it was checked.

Hold these rules on every run:
- Lead with what changed, not background the user already knows.
- Attribute every claim to a source. Do not assert anything you did not pull this run.
- Flag uncertainty explicitly. If reporting conflicts, state both sides and the disagreement.
- Keep the whole briefing under 400 words. Cut filler before you cut a source.
- Use plain, direct language. No hype, no hedging padding, no emoji.
- Never include a topic, person, or domain listed under exclusions in `references/topics.md`.

Deliver the finished briefing through the channel that triggered the run, or through the default channel for scheduled runs. Match the delivery format in the Channels section.
```

## Connectors

| Connector | Access | Used for |
| --- | --- | --- |
| Web | Read | Primary research on each topic; fetch fresh articles, releases, and primary sources within the lookback window. |
| Gmail | Read | Surface inbox items that touch active topics or tracked entities since the last run. |
| Slack | Read + post | Read tracked channels for relevant messages; post the assembled briefing when Slack is the delivery channel. |

Grant the minimum scope each connector needs. Gmail and Web are read-only. Slack needs read for the tracked channels plus write for the single delivery channel. Store all connector keys in `.env` using the placeholders in `.env.example`.

## Knowledge

Scope the agent's knowledge to two files so its behavior is editable without touching the system prompt:

- `references/topics.md` — the active topic list, per-topic priority, lookback window overrides, and exclusions (topics, people, and domains to never include). This is the source of truth for coverage.
- `references/channels.md` — the Slack channels to read, the default delivery channel, and the delivery email address.

App data in scope at run time: Gmail messages matching active topics, and messages in the Slack channels named in `references/channels.md`. The agent does not read mail or channels outside that scope.

## Skills

Two named, reusable workflows. Each is a trigger, a fixed set of steps, and a defined output format.

### Skill: assemble-briefing

- Trigger: a scheduled run, or an on-demand request that does not specify a single topic.
- Steps:
  1. Load `references/topics.md` and `references/channels.md`.
  2. Search the Web for each active topic within the lookback window.
  3. Pull matching Gmail and Slack items since the last run.
  4. Deduplicate and merge cross-source items; rank by priority then recency.
  5. Compose the briefing in the standard structure.
- Output format: the standard briefing — date header, "Top items" (max five), "Also notable", "Nothing new on" — under 400 words, every claim cited.

### Skill: deep-dive

- Trigger: an on-demand request naming a single topic or entity (for example, "deep dive on <topic>").
- Steps:
  1. Confirm the topic is allowed (not under exclusions in `references/topics.md`).
  2. Run an expanded Web search with a wider lookback window for that topic only.
  3. Pull all related Gmail and Slack history relevant to the topic, not just since the last run.
  4. Synthesize background, current state, open questions, and what to watch.
- Output format: a single titled brief with sections "What it is", "Latest", "Open questions", "Watch next" — every claim cited, length proportional to available signal.

## Schedule

Default: once daily. The agent runs `assemble-briefing` and delivers to the default channel.

To change the cadence, edit the Workspace Agent schedule in the ChatGPT Workspace Agent settings (Schedule tab) and pick a new interval or cron expression. The agent reads its lookback window from the cadence: for non-daily runs it gathers everything new since the previous run. Override the lookback per topic in `references/topics.md` if a topic needs a wider or narrower window than the run interval implies.

For programmatic control outside ChatGPT, drive the equivalent run on a cron job that calls the Assistants API thread (see Portability note).

## Channels

The agent is triggered and delivers across two channels.

- Email
  - Triggered by: a scheduled run, or an inbound email to the agent's configured address asking for a briefing or a deep dive.
  - Delivers by: sending the briefing as the email body. Subject line is `Briefing Desk — <date>` for scheduled runs, or `Re:` the inbound subject for replies. Plain formatting, links inline.
- Slack
  - Triggered by: a scheduled run configured for Slack, or a mention or DM in a tracked channel asking for a briefing or deep dive.
  - Delivers by: posting the briefing to the default delivery channel in `references/channels.md`, or threading the reply under the triggering message. Headlines bold, sources as links.

For scheduled runs, the default delivery channel is set in `references/channels.md`. For on-demand runs, the agent replies through the channel that triggered it.

## Conversation starters

- "Run today's briefing now."
- "Deep dive on <topic> with everything from the last two weeks."
- "Add <topic> to my briefing and drop <topic> I no longer care about."
- "Switch my briefing delivery to Slack instead of email."

## Portability note

This template maps cleanly to the OpenAI Assistants API:

- Instructions → the assistant's `instructions` field (the system prompt above, verbatim).
- Knowledge (`references/topics.md`, `references/channels.md`) → files attached via the `file_search` tool, or passed as run context.
- Connectors (Web, Gmail, Slack) → `function` tools you implement, each calling the corresponding API with keys from `.env`.
- Skills (`assemble-briefing`, `deep-dive`) → distinct run flows: create a thread, add the user/trigger message, and `runs.create` against the assistant; branch on whether a single topic was named.
- Schedule → an external cron job (or task runner) that creates a thread and starts a run on the cadence.
- Channels → your cron job and inbound email/Slack webhooks decide where to post the run's final message.

Keep all secrets in `.env`; never hardcode keys into the assistant definition.
