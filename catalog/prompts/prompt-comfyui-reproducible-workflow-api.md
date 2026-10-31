# ComfyUI Reproducible DAG Workflow JSON & Headless WebSocket Pipeline

- **Category:** Generative AI
- **Source:** [ComfyUI](https://github.com/Comfy-Org/ComfyUI)
- **Target Model:** Claude 3.7 Sonnet / Gemini 2.5 Pro
- **License:** GPL-3.0 (Workflow & Script Only — No Model Weights)
- **Tags:** Generative AI, Workflow, Video, Tool, Prompt

## Description

Designs a deterministic ComfyUI node graph (Depth ControlNet + IPAdapter style transfer + latent upscaler) with a Python/TypeScript WebSocket runner—without bundling restricted model weights.

## Original Prompt

```text
Create a ComfyUI workflow JSON and Python script to generate consistent style frames for a video.
```

## Masallah Optimized Prompt

```text
Design a reproducible, license-compliant ComfyUI (`github.com/Comfy-Org/ComfyUI`) automation pipeline:
1. DAG Node Graph Architecture (`workflow_api.json`):
   - Node 1 (`CheckpointLoaderSimple`): Parameterized model filename input (never hardcode or commit proprietary checkpoint binaries into git).
   - Node 2 (`ControlNetLoader` + `ControlNetApplyAdvanced`): Lock structural layout using a Blender/Three.js depth pass (`strength: 0.78, start_percent: 0.0, end_percent: 0.85`).
   - Node 3 (`KSampler`): Fixed seed + Euler Ancestral / Karras scheduler for deterministic keyframe reproducibility.
   - Node 4 (`LatentUpscaleBy` + secondary `KSampler` denoise `0.35`) → `VAEDecode` → `SaveImage`.
2. Headless WebSocket Client: Write a clean Python/Node script that connects to `ws://127.0.0.1:8188/ws?clientId=...`, injects dynamic prompt/seed overrides into the API JSON graph, monitors node-by-node execution progress, and retrieves the output PNG frames.
```

## Example Input

Batch-generate 8 consistent art-directed storyboard keyframes from Three.js depth maps.

## Example Output

Parameterized `comfyui-depth-keyframe-workflow.json` + headless WebSocket execution script.
