# Defensive CSS & Container-Query Adaptive Card System

- **Category:** Frontend
- **Source:** [Ahmad Shadeed](https://ishadeed.com)
- **Target Model:** Claude 3.7 Sonnet / Gemini 2.5 Pro
- **License:** MIT (Masallah Abstracted Prompt)
- **Tags:** Frontend, UI, Design, Component, Prompt

## Description

Engineers a bulletproof CSS layout using `@container` queries, `:has()` parent selectors, fluid `clamp()`, and defensive overflow guards against long text or missing media.

## Original Prompt

```text
Write responsive CSS using container queries and defensive CSS techniques from Ahmad Shadeed.
```

## Masallah Optimized Prompt

```text
Engineer a resilient, container-aware component layout applying Ahmad Shadeed’s Defensive CSS (`ishadeed.com`) principles:
1. Container Queries over Viewport Media Queries: Declare `container-type: inline-size; container-name: catalog-card;` on the card wrapper so the card automatically switches from stacked vertical (<420px) to horizontal split (>=420px) regardless of where it is placed.
2. Relational `:has()` Adaptation: Use `.card:has(.card__live-demo)` to expand grid span automatically when an interactive canvas is present.
3. Defensive Guards: Add `min-width: 0` on flex/grid children, `overflow-wrap: anywhere` on URLs/code identifiers, `aspect-ratio: 16 / 10` with `object-fit: cover` and fallback gradient on preview frames, and `scrollbar-gutter: stable` to prevent layout shift.
```

## Example Input

Catalog card that must display 80-character repository URLs, variable tag counts (1 to 12), and optional live demo embeds.

## Example Output

Production CSS module with `@container`, `:has()`, and defensive text/flex guards.
