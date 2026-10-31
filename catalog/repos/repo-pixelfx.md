# PixelFX (`patch-gg/pixelfx`)

- **GitHub:** [https://github.com/patch-gg/pixelfx](https://github.com/patch-gg/pixelfx)
- **Homepage / Demo:** [https://patch-gg.github.io/pixelfx/](https://patch-gg.github.io/pixelfx/)
- **License:** MIT
- **Stars:** 1,310
- **Language:** JavaScript

## Installation

```bash
npm install github:patch-gg/pixelfx
```

## Key Features

- Primary domain: VFX (I. Creative Development / Pixel Effects)
- Core stack: JavaScript, HTML5 Canvas, ImageData, Procedural Generation, Sprite Sheets
- License verified: MIT
- Referenced cleanly via metadata and minimal educational code without vendor bloat.

## Minimal Usage Example

```tsx
import { createFrame, clearFrame, createFx, composite } from "pixelfx";
import * as frostNova from "pixelfx/fx/ice/frost-nova";

const frame = createFrame(320, 180);
const fx = createFx(frostNova, { x: 160, y: 140, light: 1.1 });
fx.update(1 / 60);
clearFrame(frame);
fx.draw(frame, "front");
```
