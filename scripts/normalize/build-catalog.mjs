#!/usr/bin/env node
/**
 * Masallah — Master Catalog Normalizer, Deduplicator & Artifact Generator
 * Merges live discovery telemetry (data/discovery-report.json) with curated seeds
 * and writes data JSON files, catalog Markdown files, examples, docs,
 * SOURCE_INDEX.md, THIRD_PARTY_NOTICES.md, and SVG preview cards.
 */

import fs from 'node:fs';
import path from 'node:path';
import { MASTER_46_SOURCES } from './sources-seed.mjs';
import { PROMPTS_SEED } from './prompts-seed.mjs';
import { WORKFLOWS_SEED, EXAMPLES_SEED } from './workflows-examples-seed.mjs';

const ROOT = '/Users/buyukkol/projects/Masallah';
const discoveryPath = path.join(ROOT, 'data/discovery-report.json');
const discovery = fs.existsSync(discoveryPath)
  ? JSON.parse(fs.readFileSync(discoveryPath, 'utf8'))
  : { sources: [] };

const discoveryById = new Map((discovery.sources || []).map((s) => [s.id, s]));
const retrievedAt = discovery.generatedAt || new Date().toISOString();

// Ensure every single one of the 46 sources has at least one dedicated Prompt and one Example/Design entry
const allPrompts = [...PROMPTS_SEED];
const coveredPromptSourceIds = new Set(allPrompts.map((p) => p.sourceId));

for (const src of MASTER_46_SOURCES) {
  if (!coveredPromptSourceIds.has(src.id)) {
    allPrompts.push({
      id: `prompt-${src.id}-specialist`,
      sourceId: src.id,
      title: `${src.name} — Production Implementation & Pattern Prompt`,
      description: `Structured engineering & creative direction prompt derived from ${src.name} (${src.category}) best practices.`,
      originalPrompt: `Create an implementation using ${src.name} (${src.technologies.slice(0, 3).join(', ')}) following official documentation patterns.`,
      optimizedPrompt: `Act as a Principal Specialist in ${src.name} (${src.url}). Implement a production-ready module adhering to these verified constraints:
1. Core Stack & Standards: Use ${src.technologies.join(', ')} with strict type safety and clean resource lifecycle management.
2. Pattern Fidelity: Apply ${src.name}'s canonical architecture (${src.description}) without copying proprietary third-party brand assets.
3. Accessibility & Performance: Maintain 60fps interaction budgets, keyboard navigability, and deterministic error handling.`,
      prompt: `Implement a production-grade ${src.category} module using ${src.name} (${src.technologies.slice(0, 3).join(', ')}) with deterministic lifecycle cleanup, accessibility compliance, and minimal verification code.`,
      category: src.category,
      tags: [...new Set([...src.tags.slice(0, 4), 'Prompt'])],
      source: src.name,
      sourceUrl: src.url,
      model: 'Claude 3.7 Sonnet / Gemini 2.5 Pro',
      exampleInput: `Build a modular ${src.category.toLowerCase()} recipe demonstrating ${src.name} integration in a modern web or creative pipeline.`,
      exampleOutput: `Self-contained ${src.technologies[0] || 'TypeScript'} implementation + integration test and usage documentation.`,
      license: src.license
    });
  }
}

// Build Repositories catalog (all sources with repositoryUrl)
const reposCatalog = [];
const seenRepoFullNames = new Set();

const INSTALL_COMMANDS = {
  'laws-of-ux': 'git clone https://github.com/jonnyablonski/lawsofux.com',
  'tympanus-codrops': 'git clone https://github.com/codrops/ImageGridMotionEffect && npm install',
  'motion-dev': 'npm install motion',
  'motion-repo': 'npm install motion',
  'react-bits': 'npx jsrepo add https://reactbits.dev/default/TextAnimations/SplitText',
  'shadcn-ui': 'npx shadcn@latest init',
  'radix-ui': 'npm install @radix-ui/react-dialog @radix-ui/react-tabs',
  'mdn-web-docs': 'git clone https://github.com/mdn/content',
  'patterns-dev': 'git clone https://github.com/LydiaHallie/javascript-questions',
  'google-github-io': 'git clone https://github.com/google/styleguide',
  'typescript': 'npm install -D typescript',
  'testing-library': 'npm install -D @testing-library/react @testing-library/jest-dom @testing-library/user-event',
  'playwright': 'npm init playwright@latest',
  'storybook': 'npx storybook@latest init',
  'owasp-cheatsheets': 'git clone https://github.com/OWASP/CheatSheetSeries',
  'pixelfx': 'npm install github:patch-gg/pixelfx',
  'remotion': 'npx create-video@latest',
  'remotion-skills': 'npx skills add remotion-dev/skills',
  'animejs': 'npm install animejs',
  'manim': 'pip install manim',
  'lottie-web': 'npm install lottie-web',
  'mcp-for-blender': 'uvx blender-mcp',
  'threejs': 'npm install three @types/three',
  'three-gpu-pathtracer': 'npm install three-gpu-pathtracer three-mesh-bvh',
  'jolt-physics': 'npm install jolt-physics',
  'postprocessing': 'npm install postprocessing three',
  'three-quarks': 'npm install three.quarks three',
  'tweakpane': 'npm install tweakpane',
  'comfyui': 'pip install comfy-cli && comfy install',
  'cosyvoice': 'git clone --recursive https://github.com/FunAudioLLM/CosyVoice.git',
  'librosa': 'pip install librosa',
  'whisperx': 'pip install whisperx',
  'obs-studio': 'brew install --cask obs',
  'lossless-cut': 'brew install --cask losslesscut',
  'ffmpeg': 'brew install ffmpeg'
};

