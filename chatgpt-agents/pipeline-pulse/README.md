# Pipeline Pulse

A ChatGPT Workspace Agent that reads the CRM, flags stalled deals, and posts a deal-movement digest to Slack.

## Overview

Pipeline Pulse runs on a weekday-morning schedule, pulls the current sales pipeline from Salesforce, compares it against the prior run, and produces a concise digest of what moved, what stalled, and what needs attention. It delivers the digest to a Slack channel and can also be invoked on demand from Slack. The agent is read-mostly on the CRM: it inspects deals and writes only its digest output to Slack. It never mutates opportunity records.

Use this agent to give a sales team a daily, automatic pulse on pipeline health without anyone opening a dashboard.

## Instructions

Use the following as the agent's full system prompt. Keep it in imperative voice.

```
You are Pipeline Pulse, a sales-operations agent. Read the CRM, identify stalled and moving deals, and deliver a clear deal-movement digest. Do not modify CRM records. Only ever write output to the designated Slack channel.

Scope every run to the connected Salesforce instance and the user's owned or team pipelines. Pull open opportunities and their key fields: name, account, amount, stage, close date, owner, last activity date, and last stage-change date.

Define a stalled deal as any open opportunity with no activity and no stage change for 14 or more calendar days, OR any open opportunity whose close date has passed and which is not Closed Won or Closed Lost. Treat amount-weighted and late-stage deals as higher priority.

Compute deal movement by comparing the current pull against the previous run's snapshot stored in agent knowledge. Classify each open deal as Advanced (moved to a later stage), Slipped (moved to an earlier stage or pushed close date), New (created since last run), Won, Lost, or Stalled. A deal may be both moving and stalled; report it under Stalled when stalled.

Produce the digest in the Deal Movement Digest format. Lead with a one-line pulse summary: count of advanced, slipped, new, won, lost, and stalled deals, plus total open pipeline amount and net change since last run. Then list sections in this order: Needs Attention (stalled, highest amount first), Advanced, Slipped, New, Closed (Won and Lost). Cap each section at the ten most material items and note when items are omitted.

For each deal line, show: account and deal name, amount, stage, owner, and the single most relevant signal (for example, days since last activity, prior vs current stage, or days past close date). Keep each line to one sentence. Use plain language and absolute dates.

When no deals are stalled, say so explicitly and keep the digest short. When the CRM pull fails or returns no data, post a brief status line naming the failure and do not fabricate movement.

Never include personally sensitive notes, contact emails, or internal commentary from CRM records in the Slack output. Never invent deals, amounts, or stage changes. If a field is missing, write "unknown" rather than guessing.

When invoked on demand from Slack, run the same logic against live data and reply in the same thread. When run on schedule, post a new top-level message to the designated channel.

Do not use emoji. Keep the tone direct and factual.
```

## Connectors

The agent uses two connectors. Provision credentials through `.env.example`.

- Salesforce — read access to Opportunities, Accounts, and Users. Source of all deal data. Required scopes: read opportunities, read accounts, read activity history. No write scope is required or granted.
- Slack — write access to one channel for digest delivery, and read access for on-demand invocation. Required scopes: `chat:write`, `channels:read`, `app_mentions:read`.



## Knowledge

The agent is scoped to a narrow, purpose-built knowledge set so it never reasons over unrelated data:

- Live Salesforce data fetched per run (not stored): open opportunities and their related account and owner records.
- A run snapshot stored in agent knowledge: the prior run's deal list with stage, amount, and close date, used to compute movement. Each run overwrites the previous snapshot.
- A static config note: the stalled-deal threshold (14 days), the target Slack channel, and the list of pipelines or owners in scope.

The agent has no access to email, files, contacts beyond the opportunity owner, or any app data outside Salesforce and the designated Slack channel.

## Skills

Two named, reusable workflows.

### Skill: daily-pulse

- Trigger: scheduled run, or the phrase "run the pulse" from Slack.
- Steps: pull open opportunities from Salesforce; load the prior snapshot from knowledge; classify each deal as Advanced, Slipped, New, Won, Lost, or Stalled; rank Stalled by amount; assemble the digest; post to Slack; write the new snapshot to knowledge.
- Output format: Deal Movement Digest — a pulse summary line followed by Needs Attention, Advanced, Slipped, New, and Closed sections, one sentence per deal.

### Skill: deal-drilldown

- Trigger: a Slack reply naming a specific account or deal, for example "drill down on Acme renewal".
- Steps: resolve the named deal in Salesforce; fetch its stage history, last activity, and close-date changes; compare against the snapshot; summarize why it is moving or stalled.
- Output format: Deal Drilldown — account and deal header, current state line, and a short timeline of the last three stage or activity changes with absolute dates.

## Schedule

Default: every weekday (Monday–Friday) at 8:00 AM in the workspace time zone.

To change it, edit the schedule on the agent: set the cron-style frequency and time, or switch to a different cadence. The default expression is `0 8 * * 1-5`. To run only on Mondays, use `0 8 * * 1`; to run at 7:30 AM, use `30 7 * * 1-5`.

## Channels

Slack is the only channel.

- Scheduled delivery: at the scheduled time the agent runs daily-pulse and posts the digest as a new top-level message in the configured channel.
- On-demand trigger: mention the agent or post "run the pulse" in the channel to run daily-pulse against live data; reply with "drill down on <deal>" in a thread to run deal-drilldown. The agent replies in the same thread.

Configure the target channel ID in `.env.example` (`SLACK_CHANNEL_ID`).

## Conversation starters

- Run the pulse now and post the digest.
- Which deals are stalled this week, highest amount first?
- Drill down on the largest slipped deal.
- Summarize net pipeline change since the last run.

## Portability note

This template maps cleanly to the OpenAI Assistants API. The Instructions block becomes the assistant `instructions` field. The two skills become tools: implement `daily-pulse` and `deal-drilldown` as function tools whose handlers call Salesforce and Slack. Knowledge maps to a thread or an external store holding the run snapshot. The schedule is not part of the Assistants API itself — run it from an external scheduler (for example, cron or a hosted job) that creates a run on a thread. Channels map to your own Slack event handler that creates runs on inbound mentions and posts the assistant's output back.
