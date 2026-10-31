# Motion-First Website Hero Choreography & Timeline Blueprint

- **Category:** Motion
- **Source:** [Motion Sites](https://motionsites.ai)
- **Target Model:** Claude 3.7 Sonnet / Gemini 2.5 Pro
- **License:** MIT (Masallah Abstracted Prompt)
- **Tags:** Motion, Website, Design, Interaction, Prompt

## Description

Defines a frame-by-frame opening choreography sequence (0ms to 1200ms) balancing atmospheric canvas motion with instant interactive readiness.

## Original Prompt

```text
Create a motion-rich hero section with animated text, glowing background, and smooth scroll.
```

## Masallah Optimized Prompt

```text
Design a motion-first hero section following Motion Sites (`motionsites.ai`) choreography principles without blocking time-to-interactive:
- 0ms–150ms: Canvas background shader initializes at 0.5x DPR and fades in opacity (0 → 1) so first contentful paint (FCP) is never blocked.
- 100ms–450ms: Category eyebrow badge and headline words reveal with a 35ms stagger (`translateY(18px) -> 0`, `opacity: 0 -> 1`).
- 300ms–650ms: Search bar and live counter pills scale from 0.98 → 1.0 with spring damping.
- Scroll Choreography: As the user scrolls the first 300px, interpolate hero canvas opacity from 1 → 0.25 and scale to 0.97 while pinning the sticky filter bar.
```

## Example Input

Opening hero stage for a creative coding and design archive.

## Example Output

Complete React hero section with timed CSS/Motion orchestration and live FPS-friendly background canvas.
