# ComfyUI (`Comfy-Org/ComfyUI`)

- **GitHub:** [https://github.com/Comfy-Org/ComfyUI](https://github.com/Comfy-Org/ComfyUI)
- **Homepage / Demo:** [https://comfyanonymous.github.io/ComfyUI_examples/](https://comfyanonymous.github.io/ComfyUI_examples/)
- **License:** GPL-3.0
- **Stars:** 144,345
- **Language:** Python

## Installation

```bash
pip install comfy-cli && comfy install
```

## Key Features

- Primary domain: Generative AI (J. Video / Motion / Generative Toolchain)
- Core stack: Python, PyTorch, ComfyUI API, DAG JSON Workflows
- License verified: GPL-3.0
- Referenced cleanly via metadata and minimal educational code without vendor bloat.

## Minimal Usage Example

```tsx
# Submit a deterministic API graph to local ComfyUI server (no model weights in git)
curl -X POST http://127.0.0.1:8188/prompt \
  -H "Content-Type: application/json" \
  -d @workflow_api.json
```
