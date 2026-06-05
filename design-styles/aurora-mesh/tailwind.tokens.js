/**
 * aurora-mesh — Tailwind theme.extend tokens.
 * Soft futuristic dark theme: teal / amber / rose mesh, glassy surfaces. No purple.
 *
 * Usage (tailwind.config.js):
 *   const auroraMesh = require("./tailwind.tokens.js");
 *   module.exports = { theme: { extend: auroraMesh } };
 */
module.exports = {
  colors: {
    "bg-base": "#0a1118",
    "bg-raised": "#101a24",
    surface: "rgba(22, 34, 46, 0.55)",
    text: {
      primary: "#eef4f7",
      muted: "#a9bcc7",
    },
    accent: {
      teal: "#3fd4c5",
      amber: "#f5b94d",
      rose: "#f5849b",
    },
    border: "rgba(143, 178, 196, 0.18)",
    divider: "rgba(143, 178, 196, 0.28)",
  },
  borderRadius: {
    container: "1.5rem",
    control: "0.75rem",
    pill: "9999px",
  },
  fontFamily: {
    display: ["Space Grotesk", "Outfit", "system-ui", "sans-serif"],
    body: ["Outfit", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
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
  },
  backdropBlur: {
    glass: "18px",
    orb: "90px",
  },
  boxShadow: {
    card: "0px 18px 48px -12px rgba(4, 10, 16, 0.45)",
    glow: "0px 0px 32px 0px rgba(63, 212, 197, 0.30)",
  },
  transitionDuration: {
    fast: "180ms",
    base: "320ms",
    slow: "640ms",
    drift: "24000ms",
  },
  transitionTimingFunction: {
    standard: "cubic-bezier(0.4, 0, 0.2, 1)",
    soft: "cubic-bezier(0.33, 1, 0.68, 1)",
    drift: "cubic-bezier(0.45, 0, 0.55, 1)",
  },
};
