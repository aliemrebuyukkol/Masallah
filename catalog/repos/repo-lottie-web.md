# Lottie Web (`airbnb/lottie-web`)

- **GitHub:** [https://github.com/airbnb/lottie-web](https://github.com/airbnb/lottie-web)
- **Homepage / Demo:** [https://airbnb.io/lottie/](https://airbnb.io/lottie/)
- **License:** MIT
- **Stars:** 32,309
- **Language:** JavaScript

## Installation

```bash
npm install lottie-web
```

## Key Features

- Primary domain: Motion (J. Video / Motion / Generative Toolchain)
- Core stack: JavaScript, Lottie JSON, SVG, HTML5 Canvas
- License verified: MIT
- Referenced cleanly via metadata and minimal educational code without vendor bloat.

## Minimal Usage Example

```tsx
import lottie from "lottie-web";

const anim = lottie.loadAnimation({
  container: document.getElementById("lottie-stage")!,
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "/animations/vector-rig.json",
});
anim.goToAndStop(45, true);
```
