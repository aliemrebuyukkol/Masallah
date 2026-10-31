# Lottie Web Interface & System Architecture

- **Source:** [Lottie Web](https://github.com/airbnb/lottie-web)
- **Category:** Motion
- **Technologies:** JavaScript, Lottie JSON, SVG, HTML5 Canvas

## Visual Analysis

- **Layout:** Structured modular grid optimized for Motion scannability and progressive disclosure.
- **Typography:** High-legibility system pairing clear hierarchical headings with monospace code/token identifiers.
- **Color System:** High-contrast accessible surface tokens meeting WCAG AA/AAA contrast ratios.
- **Spacing:** Consistent 4px/8px spatial cadence with generous section separation.
- **Motion:** Purposeful, low-latency transitions honoring prefers-reduced-motion.
- **Components:** Motion Module, Vector Animation Module, SVG Module, Canvas Module

## Masallah Generation Prompt

```text
Implement a performance-hardened `lottie-web` (`github.com/airbnb/lottie-web`) React controller:
1. Lifecycle & Memory Safety: Instantiate via `lottie.loadAnimation({ container, renderer: 'svg' | 'canvas', loop: false, autoplay: false, animationData })` and guarantee `anim.destroy()` on unmount.
2. Viewport Gating: Attach an `IntersectionObserver` so offscreen Lottie instances never consume CPU/GPU frame budget.
3. Frame-Accurate Scrubbing: Map normalized scroll or slider progress `p in [0, 1]` to `anim.goToAndStop(p * anim.totalFrames, true)` inside a single `requestAnimationFrame` tick.
4. Reduced Motion: Jump directly to the key illustrative poster frame (`totalFrames * 0.65`) when `prefers-reduced-motion: reduce` is active.
```
