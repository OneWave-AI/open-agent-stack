/**
 * neo-terminal — Tailwind theme.extend tokens.
 *
 * Usage (tailwind.config.js):
 *   const neoTerminal = require("./tailwind.tokens.js");
 *   module.exports = { theme: { extend: neoTerminal } };
 *
 * Pairs with theme.css. Colors expressed as raw hex so they work
 * with or without the CSS custom properties.
 */
module.exports = {
  colors: {
    "nt-bg-base": "#05080a",
    "nt-bg-raised": "#0a1014",
    "nt-surface": "#0e161b",
    "nt-text": "#d6f5e3",
    "nt-text-muted": "#7fa394",
    "nt-accent": "#39ff8b",
    "nt-accent-alt": "#ffb627",
    "nt-danger": "#ff5c5c",
    "nt-border": "#1d3a2f",
    "nt-divider": "#16302a",
  },
  borderRadius: {
    "nt-container": "2px",
    "nt-control": "1px",
  },
  fontFamily: {
    "nt-display": ["JetBrains Mono", "IBM Plex Mono", "ui-monospace", "monospace"],
    "nt-body": ["JetBrains Mono", "IBM Plex Mono", "ui-monospace", "monospace"],
    "nt-mono": ["JetBrains Mono", "IBM Plex Mono", "ui-monospace", "SFMono-Regular", "monospace"],
  },
  fontSize: {
    "nt-xs": "0.75rem",
    "nt-sm": "0.875rem",
    "nt-base": "1rem",
    "nt-lg": "1.25rem",
    "nt-xl": "1.625rem",
    "nt-2xl": "2.125rem",
    "nt-3xl": "2.875rem",
  },
  fontWeight: {
    "nt-regular": "400",
    "nt-medium": "500",
    "nt-bold": "700",
  },
  letterSpacing: {
    "nt-tight": "-0.01em",
    "nt-normal": "0em",
    "nt-wide": "0.08em",
    "nt-caps": "0.18em",
  },
  lineHeight: {
    "nt-tight": "1.15",
    "nt-normal": "1.55",
  },
  spacing: {
    "nt-0": "0rem",
    "nt-1": "0.25rem",
    "nt-2": "0.5rem",
    "nt-3": "0.75rem",
    "nt-4": "1rem",
    "nt-5": "1.5rem",
    "nt-6": "2rem",
    "nt-7": "3rem",
    "nt-8": "4rem",
  },
  boxShadow: {
    "nt-flat": "0 0 0 0 #000000",
    "nt-panel": "0 1px 0 0 rgba(0,0,0,0.55), 0 0 0 1px rgba(57,255,139,0.06)",
    "nt-glow": "0 0 18px 0 rgba(57,255,139,0.35)",
    "nt-glow-amber": "0 0 16px 0 rgba(255,182,39,0.32)",
  },
  transitionTimingFunction: {
    "nt-standard": "cubic-bezier(0.2, 0, 0.2, 1)",
  },
  transitionDuration: {
    "nt-instant": "80ms",
    "nt-fast": "160ms",
    "nt-base": "240ms",
    "nt-slow": "420ms",
  },
};
