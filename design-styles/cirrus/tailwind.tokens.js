// Cirrus design style — Tailwind theme.extend tokens.
// Usage: const cirrus = require("./tailwind.tokens.js");
//        module.exports = { theme: { extend: cirrus } };

module.exports = {
  colors: {
    cirrus: {
      "bg-base": "#eef4fb",
      "bg-raised": "#f6fafe",
      surface: "#fbfdff",
      "text-primary": "#1c2b3a",
      "text-muted": "#4a5f73",
      accent: "#1d6fb8",
      "accent-contrast": "#ffffff",
      border: "#d4e2f0",
      divider: "#e3edf7",
    },
  },
  borderRadius: {
    "cirrus-container": "1.75rem",
    "cirrus-control": "0.875rem",
  },
  fontFamily: {
    "cirrus-display": ["Quicksand", "Avenir Next", "Segoe UI", "system-ui", "sans-serif"],
    "cirrus-body": ["Inter", "Segoe UI", "system-ui", "-apple-system", "sans-serif"],
    "cirrus-mono": ["JetBrains Mono", "SFMono-Regular", "Menlo", "Consolas", "monospace"],
  },
  fontSize: {
    "cirrus-xs": "0.75rem",
    "cirrus-sm": "0.875rem",
    "cirrus-base": "1rem",
    "cirrus-lg": "1.25rem",
    "cirrus-xl": "1.625rem",
    "cirrus-2xl": "2.125rem",
    "cirrus-3xl": "2.875rem",
    "cirrus-4xl": "3.75rem",
  },
  spacing: {
    "cirrus-1": "0.25rem",
    "cirrus-2": "0.5rem",
    "cirrus-3": "0.75rem",
    "cirrus-4": "1rem",
    "cirrus-5": "1.5rem",
    "cirrus-6": "2rem",
    "cirrus-7": "3rem",
    "cirrus-8": "4rem",
    "cirrus-9": "6rem",
  },
  backdropBlur: {
    "cirrus-frost": "16px",
    "cirrus-frost-strong": "28px",
  },
  boxShadow: {
    "cirrus-soft": "0px 12px 32px -8px rgba(91, 140, 191, 0.18)",
    "cirrus-float": "0px 28px 60px -12px rgba(91, 140, 191, 0.22)",
  },
  transitionTimingFunction: {
    "cirrus-standard": "cubic-bezier(0.4, 0, 0.2, 1)",
    "cirrus-drift": "cubic-bezier(0.37, 0, 0.27, 1)",
  },
  transitionDuration: {
    "cirrus-fast": "200ms",
    "cirrus-base": "420ms",
    "cirrus-slow": "900ms",
  },
  keyframes: {
    "cirrus-float": {
      "0%, 100%": { transform: "translateY(0)" },
      "50%": { transform: "translateY(-10px)" },
    },
  },
  animation: {
    "cirrus-float": "cirrus-float 7000ms cubic-bezier(0.37, 0, 0.27, 1) infinite",
  },
};