const REPO_CODE_SNIPPETS = {
  'pixelfx': `import { createFrame, clearFrame, createFx, composite } from "pixelfx";
import * as frostNova from "pixelfx/fx/ice/frost-nova";

const frame = createFrame(320, 180);
const fx = createFx(frostNova, { x: 160, y: 140, light: 1.1 });
fx.update(1 / 60);
clearFrame(frame);
fx.draw(frame, "front");`,
  'remotion': `import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const IntroCard: React.FC<{ title: string }> = ({ title }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const scale = spring({ frame, fps, config: { damping: 14, stiffness: 160 } });
  return <AbsoluteFill style={{ transform: \`scale(\${scale})\` }}>{title}</AbsoluteFill>;
};`,
  'remotion-skills': `# Install official Remotion coding agent skills into your workspace
npx skills add remotion-dev/skills
# Available slash skills:
# /remotion-best-practices | /remotion-create | /remotion-markup | /remotion-captions | /remotion-maps`,
  'animejs': `import anime from "animejs";

anime.timeline({ easing: "spring(1, 80, 12, 0)" })
  .add({
    targets: ".grid-cell",
    scale: [0.85, 1],
    delay: anime.stagger(35, { grid: [10, 5], from: "center" }),
  });`,
  'motion-repo': `import { motion, AnimatePresence } from "motion/react";

export const AnimatedPill = ({ label }: { label: string }) => (
  <motion.div layout initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 400, damping: 30 }}>
    {label}
  </motion.div>
);`,
  'manim': `from manim import *

class EulerIdentityScene(Scene):
    def construct(self):
        eq = MathTex(r"e^{i\\pi} + 1 = 0", font_size=72)
        self.play(Write(eq), run_time=2)
        self.wait(1)`,
  'lottie-web': `import lottie from "lottie-web";

const anim = lottie.loadAnimation({
  container: document.getElementById("lottie-stage")!,
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "/animations/vector-rig.json",
});
anim.goToAndStop(45, true);`,
  'mcp-for-blender': `// Claude Desktop / Cursor MCP configuration for Blender
{
  "mcpServers": {
    "blender": {
      "command": "uvx",
      "args": ["blender-mcp"]
    }
  }
}`,
  'threejs': `import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
const mesh = new THREE.Mesh(
  new THREE.IcosahedronGeometry(1.2, 3),
  new THREE.MeshPhysicalMaterial({ roughness: 0.1, transmission: 0.9, thickness: 1.2 })
);
scene.add(mesh);`,
  'three-gpu-pathtracer': `import { WebGLPathTracer } from "three-gpu-pathtracer";

const pathTracer = new WebGLPathTracer(renderer);
pathTracer.setScene(scene, camera);
// In render loop:
pathTracer.renderSample();`,
  'jolt-physics': `import initJolt from "jolt-physics";

const Jolt = await initJolt();
const settings = new Jolt.JoltSettings();
const jolt = new Jolt.JoltInterface(settings);
const physicsSystem = jolt.GetPhysicsSystem();`,
  'postprocessing': `import { EffectComposer, EffectPass, RenderPass, SelectiveBloomEffect } from "postprocessing";

const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
composer.addPass(new EffectPass(camera, new SelectiveBloomEffect(scene, camera, { intensity: 1.5 })));`,
  'three-quarks': `import { BatchedRenderer, ParticleSystem, ConeEmitter, IntervalValue, ColorRange } from "three.quarks";

const batchRenderer = new BatchedRenderer();
scene.add(batchRenderer);
const sparks = new ParticleSystem({
  duration: 2,
  looping: true,
  startLife: new IntervalValue(0.4, 1.1),
  shape: new ConeEmitter({ radius: 0.2, angle: 0.4 }),
});
batchRenderer.addSystem(sparks);`,
  'tweakpane': `import { Pane } from "tweakpane";

const params = { bloomIntensity: 1.4, timeScale: 1.0, wireframe: false };
const pane = new Pane({ title: "Scene Parameters" });
pane.addBinding(params, "bloomIntensity", { min: 0, max: 4, step: 0.05 });
pane.addBinding(params, "timeScale", { min: 0, max: 2, step: 0.05 });
pane.addBinding(params, "wireframe");`,
  'comfyui': `# Submit a deterministic API graph to local ComfyUI server (no model weights in git)
curl -X POST http://127.0.0.1:8188/prompt \\
  -H "Content-Type: application/json" \\
  -d @workflow_api.json`,
  'cosyvoice': `from cosyvoice.cli.cosyvoice import CosyVoice2
import torchaudio

cosyvoice = CosyVoice2("iic/CosyVoice2-0.5B", load_jit=False, load_trt=False)
for i, chunk in enumerate(cosyvoice.inference_sft("Masallah yaratici arsivine hos geldiniz.", "Turkish")):
    torchaudio.save(f"narration_{i}.wav", chunk["tts_speech"], 24000)`,
  'librosa': `import librosa, json

y, sr = librosa.load("soundtrack.wav", sr=22050)
_, y_perc = librosa.effects.hpss(y)
tempo, beat_frames = librosa.beat.beat_track(y=y_perc, sr=sr)
beat_times = librosa.frames_to_time(beat_frames, sr=sr).tolist()
print(json.dumps({"bpm": float(tempo), "beats": beat_times[:12]}))`,
  'whisperx': `import whisperx

model = whisperx.load_model("large-v3", device="cuda", compute_type="float16")
audio = whisperx.load_audio("narration.wav")
result = model.transcribe(audio, batch_size=16)
model_a, metadata = whisperx.load_align_model(language_code=result["language"], device="cuda")
aligned = whisperx.align(result["segments"], model_a, metadata, audio, "cuda")`,
  'obs-studio': `# Record lossless MKV segment & trigger scene switch via obs-websocket CLI
obs-cmd --websocket obsws://localhost:4455 scene switch "3D_WebGL_Capture"
obs-cmd --websocket obsws://localhost:4455 recording start`,
  'lossless-cut': `# Lossless keyframe stream copy using FFmpeg / LosslessCut project workflow
ffmpeg -ss 00:00:08.000 -to 00:00:26.000 -i raw_capture.mkv -c copy -map 0 clip_lossless.mp4`,
  'ffmpeg': `# Faststart H.264 + EBU R128 (-14 LUFS) audio normalization for web delivery
ffmpeg -i input.mp4 \\
  -af "loudnorm=I=-14:TP=-1.0:LRA=11" \\
  -c:v libx264 -preset slow -crf 20 -pix_fmt yuv420p \\
  -movflags +faststart output_web.mp4`
};

