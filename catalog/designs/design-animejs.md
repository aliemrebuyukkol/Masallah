# Anime.js Interface & System Architecture

- **Source:** [Anime.js](https://github.com/juliangarnier/anime)
- **Category:** Motion
- **Technologies:** JavaScript, Anime.js, SVG, CSS Transforms, DOM

## Visual Analysis

- **Layout:** Structured modular grid optimized for Motion scannability and progressive disclosure.
- **Typography:** High-legibility system pairing clear hierarchical headings with monospace code/token identifiers.
- **Color System:** High-contrast accessible surface tokens meeting WCAG AA/AAA contrast ratios.
- **Spacing:** Consistent 4px/8px spatial cadence with generous section separation.
- **Motion:** Purposeful, low-latency transitions honoring prefers-reduced-motion.
- **Components:** Motion Module, Interaction Module, Creative Coding Module, SVG Module

## Masallah Generation Prompt

```text
Build an interactive motion study using Anime.js (`github.com/juliangarnier/anime`):
1. 2D Spatial Stagger: Arrange a 12x6 matrix of kinetic cells and compute radial propagation delays from the clicked cell index:
   `delay: anime.stagger(45, { grid: [12, 6], from: activeIndex })`
   `scale: [1, 1.35, 1]`, `rotateZ: anime.stagger([-15, 15], { grid: [12, 6], from: activeIndex, axis: 'x' })`.
2. Multi-Track Timeline: Synchronize an SVG circuit path stroke reveal (`strokeDashoffset: [anime.setDashoffset, 0]`) with numeric counter keyframes and elastic spring easing (`spring(1, 80, 12, 0)`).
3. Expose interactive Play, Pause, Reverse, Seek scrubber, and Stagger Origin controls.
```
