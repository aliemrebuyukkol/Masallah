# Motion (motion.dev) Interface & System Architecture

- **Source:** [Motion (motion.dev)](https://motion.dev)
- **Category:** Motion
- **Technologies:** Motion, React, TypeScript, WAAPI, CSS Scroll Timeline

## Visual Analysis

- **Layout:** Structured modular grid optimized for Motion scannability and progressive disclosure.
- **Typography:** High-legibility system pairing clear hierarchical headings with monospace code/token identifiers.
- **Color System:** High-contrast accessible surface tokens meeting WCAG AA/AAA contrast ratios.
- **Spacing:** Consistent 4px/8px spatial cadence with generous section separation.
- **Motion:** Purposeful, low-latency transitions honoring prefers-reduced-motion.
- **Components:** Motion Module, Interaction Module, React Module, JavaScript Module

## Masallah Generation Prompt

```text
Using the current `motion/react` SDK (from `motion.dev` / `motiondivision/motion`), implement a filterable archive grid with shared layout projection:
1. Wrap the card collection in `<LayoutGroup>` and `<AnimatePresence mode="popLayout">`.
2. Assign deterministic `layoutId={`card-container-${item.id}`}` and `layoutId={`card-title-${item.id}`}` between the grid card and the expanded detail drawer/modal.
3. Configure physically tuned spring physics: `transition={{ type: "spring", stiffness: 380, damping: 32, mass: 0.8 }}`.
4. Respect accessibility by checking `useReducedMotion()`; when true, set `layout={false}` and use a 120ms opacity crossfade.
```
