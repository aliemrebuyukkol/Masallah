# React Bits Cursor Spotlight & Kinetic Split-Text Demo

Zero-rerender cursor-tracked radial border spotlight cards paired with staggered character-level kinetic typography and screen-reader-safe ARIA labels.

```tsx
export function handleSpotlightPointerMove(e: React.PointerEvent<HTMLElement>) {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
}
```
