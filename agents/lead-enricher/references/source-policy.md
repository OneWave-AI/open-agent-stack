# Source Policy

Rank, verify, and lawfully use public sources.

## Source ranking (high to low)
1. The entity's official website (about, team, contact, footer, filings).
2. Official regulatory or registry filings.
3. Reputable press releases and major news outlets.
4. Established public profiles and directories.
5. Aggregators and secondary databases (use only for corroboration, never as a sole source for `high` confidence).

## Freshness
- Capture a `retrieved` date for every source.
- Prefer sources dated within the last 18 months for volatile fields (title, employee count, funding).
- When two sources conflict, prefer the more recent dated source, then the higher-ranked source.

## Confidence mapping
- `high` — two independent dated sources agree.
- `medium` — one credible source.
- `low` — inferred, single weak source, or pattern-derived.
- `none` — unverifiable; the field value must be `null`.

## Lawful use
- Use only publicly accessible pages.
- Do not access paywalled, gated, or login-only content.
- Do not bypass access controls or scrape sources that forbid automated access.
- Do not store sensitive personal data beyond the public business attributes defined in the field schema.
