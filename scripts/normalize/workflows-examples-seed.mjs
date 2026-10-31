/**
 * Masallah — Interconnected Multi-Source Workflows & Interactive Live Examples Seed
 */

export const WORKFLOWS_SEED = [
  {
    id: 'workflow-ai-video-pipeline',
    title: 'AI Video Pipeline (11-Stage Programmatic Studio)',
    subtitle: 'From Storyboard & Multilingual Voice Synthesis to Audio-Reactive 3D Remotion Rendering & Lossless Mastering',
    category: 'Workflow',
    tags: ['Workflow', 'Video', 'Audio', '3D', 'Motion', 'Generative AI', 'Agent Skill'],
    sourceIds: [
      'remotion',
      'remotion-skills',
      'animejs',
      'motion-dev',
      'threejs',
      'postprocessing',
      'three-quarks',
      'cosyvoice',
      'librosa',
      'whisperx',
      'ffmpeg',
      'lossless-cut'
    ],
    description: 'End-to-end deterministic video production pipeline uniting 11 open-source engines: scripting & Remotion Agent Skills, CosyVoice narration, WhisperX word-level timestamps, librosa beat envelopes, Three.js + postprocessing + Three.quarks 3D scenes, Anime.js/Motion choreography, and FFmpeg/LosslessCut mastering.',
    promptId: 'prompt-master-creative-pipeline-orchestrator',
    orchestrationPrompt: `Build a deterministic 60fps programmatic video using the 11-stage Masallah AI Video Pipeline:
1. Storyboard & Skill Setup: Scaffold composition with /remotion-create and /remotion-markup; define a typed timeline-manifest.json.
2. Voice Synthesis (CosyVoice): Generate 24kHz multilingual narration WAV files from the script with emotional prosody markers.
3. Word-Level Alignment (WhisperX): Run wav2vec2 forced alignment on the narration WAV to produce exact millisecond word timestamps.
4. Beat & Spectral Analysis (librosa): Extract HPSS percussive beats and 60fps sub-bass/mid/high energy arrays from the music stem.
5. 2D Choreography (Anime.js & Motion): Drive UI cards, SVG diagrams, and layout transitions from useCurrentFrame() and spring().
6. 3D Scene Stage (Three.js): Mount a @remotion/three canvas with camera keyframes locked to frame count.
7. Shader Grading (pmndrs/postprocessing): Apply consolidated SelectiveBloomEffect and ACESFilmic tone mapping.
8. GPU Particle VFX (Three.quarks): Trigger BatchedRenderer particle bursts on librosa beat frames.
9. Frame Render (Remotion): Render frame-accurate image sequence or ProRes master via npx remotion render.
10. Loudness & Delivery Mastering (FFmpeg): Normalize audio to -14 LUFS (EBU R128), burn/mux subtitles, and encode H.264/VP9/AV1 outputs.
11. Segment Extraction (LosslessCut): Extract zero-reencode keyframe-aligned social chapters via LosslessCut CLI.`,
    stages: [
      { step: 1, title: 'Fikir / Storyboard & Agent Skills', tool: 'Remotion Skills', sourceId: 'remotion-skills', input: 'Creative brief & script Markdown', output: 'Typed Composition schema & scene timing sheet', detail: 'Use /remotion-best-practices and /remotion-create to structure sequences and preview in Studio.' },
      { step: 2, title: 'Programmatic Video Timeline', tool: 'Remotion', sourceId: 'remotion', input: 'Scene timing sheet & React components', output: 'Deterministic 60fps <Composition>', detail: 'Compose <Series> and <Sequence> layers driven strictly by useCurrentFrame().' },
      { step: 3, title: '2D Choreography & Layout Motion', tool: 'Anime.js / Motion', sourceId: 'animejs', input: 'DOM/SVG layers & frame progress', output: 'Choreographed kinetic typography & vector reveals', detail: 'Synchronize SVG stroke-dashoffset and spring layout projections to frame timestamps.' },
      { step: 4, title: '3D Spatial Scene & Camera Rig', tool: 'Three.js', sourceId: 'threejs', input: 'Camera spline & PBR materials', output: 'WebGL 3D stage inside video frame', detail: 'Render instanced 3D geometry and physically based materials per frame.' },
      { step: 5, title: 'Bloom, DoF & Color Grading', tool: 'postprocessing', sourceId: 'postprocessing', input: 'Raw Three.js render buffer', output: 'Merged EffectPass (Bloom + DoF + LUT)', detail: 'Combine SelectiveBloomEffect and Vignette into a single consolidated shader pass.' },
      { step: 6, title: 'Particle Trails & VFX Bursts', tool: 'Three.quarks', sourceId: 'three-quarks', input: 'Beat triggers & emitter transforms', output: 'Single-draw-call batched GPU particles', detail: 'Step BatchedRenderer deterministically per frame to emit trails and sparks.' },
      { step: 7, title: 'Multilingual Narration Synthesis', tool: 'CosyVoice', sourceId: 'cosyvoice', input: 'Annotated narration script', output: '24kHz mono WAV voice-over stems', detail: 'Synthesize natural zero-shot or instruct-controlled speech without committing model weights.' },
      { step: 8, title: 'Beat Detection & Spectral Sync', tool: 'librosa', sourceId: 'librosa', input: 'Background music stem (.wav)', output: '60fps beat & 3-band RMS JSON envelope', detail: 'Perform HPSS separation and resample onset strength onto the 60fps frame grid.' },
      { step: 9, title: 'Word-Level Subtitle Alignment', tool: 'WhisperX', sourceId: 'whisperx', input: 'Narration WAV stem', output: 'Millisecond word-aligned captions.json & .srt', detail: 'Run wav2vec2 phoneme alignment for frame-accurate active word highlighting.' },
      { step: 10, title: 'Encoding, Loudness & Muxing', tool: 'FFmpeg', sourceId: 'ffmpeg', input: 'Rendered video + audio stems + subtitles', output: '-14 LUFS mastered MP4 / WebM / HLS', detail: 'Apply loudnorm=I=-14:TP=-1.0 and encode faststart H.264 and VP9 web deliverables.' },
      { step: 11, title: 'Lossless Chapter & Clip Cutting', tool: 'LosslessCut', sourceId: 'lossless-cut', input: 'Master MP4 + chapter markers', output: 'Zero-reencode social & documentation clips', detail: 'Extract keyframe-aligned highlights instantaneously without generation loss.' }
    ]
  },
  {
    id: 'workflow-interactive-3d-pipeline',
    title: 'Interactive 3D & WebGL Pipeline (6-Stage Real-Time Studio)',
    subtitle: 'Combining Three.js, GPU Path Tracing, Jolt Physics, Merged Post-Processing, Batched Particles & Live Tweakpane Controls',
    category: 'Workflow',
    tags: ['Workflow', '3D', 'WebGL', 'Shader', 'VFX', 'Creative Coding', 'Tool'],
    sourceIds: [
      'threejs',
      'three-gpu-pathtracer',
      'jolt-physics',
      'postprocessing',
      'three-quarks',
      'tweakpane'
    ],
    description: 'Production blueprint for building 60fps interactive 3D web experiences with rigid/soft-body physics, batched particle VFX, consolidated post-processing shaders, progressive path-traced GI, and real-time parameter tuning.',
    promptId: 'prompt-webgl-postprocessing-quarks-tweakpane',
    orchestrationPrompt: `Architect a real-time 3D WebGL experience uniting the 6-stage Interactive 3D Pipeline:
1. Scene Graph & PBR Foundation (Three.js): Setup WebGLRenderer (high-performance, clamped DPR <= 2), PerspectiveCamera, and InstancedMesh hierarchies.
2. Progressive Global Illumination (Three GPU Pathtracer): Build BVH acceleration structures via three-mesh-bvh and enable progressive path tracing when camera velocity settles to zero.
3. Multi-Core Physics Simulation (Jolt Physics): Step WASM rigid/soft bodies at a fixed 60Hz timestep (dt = 1/60) and sync world transforms to Three.js meshes.
4. Consolidated Post-Processing (pmndrs/postprocessing): Merge SelectiveBloomEffect, DepthOfFieldEffect, and ChromaticAberrationEffect into a single EffectPass.
5. GPU Particle Systems (Three.quarks): Spawn ribbon trails and collision spark bursts on Jolt contact impulses via a single BatchedRenderer.
6. Live Parameter HUD (Tweakpane): Expose shader uniforms, bloom thresholds, physics restitution, and lighting temperature with 1-click JSON preset export.`,
    stages: [
      { step: 1, title: 'Scene Graph, Camera & PBR Meshes', tool: 'Three.js', sourceId: 'threejs', input: 'GLTF assets / procedural geometry', output: 'WebGL2 scene graph & InstancedMesh buffers', detail: 'Initialize renderer, camera controls, and physically based materials.' },
      { step: 2, title: 'BVH Global Illumination & Caustics', tool: 'Three GPU Pathtracer', sourceId: 'three-gpu-pathtracer', input: 'Three.js scene & environment HDR', output: 'Progressively converged path-traced beauty pass', detail: 'Accelerate ray queries with MeshBVH for realistic dielectric refraction and soft shadows.' },
      { step: 3, title: 'Rigid & Soft Body Collision Dynamics', tool: 'Jolt Physics', sourceId: 'jolt-physics', input: 'Collider shapes & force impulses', output: '60Hz deterministic body transforms & contact events', detail: 'Run JoltPhysics WASM stepping and emit impulse callbacks on high-velocity impacts.' },
      { step: 4, title: 'Merged Shader Pass Pipeline', tool: 'postprocessing', sourceId: 'postprocessing', input: 'HDR scene render target', output: 'Bloom, Depth of Field & ACES/LUT graded frame', detail: 'Automatically merge fragment effects into minimal fullscreen quad passes.' },
      { step: 5, title: 'Batched GPU Particle Trails & VFX', tool: 'Three.quarks', sourceId: 'three-quarks', input: 'Physics contact points & velocity vectors', output: 'Instanced particle emitters & ribbon trails', detail: 'Update BatchedRenderer in the main loop for zero-overhead spark and trail VFX.' },
      { step: 6, title: 'Real-Time Uniform & Physics Tuning', tool: 'Tweakpane', sourceId: 'tweakpane', input: 'Scene config object & FPS telemetry', output: 'Interactive debug GUI & exportable JSON preset', detail: 'Bind two-way controls for immediate visual art direction and performance monitoring.' }
    ]
  },
  {
    id: 'workflow-product-ui-pipeline',
    title: 'Product UI Engineering Pipeline (10-Stage Quality Gate)',
    subtitle: 'From NN/g Heuristics & Laws of UX to Radix/shadcn Primitives, Motion Choreography, Testing Library, Playwright, Storybook & OWASP Security',
    category: 'Workflow',
    tags: ['Workflow', 'UI', 'UX', 'Component', 'Design System', 'Testing', 'Security', 'Accessibility'],
    sourceIds: [
      'nngroup',
      'laws-of-ux',
      'component-gallery',
      'radix-ui',
      'shadcn-ui',
      'motion-dev',
      'testing-library',
      'playwright',
      'storybook',
      'owasp-cheatsheets'
    ],
    description: 'Complete design-to-production engineering pipeline guaranteeing usability, psychological ergonomics, WAI-ARIA accessibility, 60fps motion restraint, automated behavior/E2E testing, isolated documentation, and OWASP security hardening.',
    promptId: 'prompt-nngroup-heuristic-audit',
    orchestrationPrompt: `Execute the 10-stage Masallah Product UI Pipeline for any new feature or interface module:
1. Usability Heuristic Definition (NNGroup): Map user journeys against Nielsen's 10 Heuristics (system status visibility, error prevention, Escape/Undo control).
2. Ergonomic Constraints (Laws of UX): Enforce >=44x44px Fitts hit targets, <=7 top-level Hick choices, and <100ms Doherty feedback.
3. Cross-System Anatomy Check (Component Gallery): Standardize slot naming, states, and ARIA contracts against industry design systems.
4. Accessible Headless Foundation (Radix UI): Implement WAI-ARIA roles, focus trapping, and roving tabindex keyboard navigation.
5. Open-Code Styling & Tokens (shadcn/ui): Apply semantic 3-tier design tokens and composable variant classes.
6. Purposeful Choreography (Motion): Add FLIP layout transitions and spring micro-feedback with mandatory prefers-reduced-motion support.
7. Role-Based Component Tests (Testing Library): Verify interactive behavior via getByRole and userEvent without testing implementation details.
8. Cross-Browser E2E & Subpath Tests (Playwright): Verify deep links, URL query filters, mobile/desktop viewports, and zero console errors.
9. Isolated State Workshop (Storybook): Document default, empty, loading, error, and long-content states in CSF3 stories.
10. Security Hardening Gate (OWASP): Sanitize inputs, enforce https/http protocol allowlists, add rel="noopener noreferrer", and run secret scanning.`,
    stages: [
      { step: 1, title: 'Usability Research & Heuristic Model', tool: 'Nielsen Norman Group', sourceId: 'nngroup', input: 'User problem & task flow', output: 'Heuristic checklist & error-recovery spec', detail: 'Ensure visibility of system status, error prevention, and user freedom.' },
      { step: 2, title: 'Cognitive Load & Motor Ergonomics', tool: 'Laws of UX', sourceId: 'laws-of-ux', input: 'Wireframe & action hierarchy', output: 'Fitts/Hick/Doherty validated layout', detail: 'Enforce >=44px touch targets, progressive disclosure, and <100ms UI feedback.' },
      { step: 3, title: 'Component Anatomy & Slot Contract', tool: 'Component Gallery', sourceId: 'component-gallery', input: 'UI component requirements', output: 'Canonical slot & state specification', detail: 'Benchmark component API against 60+ production design systems.' },
      { step: 4, title: 'WAI-ARIA Headless Primitives', tool: 'Radix UI', sourceId: 'radix-ui', input: 'Slot specification', output: 'Keyboard-navigable, focus-trapped primitives', detail: 'Guarantee roving tabindex, ARIA attributes, and screen-reader announcements.' },
      { step: 5, title: 'Composable Open-Code UI Layer', tool: 'shadcn/ui', sourceId: 'shadcn-ui', input: 'Headless primitives + design tokens', output: 'Themed, copy-pasteable React components', detail: 'Combine semantic CSS variables with clean variant composition.' },
      { step: 6, title: 'Spring Choreography & Layout Motion', tool: 'Motion', sourceId: 'motion-dev', input: 'Interactive UI components', output: 'Reduced-motion-safe FLIP & spring transitions', detail: 'Use layoutId and AnimatePresence while honoring useReducedMotion().' },
      { step: 7, title: 'Accessible Behavior Unit Tests', tool: 'Testing Library', sourceId: 'testing-library', input: 'Rendered React components', output: 'Role-driven behavior test suite', detail: 'Query strictly by getByRole/getByLabelText to verify real user interactions.' },
      { step: 8, title: 'Cross-Viewport E2E & Deep-Link QA', tool: 'Playwright', sourceId: 'playwright', input: 'Built web application', output: 'Verified E2E traces & viewport screenshots', detail: 'Test navigation, search, URL query filters, clipboard copy, and zero console errors.' },
      { step: 9, title: 'Isolated Visual State Documentation', tool: 'Storybook', sourceId: 'storybook', input: 'Component library', output: 'CSF3 interactive stories & play() tests', detail: 'Document empty, loading, error, and edge-case states in isolation.' },
      { step: 10, title: 'XSS, Header & Secret Security Gate', tool: 'OWASP Cheat Sheets', sourceId: 'owasp-cheatsheets', input: 'Source repository & HTTP config', output: 'Hardened production build & clean secret scan', detail: 'Enforce safe URL protocols, CSP/security headers, and zero leaked credentials.' }
    ]
  },
  {
    id: 'workflow-pixel-vfx-game-pipeline',
    title: 'Procedural Pixel VFX & Sprite Sheet Pipeline',
    subtitle: 'Authoring Zero-Dependency Dual-Buffer Pixel Effects with PixelFX, Tweakpane & FFmpeg',
    category: 'Workflow',
    tags: ['Workflow', 'VFX', 'Creative Coding', 'Agent Skill', 'Video', 'Tool'],
    sourceIds: ['pixelfx', 'tweakpane', 'ffmpeg'],
    description: 'Iterative "Draft, Render, Look, Refine" workflow from PixelFX combining dual-buffer (color + additive light) procedural canvas simulation, live Tweakpane palette/seed tuning, contact-sheet inspection, and FFmpeg sprite-sheet/GIF export.',
    promptId: 'prompt-pixelfx-procedural-vfx-skill',
    orchestrationPrompt: `Execute the Procedural Pixel VFX Pipeline:
1. Search existing 244 effects in patch-gg/pixelfx or scaffold a new effect module with wind-up, hit-stop contact, and recovery phases.
2. Render into split color (indexed ramp + 2x2 Bayer dither) and additive light buffers at 160x90 native resolution.
3. Bind Tweakpane controls to swap palettes (frost, fire, arcane, cyber), random seeds, and glow intensity in real time.
4. Export contact sheets (node tools/render.mjs) and encode crisp nearest-neighbor MP4/GIF previews via FFmpeg (-sws_flags neighbor).`,
    stages: [
      { step: 1, title: 'Draft Effect & Acting Curve', tool: 'PixelFX Agent Skill', sourceId: 'pixelfx', input: 'VFX prompt ("Frost Nova" / "Arcane Slash")', output: 'Procedural JS effect module', detail: 'Structure wind-up anticipation, 2-frame contact freeze, and dithered dissipation.' },
      { step: 2, title: 'Dual-Buffer Simulation (Color + Light)', tool: 'PixelFX Core', sourceId: 'pixelfx', input: 'Frame delta dt & palette ramp', output: 'Composited ImageData pixel buffer', detail: 'Composite opaque/dithered color pixels with additive radial light glow.' },
      { step: 3, title: 'Real-Time Palette & Seed Tuning', tool: 'Tweakpane', sourceId: 'tweakpane', input: 'Effect meta.options', output: 'Tuned palette, seed, angle & glow preset', detail: 'Interactively test palette swaps and seeds at 60fps in the browser.' },
      { step: 4, title: 'Contact Sheet & Pixel-Crisp Export', tool: 'FFmpeg', sourceId: 'ffmpeg', input: 'Rendered PNG frame sequence', output: 'Sprite sheet PNG & nearest-neighbor MP4/GIF', detail: 'Scale with -vf scale=iw*4:ih*4:flags=neighbor to preserve razor-sharp pixels.' }
    ]
  }
];