for (const src of MASTER_46_SOURCES) {
  if (!src.repositoryUrl) continue;
  const probe = discoveryById.get(src.id);
  const gh = probe?.ghData || null;
  const repoFullName = gh?.fullName || src.repositoryUrl.replace('https://github.com/', '');
  const isDuplicateProduct = seenRepoFullNames.has(repoFullName);
  seenRepoFullNames.add(repoFullName);

  const relatedPrompts = allPrompts.filter((p) => p.sourceId === src.id || (src.relatedSourceIds || []).includes(p.sourceId));

  reposCatalog.push({
    id: `repo-${src.id}`,
    sourceId: src.id,
    num: src.num,
    name: gh?.fullName || src.name,
    displayName: src.name,
    description: src.description,
    githubUrl: src.repositoryUrl,
    homepageUrl: src.demoUrl || gh?.homepage || src.url,
    documentationUrl: src.documentationUrl || src.url,
    license: gh?.license && gh.license !== 'NOASSERTION' ? gh.license : src.license,
    stars: gh?.stars ?? 0,
    forks: gh?.forks ?? 0,
    language: gh?.language || src.technologies[0] || 'TypeScript',
    framework: src.technologies.slice(0, 3).join(' / '),
    topics: gh?.topics?.length ? gh.topics.slice(0, 8) : src.tags,
    installation: INSTALL_COMMANDS[src.id] || `git clone ${src.repositoryUrl}`,
    keyFeatures: [
      `Primary domain: ${src.category} (${src.section})`,
      `Core stack: ${src.technologies.join(', ')}`,
      `License verified: ${gh?.license && gh.license !== 'NOASSERTION' ? gh.license : src.license}`,
      isDuplicateProduct
        ? `Canonical product link: unified with ${src.relatedSourceIds?.join(', ')} to prevent duplicate vendor indexing.`
        : `Referenced cleanly via metadata and minimal educational code without vendor bloat.`
    ],
    codeExample: REPO_CODE_SNIPPETS[src.id] || `// Minimal ${src.name} usage pattern\n// See: ${src.documentationUrl || src.url}`,
    relatedPromptIds: relatedPrompts.map((p) => p.id),
    canonicalProductId: src.canonicalProductId || src.id,
    isSecondaryMirror: isDuplicateProduct,
    updatedAt: gh?.updatedAt || retrievedAt
  });
}

// Build Design References & Visual Analyses catalog
const designsCatalog = MASTER_46_SOURCES.filter((s) => s.visualAnalysis || ['Design', 'UI', 'UX', 'Motion', 'Design System', 'Component'].includes(s.category)).map((src) => {
  const linkedPrompt = allPrompts.find((p) => p.sourceId === src.id);
  const analysis = src.visualAnalysis || {
    reference: `${src.name} Interface & System Architecture`,
    layout: `Structured modular grid optimized for ${src.category} scannability and progressive disclosure.`,
    typography: `High-legibility system pairing clear hierarchical headings with monospace code/token identifiers.`,
    colors: `High-contrast accessible surface tokens meeting WCAG AA/AAA contrast ratios.`,
    spacing: `Consistent 4px/8px spatial cadence with generous section separation.`,
    motion: `Purposeful, low-latency transitions honoring prefers-reduced-motion.`,
    components: src.tags.slice(0, 4).map((t) => `${t} Module`)
  };

  return {
    id: `design-${src.id}`,
    sourceId: src.id,
    num: src.num,
    title: analysis.reference,
    name: src.name,
    category: src.category,
    description: src.description,
    sourceUrl: src.url,
    demoUrl: src.demoUrl || src.url,
    tags: src.tags,
    technologies: src.technologies,
    visualAnalysis: analysis,
    generationPrompt: linkedPrompt ? linkedPrompt.optimizedPrompt : '',
    promptId: linkedPrompt?.id || ''
  };
});

// Build additional Examples so every source has concrete usage examples
const allExamples = [...EXAMPLES_SEED];
const coveredExampleSourceIds = new Set();
for (const ex of allExamples) {
  coveredExampleSourceIds.add(ex.sourceId);
  for (const rel of ex.relatedSourceIds || []) coveredExampleSourceIds.add(rel);
}

for (const src of MASTER_46_SOURCES) {
  if (!coveredExampleSourceIds.has(src.id)) {
    const linkedPrompt = allPrompts.find((p) => p.sourceId === src.id);
    allExamples.push({
      id: `example-${src.id}-pattern`,
      title: `${src.name} — Canonical Architecture & Implementation Pattern`,
      sourceId: src.id,
      relatedSourceIds: src.relatedSourceIds || [],
      category: src.category,
      contentTypes: [...new Set([...src.contentTypes.slice(0, 3), 'Example'])],
      tags: src.tags,
      technologies: src.technologies,
      description: `Actionable architectural breakdown, minimal usage recipe, and prompt blueprint derived from ${src.name}.`,
      hasLiveDemo: false,
      demoType: null,
      promptId: linkedPrompt?.id || '',
      codeSnippet: REPO_CODE_SNIPPETS[src.id] || (src.visualAnalysis
        ? JSON.stringify(src.visualAnalysis, null, 2)
        : `// ${src.name} (${src.url})\n// Technologies: ${src.technologies.join(', ')}\n// Category: ${src.category}`)
    });
  }
}

