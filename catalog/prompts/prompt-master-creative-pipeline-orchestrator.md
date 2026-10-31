# Masallah Master Toolchain Orchestrator (Remotion + Three.js + Audio + FFmpeg)

- **Category:** Workflow
- **Source:** [Masallah Master Toolchain](https://github.com/remotion-dev/remotion)
- **Target Model:** Claude 3.7 Sonnet / Gemini 2.5 Pro
- **License:** MIT
- **Tags:** Workflow, Video, 3D, Audio, Agent Skill, Prompt

## Description

Master system prompt instructing an autonomous coding agent how to combine Remotion, Three.js, Anime.js, CosyVoice, librosa, WhisperX, and FFmpeg into a single automated studio pipeline.

## Original Prompt

```text
Combine Remotion, Three.js, CosyVoice, librosa, WhisperX, and FFmpeg to generate a complete video.
```

## Masallah Optimized Prompt

```text
Act as a Principal Creative Technologist orchestrating the Masallah Generative Video & 3D Toolchain:
1. Audio & Timing Spine First: Synthesize narration via `CosyVoice`, extract millisecond word timestamps via `WhisperX`, and extract 60fps beat/spectral envelopes from the background score via `librosa`. Combine both into a single deterministic `timeline-manifest.json`.
2. 3D & VFX Layer: Render 3D scene elements in `Three.js` (`@remotion/three`) with `three.quarks` particle emitters and `pmndrs/postprocessing` bloom driven directly by `timeline-manifest.json` beat frames.
3. 2D Motion & Kinetic Typography: Choreograph UI cards, diagrams (`Manim` SVG exports), and word-by-word captions in `Remotion` using `spring()` and `Anime.js` timelines synced to `useCurrentFrame()`.
4. Final Mastering: Render frames via `npx remotion render`, normalize integrated loudness to -14 LUFS and mux multi-track subtitles via `FFmpeg`, and extract social preview segments via `LosslessCut`.
```

## Example Input

Produce a 60-second 1080p60 technical launch trailer from a Markdown script and audio stem.

## Example Output

Complete `timeline-manifest.json` schema, Remotion + Three.js composition, and FFmpeg mastering pipeline.
