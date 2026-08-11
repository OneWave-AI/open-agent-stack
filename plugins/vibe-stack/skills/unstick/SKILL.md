---
name: unstick
description: The app broke and you did not write the code -- find the actual cause instead of guessing at fixes, and stop the loop where every attempted fix adds a new bug. Use when something worked yesterday, the build fails, the deploy is white, or the same error keeps coming back.
---

# Unstick

The worst hour in vibe coding is the fix spiral: an error appears, a plausible fix gets applied, a different error appears, repeat until the file is unrecognizable and nothing works. The way out is boring and reliable -- find the cause before touching anything.

## Workflow

1. **Get the real error.** Not the symptom the user describes -- the actual message and stack. Browser console, terminal output, build log, and the platform's runtime logs if it is only broken in production. Read the whole trace including the first line, which is the one people skip.
2. **Reproduce on demand.** Name the exact steps that trigger it, every time. A bug you cannot reproduce cannot be verified as fixed, and "seems better now" is how bugs come back. If it only breaks in production, that is a finding: the difference is env vars, build mode, or data.
3. **Bisect the change.** Something worked before. `git log` and `git diff` since the last known-good state, then narrow: which change, which file, which line. If nothing was committed, the last thing edited is the suspect. Do not skip to a fix because the cause "seems obvious" -- obvious causes are wrong often enough to cost the whole hour.
4. **Explain it before fixing it.** State the cause in one sentence a non-programmer would follow: "the page asks for the user's name before the user has loaded, so it reads a property of nothing." If that sentence cannot be written, the cause has not been found yet -- keep reading, add a log, check the actual value rather than the assumed one.
5. **Fix the cause, then verify.** One change, aimed at the cause. Rerun the reproduction steps. Then check the two nearest flows for collateral damage, and run the production build. Revert every experimental change made while investigating -- stray debugging edits become tomorrow's mystery.

## Rules

- One hypothesis at a time. Changing three things and seeing it work teaches nothing and leaves two unexplained edits in the codebase.
- Never silence an error to make it go away -- deleted `try/catch` bodies, `any` casts, and disabled typechecks convert a loud bug into a silent one.
- Suspect the boundaries first: env vars missing in the deployed environment, a null that the types promised was not null, stale cache, wrong ID, a schema that no longer matches the code.
- If two fix attempts fail, stop and restate the problem from the top rather than trying a third -- repeated failure means the model of the bug is wrong, not that the fix was close.
- Say plainly when the cause is not found. "It stopped happening" is not a fix, and pretending otherwise costs more later.
