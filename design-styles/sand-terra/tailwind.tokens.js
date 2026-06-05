/**
 * sand-terra — Tailwind theme.extend tokens.
 * Warm editorial-organic, dark base. No purple. WCAG AA+.
 *
 * Usage:
 *   // tailwind.config.js
 *   const sandTerra = require("./tailwind.tokens.js");
 *   module.exports = { theme: { extend: sandTerra } };
 */

const sandTerra = {
  colors: {
    "bg-base": "#16110d",
    "bg-raised": "#1f1813",
    surface: "#2a201a",
    "text-primary": "#f3e7d8",
    "text-muted": "#bda88f",
    accent: {
      DEFAULT: "#e07a4f",
      strong: "#f0a079",
    },
    "on-accent": "#1a1008",
    border: "#3b2e24",
    divider: "#2f241c",
  },

  borderRadius: {
    container: "1.25rem",
    control: "0.625rem",
    pill: "999px",
  },

  fontFamily: {
    display: ["Fraunces", "Georgia", "Cambria", "Times New Roman", "serif"],
    body: ["Inter", "Segoe UI", "Helvetica Neue", "system-ui", "sans-serif"],
    mono: ["JetBrains Mono", "SFMono-Regular", "Menlo", "Consolas", "monospace"],
  },

  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.25rem",
    xl: "1.625rem",
    "2xl": "2.125rem",
    "3xl": "2.875rem",
    "4xl": "3.875rem",
  },

  fontWeight: {
    regular: "400",
    medium: "500",
    semibold: "600",
    display: "460",
  },

  spacing: {
    0: "0rem",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.5rem",
    6: "2rem",
    7: "3rem",
    8: "4rem",
    9: "6rem",
  },

  boxShadow: {
    soft:
      "0 0.5rem 1.5rem -0.25rem rgba(10, 6, 3, 0.45), 0 0.0625rem 0 0 rgba(224, 122, 79, 0.06)",
    lifted:
      "0 1.25rem 3rem -0.5rem rgba(8, 5, 2, 0.55), 0 0.0625rem 0 0 rgba(224, 122, 79, 0.08)",
  },

  transitionTimingFunction: {
    standard: "cubic-bezier(0.22, 0.61, 0.36, 1)",
    emphasized: "cubic-bezier(0.16, 1, 0.3, 1)",
    exit: "cubic-bezier(0.4, 0, 0.7, 0.2)",
  },

  transitionDuration: {
    fast: "180ms",
    base: "320ms",
    slow: "560ms",
    ambient: "1200ms",
  },
};

module.exports = sandTerra;
