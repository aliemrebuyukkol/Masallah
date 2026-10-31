# WhisperX (`m-bain/whisperX`)

- **GitHub:** [https://github.com/m-bain/whisperX](https://github.com/m-bain/whisperX)
- **Homepage / Demo:** [https://github.com/m-bain/whisperX](https://github.com/m-bain/whisperX)
- **License:** BSD-2-Clause
- **Stars:** 24,980
- **Language:** Python

## Installation

```bash
pip install whisperx
```

## Key Features

- Primary domain: Audio (J. Video / Motion / Generative Toolchain)
- Core stack: Python, WhisperX, faster-whisper, wav2vec2, Pyannote
- License verified: BSD-2-Clause
- Referenced cleanly via metadata and minimal educational code without vendor bloat.

## Minimal Usage Example

```tsx
import whisperx

model = whisperx.load_model("large-v3", device="cuda", compute_type="float16")
audio = whisperx.load_audio("narration.wav")
result = model.transcribe(audio, batch_size=16)
model_a, metadata = whisperx.load_align_model(language_code=result["language"], device="cuda")
aligned = whisperx.align(result["segments"], model_a, metadata, audio, "cuda")
```
