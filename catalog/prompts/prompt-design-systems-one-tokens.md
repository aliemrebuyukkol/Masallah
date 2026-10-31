# W3C Three-Tier Semantic Design Token Architecture

- **Category:** Design System
- **Source:** [Design Systems One](https://designsystems.one)
- **Target Model:** Claude 3.7 Sonnet / Gemini 2.5 Pro
- **License:** MIT (Masallah Abstracted Prompt)
- **Tags:** Design System, Architecture, Frontend, UI, Prompt

## Description

Generates a scalable 3-tier token hierarchy (Primitive → Semantic → Component) in W3C DTCG JSON and CSS Custom Properties with dark/high-contrast themes.

## Original Prompt

```text
Create a design token system with colors, spacing, and typography in CSS variables.
```

## Masallah Optimized Prompt

```text
Architect a 3-tier Design Token system following DesignSystems.one and W3C Design Tokens Community Group (DTCG) best practices:
- Tier 1 (Primitive / Option Tokens): Raw palette values (`--primitive-obsidian-950: #09090B`, `--primitive-vermilion-500: #E85D3F`), modular spacing scale (4px base), and fluid `clamp()` type steps. Never referenced directly by components.
- Tier 2 (Semantic / Alias Tokens): Intent-driven aliases (`--surface-canvas`, `--surface-elevated`, `--surface-interactive-hover`, `--ink-primary`, `--ink-muted`, `--border-subtle`, `--focus-ring`) that automatically adapt across `[data-theme="dark"]`, `[data-theme="light"]`, and `@media (prefers-contrast: more)`.
- Tier 3 (Component Tokens): Scoped overrides (`--card-radius`, `--card-padding`, `--badge-bg`).
```

## Example Input

Token system for Masallah editorial archive supporting dark obsidian default and high-contrast accessibility mode.

## Example Output

Complete `tokens.json` (DTCG format) + `tokens.css` with fluid typography and semantic surface tokens.
