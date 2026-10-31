# Interactive 3D & WebGL Pipeline (6-Stage Real-Time Studio)

> Combining Three.js, GPU Path Tracing, Jolt Physics, Merged Post-Processing, Batched Particles & Live Tweakpane Controls

Production blueprint for building 60fps interactive 3D web experiences with rigid/soft-body physics, batched particle VFX, consolidated post-processing shaders, progressive path-traced GI, and real-time parameter tuning.

## Connected Stages

### 1. Scene Graph, Camera & PBR Meshes (Three.js)
- **Input:** GLTF assets / procedural geometry
- **Output:** WebGL2 scene graph & InstancedMesh buffers
- **Architecture Note:** Initialize renderer, camera controls, and physically based materials.

### 2. BVH Global Illumination & Caustics (Three GPU Pathtracer)
- **Input:** Three.js scene & environment HDR
- **Output:** Progressively converged path-traced beauty pass
- **Architecture Note:** Accelerate ray queries with MeshBVH for realistic dielectric refraction and soft shadows.

### 3. Rigid & Soft Body Collision Dynamics (Jolt Physics)
- **Input:** Collider shapes & force impulses
- **Output:** 60Hz deterministic body transforms & contact events
- **Architecture Note:** Run JoltPhysics WASM stepping and emit impulse callbacks on high-velocity impacts.

### 4. Merged Shader Pass Pipeline (postprocessing)
- **Input:** HDR scene render target
- **Output:** Bloom, Depth of Field & ACES/LUT graded frame
- **Architecture Note:** Automatically merge fragment effects into minimal fullscreen quad passes.

### 5. Batched GPU Particle Trails & VFX (Three.quarks)
- **Input:** Physics contact points & velocity vectors
- **Output:** Instanced particle emitters & ribbon trails
- **Architecture Note:** Update BatchedRenderer in the main loop for zero-overhead spark and trail VFX.

### 6. Real-Time Uniform & Physics Tuning (Tweakpane)
- **Input:** Scene config object & FPS telemetry
- **Output:** Interactive debug GUI & exportable JSON preset
- **Architecture Note:** Bind two-way controls for immediate visual art direction and performance monitoring.

## End-to-End Orchestration Prompt

```text
Architect a real-time 3D WebGL experience uniting the 6-stage Interactive 3D Pipeline:
1. Scene Graph & PBR Foundation (Three.js): Setup WebGLRenderer (high-performance, clamped DPR <= 2), PerspectiveCamera, and InstancedMesh hierarchies.
2. Progressive Global Illumination (Three GPU Pathtracer): Build BVH acceleration structures via three-mesh-bvh and enable progressive path tracing when camera velocity settles to zero.
3. Multi-Core Physics Simulation (Jolt Physics): Step WASM rigid/soft bodies at a fixed 60Hz timestep (dt = 1/60) and sync world transforms to Three.js meshes.
4. Consolidated Post-Processing (pmndrs/postprocessing): Merge SelectiveBloomEffect, DepthOfFieldEffect, and ChromaticAberrationEffect into a single EffectPass.
5. GPU Particle Systems (Three.quarks): Spawn ribbon trails and collision spark bursts on Jolt contact impulses via a single BatchedRenderer.
6. Live Parameter HUD (Tweakpane): Expose shader uniforms, bloom thresholds, physics restitution, and lighting temperature with 1-click JSON preset export.
```
