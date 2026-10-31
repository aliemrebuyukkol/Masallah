# Jolt Physics (`jrouwe/JoltPhysics`)

- **GitHub:** [https://github.com/jrouwe/JoltPhysics](https://github.com/jrouwe/JoltPhysics)
- **Homepage / Demo:** [https://jrouwe.github.io/JoltPhysics.js/](https://jrouwe.github.io/JoltPhysics.js/)
- **License:** MIT
- **Stars:** 12,046
- **Language:** C++

## Installation

```bash
npm install jolt-physics
```

## Key Features

- Primary domain: 3D (J. Video / Motion / Generative Toolchain)
- Core stack: C++, WebAssembly, JoltPhysics.js, Three.js, Rigid/Soft Body
- License verified: MIT
- Referenced cleanly via metadata and minimal educational code without vendor bloat.

## Minimal Usage Example

```tsx
import initJolt from "jolt-physics";

const Jolt = await initJolt();
const settings = new Jolt.JoltSettings();
const jolt = new Jolt.JoltInterface(settings);
const physicsSystem = jolt.GetPhysicsSystem();
```