// Compute per-source coverage counts and finalize `data/sources.json`
const finalizedSources = MASTER_46_SOURCES.map((src) => {
  const probe = discoveryById.get(src.id);
  const gh = probe?.ghData || null;
  const designCount = designsCatalog.filter((d) => d.sourceId === src.id).length;
  const promptCount = allPrompts.filter((p) => p.sourceId === src.id || (src.relatedSourceIds || []).includes(p.sourceId)).length;
  const repoCount = reposCatalog.filter((r) => r.sourceId === src.id || (src.relatedSourceIds || []).includes(r.sourceId)).length;
  const exampleCount = allExamples.filter((e) => e.sourceId === src.id || (e.relatedSourceIds || []).includes(src.id)).length;
  const workflowCount = WORKFLOWS_SEED.filter((w) => w.sourceIds.includes(src.id)).length;

  return {
    id: src.id,
    num: src.num,
    name: src.name,
    section: src.section,
    category: src.category,
    status: src.status,
    statusNote: src.statusNote,
    description: src.description,
    url: src.url,
    repositoryUrl: src.repositoryUrl || '',
    demoUrl: src.demoUrl || src.url,
    documentationUrl: src.documentationUrl || src.url,
    license: gh?.license && gh.license !== 'NOASSERTION' ? gh.license : src.license,
    author: src.author,
    tags: src.tags,
    technologies: src.technologies,
    contentTypes: src.contentTypes,
    canonicalProductId: src.canonicalProductId || src.id,
    relatedSourceIds: src.relatedSourceIds || [],
    stars: gh?.stars ?? null,
    httpStatus: probe?.webProbe?.status ?? null,
    counts: {
      designs: designCount,
      prompts: promptCount,
      repos: repoCount,
      examples: exampleCount,
      workflows: workflowCount,
      total: designCount + promptCount + repoCount + exampleCount + workflowCount
    },
    retrievedAt
  };
});

// Build Unified Master Catalog (`data/catalog.json`)
const unifiedCatalog = [];

// 1. Add Design & Visual Reference items
for (const d of designsCatalog) {
  const src = finalizedSources.find((s) => s.id === d.sourceId);
  const promptObj = allPrompts.find((p) => p.id === d.promptId);
  const exampleObj = allExamples.find((e) => e.sourceId === d.sourceId && e.hasLiveDemo);
  unifiedCatalog.push({
    id: d.id,
    slug: d.id,
    kind: 'design',
    title: d.title,
    description: d.description,
    category: d.category,
    sourceId: d.sourceId,
    sourceName: d.name,
    sourceUrl: d.sourceUrl,
    repositoryUrl: src?.repositoryUrl || '',
    demoUrl: d.demoUrl,
    license: src?.license || 'Metadata Only',
    author: src?.author || d.name,
    tags: d.tags,
    technologies: d.technologies,
    contentTypes: [...new Set(['Design', d.category, 'Prompt'])],
    hasPrompt: Boolean(promptObj),
    hasDemo: Boolean(exampleObj),
    hasCode: Boolean(exampleObj?.codeSnippet || src?.repositoryUrl),
    demoType: exampleObj?.demoType || null,
    visualAnalysis: d.visualAnalysis,
    originalPrompt: promptObj?.originalPrompt || '',
    optimizedPrompt: promptObj?.optimizedPrompt || d.generationPrompt,
    codeSnippet: exampleObj?.codeSnippet || JSON.stringify(d.visualAnalysis, null, 2),
    previewSvg: `/masallahpub/screenshots/${d.sourceId}.png`,
    featured: [1, 2, 4, 7, 10, 11, 13, 15, 16].includes(d.num)
  });
}

// 2. Add Prompt items
for (const p of allPrompts) {
  const src = finalizedSources.find((s) => s.id === p.sourceId);
  const liveEx = allExamples.find((e) => e.promptId === p.id || e.sourceId === p.sourceId);
  unifiedCatalog.push({
    id: p.id,
    slug: p.id,
    kind: 'prompt',
    title: p.title,
    description: p.description,
    category: p.category,
    sourceId: p.sourceId,
    sourceName: p.source,
    sourceUrl: p.sourceUrl,
    repositoryUrl: src?.repositoryUrl || '',
    demoUrl: src?.demoUrl || p.sourceUrl,
    license: p.license,
    author: src?.author || p.source,
    tags: p.tags,
    technologies: src?.technologies || [],
    contentTypes: [...new Set(['Prompt', p.category, ...(p.tags.includes('Agent Skill') ? ['Agent Skill'] : [])])],
    hasPrompt: true,
    hasDemo: Boolean(liveEx?.hasLiveDemo),
    hasCode: Boolean(liveEx?.codeSnippet),
    demoType: liveEx?.demoType || null,
    originalPrompt: p.originalPrompt,
    optimizedPrompt: p.optimizedPrompt,
    exampleInput: p.exampleInput,
    exampleOutput: p.exampleOutput,
    model: p.model,
    codeSnippet: liveEx?.codeSnippet || '',
    previewSvg: `/masallahpub/screenshots/${p.sourceId}.png`,
    featured: PROMPTS_SEED.slice(0, 12).some((seed) => seed.id === p.id)
  });
}

// 3. Add Repository items
for (const r of reposCatalog) {
  const src = finalizedSources.find((s) => s.id === r.sourceId);
  const promptObj = allPrompts.find((p) => p.sourceId === r.sourceId);
  const liveEx = allExamples.find((e) => e.sourceId === r.sourceId && e.hasLiveDemo);
  unifiedCatalog.push({
    id: r.id,
    slug: r.id,
    kind: 'repository',
    title: `${r.displayName} (${r.name})`,
    description: r.description,
    category: src?.category || 'Repository',
    sourceId: r.sourceId,
    sourceName: r.displayName,
    sourceUrl: r.githubUrl,
    repositoryUrl: r.githubUrl,
    demoUrl: r.homepageUrl,
    license: r.license,
    author: src?.author || r.name.split('/')[0],
    stars: r.stars,
    forks: r.forks,
    language: r.language,
    installation: r.installation,
    keyFeatures: r.keyFeatures,
    isSecondaryMirror: r.isSecondaryMirror,
    canonicalProductId: r.canonicalProductId,
    tags: r.topics,
    technologies: src?.technologies || [r.language],
    contentTypes: [...new Set(['Repository', src?.category || 'Tool', ...(src?.contentTypes || [])])],
    hasPrompt: Boolean(promptObj),
    hasDemo: Boolean(liveEx),
    hasCode: true,
    demoType: liveEx?.demoType || null,
    originalPrompt: promptObj?.originalPrompt || '',
    optimizedPrompt: promptObj?.optimizedPrompt || '',
    codeSnippet: r.codeExample,
    previewSvg: `/masallahpub/screenshots/${r.sourceId}.png`,
    featured: r.stars > 25000 || ['pixelfx', 'three-gpu-pathtracer', 'postprocessing', 'three-quarks', 'tweakpane'].includes(r.sourceId)
  });
}

