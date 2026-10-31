# librosa (`librosa/librosa`)

- **GitHub:** [https://github.com/librosa/librosa](https://github.com/librosa/librosa)
- **Homepage / Demo:** [https://librosa.org/doc/latest/auto_examples/index.html](https://librosa.org/doc/latest/auto_examples/index.html)
- **License:** ISC
- **Stars:** 8,740
- **Language:** Python

## Installation

```bash
pip install librosa
```

## Key Features

- Primary domain: Audio (J. Video / Motion / Generative Toolchain)
- Core stack: Python, librosa, NumPy, SciPy, FFT / Spectrogram
- License verified: ISC
- Referenced cleanly via metadata and minimal educational code without vendor bloat.

## Minimal Usage Example

```tsx
import librosa, json

y, sr = librosa.load("soundtrack.wav", sr=22050)
_, y_perc = librosa.effects.hpss(y)
tempo, beat_frames = librosa.beat.beat_track(y=y_perc, sr=sr)
beat_times = librosa.frames_to_time(beat_frames, sr=sr).tolist()
print(json.dumps({"bpm": float(tempo), "beats": beat_times[:12]}))
```
