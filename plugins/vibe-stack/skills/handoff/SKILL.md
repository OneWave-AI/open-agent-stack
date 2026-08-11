---
name: handoff
description: Make a vibe-coded app survivable by someone else -- an honest README, the decisions written down, the shortcuts listed, and a setup path a new developer can follow without you. Use before handing an app to a client, a contractor, a teammate, or your own future self.
---

# Handoff

The app works and only one person knows why. That is fine until it is a client deliverable, a contractor's starting point, or a Monday six months from now. Handoff is the pass that moves the knowledge out of the head and into the repo.

## Workflow

1. **Prove the cold start.** Clone into a fresh directory and follow your own setup instructions exactly as written -- no memory, no shortcuts. Every step that fails or requires unwritten knowledge is a documentation bug. This single test catches most of what handoff docs get wrong.
2. **Write the honest README.** What the app does in two sentences, the stack, how to run it, how to deploy it, what every environment variable is and where to get its value. Then the sections people leave out: what is stubbed, what is intentionally simple, and what will break first under load.
3. **Record the decisions.** A short `DECISIONS.md`: why this database, why this auth, why the odd-looking workaround in that one file. Undocumented decisions get "cleaned up" by the next developer, and then the bug they were preventing comes back.
4. **Map the code.** A brief tour: where routes live, where shared components live, where the data layer is, and the two or three files that matter most. New developers do not need every file explained -- they need to know where to start reading.
5. **Hand over the keys, safely.** Inventory every account and service the app depends on (hosting, database, domain, email, payments, analytics) with who owns it today and what has to transfer. Credentials move through a secure channel, never the repo, never chat. Rotate anything that has been shared loosely.

## Rules

- Document what is true today, not the roadmap. Aspirational docs are worse than none because they get trusted.
- Every known gap gets written down. A listed shortcut is a decision; a hidden one is a trap.
- Delete dead code and unused dependencies before handing over -- the new developer cannot tell what is load-bearing and will preserve all of it.
- Setup instructions that only work on your machine are not instructions. If it needs a specific version, pin it and say so.
- If the app is going to a client, include the plain-language answer to "what can I change safely myself" -- copy, images, content -- and what needs a developer.
