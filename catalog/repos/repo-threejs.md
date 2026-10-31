# Three.js (`mrdoob/three.js`)

- **GitHub:** [https://github.com/mrdoob/three.js](https://github.com/mrdoob/three.js)
- **Homepage / Demo:** [https://threejs.org/examples/](https://threejs.org/examples/)
- **License:** MIT
- **Stars:** 117,304
- **Language:** JavaScript

## Installation

```bash
npm install three @types/three
```

## Key Features

- Primary domain: 3D (J. Video / Motion / Generative Toolchain)
- Core stack: Three.js, WebGL2, WebGPU, GLSL, JavaScript, TypeScript
- License verified: MIT
- Referenced cleanly via metadata and minimal educational code without vendor bloat.

## Minimal Usage Example

```tsx
import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
const mesh = new THREE.Mesh(
  new THREE.IcosahedronGeometry(1.2, 3),
  new THREE.MeshPhysicalMaterial({ roughness: 0.1, transmission: 0.9, thickness: 1.2 })
);
scene.add(mesh);
```
