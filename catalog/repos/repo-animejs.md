# Anime.js (`juliangarnier/anime`)

- **GitHub:** [https://github.com/juliangarnier/anime](https://github.com/juliangarnier/anime)
- **Homepage / Demo:** [https://animejs.com](https://animejs.com)
- **License:** MIT
- **Stars:** 74,120
- **Language:** JavaScript

## Installation

```bash
npm install animejs
```

## Key Features

- Primary domain: Motion (J. Video / Motion / Generative Toolchain)
- Core stack: JavaScript, Anime.js, SVG, CSS Transforms, DOM
- License verified: MIT
- Referenced cleanly via metadata and minimal educational code without vendor bloat.

## Minimal Usage Example

```tsx
import anime from "animejs";

anime.timeline({ easing: "spring(1, 80, 12, 0)" })
  .add({
    targets: ".grid-cell",
    scale: [0.85, 1],
    delay: anime.stagger(35, { grid: [10, 5], from: "center" }),
  });
```
