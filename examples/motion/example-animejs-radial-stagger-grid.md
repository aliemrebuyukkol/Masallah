# Anime.js 2D Radial Stagger & Timeline Matrix

Clickable 10x5 kinetic matrix calculating Euclidean radial wave propagation delays from any clicked cell with adjustable stagger interval, wave amplitude, and timeline scrubbing.

```tsx
// Euclidean 2D grid stagger calculation inspired by anime.stagger(val, { grid: [cols, rows], from: index })
export function computeRadialStagger(index, targetIndex, cols = 10, staggerMs = 38) {
  const x1 = index % cols;
  const y1 = Math.floor(index / cols);
  const x2 = targetIndex % cols;
  const y2 = Math.floor(targetIndex / cols);
  const distance = Math.hypot(x2 - x1, y2 - y1);
  return {
    delayMs: Math.round(distance * staggerMs),
    distance,
    scalePeak: Math.max(1.05, 1.45 - distance * 0.06),
  };
}
```
