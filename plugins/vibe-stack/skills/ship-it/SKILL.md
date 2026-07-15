---
name: ship-it
description: Pre-flight and deploy -- catch the classic day-one embarrassments (exposed keys, missing env vars, broken build, open endpoints), then ship to Vercel with domains and analytics wired. Use when the app is ready for other humans.
---

# Ship It

The gap between "works on my machine" and "live without incident" is a checklist, not luck. Run the pre-flight, fix what it catches, deploy, verify live.

## Workflow

1. **Secrets sweep.** Grep the repo for keys, tokens, and connection strings in source or committed `.env` files. Anything found: move to env vars, rotate the exposed value (it is burned the moment it was committed), confirm `.env*` is gitignored. Verify every `NEXT_PUBLIC_` variable is genuinely safe to be public.
2. **Env parity.** Diff `.env.local` against what the code actually reads (`process.env.` sweep). Every variable the app needs gets set in Vercel before deploy -- the classic day-one failure is the env var that only exists on the laptop.
3. **Honesty check.** Production build passes locally (`npm run build` -- not just dev mode), no route returns mock data pretending to be real, API routes that mutate anything have auth checks, and forms actually submit somewhere (the deployed-with-a-dead-contact-form classic).
4. **Deploy.** Push, deploy to Vercel, set the domain if provided, confirm HTTPS. Then verify LIVE, not local: walk the money path on the production URL, check a mobile viewport, confirm OG image and title render in a link preview.
5. **Day-one instrumentation.** Analytics wired (whatever the user runs -- Vercel Analytics minimum), error visibility on (at least Vercel's runtime logs reviewed once post-deploy), and the deploy summary written: URL, what shipped, known gaps, the rollback command.

## Rules

- A committed secret is a rotated secret -- no exceptions, no "it's a private repo."
- Verify on the production URL; localhost passing proves nothing about env vars, domains, or edge behavior.
- Ship with known gaps listed, never with known gaps hidden -- "search is stubbed" in the summary is fine; discovering it live is not.
- If the build fails, the answer is fixing the build, never `--force` or skipping typecheck to get the deploy through.