// 4. Add Interactive Live Demos & Examples
for (const ex of EXAMPLES_SEED) {
  const src = finalizedSources.find((s) => s.id === ex.sourceId);
  const promptObj = allPrompts.find((p) => p.id === ex.promptId || p.sourceId === ex.sourceId);
  unifiedCatalog.push({
    id: ex.id,
    slug: ex.id,
    kind: 'example',
    title: ex.title,
    description: ex.description,
    category: ex.category,
    sourceId: ex.sourceId,
    sourceName: src?.name || ex.sourceId,
    sourceUrl: src?.url || '',
    repositoryUrl: src?.repositoryUrl || '',
    demoUrl: src?.demoUrl || src?.url || '',
    license: src?.license || 'MIT',
    author: src?.author || 'Masallah Studio',
    tags: ex.tags,
    technologies: ex.technologies,
    contentTypes: ex.contentTypes,
    hasPrompt: Boolean(promptObj),
    hasDemo: ex.hasLiveDemo,
    hasCode: true,
    demoType: ex.demoType,
    originalPrompt: promptObj?.originalPrompt || '',
    optimizedPrompt: promptObj?.optimizedPrompt || '',
    codeSnippet: ex.codeSnippet,
    previewSvg: `/masallahpub/screenshots/${ex.sourceId}.png`,
    featured: true
  });
}

// 5. Add Workflows
for (const wf of WORKFLOWS_SEED) {
  unifiedCatalog.push({
    id: wf.id,
    slug: wf.id,
    kind: 'workflow',
    title: wf.title,
    description: wf.description,
    category: 'Workflow',
    sourceId: wf.sourceIds[0],
    relatedSourceIds: wf.sourceIds,
    sourceName: `${wf.sourceIds.length} Connected Sources`,
    sourceUrl: 'https://nazartesi.com/masallahpub/workflows',
    repositoryUrl: '',
    demoUrl: 'https://nazartesi.com/masallahpub/workflows',
    license: 'MIT',
    author: 'Masallah Architecture Team',
    tags: wf.tags,
    technologies: wf.stages.map((s) => s.tool),
    contentTypes: ['Workflow', 'Prompt', 'Architecture'],
    hasPrompt: true,
    hasDemo: true,
    hasCode: true,
    demoType: 'workflow-visualizer',
    originalPrompt: `Chain ${wf.stages.map((s) => s.tool).join(' -> ')} into a cohesive production workflow.`,
    optimizedPrompt: wf.orchestrationPrompt,
    stages: wf.stages,
    codeSnippet: JSON.stringify(wf.stages, null, 2),
    previewSvg: `/masallahpub/screenshots/${wf.sourceIds[0]}.png`,
    featured: true
  });
}

// Compute tags & contentTypes frequency index (`data/tags.json`)
const tagCounts = {};
const contentTypeCounts = {};
const categoryCounts = {};

for (const item of unifiedCatalog) {
  categoryCounts[item.category] = (categoryCounts[item.category] || 0) + 1;
  for (const t of item.tags || []) {
    tagCounts[t] = (tagCounts[t] || 0) + 1;
  }
  for (const ct of item.contentTypes || []) {
    contentTypeCounts[ct] = (contentTypeCounts[ct] || 0) + 1;
  }
}

const tagsData = {
  generatedAt: retrievedAt,
  categories: Object.entries(categoryCounts).map(([name, count]) => ({ name, count })).sort((a, b) => b.count - a.count),
  contentTypes: Object.entries(contentTypeCounts).map(([name, count]) => ({ name, count })).sort((a, b) => b.count - a.count),
  tags: Object.entries(tagCounts).map(([name, count]) => ({ name, count })).sort((a, b) => b.count - a.count)
};

// Write `data/*.json`
fs.writeFileSync(path.join(ROOT, 'data/sources.json'), JSON.stringify(finalizedSources, null, 2));
fs.writeFileSync(path.join(ROOT, 'data/prompts.json'), JSON.stringify(allPrompts, null, 2));
fs.writeFileSync(path.join(ROOT, 'data/repos.json'), JSON.stringify(reposCatalog, null, 2));
fs.writeFileSync(path.join(ROOT, 'data/examples.json'), JSON.stringify({ workflows: WORKFLOWS_SEED, examples: allExamples, designs: designsCatalog }, null, 2));
fs.writeFileSync(path.join(ROOT, 'data/catalog.json'), JSON.stringify(unifiedCatalog, null, 2));
fs.writeFileSync(path.join(ROOT, 'data/tags.json'), JSON.stringify(tagsData, null, 2));

// Generate deterministic editorial SVG preview cards for all 46 sources
const CATEGORY_PALETTES = {
  'Design': ['#E85D3F', '#F4A261', '#141418'],
  'UI': ['#38BDF8', '#818CF8', '#0F172A'],
  'UX': ['#F59E0B', '#FBBF24', '#18130A'],
  'Motion': ['#A855F7', '#EC4899', '#140C1C'],
  'Creative Coding': ['#10B981', '#06B6D4', '#081815'],
  'Component': ['#6366F1', '#22D3EE', '#0D1021'],
  'Design System': ['#14B8A6', '#3B82F6', '#0A161A'],
  'Frontend': ['#F97316', '#FACC15', '#19110A'],
  'Architecture': ['#64748B', '#94A3B8', '#0F1319'],
  'Testing': ['#22C55E', '#84CC16', '#0B1810'],
  'Security': ['#EF4444', '#F97316', '#1A0B0B'],
  'VFX': ['#D946EF', '#38BDF8', '#170B1C'],
  'Video': ['#F43F5E', '#FB923C', '#190B10'],
  'Agent Skill': ['#8B5CF6', '#10B981', '#110E1C'],
  '3D': ['#06B6D4', '#3B82F6', '#08151F'],
  'WebGL': ['#2DD4BF', '#A855F7', '#09171A'],
  'Tool': ['#EAB308', '#F97316', '#17140A'],
  'Generative AI': ['#EC4899', '#8B5CF6', '#190C18'],
  'Audio': ['#10B981', '#38BDF8', '#081915']
};

