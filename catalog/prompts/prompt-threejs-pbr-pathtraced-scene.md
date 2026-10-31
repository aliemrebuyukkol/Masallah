# Three.js Instanced PBR Geometry & GPU Path Tracing Integration

- **Category:** 3D
- **Source:** [Three.js / Three GPU Pathtracer](https://github.com/mrdoob/three.js)
- **Target Model:** Claude 3.7 Sonnet / Gemini 2.5 Pro
- **License:** MIT
- **Tags:** 3D, WebGL, Shader, Creative Coding, Prompt, Example

## Description

Constructs a responsive 3D WebGL scene with `InstancedMesh`, custom Fresnel GLSL shaders, damped camera orbit, and progressive `three-gpu-pathtracer` global illumination.

## Original Prompt

```text
Create an interactive 3D scene in Three.js with instanced meshes, lights, and custom shaders.
```

## Masallah Optimized Prompt

```text
Build a high-performance 3D scene combining `three` (`mrdoob/three.js`) and `three-gpu-pathtracer` (`gkjohnson/three-gpu-pathtracer`):
1. Scene & Camera: Initialize `WebGLRenderer({ antialias: true, powerPreference: 'high-performance' })` with `ACESFilmicToneMapping` and clamped `devicePixelRatio (<= 2)`.
2. Instanced Geometry: Render 120 kinetic crystalline forms via a single `THREE.InstancedMesh` draw call, updating each instance matrix along a curl-noise orbital path in the animation loop.
3. Realistic Lighting & Path Tracer Mode: Provide a toggle between real-time 60fps PBR (`MeshPhysicalMaterial` with `transmission: 0.92, ior: 1.52, roughness: 0.08, thickness: 1.5`) and progressive BVH GPU Path Tracing (`WebGLPathTracer`) that accumulates global illumination and caustics when the camera is stationary.
4. Resource Cleanup: Dispose geometries, materials, textures, and renderer context on component unmount.
```

## Example Input

Interactive 3D hero sculpture with real-time dielectric refraction and camera orbit.

## Example Output

Complete Three.js / WebGL module + interactive 3D viewport in the Masallah live demo studio.
