# Open Agent Stack

Open-source plugins, managed agents, multi-agent orchestrators, and design tokens for **Claude Code, the Agent SDK, and any AI tool**.

Built and maintained by [OneWave AI](https://www.onewave-ai.com). Companion to the [Claude Skills Library](https://github.com/OneWave-AI/claude-skills).

MIT-licensed. Every artifact below ships production-ready with its own README — no stubs, no dead placeholders.

---

## Why this exists

Skills, plugins, agents, and design tokens are converging into cross-tool protocols. This repo treats them as universal building blocks — primary runtime is Claude Code, but the patterns port to the Agent SDK, MCP, and other AI tooling.

It is the bundle-and-build companion to `claude-skills` (which stays single-file, zero-dependency). Anything with a manifest, a team, or a build step lives here.

---

## What's inside

| Directory | What it holds | Count |
|-----------|---------------|-------|
| [`plugins/`](plugins) | Installable command + skill bundles | 5 |
| [`agents/`](agents) | Managed autonomous agents (web-search enabled) | 5 |
| [`chatgpt-agents/`](chatgpt-agents) | ChatGPT / GPT agent templates | 5 |
| [`orchestrators/`](orchestrators) | Multi-agent systems — a lead + a team of 5 sub-agents | 2 |
| [`design-styles/`](design-styles) | Universal design-token themes | 7 |

---

## Install

```bash
# Add the marketplace, then install any plugin
claude plugin marketplace add OneWave-AI/open-agent-stack
claude plugin install ai-news-hq

# Or clone the whole stack
git clone https://github.com/OneWave-AI/open-agent-stack.git
```

Each artifact carries its own README with what it does, when to use it, required keys (`.env.example`), and install steps.

---

## The OneWave open-source constellation

- [claude-skills](https://github.com/OneWave-AI/claude-skills) — 172 single-file skills, zero dependencies
- **open-agent-stack** (this repo) — plugins, agents, orchestrators, design tokens
- More at [onewave-ai.com/open-source](https://www.onewave-ai.com)

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). The bar is production-ready, no stubs, no dead placeholders.

## License

MIT
