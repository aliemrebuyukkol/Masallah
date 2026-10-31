# Tweakpane (`cocopon/tweakpane`)

- **GitHub:** [https://github.com/cocopon/tweakpane](https://github.com/cocopon/tweakpane)
- **Homepage / Demo:** [https://tweakpane.github.io/docs/](https://tweakpane.github.io/docs/)
- **License:** MIT
- **Stars:** 4,628
- **Language:** TypeScript

## Installation

```bash
npm install tweakpane
```

## Key Features

- Primary domain: Tool (J. Video / Motion / Generative Toolchain)
- Core stack: TypeScript, Tweakpane, Canvas, WebGL Uniforms
- License verified: MIT
- Referenced cleanly via metadata and minimal educational code without vendor bloat.

## Minimal Usage Example

```tsx
import { Pane } from "tweakpane";

const params = { bloomIntensity: 1.4, timeScale: 1.0, wireframe: false };
const pane = new Pane({ title: "Scene Parameters" });
pane.addBinding(params, "bloomIntensity", { min: 0, max: 4, step: 0.05 });
pane.addBinding(params, "timeScale", { min: 0, max: 2, step: 0.05 });
pane.addBinding(params, "wireframe");
```
