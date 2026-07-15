# vibe-stack

Idea to shipped app in three moves. The gap between "I vibe-coded a thing" and "people think a team built this" is a design system, a polish pass, and a clean deploy -- this plugin is those three things.

## Skills

| Skill | What it does |
|-------|--------------|
| `new-app` | One sentence -> scaffolded Next.js + Tailwind app with a real design-token theme applied from day one, opinionated structure, working auth/data slots |
| `polish-pass` | The de-AI pass: strip template smell from design AND copy -- editorial layout, real motion, no gradient-purple-hero disease |
| `ship-it` | Pre-flight (env vars, build, obvious security holes) then deploy to Vercel with the checklist that prevents the classic day-one embarrassments |

## Install

```bash
claude plugin marketplace add OneWave-AI/open-agent-stack
claude plugin install vibe-stack
```

## Works well with

- The 7 token themes in this repo's [`design-styles/`](../../design-styles) -- `new-app` applies one at scaffold time so the app never has a default-Tailwind phase.
- The deeper design skills in [claude-skills](https://github.com/OneWave-AI/claude-skills): `design-style-installer`, `motion-language-designer`, `dark-mode-converter`, `claude-design-critic`.

No API keys required to scaffold; deploying needs a Vercel account.