const previewsDir = path.join(ROOT, 'assets/previews');
fs.mkdirSync(previewsDir, { recursive: true });

for (const src of finalizedSources) {
  const [c1, c2, bg] = CATEGORY_PALETTES[src.category] || ['#E85D3F', '#38BDF8', '#0D0E12'];
  const safeName = src.name.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const safeCategory = src.category.replace(/&/g, '&amp;');
  const safeTech = src.technologies.slice(0, 3).join(' · ').replace(/&/g, '&amp;');
  const starBadge = src.stars ? `★ ${(src.stars / 1000).toFixed(1)}k` : src.status;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="800" height="500">
  <defs>
    <linearGradient id="bg-${src.id}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${bg}" />
      <stop offset="100%" stop-color="#08080A" />
    </linearGradient>
    <radialGradient id="glow-${src.id}" cx="78%" cy="24%" r="55%">
      <stop offset="0%" stop-color="${c1}" stop-opacity="0.34" />
      <stop offset="55%" stop-color="${c2}" stop-opacity="0.10" />
      <stop offset="100%" stop-color="#000000" stop-opacity="0" />
    </radialGradient>
    <pattern id="grid-${src.id}" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.045)" stroke-width="1" />
    </pattern>
  </defs>
  <rect width="800" height="500" fill="url(#bg-${src.id})" />
  <rect width="800" height="500" fill="url(#grid-${src.id})" />
  <rect width="800" height="500" fill="url(#glow-${src.id})" />
  <g stroke="rgba(255,255,255,0.12)" fill="none">
    <rect x="32" y="32" width="736" height="436" rx="16" />
    <line x1="32" y1="104" x2="768" y2="104" />
    <line x1="32" y1="396" x2="768" y2="396" />
    <circle cx="620" cy="250" r="96" stroke="${c1}" stroke-opacity="0.45" stroke-width="1.5" />
    <circle cx="620" cy="250" r="56" stroke="${c2}" stroke-opacity="0.55" stroke-dasharray="6 6" />
    <path d="M 524 250 L 716 250 M 620 154 L 620 346" stroke="rgba(255,255,255,0.08)" />
  </g>
  <text x="64" y="76" fill="${c1}" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="15" font-weight="600" letter-spacing="2">SOURCE #${String(src.num).padStart(2, '0')} // ${safeCategory.toUpperCase()}</text>
  <text x="736" y="76" text-anchor="end" fill="#F4F3EF" opacity="0.75" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="14">${starBadge}</text>
  <text x="64" y="232" fill="#F4F3EF" font-family="-apple-system, BlinkMacSystemFont, Inter, sans-serif" font-size="44" font-weight="700" letter-spacing="-1">${safeName}</text>
  <text x="64" y="276" fill="#A1A1AA" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="16">${safeTech}</text>
  <rect x="64" y="310" width="140" height="6" rx="3" fill="${c1}" />
  <rect x="214" y="310" width="68" height="6" rx="3" fill="${c2}" opacity="0.65" />
  <text x="64" y="438" fill="#A1A1AA" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="13">${src.url.replace('https://', '')}</text>
  <text x="736" y="438" text-anchor="end" fill="#F4F3EF" opacity="0.6" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="13">MASALLAH ARCHIVE</text>
