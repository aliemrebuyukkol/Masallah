# Three GPU Pathtracer (`gkjohnson/three-gpu-pathtracer`)

- **GitHub:** [https://github.com/gkjohnson/three-gpu-pathtracer](https://github.com/gkjohnson/three-gpu-pathtracer)
- **Homepage / Demo:** [https://gkjohnson.github.io/three-gpu-pathtracer/](https://gkjohnson.github.io/three-gpu-pathtracer/)
- **License:** MIT
- **Stars:** 1,950
- **Language:** JavaScript

## Installation

```bash
npm install three-gpu-pathtracer three-mesh-bvh
```

## Key Features

- Primary domain: 3D (J. Video / Motion / Generative Toolchain)
- Core stack: Three.js, WebGL2, BVH, GLSL Path Tracing
- License verified: MIT
- Referenced cleanly via metadata and minimal educational code without vendor bloat.

## Minimal Usage Example

```tsx
import { WebGLPathTracer } from "three-gpu-pathtracer";

const pathTracer = new WebGLPathTracer(renderer);
pathTracer.setScene(scene, camera);
// In render loop:
pathTracer.renderSample();
```
