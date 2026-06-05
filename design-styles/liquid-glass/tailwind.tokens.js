/**
 * Liquid Glass — Tailwind theme.extend object.
 * Usage: const liquidGlass = require("./tailwind.tokens.js");
 *        module.exports = { theme: { extend: liquidGlass } };
 */
module.exports = {
  colors: {
    "bg-base": "#0a0f14",
    "bg-raised": "#111922",
    surface: "rgba(28, 40, 53, 0.55)",
    "text-primary": "#eef4f8",
    "text-muted": "#9fb2bf",
    accent: "#2ee6c9",
    "accent-strong": "#14b8a6",
    "on-accent": "#04201d",
    border: "rgba(190, 224, 240, 0.18)",
    divider: "rgba(190, 224, 240, 0.12)",
  },
  borderRadius: {
    control: "0.625rem",
    container: "1.25rem",
    pill: "9999px",
  },
  fontFamily: {
    display: ["Space Grotesk", "Inter", "system-ui", "sans-serif"],
    body: ["Inter", "system-ui", "-apple-system", "sans-serif"],
    mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
  },
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.25rem",
    xl: "1.75rem",
    "2xl": "2.5rem",
    "3xl": "3.5rem",
  },
  fontWeight: {
    regular: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
  },
  letterSpacing: {
    tight: "-0.02em",
    normal: "0em",
  },
  spacing: {
    0: "0rem",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    6: "1.5rem",
    8: "2rem",
    12: "3rem",
    16: "4rem",
    24: "6rem",
  },
  backdropBlur: {
    "glass-sm": "10px",
    glass: "20px",
    "glass-lg": "36px",
  },
  boxShadow: {
    glass: "0 12px 40px -8px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(46, 230, 201, 0.10)",
    glow: "0 0 28px 0 rgba(46, 230, 201, 0.35)",
  },
  transitionTimingFunction: {
    spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
    glide: "cubic-bezier(0.22, 1, 0.36, 1)",
  },
  transitionDuration: {
    fast: "160ms",
    base: "280ms",
    slow: "520ms",
  },
};
