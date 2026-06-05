export const meta = {
  name: 'open-agent-stack-phase2',
  description: 'Fill the remaining open-agent-stack artifacts: plugins, managed agents, ChatGPT workspace agents, orchestrators (lead + 5 sub-agents), and 6 remaining design-token styles',
  phases: [
    { title: 'Plugins' },
    { title: 'Agents' },
    { title: 'ChatGPT' },
    { title: 'Orchestrators' },
    { title: 'Design' },
  ],
}

const REPO = '/tmp/oas'

const GLOBAL = `Global rules: imperative voice; NO emoji anywhere (including headers); NO purple in any color/token/preview; production quality, no dead placeholders (use .env.example for keys, never real secrets); keep entry files lean and push long detail into references/. Use only Read/Write/Edit and Bash for mkdir if needed. Do NOT run git. When finished, end your reply with one line: "DONE: <artifact> | files: <comma-separated relative paths>".`

const PLUGINS = [
  { name: 'ai-news-hq', preserve: true, desc: 'An AI-news crew (scout, analyst, editor) that tracks the field via web search and ships a ranked briefing on a cadence.', skill: 'daily-ai-brief' },
  { name: 'release-radar', desc: 'Tracks new AI model and tool releases, changelogs, and deprecations; flags what affects the user stack.', skill: 'scan-releases' },
  { name: 'competitor-watch', desc: 'Monitors competitor sites, pricing pages, and content via web search; reports diffs.', skill: 'watch-competitors' },
  { name: 'content-engine', desc: 'Repurposes one source piece into posts, threads, email, and video scripts.', skill: 'repurpose' },
  { name: 'brand-kit', desc: 'Applies a OneWave design style (tokens + theme) and exposes brand commands.', skill: 'apply-style' },
]

const AGENTS = [
  { name: 'market-researcher', desc: 'Researches a market, segment, or company and returns a structured, sourced brief.' },
  { name: 'news-curator', desc: 'Pulls and ranks the most relevant developments of the day for a given topic.' },
  { name: 'lead-enricher', desc: 'Enriches a lead or account from public sources into a clean record.' },
  { name: 'content-drafter', desc: 'Drafts long-form content from a brief, with sources cited.' },
  { name: 'seo-auditor', desc: 'Audits a page or site and returns prioritized SEO fixes.' },
]

const CHATGPT = [
  { name: 'briefing-desk', desc: 'A personalized briefing pulled fresh on chosen topics and delivered on a cadence.', connectors: 'Web, Gmail, Slack', schedule: 'daily', channel: 'email + Slack' },
  { name: 'inbox-chief-of-staff', desc: 'Triages the inbox, drafts replies in the user voice, negotiates calendar times.', connectors: 'Gmail, Google Calendar', schedule: 'hourly / on-demand', channel: 'email' },
  { name: 'pipeline-pulse', desc: 'Reads the CRM, flags stalled deals, posts a deal-movement digest.', connectors: 'Salesforce, Slack', schedule: 'weekday AM', channel: 'Slack' },
  { name: 'doc-negotiator', desc: 'Reviews contracts and policies from the drive; redlines and risk flags.', connectors: 'Drive, SharePoint, Notion', schedule: 'on-demand', channel: 'chat + email' },
  { name: 'standup-synthesizer', desc: 'Pulls updates across tools into one team standup and action list.', connectors: 'Slack, Notion, Atlassian', schedule: 'daily standup', channel: 'Slack' },
]

const ORCH = [
  { name: 'sales-orchestrator', desc: 'Lead agent coordinating a five-agent sales team end to end.', subs: ['prospector','researcher','writer','sequencer','qualifier'], gates: 'approve target list -> approve messaging -> approve send' },
  { name: 'marketing-orchestrator', desc: 'Lead agent coordinating a five-agent marketing team from brief to publish.', subs: ['content','social','seo','competitor-intel','analytics'], gates: 'approve brief -> approve drafts -> approve publish' },
]

// sand-terra already complete on disk — excluded.
const STYLES = [
  { name: 'liquid-glass', desc: 'Translucent depth. Frosted refractive glass surfaces over deep slate, one high-vibrancy accent (teal), mid contrast. Blurred translucent containers with light edges and glow; soft light-gradient dividers. Tight grotesk type. Springy parallax motion.', base: 'dark' },
  { name: 'mono-brutalist', desc: 'Stark monochrome. Pure black/white, maximum contrast, zero grain. Hard rectangular containers, no radius, thick solid borders and rule dividers. Oversized condensed type, exposed grid. Instant no-easing state changes.', base: 'light' },
  { name: 'aurora-mesh', desc: 'Soft futuristic. Animated gradient-mesh backgrounds in teal, amber, and rose (no purple). Low contrast, glassy low-opacity cards, blurred orbs. Gradient-fade dividers. Rounded geometric sans. Ambient drifting motion.', base: 'dark' },
  { name: 'neo-terminal', desc: 'AI-console / cyber. Near-black with phosphor green and amber mono accents. High contrast, dot-grid and scanline backgrounds. Bordered panel containers with corner ticks; dotted/dashed dividers. Monospace throughout. Typewriter + cursor-blink motion.', base: 'dark' },
  { name: 'tidal', desc: 'Ocean depth. Deep ocean blues and teals fading to abyssal navy, foam-white text, sandy accents. Mid-to-high contrast, layered depth gradients. Smooth flowing containers with soft caustic-light shadows; subtle wave-line dividers. Rounded humanist sans. Slow fluid current-like motion.', base: 'dark' },
  { name: 'cirrus', desc: 'Cloud / sky. Soft whites and pale sky blues, very light contrast, airy. Barely-there frosted containers with large soft shadows and generous radius; dividers fade to nothing. Light geometric sans, lots of breathing room. Gentle floating motion.', base: 'light' },
]

