# brand-kit

Applies a OneWave design style (tokens + theme) and exposes brand commands.

## What it does

brand-kit installs a reusable design layer into a frontend project. It writes a
warm, earth-toned token set (sand and terra cotta on dark backgrounds) as CSS
custom properties, wires those tokens into a theme, and keeps the brand
consistent across components. It refuses off-brand choices: no purple, no emoji
in UI output.

## When to use it

Use brand-kit when you are:

- Starting a new site or app that should match the OneWave look from day one.
- Retrofitting an existing project that has ad-hoc colors and no token system.
- Standardizing a client deliverable so it reads as premium and production-ready.

## Install

```
claude plugin install brand-kit
```

## What it provides

### Skill: apply-style

Reads the project's styling setup, then writes a complete token set and theme
binding. The skill produces:

- A CSS custom property block for colors, typography, spacing, and radii.
- A theme binding for the detected stack (Tailwind config or plain CSS).
- A small preview snippet so you can confirm the look before adopting it widely.

The skill uses no external API keys. It may use the built-in web tool to read a
live brand reference when one is provided; that tool needs no configuration.

See `skills/apply-style/SKILL.md` for the full workflow and
`skills/apply-style/references/` for the token reference and stack notes.
