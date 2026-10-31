# Spotlight Radial Border Card & Kinetic Split-Text Reveal

- **Category:** Component
- **Source:** [React Bits](https://reactbits.dev)
- **Target Model:** Claude 3.7 Sonnet / Gemini 2.5 Pro
- **License:** MIT (Masallah Abstracted Prompt)
- **Tags:** Component, Motion, Creative Coding, UI, Prompt

## Description

Creates a reusable React component combining cursor-tracked radial border illumination with staggered character-by-character kinetic text entry.

## Original Prompt

```text
Create a SpotlightCard and SplitText animation component like React Bits.
```

## Masallah Optimized Prompt

```text
Create two composable, zero-bloat React components inspired by React Bits (`reactbits.dev`):
1. `<SpotlightCard>`: Tracks relative pointer coordinates `(x, y)` via a single `onPointerMove` handler and updates CSS custom properties `--spot-x` and `--spot-y` directly on the DOM ref (zero React re-renders on mouse move). Renders a `radial-gradient(420px circle at var(--spot-x) var(--spot-y), rgba(232,93,63,0.18), transparent 70%)` overlay.
2. `<KineticHeading>`: Splits text by word and character while keeping a full `aria-label` on the parent heading for screen readers (`aria-hidden="true"` on split spans), staggering each character upward with `cubic-bezier(0.16, 1, 0.3, 1)`.
```

## Example Input

Hero title and feature showcase cards for Masallah archive.

## Example Output

Two modular TypeScript React components (`SpotlightCard.tsx` and `KineticHeading.tsx`) with 60fps pointer tracking.
