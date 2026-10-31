# Editorial Monolith & Asymmetric Bento Showcase

- **Category:** Design
- **Source:** [Inspora](https://inspora.design)
- **Target Model:** Claude 3.7 Sonnet / Gemini 2.5 Pro / GPT-4o
- **License:** MIT (Masallah Abstracted Prompt)
- **Tags:** Design, Website, UI, Art Direction, Prompt

## Description

Generates an art-directed dark editorial web experience with 12-column grid hairlines, display serif typography, and modular bento showcase cards inspired by Inspora references.

## Original Prompt

```text
Create a modern editorial portfolio and design archive landing page with dark theme, serif typography, and grid borders.
```

## Masallah Optimized Prompt

```text
Act as a Principal Art Director and Creative Frontend Architect. Design and implement an editorial design archive landing page adhering to these abstracted visual systems (inspired by Inspora editorial patterns, without copying any third-party brand assets):

1. GRID & SPATIAL RHYTHM:
- 12-column CSS Grid (max-width: 1440px, 24px gap) with exposed 1px solid hairline borders (rgba(244, 243, 239, 0.08)).
- Asymmetric 7:5 hero split: left column features oversized editorial headline (clamp(2.75rem, 5.5vw, 5.25rem), line-height 0.96, tracking -0.035em); right column houses an interactive live preview stage.
- Maintain 96px–128px vertical section cadence and 8pt baseline alignment.

2. TYPOGRAPHY & CHROMATIC SYSTEM:
- Primary Surface: Obsidian (#0A0A0C); Elevated Card Surface: #111115; Primary Ink: Warm Alabaster (#F4F3EF); Muted Ink: #9A9890; Chromatic Signal Accent: Vermilion (#E85D3F).
- Pair a high-contrast editorial serif for section titles with a geometric sans for UI controls and tabular-nums monospace for index numbers (01 // 46).

3. INTERACTION & ACCESSIBILITY:
- Cards reveal subtle radial spotlight border glow on pointer move and scale media by 1.02x using cubic-bezier(0.22, 1, 0.36, 1).
- Honor @media (prefers-reduced-motion: reduce) by disabling parallax and transform scale.
```

## Example Input

Product: "Chronicle Studio" — an independent industrial & digital design practice showcasing 18 flagship hardware-software artifacts.

## Example Output

Full Next.js + CSS Grid component featuring numbered index rail (01–18), asymmetric hero with interactive spec sheet toggle, and filterable bento archive grid.
