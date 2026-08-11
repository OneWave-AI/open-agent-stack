# Open Agent Stack

Production-ready plugins, managed agents, multi-agent orchestrators, and design tokens for **Claude Code, the Agent SDK, and any AI tool**.

27 artifacts. MIT-licensed. Every one ships with its own README, real prompts, and a working install path — no stubs, no dead placeholders.

Built and maintained by [OneWave AI](https://www.onewave-ai.com). Companion to the [Claude Skills Library](https://github.com/OneWave-AI/claude-skills) (205 single-file skills).

---

## Install

```bash
# Add the marketplace, then install any plugin by name
claude plugin marketplace add OneWave-AI/open-agent-stack
claude plugin install vibe-stack

# Or clone the whole stack
git clone https://github.com/OneWave-AI/open-agent-stack.git
```

Agents, orchestrators, and design styles are copy-in directories — see each one's README for its install step and required keys (`.env.example`).

---

## Plugins

Installable command + skill bundles for Claude Code. 26 skills across 8 plugins.

| Plugin | What it does | Skills |
|--------|--------------|--------|
| [`vibe-stack`](plugins/vibe-stack) | The full vibe-coding loop — scaffold an app or marketing site against a real design system, animate it with GSAP and a real motion system, replace the fake data with a real backend, unstick it when it breaks, strip the AI look, ship it, demo it | 14 |
| [`sales-desk`](plugins/sales-desk) | The rep's daily loop: pre-call briefs, pipeline hygiene, account snapshots, and post-call follow-ups that write themselves | 4 |
| [`market-desk`](plugins/market-desk) | A personal equity-research desk — one-page ticker briefs, portfolio risk reviews, earnings-season prep. Research and analysis only, not financial advice | 3 |
| [`ai-news-hq`](plugins/ai-news-hq) | An AI-news crew (scout, analyst, editor) that tracks the field via web search and ships a ranked briefing on a cadence | 1 |
| [`release-radar`](plugins/release-radar) | Tracks new AI model and tool releases, changelogs, and deprecations, then flags what actually affects your stack | 1 |
| [`competitor-watch`](plugins/competitor-watch) | Monitors competitor sites, pricing pages, and content via web search, and reports the diffs | 1 |
| [`content-engine`](plugins/content-engine) | Repurposes one source piece into posts, threads, email, and video scripts | 1 |
| [`brand-kit`](plugins/brand-kit) | Applies a design style (tokens + theme) and exposes brand commands | 1 |

Inside `vibe-stack`: [`new-app`](plugins/vibe-stack/skills/new-app), [`site-builder`](plugins/vibe-stack/skills/site-builder), [`add-feature`](plugins/vibe-stack/skills/add-feature), [`make-it-real`](plugins/vibe-stack/skills/make-it-real), [`motion-system`](plugins/vibe-stack/skills/motion-system), [`gsap-web`](plugins/vibe-stack/skills/gsap-web), [`scroll-story`](plugins/vibe-stack/skills/scroll-story), [`micro-interactions`](plugins/vibe-stack/skills/micro-interactions), [`motion-perf`](plugins/vibe-stack/skills/motion-perf), [`polish-pass`](plugins/vibe-stack/skills/polish-pass), [`unstick`](plugins/vibe-stack/skills/unstick), [`ship-it`](plugins/vibe-stack/skills/ship-it), [`demo-video`](plugins/vibe-stack/skills/demo-video), [`handoff`](plugins/vibe-stack/skills/handoff).

---

## Managed agents

Autonomous, web-search-enabled agents that take a brief and return finished, source-cited work.

| Agent | What it does |
|-------|--------------|
| [`content-drafter`](agents/content-drafter) | Turns a content brief into a finished long-form draft with every factual claim cited to a verified source |
| [`lead-enricher`](agents/lead-enricher) | Turns a sparse lead or account into a clean, verified, structured record sourced only from public information |
| [`market-researcher`](agents/market-researcher) | Researches a market, segment, or company and returns a structured, sourced brief |
| [`news-curator`](agents/news-curator) | Pulls and ranks the most relevant developments of the day for a topic, then returns a source-cited briefing |
| [`seo-auditor`](agents/seo-auditor) | Audits a page or site and returns a prioritized list of SEO fixes |

---

## ChatGPT Workspace Agents

Templates for ChatGPT's connected-workspace agents — same jobs, different runtime.

| Agent | What it does |
|-------|--------------|
| [`inbox-chief-of-staff`](chatgpt-agents/inbox-chief-of-staff) | Triages the inbox, drafts replies in your voice, and negotiates calendar times |
| [`standup-synthesizer`](chatgpt-agents/standup-synthesizer) | Pulls updates across Slack, Notion, and Atlassian into one consolidated standup and a prioritized action list |
| [`pipeline-pulse`](chatgpt-agents/pipeline-pulse) | Reads the CRM, flags stalled deals, and posts a deal-movement digest to Slack |
| [`doc-negotiator`](chatgpt-agents/doc-negotiator) | Reviews contracts and policies from connected drives and returns clause-level redlines |
| [`briefing-desk`](chatgpt-agents/briefing-desk) | Pulls a fresh personalized briefing on chosen topics and delivers it on a cadence |

---

## Orchestrators

A lead agent planning and coordinating a team of five sub-agents, end to end.

| Orchestrator | What it does |
|--------------|--------------|
| [`sales-orchestrator`](orchestrators/sales-orchestrator) | Coordinates a five-agent sales team from target list to sequenced outreach |
| [`marketing-orchestrator`](orchestrators/marketing-orchestrator) | Coordinates a five-agent marketing team from brief to published piece |

---

## Design styles

Universal design-token themes — CSS variables, Tailwind config, and motion tokens. Drop one in and the whole app changes character. Installable together via [`brand-kit`](plugins/brand-kit).

| Style | Look |
|-------|------|
| [`liquid-glass`](design-styles/liquid-glass) | Translucent depth on a dark base — frosted refractive glass over deep slate |
| [`neo-terminal`](design-styles/neo-terminal) | AI-console / cyber — near-black base with phosphor-green and amber |
| [`aurora-mesh`](design-styles/aurora-mesh) | Soft futuristic dark — drifting gradient-mesh in teal, amber, and rose |
| [`tidal`](design-styles/tidal) | Ocean depth as a dark theme — deep blues and teals fading to abyssal navy |
| [`mono-brutalist`](design-styles/mono-brutalist) | Stark monochrome on white — maximum contrast, hard edges, thick borders |
| [`sand-terra`](design-styles/sand-terra) | Warm editorial-organic on a dark base — sand and terracotta |
| [`cirrus`](design-styles/cirrus) | Light cloud-and-sky — soft whites and pale sky blues, very low contrast |

---

## Why this exists

Skills, plugins, agents, and design tokens are converging into cross-tool protocols. This repo treats them as universal building blocks: the primary runtime is Claude Code, but the patterns port to the Agent SDK, MCP, and other AI tooling.

It is the bundle-and-build companion to [`claude-skills`](https://github.com/OneWave-AI/claude-skills), which stays single-file and zero-dependency. Anything with a manifest, a team, or a build step lives here.

---

## The OneWave open-source constellation

- [claude-skills](https://github.com/OneWave-AI/claude-skills) — 205 single-file skills, zero dependencies
- **open-agent-stack** (this repo) — plugins, agents, orchestrators, design tokens
- Want your team trained on agents? [In-person and virtual AI trainings, bootcamps, and workshops](https://www.onewave-ai.com/ai-training) from the OneWave team, including the [Claude Bootcamp](https://www.onewave-ai.com/claude-bootcamp)

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). The bar is production-ready: no stubs, no dead placeholders.

## License

MIT
