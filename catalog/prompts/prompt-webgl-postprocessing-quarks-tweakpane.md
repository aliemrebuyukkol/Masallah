# WebGL Post-Processing (Bloom/DoF), Three.quarks Particles & Tweakpane HUD

- **Category:** WebGL
- **Source:** [postprocessing / Three.quarks / Tweakpane / Jolt Physics](https://github.com/pmndrs/postprocessing)
- **Target Model:** Claude 3.7 Sonnet / Gemini 2.5 Pro
- **License:** MIT / Zlib
- **Tags:** WebGL, 3D, VFX, Shader, Tool, Prompt, Example

## Description

Unifies Jolt rigid-body collisions, `three.quarks` batched particle trails, `pmndrs/postprocessing` merged shader passes, and a live `Tweakpane` parameter tuner.

## Original Prompt

```text
Add bloom post-processing, particle trails, physics collision, and a Tweakpane debug panel to a Three.js scene.
```

## Masallah Optimized Prompt

```text
Integrate the complete creative 3D WebGL toolchain (`jolt-physics`, `three.quarks`, `pmndrs/postprocessing`, and `tweakpane`):
1. Physics Simulation (`JoltPhysics.js`): Step rigid-body spheres with restitution and attract them toward a central magnetic singularity; detect impulse thresholds on collision contacts.
2. Batched VFX (`three.quarks`): Attach a single `BatchedRenderer` to the scene; spawn GPU ribbon trails on moving bodies and trigger a radial spark burst emitter whenever collision impulse exceeds threshold.
3. Consolidated Shader Pipeline (`pmndrs/postprocessing`): Merge `SelectiveBloomEffect({ intensity: 1.8, luminanceThreshold: 0.75, mipmapBlur: true })`, `DepthOfFieldEffect`, and `VignetteEffect` into a single consolidated `EffectPass` inside `EffectComposer`.
4. Live Parameter Tuning (`Tweakpane`): Bind real-time controls for Bloom Intensity, Chromatic Aberration, Particle Emission Rate, Gravity Vector, and Time Scale, plus an exportable JSON preset button.
```

## Example Input

Interactive WebGL VFX & shader parameter laboratory with real-time Tweakpane controls.

## Example Output

Unified WebGL + Tweakpane interactive sandbox with live bloom, particle trail, and physics controls.
