# React Bits Interface & System Architecture

- **Source:** [React Bits](https://reactbits.dev)
- **Category:** Component
- **Technologies:** React, TypeScript, Tailwind CSS, Motion, WebGL

## Visual Analysis

- **Layout:** Structured modular grid optimized for Component scannability and progressive disclosure.
- **Typography:** High-legibility system pairing clear hierarchical headings with monospace code/token identifiers.
- **Color System:** High-contrast accessible surface tokens meeting WCAG AA/AAA contrast ratios.
- **Spacing:** Consistent 4px/8px spatial cadence with generous section separation.
- **Motion:** Purposeful, low-latency transitions honoring prefers-reduced-motion.
- **Components:** Component Module, Motion Module, React Module, Creative Coding Module

## Masallah Generation Prompt

```text
Create two composable, zero-bloat React components inspired by React Bits (`reactbits.dev`):
1. `<SpotlightCard>`: Tracks relative pointer coordinates `(x, y)` via a single `onPointerMove` handler and updates CSS custom properties `--spot-x` and `--spot-y` directly on the DOM ref (zero React re-renders on mouse move). Renders a `radial-gradient(420px circle at var(--spot-x) var(--spot-y), rgba(232,93,63,0.18), transparent 70%)` overlay.
2. `<KineticHeading>`: Splits text by word and character while keeping a full `aria-label` on the parent heading for screen readers (`aria-hidden="true"` on split spans), staggering each character upward with `cubic-bezier(0.16, 1, 0.3, 1)`.
```
