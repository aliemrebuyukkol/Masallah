# Codrops-Style WebGL Shader Grid Hover & Directional Wipe

- **Category:** Creative Coding
- **Source:** [Tympanus / Codrops](https://tympanus.net/codrops/)
- **Target Model:** Claude 3.7 Sonnet / Gemini 2.5 Pro
- **License:** MIT (Masallah Abstracted Prompt)
- **Tags:** Creative Coding, WebGL, Shader, Motion, Interaction, Prompt

## Description

Builds an experimental interactive grid where pointer velocity drives a custom GLSL chromatic displacement and directional edge reveal.

## Original Prompt

```text
Create a Codrops style image grid hover effect using WebGL and shaders.
```

## Masallah Optimized Prompt

```text
Implement an experimental interactive showcase grid inspired by Tympanus / Codrops (specifically LookbookHoverEffects and ImageGridMotionEffect):
- Track normalized pointer position `(uMouse)` and damped pointer velocity `(uVelocity)` using linear interpolation (`lerp = 0.12`).
- Detecting entry vector: Compute which edge (top, right, bottom, left) the pointer crossed using `atan2(dy, dx)` so the card overlay sweeps in along the exact entry vector.
- Fragment Shader: Apply subtle barrel distortion and RGB channel split proportional to `length(uVelocity)` while keeping text crisp in a DOM overlay layer above the canvas.
- Graceful Degradation: Fall back to hardware-accelerated CSS 3D perspective tilt if WebGL context creation is unavailable or `prefers-reduced-motion` is enabled.
```

## Example Input

Interactive showcase grid of 6 experimental shader & motion studies.

## Example Output

React component with quadrant entry-angle detection, smooth damped velocity uniforms, and reduced-motion toggle.
