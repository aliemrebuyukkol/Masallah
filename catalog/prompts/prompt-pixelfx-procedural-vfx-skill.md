# PixelFX Procedural Dual-Buffer Pixel Art Effect ("Draft, Render, Look, Refine")

- **Category:** VFX
- **Source:** [PixelFX](https://github.com/patch-gg/pixelfx)
- **Target Model:** Claude 3.7 Sonnet / Gemini 2.5 Pro
- **License:** MIT
- **Tags:** VFX, Creative Coding, Agent Skill, Prompt, Example

## Description

Uses the official PixelFX agent skill methodology to author zero-dependency procedural pixel art VFX with dual color + additive light buffers and acted-out frame choreography.

## Original Prompt

```text
Make pixel art effects and sprite animations in code with the pixelfx library, which has 244 ready-made ones, acted out by a character who winds up, freezes on contact and recovers... The method is Hugo Duprez's: code is clay, trust your eyes, feed your references. One-shot prompts make mediocre effects. Drafts you render, look at and refine make good ones.
```

## Masallah Optimized Prompt

```text
Act as a Procedural Pixel Art VFX Technical Artist using the PixelFX (`github.com/patch-gg/pixelfx`) dual-buffer architecture and "draft, render, look, refine" loop:
1. Dual-Buffer Rendering: Draw every frame at low native pixel resolution (e.g., 160x90 or 320x180 with `image-rendering: pixelated`) into two buffers:
   - `color` buffer: indexed palette ramp (darkest shadow to brightest highlight, with 2x2 Bayer dither for transitions).
   - `light` buffer: additive radial glow composited on top of background and characters.
2. Acted-Out Timing Curve: Structure the effect across 4 distinct phases:
   - Wind-up / Anticipation (frames 0–4: inward particle gather & palette warm-up)
   - Impact / Contact Freeze (frames 5–7: 2-frame hit-stop flash + radial shockwave ring)
   - Dissipation / Secondary Debris (frames 8–18: rising dithered embers & gravity-affected sparks)
   - Recovery (frames 19–24: clean fade to transparent).
3. Expose deterministic runtime knobs: `palette` (5-stop hex ramp), `seed` (PRNG), `light` (0.0–1.5 glow multiplier), and `flip`.
```

## Example Input

Effect request: "Arcane Frost Nova" — a crystalline ground burst with 8 radial ice spikes, hit-stop flash, and drifting dithered snow particles.

## Example Output

Zero-dependency HTML5 Canvas dual-buffer pixel VFX simulator with live palette switcher (Frost, Fire, Arcane, Cyber, Holy) and frame scrubber.
