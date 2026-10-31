# Shared Layout Projection (`layoutId`) Filterable Gallery & Modal

- **Category:** Motion
- **Source:** [Motion (motion.dev)](https://motion.dev/docs/react-layout-animations)
- **Target Model:** Claude 3.7 Sonnet / Gemini 2.5 Pro
- **License:** MIT (Masallah Abstracted Prompt)
- **Tags:** Motion, Interaction, Component, Frontend, Prompt

## Description

Uses Motion’s FLIP layout projection engine and spring physics to animate cards smoothly across filter changes and expand into a detail view.

## Original Prompt

```text
Animate a filterable card grid and detail modal using Motion layoutId and AnimatePresence.
```

## Masallah Optimized Prompt

```text
Using the current `motion/react` SDK (from `motion.dev` / `motiondivision/motion`), implement a filterable archive grid with shared layout projection:
1. Wrap the card collection in `<LayoutGroup>` and `<AnimatePresence mode="popLayout">`.
2. Assign deterministic `layoutId={`card-container-${item.id}`}` and `layoutId={`card-title-${item.id}`}` between the grid card and the expanded detail drawer/modal.
3. Configure physically tuned spring physics: `transition={{ type: "spring", stiffness: 380, damping: 32, mass: 0.8 }}`.
4. Respect accessibility by checking `useReducedMotion()`; when true, set `layout={false}` and use a 120ms opacity crossfade.
```

## Example Input

Catalog grid filtering 46 sources across 16 categories with expandable quick-inspect modal.

## Example Output

TypeScript React implementation using `motion/react` with FLIP layout projection and keyboard Escape dismissal.
