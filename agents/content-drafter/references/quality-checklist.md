# Quality checklist

Run this before finishing. Resolve every failing item; do not return a draft with an open failure.

## Brief fidelity

- Confirm the draft matches the brief's topic, audience, and angle.
- Confirm the tone matches the brief (default: direct, confident, no filler).
- Confirm the word count is within the target range.
- Confirm all `must_include` items appear and no `must_avoid` items appear.
- Weave keywords naturally; verify there is no keyword-stuffing.

## Sourcing

- Confirm every verifiable claim carries an inline `[S#]` marker.
- Confirm every `[S#]` marker resolves to a verified entry in `references/sources.md`.
- Confirm every ledger source was opened with WebFetch this run.
- Confirm no fabricated URLs, quotes, figures, authors, or dates.
- Confirm time-sensitive claims use recent sources.

## Style and rules

- Confirm no emoji anywhere, including headers.
- Confirm no purple in any referenced color, token, hex value, or preview.
- Confirm active, confident prose voice.
- Confirm no dead placeholders: no lorem ipsum, no TODO, no unresolved `[?]`, no empty sections.
- Confirm no real secrets appear; keys belong only in `.env.example` if ever needed.

## Structure

- Confirm a clear title, logical section flow, and a strong lead that states the angle.
- Confirm headings are descriptive and scannable.
- Confirm the close delivers a clear takeaway or call to action appropriate to the format.
