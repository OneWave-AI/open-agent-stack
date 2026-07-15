# market-desk

A personal equity-research desk. Three skills that do the homework retail investors skip: understand what you own, see the risk you have actually accumulated, and walk into earnings season prepared instead of surprised.

**This plugin is research and analysis tooling, not financial advice.** It never tells you to buy or sell anything. It organizes public information and your own data so your decisions are informed ones -- made by you, ideally with a licensed advisor for anything that matters.

## Skills

| Skill | What it does |
|-------|--------------|
| `ticker-brief` | One company on one page: what the business actually does, how it makes money, recent results, valuation context, bull and bear case, risks |
| `portfolio-review` | Your holdings analyzed: allocation, concentration, sector/theme overlap, correlated-risk flags, and the questions to ask yourself |
| `earnings-watch` | Earnings-season prep for your holdings and watchlist: dates, what the market is watching, prior-quarter context |

## Install

```bash
claude plugin marketplace add OneWave-AI/open-agent-stack
claude plugin install market-desk
```

## Data honesty

Web-sourced figures are cited and dated. Market data found via search can be stale or wrong -- every brief says where numbers came from and when. Verify anything load-bearing against your broker or a primary source before acting on it.

Pairs with `portfolio-analyzer` in [claude-skills](https://github.com/OneWave-AI/claude-skills) for deeper allocation work.
