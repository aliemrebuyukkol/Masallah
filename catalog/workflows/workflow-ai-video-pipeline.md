# AI Video Pipeline (11-Stage Programmatic Studio)

> From Storyboard & Multilingual Voice Synthesis to Audio-Reactive 3D Remotion Rendering & Lossless Mastering

End-to-end deterministic video production pipeline uniting 11 open-source engines: scripting & Remotion Agent Skills, CosyVoice narration, WhisperX word-level timestamps, librosa beat envelopes, Three.js + postprocessing + Three.quarks 3D scenes, Anime.js/Motion choreography, and FFmpeg/LosslessCut mastering.

## Connected Stages

### 1. Fikir / Storyboard & Agent Skills (Remotion Skills)
- **Input:** Creative brief & script Markdown
- **Output:** Typed Composition schema & scene timing sheet
- **Architecture Note:** Use /remotion-best-practices and /remotion-create to structure sequences and preview in Studio.

### 2. Programmatic Video Timeline (Remotion)
- **Input:** Scene timing sheet & React components
- **Output:** Deterministic 60fps <Composition>
- **Architecture Note:** Compose <Series> and <Sequence> layers driven strictly by useCurrentFrame().

### 3. 2D Choreography & Layout Motion (Anime.js / Motion)
- **Input:** DOM/SVG layers & frame progress
- **Output:** Choreographed kinetic typography & vector reveals
- **Architecture Note:** Synchronize SVG stroke-dashoffset and spring layout projections to frame timestamps.

### 4. 3D Spatial Scene & Camera Rig (Three.js)
- **Input:** Camera spline & PBR materials
- **Output:** WebGL 3D stage inside video frame
- **Architecture Note:** Render instanced 3D geometry and physically based materials per frame.

### 5. Bloom, DoF & Color Grading (postprocessing)
- **Input:** Raw Three.js render buffer
- **Output:** Merged EffectPass (Bloom + DoF + LUT)
- **Architecture Note:** Combine SelectiveBloomEffect and Vignette into a single consolidated shader pass.

### 6. Particle Trails & VFX Bursts (Three.quarks)
- **Input:** Beat triggers & emitter transforms
- **Output:** Single-draw-call batched GPU particles
- **Architecture Note:** Step BatchedRenderer deterministically per frame to emit trails and sparks.

### 7. Multilingual Narration Synthesis (CosyVoice)
- **Input:** Annotated narration script
- **Output:** 24kHz mono WAV voice-over stems
- **Architecture Note:** Synthesize natural zero-shot or instruct-controlled speech without committing model weights.

### 8. Beat Detection & Spectral Sync (librosa)
- **Input:** Background music stem (.wav)
- **Output:** 60fps beat & 3-band RMS JSON envelope
- **Architecture Note:** Perform HPSS separation and resample onset strength onto the 60fps frame grid.

### 9. Word-Level Subtitle Alignment (WhisperX)
- **Input:** Narration WAV stem
- **Output:** Millisecond word-aligned captions.json & .srt
- **Architecture Note:** Run wav2vec2 phoneme alignment for frame-accurate active word highlighting.

### 10. Encoding, Loudness & Muxing (FFmpeg)
- **Input:** Rendered video + audio stems + subtitles
- **Output:** -14 LUFS mastered MP4 / WebM / HLS
- **Architecture Note:** Apply loudnorm=I=-14:TP=-1.0 and encode faststart H.264 and VP9 web deliverables.

### 11. Lossless Chapter & Clip Cutting (LosslessCut)
- **Input:** Master MP4 + chapter markers
- **Output:** Zero-reencode social & documentation clips
- **Architecture Note:** Extract keyframe-aligned highlights instantaneously without generation loss.

## End-to-End Orchestration Prompt

```text
Build a deterministic 60fps programmatic video using the 11-stage Masallah AI Video Pipeline:
1. Storyboard & Skill Setup: Scaffold composition with /remotion-create and /remotion-markup; define a typed timeline-manifest.json.
2. Voice Synthesis (CosyVoice): Generate 24kHz multilingual narration WAV files from the script with emotional prosody markers.
3. Word-Level Alignment (WhisperX): Run wav2vec2 forced alignment on the narration WAV to produce exact millisecond word timestamps.
4. Beat & Spectral Analysis (librosa): Extract HPSS percussive beats and 60fps sub-bass/mid/high energy arrays from the music stem.
5. 2D Choreography (Anime.js & Motion): Drive UI cards, SVG diagrams, and layout transitions from useCurrentFrame() and spring().
6. 3D Scene Stage (Three.js): Mount a @remotion/three canvas with camera keyframes locked to frame count.
7. Shader Grading (pmndrs/postprocessing): Apply consolidated SelectiveBloomEffect and ACESFilmic tone mapping.
8. GPU Particle VFX (Three.quarks): Trigger BatchedRenderer particle bursts on librosa beat frames.
9. Frame Render (Remotion): Render frame-accurate image sequence or ProRes master via npx remotion render.
10. Loudness & Delivery Mastering (FFmpeg): Normalize audio to -14 LUFS (EBU R128), burn/mux subtitles, and encode H.264/VP9/AV1 outputs.
11. Segment Extraction (LosslessCut): Extract zero-reencode keyframe-aligned social chapters via LosslessCut CLI.
```
