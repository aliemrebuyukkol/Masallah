# Three.quarks (`Alchemist0823/three.quarks`)

- **GitHub:** [https://github.com/Alchemist0823/three.quarks](https://github.com/Alchemist0823/three.quarks)
- **Homepage / Demo:** [https://quarks.art/](https://quarks.art/)
- **License:** MIT
- **Stars:** 1,145
- **Language:** TypeScript

## Installation

```bash
npm install three.quarks three
```

## Key Features

- Primary domain: VFX (J. Video / Motion / Generative Toolchain)
- Core stack: Three.js, TypeScript, WebGL Instancing, Particle VFX
- License verified: MIT
- Referenced cleanly via metadata and minimal educational code without vendor bloat.

## Minimal Usage Example

```tsx
import { BatchedRenderer, ParticleSystem, ConeEmitter, IntervalValue, ColorRange } from "three.quarks";

const batchRenderer = new BatchedRenderer();
scene.add(batchRenderer);
const sparks = new ParticleSystem({
  duration: 2,
  looping: true,
  startLife: new IntervalValue(0.4, 1.1),
  shape: new ConeEmitter({ radius: 0.2, angle: 0.4 }),
});
batchRenderer.addSystem(sparks);
```
