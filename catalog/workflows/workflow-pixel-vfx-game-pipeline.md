# Procedural Pixel VFX & Sprite Sheet Pipeline

> Authoring Zero-Dependency Dual-Buffer Pixel Effects with PixelFX, Tweakpane & FFmpeg

Iterative "Draft, Render, Look, Refine" workflow from PixelFX combining dual-buffer (color + additive light) procedural canvas simulation, live Tweakpane palette/seed tuning, contact-sheet inspection, and FFmpeg sprite-sheet/GIF export.

## Connected Stages

### 1. Draft Effect & Acting Curve (PixelFX Agent Skill)
- **Input:** VFX prompt ("Frost Nova" / "Arcane Slash")
- **Output:** Procedural JS effect module
- **Architecture Note:** Structure wind-up anticipation, 2-frame contact freeze, and dithered dissipation.

### 2. Dual-Buffer Simulation (Color + Light) (PixelFX Core)
- **Input:** Frame delta dt & palette ramp
- **Output:** Composited ImageData pixel buffer
- **Architecture Note:** Composite opaque/dithered color pixels with additive radial light glow.

### 3. Real-Time Palette & Seed Tuning (Tweakpane)
- **Input:** Effect meta.options
- **Output:** Tuned palette, seed, angle & glow preset
- **Architecture Note:** Interactively test palette swaps and seeds at 60fps in the browser.

### 4. Contact Sheet & Pixel-Crisp Export (FFmpeg)
- **Input:** Rendered PNG frame sequence
- **Output:** Sprite sheet PNG & nearest-neighbor MP4/GIF
- **Architecture Note:** Scale with -vf scale=iw*4:ih*4:flags=neighbor to preserve razor-sharp pixels.

## End-to-End Orchestration Prompt

```text
Execute the Procedural Pixel VFX Pipeline:
1. Search existing 244 effects in patch-gg/pixelfx or scaffold a new effect module with wind-up, hit-stop contact, and recovery phases.
2. Render into split color (indexed ramp + 2x2 Bayer dither) and additive light buffers at 160x90 native resolution.
3. Bind Tweakpane controls to swap palettes (frost, fire, arcane, cyber), random seeds, and glow intensity in real time.
4. Export contact sheets (node tools/render.mjs) and encode crisp nearest-neighbor MP4/GIF previews via FFmpeg (-sws_flags neighbor).
```
