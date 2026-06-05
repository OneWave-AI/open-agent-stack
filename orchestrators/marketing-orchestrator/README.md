# marketing-orchestrator

Lead agent coordinating a five-agent marketing team from brief to publish. The lead
plans the campaign, dispatches a fixed team of five specialist sub-agents, enforces
approval gates, and aggregates every result into a single publish package.

This orchestrator mirrors a two-layer agent-army: one lead at layer one, five
specialists at layer two.

## Team

| Agent | File | Responsibility |
| --- | --- | --- |
| Lead | `lead.md` | Plan, dispatch, gate, aggregate |
| Content | `agents/content.md` | Long-form drafts, briefs, copy |
| Social | `agents/social.md` | Channel-native posts and schedule |
| SEO | `agents/seo.md` | Keywords, metadata, on-page optimization |
| Competitor intel | `agents/competitor-intel.md` | Market and rival positioning |
| Analytics | `agents/analytics.md` | Targets, instrumentation, post-publish readout |

## Run modes

The orchestrator runs in one of two modes. The default is HUMAN-IN-THE-LOOP.

### HUMAN-IN-THE-LOOP

The lead pauses at three gates and waits for explicit human approval before it
proceeds. Use this mode for new campaigns, regulated content, or any work that
needs a human sign-off trail.

Gates, in order:

1. Approve brief. The lead presents the campaign brief plus competitor-intel and
   SEO inputs. The human approves, edits, or rejects before any drafting starts.
2. Approve drafts. The lead presents content drafts, social posts, and SEO
   metadata. The human approves or returns notes for revision.
3. Approve publish. The lead presents the final publish package and the analytics
   plan. The human gives the go or hold decision.

At each gate the lead stops, surfaces the artifacts, and does nothing further
until it receives an approve, revise, or reject decision. A revise decision sends
the relevant artifact back to its sub-agent and re-presents at the same gate.

### OUT-OF-THE-LOOP

The lead runs the full cycle autonomously with no pauses, applies its own gate
checklists as automated quality checks, and reports once at the end with the
complete publish package and the decisions it made at each former gate.

Use this mode for low-risk, high-volume, or recurring campaigns where the brief
and brand rules are already settled.

If an automated gate check fails in this mode, the lead routes the artifact back
to the owning sub-agent for one revision pass, then re-checks. If it still fails,
the lead halts, marks the cycle blocked, and reports the failure instead of
publishing.

### How to switch modes

Set the mode in the run invocation. The lead reads `mode` and defaults to
`human-in-the-loop` when the value is absent or unrecognized.

```
mode: human-in-the-loop   # default; pauses at the three gates
mode: out-of-the-loop     # autonomous full cycle, single end report
```

See `references/run-modes.md` for the full gate checklists and the revision and
halt rules used in each mode.

## Dispatch flow

```
brief intake
   |
   v
[ competitor-intel ] + [ seo ]        (parallel: market + keyword inputs)
   |
   v
GATE 1: approve brief                 (human-in-the-loop pauses here)
   |
   v
[ content ] ---> [ social ]           (content drafts, then channel posts)
        \                             (seo metadata applied to drafts)
         \--> [ seo: on-page pass ]
   |
   v
GATE 2: approve drafts                (human-in-the-loop pauses here)
   |
   v
[ analytics: instrument + targets ]   (UTMs, KPIs, tracking plan)
   |
   v
GATE 3: approve publish               (human-in-the-loop pauses here)
   |
   v
publish package assembled by lead
   |
   v
[ analytics: post-publish readout ]   (after live; closes the loop)
```

Parallel and dependent dispatch rules live in `lead.md`. Per-agent inputs, steps,
and output formats live in each file under `agents/`.

## Conventions

- Imperative voice in all instructions.
- No emoji anywhere, including headers.
- No purple in any color, token, or preview. Use warm and neutral tones.
- No real secrets. Reference keys through `.env.example` only.
- Keep entry files lean; long detail lives in `references/`.

## Configuration

Copy `.env.example` to `.env` and fill local values. The orchestrator reads keys
from the environment and never stores secrets in these files.
