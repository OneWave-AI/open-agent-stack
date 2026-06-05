# market-researcher

A managed agent that researches a market, segment, or company and returns a structured, sourced brief.

## What It Does
Takes a research target and question, runs live web research, cross-checks key facts against multiple sources, and returns a decision-ready brief. Every non-obvious claim is cited and labeled by confidence. Verified facts are kept separate from estimates, and unanswered questions are surfaced rather than guessed.

## When To Use It
- Sizing a market or segment before a build, pitch, or investment.
- Profiling a company (positioning, competitors, funding, recent moves).
- Mapping a competitive landscape ahead of a sales or product decision.
- Any question where current, sourced facts matter more than a quick take.

Do not use it for tasks that need no external facts, or where no web access is available and the question is time-sensitive.

## Setup
1. Place this agent directory where your runtime loads managed agents.
2. Grant the agent these tools: WebSearch, WebFetch, Read, Write, Bash (mkdir only).
3. Copy `.env.example` to `.env` and fill in any web search API key your runtime requires. If your runtime provides search natively, no keys are needed and `.env` can be skipped.
4. Invoke with a clear target and scope, for example: "Research the US small-business email marketing market, 2025 to 2026."

## Output
The agent returns a Markdown brief following the format in `AGENT.md`. Extended evidence, raw quotes, and the full source list go in `references/` (see `references/sources.md` for the source-log template).

## Portable Spec
The role is runtime-agnostic. The same definition maps cleanly to other systems:
- Claude Agent SDK: load `AGENT.md` as the system prompt; register WebSearch, WebFetch, Read, Write, Bash as tools.
- OpenAI Assistants / function calling: use the Role and Objective as instructions; expose web search and a file-write function as tools; enforce the Output Format via a response schema.
- LangGraph / custom orchestrators: model the Operating Procedure as nodes (plan, search, fetch, cross-check, label, write); keep the Output Format as the final node contract.
- Any runtime: the contract is "structured, sourced, confidence-labeled brief, no fabricated facts." Tool names may differ; the procedure and output format stay the same.
