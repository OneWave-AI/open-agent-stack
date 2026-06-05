# ChatGPT Workspace Agents

Five ready-to-use ChatGPT **Workspace Agent** templates. Workspace Agents are OpenAI's evolution of custom GPTs — always-on agents that combine **connectors** (Gmail, Calendar, Slack, Drive, Salesforce, Notion, SharePoint, Atlassian), **schedules** (runs fire on a cadence with no one in the chat), **knowledge** (approved apps and files the agent may read), and **skills** (reusable workflows: when to use, the steps, and the output format).

Each template defines all four so it's drop-in. Where a connector needs auth or a key, a `.env.example` and setup note are included. Each leans into a distinct capability so they're genuinely different tools, not one chatbot five times.

> Scaffolding — specs below; templates being filled in.
> Note: Workspace Agents are in research preview (Business / Enterprise / Edu); custom GPTs convert to them over time. Templates are written to port to the OpenAI Assistants API too.

| Template | What makes it unique | Connectors | Schedule |
|----------|----------------------|------------|----------|
| `briefing-desk` | A personalized briefing pulled fresh on your topics and delivered on a cadence. | Web, Gmail, Slack | daily |
| `inbox-chief-of-staff` | Triages the inbox, drafts replies in your voice, negotiates calendar times. | Gmail, Google Calendar | hourly / on-demand |
| `pipeline-pulse` | Reads the CRM, flags stalled deals, and posts a deal-movement digest. | Salesforce, Slack | weekday AM |
| `doc-negotiator` | Reviews contracts and policies from your drive; redlines and risk flags. | Drive, SharePoint, Notion | on-demand |
| `standup-synthesizer` | Pulls updates across tools into one team standup and action list. | Slack, Notion, Atlassian | daily standup |

## Each template specifies

- **Instructions** — the agent's system prompt and behavior.
- **Connectors** — which approved apps it reads/writes, and why.
- **Knowledge** — the files or app data scoped to it.
- **Skills** — the named reusable workflows (trigger -> steps -> output format).
- **Schedule** — the default cadence, and how to change it.
- **Conversation starters** — and a portability note for the Assistants API.

## Sources

- [Introducing workspace agents in ChatGPT — OpenAI](https://openai.com/index/introducing-workspace-agents-in-chatgpt/)
- [Workspace agents — OpenAI Academy](https://openai.com/academy/workspace-agents/)
- [Building workspace agents (cookbook)](https://developers.openai.com/cookbook/articles/chatgpt-agents-sales-meeting-prep)
- [ChatGPT agent — OpenAI Help Center](https://help.openai.com/en/articles/11752874-chatgpt-agent)
