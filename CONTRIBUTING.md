# Contributing to Open Agent Stack

Contributions are welcome. The quality bar is the moat — production-ready, no stubs, no dead placeholders.

## Standards (all artifact types)

- **Imperative voice.** "Determine the target", not "You should determine the target."
- **No emoji.** Anywhere — including section headers. Use plain Markdown headings.
- **No purple** in any design output, token set, or UI.
- **Progressive disclosure.** Keep the entry file lean; push long templates, tables, and examples into `references/`. Link to them.
- **No placeholders that don't work.** Every example must run. Use `.env.example` for keys — never commit real secrets.
- **Universal where possible.** Note cross-tool portability (Agent SDK, MCP, other AI tools), even when Claude Code is the primary runtime.

## Per-type expectations

| Type | Must include |
|------|--------------|
| **Plugin** | `.claude-plugin/plugin.json`, a README (what / when / install), and its skills or commands |
| **Agent** | A definition with a clear role, tool list, web-search wiring where relevant, and `.env.example` |
| **Orchestrator** | A lead agent + a named team of 5 sub-agents, plus documented human-in-the-loop and out-of-the-loop modes |
| **Design style** | A token set (W3C design-tokens JSON), a theme preview, and an export (Tailwind/CSS) |

## How to contribute

1. Fork the repo.
2. Add your artifact in the right top-level directory, in its own folder.
3. Include the README and the per-type requirements above.
4. Open a pull request against `main`.

## License

By contributing you agree your work is released under the [MIT License](LICENSE).
