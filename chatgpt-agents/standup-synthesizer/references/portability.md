# Portability Reference — OpenAI Assistants API

Map each Workspace Agent concept to the Assistants API.

| Workspace Agent | Assistants API equivalent |
|-----------------|---------------------------|
| Instructions (system prompt) | `instructions` field on the assistant |
| Connectors (Slack, Notion, Atlassian) | Function tools that wrap each provider's REST API |
| Knowledge files (`references/`) | Retrieval files attached to the assistant |
| Knowledge scope (channel/project allowlists) | Arguments passed into the connector functions |
| Skills (named workflows) | Documented function-call sequences the assistant runs in order |
| Schedule | External cron or scheduler that creates a run on cadence |
| Channels (Slack trigger and delivery) | Inbound webhook creates a run; a function posts the result back |

## Suggested function tools

- `slack_read_channels(channels, since)` returns recent messages.
- `slack_post_message(channel, text)` posts the digest.
- `notion_read_scope(ids, since)` returns changed pages and database rows.
- `atlassian_read_scope(keys, since)` returns changed issues and comments.

## Run lifecycle

1. Trigger (schedule or Slack webhook) creates a thread and a run.
2. The model calls the read functions for each connector.
3. The model synthesizes the digest using the Instructions and reference formats.
4. The model calls `slack_post_message` to deliver.

## Config carryover

Reuse the same env values from `.env.example` for the function implementations. Keep the allowlists identical so scope behavior matches the Workspace Agent.
