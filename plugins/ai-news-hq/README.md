# ai-news-hq

An AI-news team and HQ inside Claude Code. A small crew of agents tracks the AI field with web search, ranks what actually matters, and ships a briefing on a cadence — so you stay current without doom-scrolling ten feeds.

> Scaffolding — spec and sources are real; agent wiring being filled in.

## The crew

| Agent | Owns |
|-------|------|
| `scout` | Sweeps the source list (below) for the last 24h / 7d |
| `analyst` | Dedupes, ranks by signal, flags what affects your stack |
| `editor` | Writes the briefing in your format and voice |

## Sourcing

Sources are split by job, not lumped together. See [references/sources.md](references/sources.md) for the full, researched list with cadence. In short:

- **Model releases (real-time):** LLM Stats — tracks GPT/Claude/Gemini/Llama/Mistral/DeepSeek releases with dates and benchmarks.
- **High-cadence feed:** MarkTechPost RSS.
- **Daily digests:** TLDR AI, Techpresso.
- **Weekly deep dives:** The Batch (Andrew Ng), Import AI (Jack Clark) for research + policy.
- **Community signal:** Hacker News, r/LocalLLaMA for what engineers actually think.
- **Editorial:** MIT Technology Review for longer-horizon calls.

## Output

A ranked briefing: headline, why-it-matters, source link, and a "touches your stack" flag. Default cadence weekday mornings; configurable.

## Skill: `daily-ai-brief`

Trigger -> sweep sources -> rank -> write briefing in the chosen format. Defined as a reusable skill so it runs the same way every time.
