# Frame-Deterministic Remotion Video Composition (`useCurrentFrame` + `spring`)

- **Category:** Video
- **Source:** [Remotion](https://github.com/remotion-dev/remotion)
- **Target Model:** Claude 3.7 Sonnet / Gemini 2.5 Pro
- **License:** MIT
- **Tags:** Video, Motion, React, Prompt, Example

## Description

Authors a deterministic 60fps React video composition in Remotion using `<Sequence>`, `spring()`, `interpolate()`, and parameterized Zod schema props.

## Original Prompt

```text
Create a Remotion video composition with animated text and spring transitions.
```

## Masallah Optimized Prompt

```text
Create a deterministic 60fps programmatic video composition using Remotion (`github.com/remotion-dev/remotion`):
1. Strict Frame Determinism: Drive EVERY animation exclusively from `const frame = useCurrentFrame()` and `const { fps, width, height } = useVideoConfig()`. Never use CSS `transition` or `requestAnimationFrame`, which cause non-deterministic frame flicker during headless rendering.
2. Choreography via `<Series>` and `<Sequence>`:
   - Frames 0–45: Kinetic brand intro using `spring({ frame, fps, config: { damping: 14, stiffness: 160 } })`.
   - Frames 35–120: 3-card feature showcase staggered by 12 frames each (`frame - index * 12`).
   - Frames 110–180: Audio-synced waveform + call-to-action outro using `interpolate(frame, [110, 140], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })`.
3. Define a Zod schema for `defaultProps` so titles, theme colors, and metrics can be customized live in Remotion Studio or rendered via CLI.
```

## Example Input

6-second (360 frames @ 60fps) product release reel for Masallah v1.0.

## Example Output

Complete Remotion `<Composition>` + interactive web timeline player preview.
