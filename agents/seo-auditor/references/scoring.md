# Scoring rubric

Score every finding on two axes, then sort.

## Impact

- High: directly blocks indexing or ranking, or affects every page (for example sitewide `noindex`, broken canonical, blocked `robots.txt` path, missing titles at scale).
- Medium: weakens ranking or click-through on important pages (for example missing meta descriptions, weak heading structure, slow LCP).
- Low: minor or cosmetic (for example a single missing alt attribute, an over-long title).

## Effort

- Low: a one-line or single-template change.
- Medium: a content rewrite or component change across several pages.
- High: an architecture, performance, or infrastructure change.

## Sort order

1. Sort by Impact descending (High, then Medium, then Low).
2. Within equal impact, sort by Effort ascending (Low first) so quick wins surface.
3. Break remaining ties by number of affected URLs, descending.

Place the top 20 results in the prioritized table in the report. List the remainder in the category findings sections.
