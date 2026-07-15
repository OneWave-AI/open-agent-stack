---
name: portfolio-review
description: Analyze your actual holdings -- allocation, concentration, sector and theme overlap, correlated-risk flags, and the questions worth asking yourself. Works from a broker CSV export or a pasted list. Analysis only, never buy/sell advice.
---

# Portfolio Review

Most portfolios were accumulated, not designed -- and the owner often does not know what they actually hold until it is laid out. Input: broker export (.csv) or a pasted list of positions with share counts; multiple accounts welcome (label them). Output: what you own, seen clearly.

## Workflow

1. **Consolidate.** Merge all accounts into one true picture -- the risk lives in the total, not per account. Compute weights per position, per sector, per asset class. Look through funds where holdings are identifiable (an S&P 500 fund plus large tech singles is more tech than the owner thinks).
2. **Concentration read.** Top-5 positions as a share of the whole, single positions above 10%, and employer stock called out specifically (income and equity in one company is doubled exposure, and equity comp makes it sneak up).
3. **Correlation themes.** Group by what actually moves together, not just sector labels: rate-sensitives, AI/tech beta, energy, consumer cyclicals. The classic finding -- "you own eleven tickers but effectively two bets" -- comes from this step. Flag where a single macro story (rates, AI capex, one country) drives most of the book.
4. **Structural flags.** Cash drag or absence of any buffer, tax-inefficient placement where visible (high-yield instruments in taxable accounts), positions with no apparent role, and anything the user marked as untouchable (note it, work around it).
5. **The questions, not the answers.** Deliver findings as decisions the owner should make deliberately: "Position X is 22% of the total -- is that conviction or drift?" "Three holdings are the same AI-infrastructure bet -- intended?" Each question with the data beside it. What to DO about any of it is for the user and a licensed advisor.

## Rules

- Analysis, never advice: no "sell," no "trim," no "you should" -- findings and questions only, and the advisor line appears in the deliverable.
- Prices from an export are as-of the export date; anything fetched is dated and marked possibly stale.
- Look-through honesty: fund overlap analysis only where holdings are actually verifiable, labeled approximate where estimated.
- No performance prediction, ever. The review describes exposure, not the future.
- Treat the data as sensitive: totals and positions stay in the report file, not in console chatter.
