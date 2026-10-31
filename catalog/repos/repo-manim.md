# Manim Community (`ManimCommunity/manim`)

- **GitHub:** [https://github.com/ManimCommunity/manim](https://github.com/ManimCommunity/manim)
- **Homepage / Demo:** [https://docs.manim.community/en/stable/examples.html](https://docs.manim.community/en/stable/examples.html)
- **License:** MIT
- **Stars:** 42,069
- **Language:** Python

## Installation

```bash
pip install manim
```

## Key Features

- Primary domain: Video (J. Video / Motion / Generative Toolchain)
- Core stack: Python, Manim, LaTeX, Cairo, OpenGL, FFmpeg
- License verified: MIT
- Referenced cleanly via metadata and minimal educational code without vendor bloat.

## Minimal Usage Example

```tsx
from manim import *

class EulerIdentityScene(Scene):
    def construct(self):
        eq = MathTex(r"e^{i\pi} + 1 = 0", font_size=72)
        self.play(Write(eq), run_time=2)
        self.wait(1)
```
