# Plugins

Installable command + skill bundles. Each is a folder with its own `.claude-plugin/plugin.json` and README.

| Plugin | What it does | Web search |
|--------|--------------|:---:|
| `ai-news-hq` | An AI-news team and HQ: curators, analysts, and an editor that track the field and ship daily/weekly briefings. | yes |
| `release-radar` | Tracks new AI model and tool releases, version changelogs, and deprecations; flags what affects your stack. | yes |
| `competitor-watch` | Monitors competitor sites, pricing pages, and content; reports diffs. | yes |
| `content-engine` | Repurposes one source piece into posts, threads, email, and video scripts. | optional |
| `brand-kit` | Applies a OneWave design style (tokens + theme) and exposes brand commands. | no |
| `sales-desk` | The rep's daily loop: pre-call briefs, pipeline hygiene, account snapshots, post-call follow-ups. | yes |
| `vibe-stack` | Idea to shipped app: scaffold with a design-token theme, de-AI polish pass, clean Vercel deploy. | no |
| `market-desk` | Personal equity-research desk: ticker briefs, portfolio reviews, earnings prep. Research, not advice. | yes |

Install any one with `claude plugin install <name>` after adding the marketplace (see root README).
