/**
 * Tidal — Tailwind theme.extend tokens.
 * Merge this into the `theme.extend` block of your tailwind.config.js:
 *
 *   const tidal = require("./tailwind.tokens.js");
 *   module.exports = { theme: { extend: { ...tidal } } };
 */
module.exports = {
  colors: {
    tidal: {
      "bg-base": "#04141f",
      "bg-raised": "#072636",
      surface: "#0c3a4f",
      "text-primary": "#eef9fb",
      "text-muted": "#9fc4d0",
      accent: "#3fd0c9",
      "accent-warm": "#e8c79a",
      border: "#16526b",
      divider: "#1f6480",
    },
  },
  borderRadius: {
    "tidal-container": "1.5rem",
    "tidal-control": "0.875rem",
    "tidal-pill": "9999px",
  },
  fontFamily: {
    "tidal-display": ["Quicksand", "Nunito", "Segoe UI", "system-ui", "sans-serif"],
    "tidal-body": ["Nunito", "Quicksand", "Segoe UI", "system-ui", "sans-serif"],
    "tidal-mono": ["JetBrains Mono", "SFMono-Regular", "Menlo", "monospace"],
  },
  boxShadow: {
    "tidal-caustic-sm": "0 0.25rem 0.75rem #02101a",
    "tidal-caustic-md": "0 0.75rem 1.75rem -0.25rem #010a12",
    "tidal-caustic-glow": "0 0 1.5rem #3fd0c933",
  },
  backgroundImage: {
    "tidal-depth": "linear-gradient(180deg, #072636 0%, #04141f 60%, #020c14 100%)",
    "tidal-caustic": "radial-gradient(120% 80% at 50% -10%, #0c3a4f33 0%, transparent 60%)",
  },
  transitionTimingFunction: {
    "tidal-current": "cubic-bezier(0.37, 0, 0.16, 1)",
    "tidal-swell": "cubic-bezier(0.45, 0.05, 0.25, 1)",
  },
  transitionDuration: {
    "tidal-fast": "240ms",
    "tidal-base": "480ms",
    "tidal-slow": "900ms",
  },
};
