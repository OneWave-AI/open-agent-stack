---
name: make-it-real
description: Turn the demo into a product -- replace hardcoded arrays with a real database, stubbed sign-in with real auth, and the fake form with one that actually delivers. Use when an app looks finished but nothing it shows is true.
---

# Make It Real

Every vibe-coded app hits the same wall: it looks done and does nothing. The dashboard charts a hardcoded array, the login button sets a boolean, the contact form resolves a promise into the void. This is the pass that makes the screens tell the truth.

## Workflow

1. **Inventory the lies.** Sweep the repo and list every place the UI implies something real that is not: hardcoded arrays feeding lists and charts, `useState(true)` standing in for a session, form handlers with no network call, `TODO` next to anything on the money path. Show the user the list before changing code -- it is usually longer than they think.
2. **Model the data once.** Before wiring anything, write the schema the app actually needs: tables, relationships, and the row-level access rule for each ("a user reads only their own rows"). Getting this wrong is the expensive mistake; getting it written down takes ten minutes.
3. **Wire data, one screen at a time.** Typed client, real query, real loading state, real empty state, real error state. Delete the hardcoded array in the same commit that replaces it -- a fallback to fake data hides outages and lies to you later.
4. **Real auth, real authorization.** Sign-in against an actual provider, session read server-side, and -- the step people skip -- every mutating route and every row query checks who is asking. A logged-in user is not an authorized user. Protect the API, not just the page that links to it.
5. **Close the loop on side effects.** Forms deliver somewhere a human will see (inbox, database, notification), payments hit real objects in test mode first, and uploads land in real storage with a size and type limit. Then verify each one end to end by actually doing it and checking the other side.

## Rules

- Never leave mock data behind a flag "just in case" -- if the query fails, the empty or error state is the honest UI.
- Secrets stay server-side. Anything reaching the browser is public: audit every `NEXT_PUBLIC_` and every key used in a client component.
- Validate input at the boundary, on the server, always -- client-side validation is a UX feature, not a security control.
- Row-level access rules belong in the database when it supports them, so a forgotten check in one route cannot leak everything.
- Migrations are files in the repo, not clicks in a dashboard, or the next environment will not match.
- Report what is now genuinely live versus still stubbed. The user should never have to guess which screens are real.
