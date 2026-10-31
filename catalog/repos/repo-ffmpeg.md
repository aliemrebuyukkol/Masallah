# FFmpeg (`FFmpeg/FFmpeg`)

- **GitHub:** [https://github.com/FFmpeg/FFmpeg](https://github.com/FFmpeg/FFmpeg)
- **Homepage / Demo:** [https://ffmpeg.org](https://ffmpeg.org)
- **License:** LGPL-2.1+ / GPL-2.0+
- **Stars:** 66,157
- **Language:** C

## Installation

```bash
brew install ffmpeg
```

## Key Features

- Primary domain: Video (J. Video / Motion / Generative Toolchain)
- Core stack: C, FFmpeg, libx264, libsvtav1, libvpx-vp9, Filtergraphs
- License verified: LGPL-2.1+ / GPL-2.0+
- Referenced cleanly via metadata and minimal educational code without vendor bloat.

## Minimal Usage Example

```tsx
# Faststart H.264 + EBU R128 (-14 LUFS) audio normalization for web delivery
ffmpeg -i input.mp4 \
  -af "loudnorm=I=-14:TP=-1.0:LRA=11" \
  -c:v libx264 -preset slow -crf 20 -pix_fmt yuv420p \
  -movflags +faststart output_web.mp4
```