export const EXAMPLES_SEED = [
  {
    id: 'example-motion-spring-layout-studio',
    title: 'Motion Spring Physics & Shared Layout Playground',
    sourceId: 'motion-dev',
    relatedSourceIds: ['motion-repo'],
    category: 'Motion',
    contentTypes: ['Motion', 'Interaction', 'Component', 'Example'],
    tags: ['Motion', 'Spring Physics', 'Layout Animation', 'React', 'Interactive Demo'],
    technologies: ['Motion', 'React', 'TypeScript', 'WAAPI'],
    description: 'Interactive physics studio demonstrating Motion’s spring solver (stiffness, damping, mass) and FLIP layout transitions with real-time parameter sliders and reduced-motion inspection.',
    hasLiveDemo: true,
    demoType: 'motion-spring',
    promptId: 'prompt-motion-shared-layout-transition',
    codeSnippet: `import { motion, AnimatePresence, useReducedMotion } from "motion/react";

export function SharedLayoutCards({ items, activeId, onSelect, springConfig }) {
  const prefersReduced = useReducedMotion();
  const transition = prefersReduced
    ? { duration: 0.12 }
    : { type: "spring", stiffness: springConfig.stiffness, damping: springConfig.damping, mass: springConfig.mass };

  return (
    <div className="grid grid-cols-3 gap-4">
      <AnimatePresence mode="popLayout">
        {items.map((item) => (
          <motion.button
            key={item.id}
            layout={!prefersReduced}
            layoutId={\`card-\${item.id}\`}
            transition={transition}
            whileHover={prefersReduced ? {} : { y: -3, scale: 1.015 }}
            whileTap={prefersReduced ? {} : { scale: 0.97 }}
            onClick={() => onSelect(item.id)}
          >
            <motion.span layoutId={\`title-\${item.id}\`}>{item.title}</motion.span>
          </motion.button>
        ))}
      </AnimatePresence>
    </div>
  );
}`
  },
  {
    id: 'example-animejs-radial-stagger-grid',
    title: 'Anime.js 2D Radial Stagger & Timeline Matrix',
    sourceId: 'animejs',
    category: 'Motion',
    contentTypes: ['Motion', 'Creative Coding', 'Interaction', 'Example'],
    tags: ['Anime.js', 'Stagger', 'Timeline', 'SVG', 'Interactive Demo'],
    technologies: ['Anime.js', 'JavaScript', 'CSS Transforms', 'SVG'],
    description: 'Clickable 10x5 kinetic matrix calculating Euclidean radial wave propagation delays from any clicked cell with adjustable stagger interval, wave amplitude, and timeline scrubbing.',
    hasLiveDemo: true,
    demoType: 'anime-stagger',
    promptId: 'prompt-animejs-grid-stagger-timeline',
    codeSnippet: `// Euclidean 2D grid stagger calculation inspired by anime.stagger(val, { grid: [cols, rows], from: index })
export function computeRadialStagger(index, targetIndex, cols = 10, staggerMs = 38) {
  const x1 = index % cols;
  const y1 = Math.floor(index / cols);
  const x2 = targetIndex % cols;
  const y2 = Math.floor(targetIndex / cols);
  const distance = Math.hypot(x2 - x1, y2 - y1);
  return {
    delayMs: Math.round(distance * staggerMs),
    distance,
    scalePeak: Math.max(1.05, 1.45 - distance * 0.06),
  };
}`
  },
  {
    id: 'example-pixelfx-dual-buffer-simulator',
    title: 'PixelFX Dual-Buffer Procedural VFX Simulator',
    sourceId: 'pixelfx',
    category: 'VFX',
    contentTypes: ['VFX', 'Creative Coding', 'Agent Skill', 'Example'],
    tags: ['PixelFX', 'Pixel Art', 'VFX', 'Canvas', 'Interactive Demo'],
    technologies: ['HTML5 Canvas', 'ImageData', 'Procedural VFX', 'Bayer Dithering'],
    description: 'Live low-resolution (160x90) procedural pixel art VFX engine executing the PixelFX dual-buffer architecture (indexed color ramp + 2x2 Bayer dither + additive light glow) across Frost Nova, Fire Campfire, Arcane Orb, and Lightning Strike presets.',
    hasLiveDemo: true,
    demoType: 'pixelfx-canvas',
    promptId: 'prompt-pixelfx-procedural-vfx-skill',
    codeSnippet: `// PixelFX dual-buffer composite pattern: color buffer + additive light glow
export function compositeDualBuffer(colorBuf, lightBuf, outRgba, paletteHex, glowStrength = 1.0) {
  for (let i = 0; i < colorBuf.length; i++) {
    const palIndex = colorBuf[i];
    const baseRgb = paletteHex[palIndex] ?? [10, 10, 14];
    const glow = lightBuf[i] * glowStrength;
    const offset = i * 4;
    outRgba[offset]     = Math.min(255, baseRgb[0] + glow * 220);
    outRgba[offset + 1] = Math.min(255, baseRgb[1] + glow * 180);
    outRgba[offset + 2] = Math.min(255, baseRgb[2] + glow * 255);
    outRgba[offset + 3] = 255;
  }
}`
  },
  {
    id: 'example-threejs-webgl-postprocessing-studio',
    title: 'Three.js + postprocessing + Three.quarks + Tweakpane 3D Studio',
    sourceId: 'threejs',
    relatedSourceIds: ['three-gpu-pathtracer', 'jolt-physics', 'postprocessing', 'three-quarks', 'tweakpane'],
    category: '3D',
    contentTypes: ['3D', 'WebGL', 'Shader', 'VFX', 'Tool', 'Example'],
    tags: ['Three.js', 'WebGL', 'postprocessing', 'Three.quarks', 'Tweakpane', 'Interactive Demo'],
    technologies: ['Three.js', 'WebGL', 'Bloom Shader', 'Particle Trails', 'Tweakpane'],
    description: 'Interactive 3D viewport with real-time parameter controls (Tweakpane style HUD) governing orbital geometry, particle emitters, bloom intensity, chromatic aberration, and wireframe/path-traced shading modes.',
    hasLiveDemo: true,
    demoType: 'three-webgl-studio',
    promptId: 'prompt-webgl-postprocessing-quarks-tweakpane',
    codeSnippet: `import * as THREE from "three";
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
}`
  },
  {
    id: 'example-react-bits-spotlight-kinetic',
    title: 'React Bits Cursor Spotlight & Kinetic Split-Text Demo',
    sourceId: 'react-bits',
    category: 'Component',
    contentTypes: ['Component', 'Motion', 'Creative Coding', 'UI', 'Example'],
    tags: ['React Bits', 'Spotlight Card', 'Kinetic Typography', 'React', 'Interactive Demo'],
    technologies: ['React', 'CSS Custom Properties', 'TypeScript'],
    description: 'Zero-rerender cursor-tracked radial border spotlight cards paired with staggered character-level kinetic typography and screen-reader-safe ARIA labels.',
    hasLiveDemo: true,
    demoType: 'react-bits-spotlight',
    promptId: 'prompt-react-bits-spotlight-kinetic',
    codeSnippet: `export function handleSpotlightPointerMove(e: React.PointerEvent<HTMLElement>) {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--spot-x", \`\${e.clientX - rect.left}px\`);
  e.currentTarget.style.setProperty("--spot-y", \`\${e.clientY - rect.top}px\`);
}`
  },
  {
    id: 'example-manim-fourier-mathematical-canvas',
    title: 'Manim Mathematical Epicycles & Tangent Derivative Visualizer',
    sourceId: 'manim',
    category: 'Video',
    contentTypes: ['Video', 'Motion', 'Creative Coding', 'Example'],
    tags: ['Manim', 'Mathematics', 'Fourier Series', 'LaTeX', 'Interactive Demo'],
    technologies: ['Python', 'Manim', 'LaTeX', 'HTML5 Canvas'],
    description: 'Interactive mathematical explainer demonstrating Manim’s ValueTracker and Fourier harmonic epicycle summation ($\\sum_{k=1}^{N} \\frac{4}{\\pi (2k-1)} \\sin((2k-1)\\omega t)$) with live harmonic count slider.',
    hasLiveDemo: true,
    demoType: 'manim-fourier',
    promptId: 'prompt-manim-mathematical-explainer',
    codeSnippet: `from manim import *
import numpy as np

class FourierEpicycleExplainer(Scene):
    def construct(self):
        axes = Axes(x_range=[0, 2 * PI, PI / 2], y_range=[-1.5, 1.5, 0.5], x_length=7, y_length=3.5)
        formula = MathTex(r"f(t) = \\sum_{k=1}^{N} \\frac{4}{\\pi(2k-1)} \\sin((2k-1)\\omega t)").to_edge(UP)
        tracker = ValueTracker(0.0)
        wave = always_redraw(lambda: axes.plot(
            lambda x: sum((4 / ( np.pi * (2*k - 1))) * np.sin((2*k - 1) * (x + tracker.get_value())) for k in range(1, 6)),
            color=TEAL_C
        ))
        self.play(Write(formula), Create(axes), Create(wave))
        self.play(tracker.animate.set_value(2 * PI), run_time=6, rate_func=linear)`
  },
  {
    id: 'example-remotion-audio-caption-timeline',
    title: 'Remotion + WhisperX + librosa Synchronized Frame Timeline',
    sourceId: 'remotion',
    relatedSourceIds: ['remotion-skills', 'whisperx', 'librosa', 'cosyvoice'],
    category: 'Video',
    contentTypes: ['Video', 'Audio', 'Motion', 'Workflow', 'Example'],
    tags: ['Remotion', 'WhisperX', 'librosa', 'Subtitles', 'Audio Sync', 'Interactive Demo'],
    technologies: ['Remotion', 'TypeScript', 'WhisperX JSON', 'librosa Envelopes'],
    description: 'Frame-deterministic 60fps video player simulator showing how Remotion synchronizes WhisperX millisecond word timestamps with librosa 3-band spectral beat bars at any scrubbed frame.',
    hasLiveDemo: true,
    demoType: 'remotion-timeline',
    promptId: 'prompt-remotion-programmatic-video',
    codeSnippet: `import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const SyncedCaptionComposition: React.FC<{ words: AlignedWord[]; beats: number[] }> = ({ words, beats }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const currentTimeMs = (frame / fps) * 1000;
  const energy = beats[frame % beats.length] ?? 0.25;

  return (
    <AbsoluteFill style={{ backgroundColor: "#090A0F", justifyContent: "center", alignItems: "center" }}>
      <div style={{ display: "flex", gap: 12, transform: \`scale(\${1 + energy * 0.08})\` }}>
        {words.map((w, i) => {
          const active = currentTimeMs >= w.startMs && currentTimeMs <= w.endMs;
          return (
            <span key={i} style={{ color: active ? "#E85D3F" : "#F4F3EF", fontWeight: active ? 700 : 400 }}>
              {w.text}
            </span>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};`
  },
  {
    id: 'example-radix-shadcn-roving-command',
    title: 'Radix UI + shadcn/ui Accessible Roving-Focus Command & Tabs',
    sourceId: 'radix-ui',
    relatedSourceIds: ['shadcn-ui', 'component-gallery'],
    category: 'Component',
    contentTypes: ['Component', 'Design System', 'UI', 'Example'],
    tags: ['Radix UI', 'shadcn/ui', 'Accessibility', 'WAI-ARIA', 'Keyboard Navigation', 'Interactive Demo'],
    technologies: ['React', 'TypeScript', 'WAI-ARIA', 'Roving Tabindex'],
    description: 'Live accessible primitive inspector demonstrating WAI-ARIA roving tabindex, keyboard arrow loop navigation, focus ring choreography, and live ARIA state telemetry.',
    hasLiveDemo: true,
    demoType: 'radix-a11y-inspector',
    promptId: 'prompt-radix-roving-focus-primitive',
    codeSnippet: `export function handleRovingKeyDown(
  e: React.KeyboardEvent,
  currentIndex: number,
  itemCount: number,
  onSelectIndex: (next: number) => void
) {
  if (e.key === "ArrowRight" || e.key === "ArrowDown") {
    e.preventDefault();
    onSelectIndex((currentIndex + 1) % itemCount);
  } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
    e.preventDefault();
    onSelectIndex((currentIndex - 1 + itemCount) % itemCount);
  } else if (e.key === "Home") {
    e.preventDefault();
    onSelectIndex(0);
  } else if (e.key === "End") {
    e.preventDefault();
    onSelectIndex(itemCount - 1);
  }
}`
  },
  {
    id: 'example-laws-of-ux-fitts-hick-lab',
    title: 'Laws of UX Interactive Fitts’s Law & Hick’s Law Ergonomics Lab',
    sourceId: 'laws-of-ux',
    relatedSourceIds: ['nngroup'],
    category: 'UX',
    contentTypes: ['UX', 'UI', 'Interaction', 'Example'],
    tags: ['Laws of UX', 'Fitts Law', 'Hick Law', 'Usability', 'Interactive Demo'],
    technologies: ['TypeScript', 'Cognitive Ergonomics', 'React'],
    description: 'Interactive quantitative calculator comparing target acquisition time ($T = a + b \\log_2(2D/W)$) and decision latency ($RT = a + b \\log_2(n)$) as button size, distance, and menu complexity change.',
    hasLiveDemo: true,
    demoType: 'laws-of-ux-lab',
    promptId: 'prompt-laws-of-ux-optimization',
    codeSnippet: `// Quantitative Fitts's Law Index of Difficulty (bits) & Hick's Law Reaction Time (ms)
export function computeErgonomicMetrics(distancePx: number, widthPx: number, choiceCount: number) {
  const indexOfDifficultyBits = Math.log2((2 * Math.max(1, distancePx)) / Math.max(1, widthPx));
  const movementTimeMs = Math.round(120 + 145 * indexOfDifficultyBits);
  const decisionTimeMs = Math.round(180 + 155 * Math.log2(Math.max(1, choiceCount) + 1));
  return { indexOfDifficultyBits: Number(indexOfDifficultyBits.toFixed(2)), movementTimeMs, decisionTimeMs };
}`
  },
  {
    id: 'example-owasp-url-xss-sanitizer',
    title: 'OWASP Safe URL Protocol & XSS Sanitization Gate',
    sourceId: 'owasp-cheatsheets',
    category: 'Security',
    contentTypes: ['Security', 'Frontend', 'Architecture', 'Example'],
    tags: ['OWASP', 'XSS Prevention', 'Security', 'Sanitization', 'Interactive Demo'],
    technologies: ['TypeScript', 'URL Parser', 'CSP', 'OWASP'],
    description: 'Live interactive security gate demonstrating how Masallah validates external URLs against `javascript:`/`data:` injection vectors, strips dangerous HTML payloads, and enforces `rel="noopener noreferrer"`.',
    hasLiveDemo: true,
    demoType: 'owasp-sanitizer',
    promptId: 'prompt-owasp-security-audit-gate',
    codeSnippet: `const ALLOWED_PROTOCOLS = new Set(["https:", "http:"]);

export function sanitizeExternalUrl(rawUrl: string): { safe: boolean; href: string; reason: string } {
  try {
    const parsed = new URL(rawUrl.trim());
    if (!ALLOWED_PROTOCOLS.has(parsed.protocol)) {
      return { safe: false, href: "#blocked-unsafe-protocol", reason: \`Blocked protocol: \${parsed.protocol}\` };
    }
    return { safe: true, href: parsed.toString(), reason: "Verified HTTPS/HTTP origin" };
  } catch {
    return { safe: false, href: "#invalid-url", reason: "Malformed URL rejected" };
  }
}`
  }
];
