# content-engine

Repurposes one source piece into posts, threads, email, and video scripts.

## What it does

Take a single source piece (blog post, transcript, recording notes, doc, or URL) and fan it out into channel-ready content in one pass:

- LinkedIn and X/Twitter posts
- A multi-part thread
- A short email (newsletter or nurture)
- A short-form video script (hook, beats, CTA)

Every output carries one core message and matches the source voice. No filler, no dead placeholders.

## When to use

- You published or recorded something once and want it everywhere.
- You need a week of channel content from a single asset.
- You want consistent messaging across formats without rewriting from scratch.

## Install

```
claude plugin install content-engine
```

## Skill it provides

- `repurpose` — extracts the core message from a source piece, then generates posts, a thread, an email, and a video script. Triggers when you ask to repurpose, atomize, or turn one piece into many. If you pass a URL, it fetches the page with the built-in web tool (no API key needed).
