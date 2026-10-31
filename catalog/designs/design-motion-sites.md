# Motion Sites Kinetic Hero & Prompt Blueprint

- **Source:** [Motion Sites](https://motionsites.ai)
- **Category:** Motion
- **Technologies:** Motion, GSAP, Three.js, Next.js

## Visual Analysis

- **Layout:** Full-viewport video/canvas stage with floating glassmorphic control pill and prompt inspection drawer.
- **Typography:** Tight display grotesk with animated character stagger (25ms per glyph) and monospace prompt blocks.
- **Color System:** Deep carbon background (#070709) with electric cyan and violet shader highlights.
- **Spacing:** Edge-to-edge media frames with 24px floating HUD margins.
- **Motion:** Continuous 60fps canvas background loop + spring-driven prompt drawer.
- **Components:** Kinetic Hero Stage, Copyable Prompt Drawer, Live Video Preview Card

## Masallah Generation Prompt

```text
Design a motion-first hero section following Motion Sites (`motionsites.ai`) choreography principles without blocking time-to-interactive:
- 0ms–150ms: Canvas background shader initializes at 0.5x DPR and fades in opacity (0 → 1) so first contentful paint (FCP) is never blocked.
- 100ms–450ms: Category eyebrow badge and headline words reveal with a 35ms stagger (`translateY(18px) -> 0`, `opacity: 0 -> 1`).
- 300ms–650ms: Search bar and live counter pills scale from 0.98 → 1.0 with spring damping.
- Scroll Choreography: As the user scrolls the first 300px, interpolate hero canvas opacity from 1 → 0.25 and scale to 0.97 while pinning the sticky filter bar.
```
