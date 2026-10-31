# Masallah — Multi-Tool Creative & Engineering Workflows

## AI Video Pipeline (11-Stage Programmatic Studio)

End-to-end deterministic video production pipeline uniting 11 open-source engines: scripting & Remotion Agent Skills, CosyVoice narration, WhisperX word-level timestamps, librosa beat envelopes, Three.js + postprocessing + Three.quarks 3D scenes, Anime.js/Motion choreography, and FFmpeg/LosslessCut mastering.

1. **Fikir / Storyboard & Agent Skills** (`Remotion Skills`): Use /remotion-best-practices and /remotion-create to structure sequences and preview in Studio.
2. **Programmatic Video Timeline** (`Remotion`): Compose <Series> and <Sequence> layers driven strictly by useCurrentFrame().
3. **2D Choreography & Layout Motion** (`Anime.js / Motion`): Synchronize SVG stroke-dashoffset and spring layout projections to frame timestamps.
4. **3D Spatial Scene & Camera Rig** (`Three.js`): Render instanced 3D geometry and physically based materials per frame.
5. **Bloom, DoF & Color Grading** (`postprocessing`): Combine SelectiveBloomEffect and Vignette into a single consolidated shader pass.
6. **Particle Trails & VFX Bursts** (`Three.quarks`): Step BatchedRenderer deterministically per frame to emit trails and sparks.
7. **Multilingual Narration Synthesis** (`CosyVoice`): Synthesize natural zero-shot or instruct-controlled speech without committing model weights.
8. **Beat Detection & Spectral Sync** (`librosa`): Perform HPSS separation and resample onset strength onto the 60fps frame grid.
9. **Word-Level Subtitle Alignment** (`WhisperX`): Run wav2vec2 phoneme alignment for frame-accurate active word highlighting.
10. **Encoding, Loudness & Muxing** (`FFmpeg`): Apply loudnorm=I=-14:TP=-1.0 and encode faststart H.264 and VP9 web deliverables.
11. **Lossless Chapter & Clip Cutting** (`LosslessCut`): Extract keyframe-aligned highlights instantaneously without generation loss.

## Interactive 3D & WebGL Pipeline (6-Stage Real-Time Studio)

Production blueprint for building 60fps interactive 3D web experiences with rigid/soft-body physics, batched particle VFX, consolidated post-processing shaders, progressive path-traced GI, and real-time parameter tuning.

1. **Scene Graph, Camera & PBR Meshes** (`Three.js`): Initialize renderer, camera controls, and physically based materials.
2. **BVH Global Illumination & Caustics** (`Three GPU Pathtracer`): Accelerate ray queries with MeshBVH for realistic dielectric refraction and soft shadows.
3. **Rigid & Soft Body Collision Dynamics** (`Jolt Physics`): Run JoltPhysics WASM stepping and emit impulse callbacks on high-velocity impacts.
4. **Merged Shader Pass Pipeline** (`postprocessing`): Automatically merge fragment effects into minimal fullscreen quad passes.
5. **Batched GPU Particle Trails & VFX** (`Three.quarks`): Update BatchedRenderer in the main loop for zero-overhead spark and trail VFX.
6. **Real-Time Uniform & Physics Tuning** (`Tweakpane`): Bind two-way controls for immediate visual art direction and performance monitoring.

## Product UI Engineering Pipeline (10-Stage Quality Gate)

Complete design-to-production engineering pipeline guaranteeing usability, psychological ergonomics, WAI-ARIA accessibility, 60fps motion restraint, automated behavior/E2E testing, isolated documentation, and OWASP security hardening.

1. **Usability Research & Heuristic Model** (`Nielsen Norman Group`): Ensure visibility of system status, error prevention, and user freedom.
2. **Cognitive Load & Motor Ergonomics** (`Laws of UX`): Enforce >=44px touch targets, progressive disclosure, and <100ms UI feedback.
3. **Component Anatomy & Slot Contract** (`Component Gallery`): Benchmark component API against 60+ production design systems.
4. **WAI-ARIA Headless Primitives** (`Radix UI`): Guarantee roving tabindex, ARIA attributes, and screen-reader announcements.
5. **Composable Open-Code UI Layer** (`shadcn/ui`): Combine semantic CSS variables with clean variant composition.
6. **Spring Choreography & Layout Motion** (`Motion`): Use layoutId and AnimatePresence while honoring useReducedMotion().
7. **Accessible Behavior Unit Tests** (`Testing Library`): Query strictly by getByRole/getByLabelText to verify real user interactions.
8. **Cross-Viewport E2E & Deep-Link QA** (`Playwright`): Test navigation, search, URL query filters, clipboard copy, and zero console errors.
9. **Isolated Visual State Documentation** (`Storybook`): Document empty, loading, error, and edge-case states in isolation.
10. **XSS, Header & Secret Security Gate** (`OWASP Cheat Sheets`): Enforce safe URL protocols, CSP/security headers, and zero leaked credentials.

## Procedural Pixel VFX & Sprite Sheet Pipeline

Iterative "Draft, Render, Look, Refine" workflow from PixelFX combining dual-buffer (color + additive light) procedural canvas simulation, live Tweakpane palette/seed tuning, contact-sheet inspection, and FFmpeg sprite-sheet/GIF export.

1. **Draft Effect & Acting Curve** (`PixelFX Agent Skill`): Structure wind-up anticipation, 2-frame contact freeze, and dithered dissipation.
2. **Dual-Buffer Simulation (Color + Light)** (`PixelFX Core`): Composite opaque/dithered color pixels with additive radial light glow.
3. **Real-Time Palette & Seed Tuning** (`Tweakpane`): Interactively test palette swaps and seeds at 60fps in the browser.
4. **Contact Sheet & Pixel-Crisp Export** (`FFmpeg`): Scale with -vf scale=iw*4:ih*4:flags=neighbor to preserve razor-sharp pixels.
