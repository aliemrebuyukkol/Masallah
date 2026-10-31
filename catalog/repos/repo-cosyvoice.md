# CosyVoice (`QwenAudio/CosyVoice`)

- **GitHub:** [https://github.com/FunAudioLLM/CosyVoice](https://github.com/FunAudioLLM/CosyVoice)
- **Homepage / Demo:** [https://funaudiollm.github.io/cosyvoice2/](https://funaudiollm.github.io/cosyvoice2/)
- **License:** Apache-2.0
- **Stars:** 24,214
- **Language:** Python

## Installation

```bash
git clone --recursive https://github.com/FunAudioLLM/CosyVoice.git
```

## Key Features

- Primary domain: Audio (J. Video / Motion / Generative Toolchain)
- Core stack: Python, PyTorch, CosyVoice, Audio Synthesis
- License verified: Apache-2.0
- Referenced cleanly via metadata and minimal educational code without vendor bloat.

## Minimal Usage Example

```tsx
from cosyvoice.cli.cosyvoice import CosyVoice2
import torchaudio

cosyvoice = CosyVoice2("iic/CosyVoice2-0.5B", load_jit=False, load_trt=False)
for i, chunk in enumerate(cosyvoice.inference_sft("Masallah yaratici arsivine hos geldiniz.", "Turkish")):
    torchaudio.save(f"narration_{i}.wav", chunk["tts_speech"], 24000)
```