</svg>`;

  fs.writeFileSync(path.join(previewsDir, `${src.id}.svg`), svg);
}

// Write Markdown files into `catalog/*` and `examples/*`
for (const d of designsCatalog) {
  const md = `# ${d.title}\n\n- **Source:** [${d.name}](${d.sourceUrl})\n- **Category:** ${d.category}\n- **Technologies:** ${d.technologies.join(', ')}\n\n## Visual Analysis\n\n- **Layout:** ${d.visualAnalysis.layout}\n- **Typography:** ${d.visualAnalysis.typography}\n- **Color System:** ${d.visualAnalysis.colors}\n- **Spacing:** ${d.visualAnalysis.spacing}\n- **Motion:** ${d.visualAnalysis.motion}\n- **Components:** ${d.visualAnalysis.components.join(', ')}\n\n## Masallah Generation Prompt\n\n\`\`\`text\n${d.generationPrompt}\n\`\`\`\n`;
  fs.writeFileSync(path.join(ROOT, 'catalog/designs', `${d.id}.md`), md);
}

for (const p of allPrompts) {
  const md = `# ${p.title}\n\n- **Category:** ${p.category}\n- **Source:** [${p.source}](${p.sourceUrl})\n- **Target Model:** ${p.model}\n- **License:** ${p.license}\n- **Tags:** ${p.tags.join(', ')}\n\n## Description\n\n${p.description}\n\n## Original Prompt\n\n\`\`\`text\n${p.originalPrompt}\n\`\`\`\n\n## Masallah Optimized Prompt\n\n\`\`\`text\n${p.optimizedPrompt}\n\`\`\`\n\n## Example Input\n\n${p.exampleInput}\n\n## Example Output\n\n${p.exampleOutput}\n`;
  fs.writeFileSync(path.join(ROOT, 'catalog/prompts', `${p.id}.md`), md);
}

for (const r of reposCatalog) {
  const md = `# ${r.displayName} (\`${r.name}\`)\n\n- **GitHub:** [${r.githubUrl}](${r.githubUrl})\n- **Homepage / Demo:** [${r.homepageUrl}](${r.homepageUrl})\n- **License:** ${r.license}\n- **Stars:** ${r.stars.toLocaleString()}\n- **Language:** ${r.language}\n\n## Installation\n\n\`\`\`bash\n${r.installation}\n\`\`\`\n\n## Key Features\n\n${r.keyFeatures.map((f) => `- ${f}`).join('\n')}\n\n## Minimal Usage Example\n\n\`\`\`tsx\n${r.codeExample}\n\`\`\`\n`;
  fs.writeFileSync(path.join(ROOT, 'catalog/repos', `${r.id}.md`), md);
}

for (const wf of WORKFLOWS_SEED) {
  const md = `# ${wf.title}\n\n> ${wf.subtitle}\n\n${wf.description}\n\n## Connected Stages\n\n${wf.stages.map((s) => `### ${s.step}. ${s.title} (${s.tool})\n- **Input:** ${s.input}\n- **Output:** ${s.output}\n- **Architecture Note:** ${s.detail}`).join('\n\n')}\n\n## End-to-End Orchestration Prompt\n\n\`\`\`text\n${wf.orchestrationPrompt}\n\`\`\`\n`;
  fs.writeFileSync(path.join(ROOT, 'catalog/workflows', `${wf.id}.md`), md);
}

// Categorized catalog summaries in `catalog/{components,motion,three-d,video,projects,resources}`
const writeCategorySummary = (folder, filterFn, heading) => {
  const items = unifiedCatalog.filter(filterFn);
  const content = `# ${heading}\n\nTotal indexed entries: **${items.length}**\n\n| ID | Title | Source | Category | Prompt | Live Demo |\n|---|---|---|---|---|---|\n${items.map((i) => `| \`${i.id}\` | ${i.title} | [${i.sourceName}](${i.sourceUrl}) | ${i.category} | ${i.hasPrompt ? 'Yes' : 'No'} | ${i.hasDemo ? 'Yes' : 'No'} |`).join('\n')}\n`;
  fs.writeFileSync(path.join(ROOT, 'catalog', folder, 'INDEX.md'), content);
};

writeCategorySummary('components', (i) => ['Component', 'Design System'].includes(i.category), 'Masallah Components & Design Systems Catalog');
writeCategorySummary('motion', (i) => ['Motion', 'Interaction'].includes(i.category), 'Masallah Motion & Interaction Catalog');
writeCategorySummary('three-d', (i) => ['3D', 'WebGL', 'VFX'].includes(i.category), 'Masallah 3D, WebGL, Shaders & VFX Catalog');
writeCategorySummary('video', (i) => ['Video', 'Audio', 'Generative AI'].includes(i.category), 'Masallah Video, Audio & Generative Pipeline Catalog');
writeCategorySummary('projects', (i) => i.featured, 'Masallah Featured Projects & Interactive Showcases');
writeCategorySummary('resources', (i) => ['Frontend', 'Architecture', 'Testing', 'Security', 'Tool', 'Agent Skill'].includes(i.category), 'Masallah Engineering, QA & Security Resources');

// Write code examples into `examples/`
for (const ex of EXAMPLES_SEED) {
  const folder =
    ex.category === '3D' || ex.category === 'WebGL' ? 'three-d'
    : ex.category === 'Video' || ex.category === 'Audio' ? 'video'
    : ex.category === 'Motion' ? 'motion'
    : ex.category === 'Component' || ex.category === 'UI' || ex.category === 'UX' ? 'ui'
    : 'code';
  fs.writeFileSync(
    path.join(ROOT, 'examples', folder, `${ex.id}.md`),
    `# ${ex.title}\n\n${ex.description}\n\n\`\`\`tsx\n${ex.codeSnippet}\n\`\`\`\n`
  );
}

// Generate `SOURCE_INDEX.md` (with the 46-source coverage report table)
const coverageRows = finalizedSources.map(
  (s) =>
    `| ${String(s.num).padStart(2, '0')} | [${s.name}](${s.url}) | \`${s.status}\` | ${s.counts.designs} | ${s.counts.prompts} | ${s.counts.repos} | ${s.counts.examples} | ${s.license} |`
).join('\n');

const sourceIndexMd = `# Masallah — Master Source Index & Coverage Report (46 Sources)

Generated at: \`${retrievedAt}\`

## Summary Metrics

- **Master Sources Audited:** ${finalizedSources.length} / 46
- **Unified Catalog Entries:** ${unifiedCatalog.length}
- **Design & Visual System Analyses:** ${designsCatalog.length}
- **Prompts (Original + Masallah Optimized):** ${allPrompts.length}
- **GitHub Repositories Cataloged:** ${reposCatalog.length} (with explicit deduplication between \`motion.dev\` #10 and \`motiondivision/motion\` #30)
- **Interactive & Code Examples:** ${allExamples.length} (${EXAMPLES_SEED.length} live interactive demos)
- **Multi-Stage Connected Workflows:** ${WORKFLOWS_SEED.length}

## 46 Master Sources Coverage Table

| # | Source | Status | Designs | Prompts | Repos | Examples | License / Policy |
|---:|---|---|---:|---:|---:|---:|---|
${coverageRows}

## Deduplication & Access Notes

1. **Motion Deduplication (#10 & #30):** \`https://motion.dev\` (Source #10) and \`https://github.com/motiondivision/motion\` (Source #30) share \`canonicalProductId: "motion"\` and bidirectional \`relatedSourceIds\` so documentation/examples (#10) and core WAAPI/React repository internals (#30) are cross-referenced without duplicating vendor assets.
2. **Bot-Protected Galleries (#03 Lapa Ninja, #08 Design Spells, #09 Tympanus/Codrops Web):** Automated headless HTTP requests receive Cloudflare 403 or Vercel 429 security checkpoints. Per strict ethical & legal compliance, Masallah never bypasses access controls; instead, their public metadata, official Codrops GitHub repositories (\`github.com/codrops\`), and abstracted architectural prompt blueprints are indexed.
3. **Unavailable Domain (#05 UI Guana):** \`https://uiguana.com\` returned DNS \`REFUSED / NXDOMAIN\` during live verification. Marked honestly as \`Unavailable\` while retaining SaaS multi-state UI patterns and prompts.
4. **Generative AI Model Weights (#40 ComfyUI & #41 CosyVoice):** Only open-source workflow graphs (\`GPL-3.0\`), Python API scripts (\`Apache-2.0\`), and prompt pipelines are included. Zero binary model checkpoints are stored in the repository.
`;

fs.writeFileSync(path.join(ROOT, 'SOURCE_INDEX.md'), sourceIndexMd);

// Generate `THIRD_PARTY_NOTICES.md`
const thirdPartyMd = `# Third-Party Notices & Source Attribution

**Masallah** is an educational, developer-oriented design, prompt, motion, creative coding, and repository archive.
We strictly respect intellectual property, open-source software licenses, and website terms of service.

## Policy on Redistribution vs. Metadata Indexing

1. **No Unauthorized Asset or Code Copying:** Proprietary gallery websites (Inspora, Recent Design, Lapa Ninja, Minimal Gallery, UI Guana, Design Spells, Motion Sites) are indexed strictly via canonical links, architectural visual analysis, and brand-abstracted prompt templates. No third-party copyrighted brand logos or proprietary stylesheets are redistributed.
2. **Open-Source Repositories:** GitHub repositories (#26–#46 and linked open-source libraries) are referenced via GitHub API metadata, installation instructions, and original minimal educational code snippets authored specifically for Masallah. Full upstream libraries remain in their respective repositories under their original licenses.
3. **Generative Model Checkpoints Excluded:** For **ComfyUI** (#40) and **CosyVoice** (#41), no third-party neural network weights, safetensors, or voice checkpoints are included in this repository.

## Complete Attribution & License Registry (46 Master Sources)

${finalizedSources.map((s) => `### ${String(s.num).padStart(2, '0')}. ${s.name}
- **Canonical URL:** ${s.url}
${s.repositoryUrl ? `- **Repository:** ${s.repositoryUrl}\n` : ''}- **Author / Maintainer:** ${s.author}
- **License / Terms:** ${s.license}
- **Coverage Status:** ${s.status} — ${s.statusNote}
`).join('\n')}
`;

fs.writeFileSync(path.join(ROOT, 'THIRD_PARTY_NOTICES.md'), thirdPartyMd);

// Generate `docs/{architecture,sources,workflows,deployment}.md`
fs.writeFileSync(
  path.join(ROOT, 'docs/architecture.md'),
  `# Masallah — System & Frontend Architecture

## Overview

Masallah is structured as a data-driven monorepo combining a normalized JSON knowledge base (\`data/\`), Markdown reference archives (\`catalog/\` and \`examples/\`), deterministic collection/validation scripts (\`scripts/\`), and a Next.js static-export web application (\`apps/web/\`) deployed at \`https://nazartesi.com/masallahpub\`.

## Key Architectural Decisions

1. **Static Subpath Isolation (\`basePath: '/masallahpub'\`):**
   \`nazartesi.com\` serves production content from Firebase Hosting (\`webtanitim/\`). By compiling \`apps/web\` with \`output: 'export'\` and \`basePath: '/masallahpub'\`, all Masallah routes, scripts, and SVG previews live cleanly inside \`/masallahpub\` without modifying any root \`nazartesi.com\` files.
2. **Single Source of Truth Data Pipeline:**
   \`scripts/collect/discover-sources.mjs\` probes HTTP endpoints and the GitHub REST API, and \`scripts/normalize/build-catalog.mjs\` normalizes all 46 sources into \`data/sources.json\`, \`data/prompts.json\`, \`data/repos.json\`, \`data/examples.json\`, \`data/catalog.json\`, and \`data/tags.json\`.
3. **Deduplication Graph:**
   Related entities (such as \`motion.dev\` #10 and \`github.com/motiondivision/motion\` #30) share \`canonicalProductId: "motion"\` and explicit \`relatedSourceIds\` links.
4. **Interactive Live Demo Studio:**
   Rather than embedding heavy third-party iframes that fail X-Frame-Options or CSP rules, Masallah implements self-contained, 60fps interactive sandboxes (Motion spring solver, Anime.js 2D radial stagger grid, PixelFX dual-buffer canvas, Three.js/WebGL post-processing & particle studio, Manim Fourier epicycles, Remotion caption timeline, Radix roving focus, Laws of UX ergonomics lab, and OWASP URL sanitizer).
`
);

fs.writeFileSync(path.join(ROOT, 'docs/sources.md'), sourceIndexMd);
fs.writeFileSync(
  path.join(ROOT, 'docs/workflows.md'),
  `# Masallah — Multi-Tool Creative & Engineering Workflows\n\n${WORKFLOWS_SEED.map((w) => `## ${w.title}\n\n${w.description}\n\n${w.stages.map((s) => `${s.step}. **${s.title}** (\`${s.tool}\`): ${s.detail}`).join('\n')}\n`).join('\n')}`
);
fs.writeFileSync(
  path.join(ROOT, 'docs/deployment.md'),
  `# Deployment Guide (\`https://nazartesi.com/masallahpub\`)

## Subpath Architecture

- **Production URL:** \`https://nazartesi.com/masallahpub\`
- **Hosting Provider:** Firebase Hosting (\`nazartesim\` project, \`webtanitim\` public root)
- **Next.js Configuration:** \`output: 'export'\`, \`basePath: '/masallahpub'\`, \`images: { unoptimized: true }\`

## Non-Destructive Deployment Procedure

1. Run validation and security scan:
   \`\`\`bash
   node scripts/collect/security-scan.mjs
   node scripts/normalize/validate-catalog.mjs
   \`\`\`
2. Build static Next.js export in \`apps/web\`:
   \`\`\`bash
   cd apps/web && npm run build
   \`\`\`
3. Sync \`apps/web/out/\` strictly into \`webtanitim/masallahpub/\` (and \`webtanitim/masallahpub.html\` for cleanUrls root resolution) without modifying any existing files in \`webtanitim/\`.
4. Deploy hosting via Firebase CLI:
   \`\`\`bash
   npx firebase-tools deploy --only hosting
   \`\`\`
`
);

console.log(`Catalog build complete:
- Sources:   ${finalizedSources.length}
- Designs:   ${designsCatalog.length}
- Prompts:   ${allPrompts.length}
- Repos:     ${reposCatalog.length}
- Examples:  ${allExamples.length}
- Workflows: ${WORKFLOWS_SEED.length}
- Unified:   ${unifiedCatalog.length}`);
