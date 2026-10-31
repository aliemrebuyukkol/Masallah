# Laws of UX Interactive Fitts’s Law & Hick’s Law Ergonomics Lab

Interactive quantitative calculator comparing target acquisition time ($T = a + b \log_2(2D/W)$) and decision latency ($RT = a + b \log_2(n)$) as button size, distance, and menu complexity change.

```tsx
// Quantitative Fitts's Law Index of Difficulty (bits) & Hick's Law Reaction Time (ms)
export function computeErgonomicMetrics(distancePx: number, widthPx: number, choiceCount: number) {
  const indexOfDifficultyBits = Math.log2((2 * Math.max(1, distancePx)) / Math.max(1, widthPx));
  const movementTimeMs = Math.round(120 + 145 * indexOfDifficultyBits);
  const decisionTimeMs = Math.round(180 + 155 * Math.log2(Math.max(1, choiceCount) + 1));
  return { indexOfDifficultyBits: Number(indexOfDifficultyBits.toFixed(2)), movementTimeMs, decisionTimeMs };
}
```
