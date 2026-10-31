# LosslessCut (`mifi/lossless-cut`)

- **GitHub:** [https://github.com/mifi/lossless-cut](https://github.com/mifi/lossless-cut)
- **Homepage / Demo:** [https://mifi.no/losslesscut/](https://mifi.no/losslesscut/)
- **License:** GPL-2.0
- **Stars:** 45,529
- **Language:** TypeScript

## Installation

```bash
brew install --cask losslesscut
```

## Key Features

- Primary domain: Video (J. Video / Motion / Generative Toolchain)
- Core stack: Electron, TypeScript, FFmpeg Stream Copy, EDL
- License verified: GPL-2.0
- Referenced cleanly via metadata and minimal educational code without vendor bloat.

## Minimal Usage Example

```tsx
# Lossless keyframe stream copy using FFmpeg / LosslessCut project workflow
ffmpeg -ss 00:00:08.000 -to 00:00:26.000 -i raw_capture.mkv -c copy -map 0 clip_lossless.mp4
```
