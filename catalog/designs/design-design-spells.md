# Design Spells Interface & System Architecture

- **Source:** [Design Spells](https://designspells.com)
- **Category:** Motion
- **Technologies:** CSS Transitions, Spring Physics, Framer Motion, SVG Animation

## Visual Analysis

- **Layout:** Structured modular grid optimized for Motion scannability and progressive disclosure.
- **Typography:** High-legibility system pairing clear hierarchical headings with monospace code/token identifiers.
- **Color System:** High-contrast accessible surface tokens meeting WCAG AA/AAA contrast ratios.
- **Spacing:** Consistent 4px/8px spatial cadence with generous section separation.
- **Motion:** Purposeful, low-latency transitions honoring prefers-reduced-motion.
- **Components:** Motion Module, Interaction Module, Micro-Interaction Module, UI Module

## Masallah Generation Prompt

```text
Create a tactile micro-interaction component inspired by Design Spells:
- Idle → Hover: Subtle magnetic pull toward cursor within a 12px radius (clamped to max 4px translation) and border luminance shift.
- Active Press: Instant scale(0.96) compression with 80ms spring response.
- Success State (e.g., "Prompt Copied"): Smoothly morph the clipboard icon into a stroke-animated checkmark (`stroke-dashoffset` transition over 220ms), crossfade label width without layout jump, and emit 6 lightweight CSS-variable particles that fade in 450ms.
- Accessibility: Announce status change via an `aria-live="polite"` region and skip particle motion when `prefers-reduced-motion: reduce` is active.
```
