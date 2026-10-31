# High-Performance Scroll-Scrubbed Lottie Vector Controller

- **Category:** Motion
- **Source:** [Lottie Web](https://github.com/airbnb/lottie-web)
- **Target Model:** Claude 3.7 Sonnet / Gemini 2.5 Pro
- **License:** MIT
- **Tags:** Motion, Performance, Frontend, Prompt, Example

## Description

Integrates `lottie-web` with IntersectionObserver auto-pausing, Canvas vs. SVG renderer switching, and frame-accurate `goToAndStop(frame, true)` scroll scrubbing.

## Original Prompt

```text
Load a Lottie JSON animation in React and scrub frames on scroll.
```

## Masallah Optimized Prompt

```text
Implement a performance-hardened `lottie-web` (`github.com/airbnb/lottie-web`) React controller:
1. Lifecycle & Memory Safety: Instantiate via `lottie.loadAnimation({ container, renderer: 'svg' | 'canvas', loop: false, autoplay: false, animationData })` and guarantee `anim.destroy()` on unmount.
2. Viewport Gating: Attach an `IntersectionObserver` so offscreen Lottie instances never consume CPU/GPU frame budget.
3. Frame-Accurate Scrubbing: Map normalized scroll or slider progress `p in [0, 1]` to `anim.goToAndStop(p * anim.totalFrames, true)` inside a single `requestAnimationFrame` tick.
4. Reduced Motion: Jump directly to the key illustrative poster frame (`totalFrames * 0.65`) when `prefers-reduced-motion: reduce` is active.
```

## Example Input

Interactive vector architecture diagram that scrubs through 120 frames as the user drags a timeline slider or scrolls.

## Example Output

TypeScript `<LottieScrubber />` component with live frame counter and renderer benchmark toggle.
