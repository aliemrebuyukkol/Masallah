# Three.js + postprocessing + Three.quarks + Tweakpane 3D Studio

Interactive 3D viewport with real-time parameter controls (Tweakpane style HUD) governing orbital geometry, particle emitters, bloom intensity, chromatic aberration, and wireframe/path-traced shading modes.

```tsx
import * as THREE from "three";
import { EffectComposer, EffectPass, RenderPass, SelectiveBloomEffect } from "postprocessing";

export function createPostProcessedScene(canvas: HTMLCanvasElement) {
  const renderer = new THREE.WebGLRenderer({ canvas, powerPreference: "high-performance", antialias: false });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
  camera.position.set(0, 1.5, 5.5);

  const composer = new EffectComposer(renderer, { frameBufferType: THREE.HalfFloatType });
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new SelectiveBloomEffect(scene, camera, { intensity: 1.6, mipmapBlur: true, luminanceThreshold: 0.7 });
  composer.addPass(new EffectPass(camera, bloom));

  return { renderer, scene, camera, composer, bloom };
}
```