function pluginBrief(p) {
  return `Create the Claude Code plugin "${p.name}" under ${REPO}/plugins/${p.name}/.
${p.preserve ? 'IMPORTANT: a README.md and references/ already exist here — PRESERVE them, add only what is missing.' : ''}
Produce:
- .claude-plugin/plugin.json — fields: name "${p.name}", description "${p.desc}", version "0.1.0", author {"name":"OneWave AI","url":"https://www.onewave-ai.com"}. Valid JSON.
- ${p.preserve ? '' : 'README.md — what it does, when to use, install (claude plugin install ' + p.name + '), and the skill it provides.'}
- skills/${p.skill}/SKILL.md — a real, lean skill with YAML frontmatter (name: ${p.skill}, description: when to trigger). Imperative numbered workflow. If it needs the web, say so; add .env.example only if an API key is required (the built-in web tool needs none).
Plugin purpose: ${p.desc}
${GLOBAL}`
}

function agentBrief(a) {
  return `Create the managed agent "${a.name}" under ${REPO}/agents/${a.name}/.
Produce:
- AGENT.md — a Claude Agent SDK style definition: role, objective, the tool list (include web search where the job needs current info), step-by-step operating procedure (imperative), and the exact output/report format it returns.
- README.md — what it does, when to use it, setup, and a short "portable spec" note (how the same role maps to other runtimes).
- .env.example — only if it needs keys.
Agent purpose: ${a.desc}
${GLOBAL}`
}

function chatgptBrief(c) {
  return `Create the ChatGPT Workspace Agent template "${c.name}" under ${REPO}/chatgpt-agents/${c.name}/.
Workspace Agents combine connectors, schedules, knowledge, skills, and channels. Produce:
- README.md with these sections: Overview; Instructions (the full system prompt, imperative); Connectors (${c.connectors}); Knowledge (what files/app data it is scoped to); Skills (1-2 named reusable workflows: trigger -> steps -> output format); Schedule (default ${c.schedule}, how to change); Channels (${c.channel} — how it is triggered and delivers); Conversation starters; Portability note (maps to the OpenAI Assistants API).
- .env.example — placeholders for any connector keys.
Template purpose: ${c.desc}
${GLOBAL}`
}

function orchBrief(o) {
  return `Create the multi-agent orchestrator "${o.name}" under ${REPO}/orchestrators/${o.name}/.
It is a lead agent plus a fixed team of 5 sub-agents, mirroring a two-layer agent-army. Produce:
- README.md — overview; the two run modes documented clearly: HUMAN-IN-THE-LOOP (lead pauses at gates: ${o.gates}) and OUT-OF-THE-LOOP (runs the full cycle autonomously, reports at end); how to switch modes; the dispatch flow.
- lead.md — the lead agent definition: how it plans, dispatches the 5 sub-agents, enforces the gates, and aggregates results.
- agents/ — five files, one per sub-agent (${o.subs.join(', ')}), each with role, inputs, steps, and output format.
Orchestrator purpose: ${o.desc}
${GLOBAL}`
}

function styleBrief(s) {
  return `Create the design style "${s.name}" under ${REPO}/design-styles/${s.name}/.
Style intent (${s.base} base): ${s.desc}
Produce a real, usable token theme — NO purple anywhere, WCAG AA+ contrast:
- tokens.json — W3C design-tokens format. Include color (bg.base, bg.raised, surface, text.primary, text.muted, accent, border, divider), type (font.display, font.body, font.mono, scale, weight), space scale, radius (container, control), elevation OR blur tokens (whichever fits the style), and motion (duration, easing, signature). Values must match the style intent.
- theme.css — the same tokens as CSS custom properties under a [data-theme="${s.name}"] selector.
- tailwind.tokens.js — a Tailwind theme.extend object exporting the colors, radius, and fonts.
- preview.html — a small SELF-CONTAINED page that renders the style: a few containers/cards, a divider, a button, and body text, using the real background treatment described (gradient/mesh/glass/scanline/ocean/cloud as appropriate). It must visibly look like the style intent.
- README.md — the style description, the token table, and usage (how to apply theme.css / tailwind).
${GLOBAL}`
}

log('Phase 2 (re-run, no-schema): filling remaining artifacts')

const tasks = [
  ...PLUGINS.map(p => ({ phase: 'Plugins', label: `plugin:${p.name}`, brief: pluginBrief(p) })),
  ...AGENTS.map(a => ({ phase: 'Agents', label: `agent:${a.name}`, brief: agentBrief(a) })),
  ...CHATGPT.map(c => ({ phase: 'ChatGPT', label: `gpt:${c.name}`, brief: chatgptBrief(c) })),
  ...ORCH.map(o => ({ phase: 'Orchestrators', label: `orch:${o.name}`, brief: orchBrief(o) })),
  ...STYLES.map(s => ({ phase: 'Design', label: `style:${s.name}`, brief: styleBrief(s) })),
]

const results = await parallel(tasks.map(t => () =>
  agent(t.brief, { label: t.label, phase: t.phase })
))

const done = results.filter(Boolean).length
return { dispatched: tasks.length, returned: done, note: 'Verify on disk with git status; agent text returns are advisory.' }
