# Radix UI + shadcn/ui Accessible Roving-Focus Command & Tabs

Live accessible primitive inspector demonstrating WAI-ARIA roving tabindex, keyboard arrow loop navigation, focus ring choreography, and live ARIA state telemetry.

```tsx
export function handleRovingKeyDown(
  e: React.KeyboardEvent,
  currentIndex: number,
  itemCount: number,
  onSelectIndex: (next: number) => void
) {
  if (e.key === "ArrowRight" || e.key === "ArrowDown") {
    e.preventDefault();
    onSelectIndex((currentIndex + 1) % itemCount);
  } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
    e.preventDefault();
    onSelectIndex((currentIndex - 1 + itemCount) % itemCount);
  } else if (e.key === "Home") {
    e.preventDefault();
    onSelectIndex(0);
  } else if (e.key === "End") {
    e.preventDefault();
    onSelectIndex(itemCount - 1);
  }
}
```
