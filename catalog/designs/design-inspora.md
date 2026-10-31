# Inspora Editorial Monolith & Bento Showcase

- **Source:** [Inspora](https://inspora.design)
- **Category:** Design
- **Technologies:** CSS Grid, Variable Fonts, WebGL, Modern CSS

## Visual Analysis

- **Layout:** 12-column fluid editorial grid with asymmetric 7:5 hero split, 1px hairline structural dividers, and modular bento showcase cards.
- **Typography:** High-contrast display serif paired with neo-grotesk body text (tight -0.03em tracking on headings, 1.65 line-height on copy) and tabular monospace metadata indices.
- **Color System:** Warm obsidian canvas (#0A0A0C) with alabaster ink (#F4F3EF), muted stone borders (rgba(255,255,255,0.08)), and single chromatic accent (#E85D3F).
- **Spacing:** Generous 8px baseline rhythm with 96px–144px vertical section breathing room and 24px internal card padding.
- **Motion:** Subtle cubic-bezier(0.22, 1, 0.36, 1) image scale reveals on hover and staggered viewport entry transitions.
- **Components:** Asymmetric Hero Header, Index Numbered Card Grid, Filter Pill Bar, Sticky Detail Drawer

## Masallah Generation Prompt

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
