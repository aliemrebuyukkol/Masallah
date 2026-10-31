# Tactile Micro-Interaction & Spring Feedback Button

- **Category:** Motion
- **Source:** [Design Spells](https://designspells.com)
- **Target Model:** Claude 3.7 Sonnet / Gemini 2.5 Pro
- **License:** MIT (Masallah Abstracted Prompt)
- **Tags:** Motion, Interaction, UI, Component, Prompt

## Description

Crafts a tactile "Copy Prompt / Bookmark" micro-interaction with spring compression, morphing checkmark SVG path, and subtle particle burst.

## Original Prompt

```text
Create a button with a nice copy confirmation micro-interaction.
```

## Masallah Optimized Prompt

```text
Create a tactile micro-interaction component inspired by Design Spells:
- Idle → Hover: Subtle magnetic pull toward cursor within a 12px radius (clamped to max 4px translation) and border luminance shift.
- Active Press: Instant scale(0.96) compression with 80ms spring response.
- Success State (e.g., "Prompt Copied"): Smoothly morph the clipboard icon into a stroke-animated checkmark (`stroke-dashoffset` transition over 220ms), crossfade label width without layout jump, and emit 6 lightweight CSS-variable particles that fade in 450ms.
- Accessibility: Announce status change via an `aria-live="polite"` region and skip particle motion when `prefers-reduced-motion: reduce` is active.
```

## Example Input

Copy Prompt button inside a code & prompt inspection drawer.

## Example Output

Self-contained React + CSS spring micro-interaction component with keyboard Enter/Space support and reduced-motion fallback.
