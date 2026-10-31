# postprocessing (pmndrs) (`pmndrs/postprocessing`)

- **GitHub:** [https://github.com/pmndrs/postprocessing](https://github.com/pmndrs/postprocessing)
- **Homepage / Demo:** [https://pmndrs.github.io/postprocessing/public/demo/](https://pmndrs.github.io/postprocessing/public/demo/)
- **License:** Zlib
- **Stars:** 2,916
- **Language:** JavaScript

## Installation

```bash
npm install postprocessing three
```

## Key Features

- Primary domain: WebGL (J. Video / Motion / Generative Toolchain)
- Core stack: Three.js, WebGL2, GLSL, EffectComposer, React Three Fiber
- License verified: Zlib
- Referenced cleanly via metadata and minimal educational code without vendor bloat.

## Minimal Usage Example

```tsx
import { EffectComposer, EffectPass, RenderPass, SelectiveBloomEffect } from "postprocessing";

const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
composer.addPass(new EffectPass(camera, new SelectiveBloomEffect(scene, camera, { intensity: 1.5 })));
```
