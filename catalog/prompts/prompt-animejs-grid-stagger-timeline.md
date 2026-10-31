# Anime.js Multi-Track Timeline & Radial 2D Grid Stagger

- **Category:** Motion
- **Source:** [Anime.js](https://github.com/juliangarnier/anime)
- **Target Model:** Claude 3.7 Sonnet / Gemini 2.5 Pro
- **License:** MIT
- **Tags:** Motion, Creative Coding, Interaction, Prompt, Example

## Description

Choreographs complex multi-element DOM and SVG animations using Anime.js timelines, radial grid staggering (`stagger(value, { grid: [cols, rows], from: "center" })`), and spring easings.

## Original Prompt

```text
Create a staggered grid wave animation and SVG line drawing using Anime.js.
```

## Masallah Optimized Prompt

```text
Build an interactive motion study using Anime.js (`github.com/juliangarnier/anime`):
1. 2D Spatial Stagger: Arrange a 12x6 matrix of kinetic cells and compute radial propagation delays from the clicked cell index:
   `delay: anime.stagger(45, { grid: [12, 6], from: activeIndex })`
   `scale: [1, 1.35, 1]`, `rotateZ: anime.stagger([-15, 15], { grid: [12, 6], from: activeIndex, axis: 'x' })`.
2. Multi-Track Timeline: Synchronize an SVG circuit path stroke reveal (`strokeDashoffset: [anime.setDashoffset, 0]`) with numeric counter keyframes and elastic spring easing (`spring(1, 80, 12, 0)`).
3. Expose interactive Play, Pause, Reverse, Seek scrubber, and Stagger Origin controls.
```

## Example Input

Interactive motion playground demonstrating 2D radial stagger propagation and timeline scrubbing.

## Example Output

Live interactive Anime.js 2D grid visualizer with clickable wave origin and timeline controls.
