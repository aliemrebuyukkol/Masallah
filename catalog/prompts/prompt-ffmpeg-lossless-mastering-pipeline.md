# OBS Capture, LosslessCut Keyframe Trimming & FFmpeg Web/Social Mastering

- **Category:** Video
- **Source:** [FFmpeg / LosslessCut / OBS Studio](https://github.com/FFmpeg/FFmpeg)
- **Target Model:** Claude 3.7 Sonnet / Gemini 2.5 Pro
- **License:** MIT
- **Tags:** Video, Audio, Tool, Workflow, Prompt, Example

## Description

Provides safe, copy-pasteable FFmpeg & LosslessCut commands for lossless segment cutting, EBU R128 loudness normalization, high-efficiency MP4/WebM/AV1 web delivery, and sprite sheet generation.

## Original Prompt

```text
Give me FFmpeg commands to compress video for the web, normalize audio, and extract clips.
```

## Masallah Optimized Prompt

```text
Provide a defensive, production-tested media engineering toolkit combining OBS Studio (`obs-studio`), LosslessCut (`lossless-cut`), and FFmpeg (`FFmpeg/FFmpeg`):
1. OBS Capture Configuration: Record MKV container (crash-resilient) at 60fps using hardware CQP/CRF 16 (Color Space: Rec.709, Range: Partial) before remuxing to MP4.
2. Zero-Reencode Segment Extraction (LosslessCut / FFmpeg Stream Copy):
   `ffmpeg -ss 00:00:12.500 -to 00:00:42.000 -i input.mkv -c copy -avoid_negative_ts make_zero cut_lossless.mp4`
3. Dual-Pass EBU R128 Audio Loudness Normalization (-14 LUFS for Web/YouTube, -1.0 dBTP true peak):
   `ffmpeg -i input.mp4 -af loudnorm=I=-14:TP=-1.0:LRA=11 -c:v copy normalized.mp4`
4. High-Craft Web Hero Loop Delivery (Muted H.264 MP4 + VP9 WebM + First-Frame WebP Poster):
   - Fast-start H.264: `ffmpeg -i normalized.mp4 -c:v libx264 -preset slow -crf 20 -pix_fmt yuv420p -movflags +faststart -an hero-loop.mp4`
   - VP9 WebM: `ffmpeg -i normalized.mp4 -c:v libvpx-vp9 -b:v 0 -crf 28 -row-mt 1 -an hero-loop.webm`
```

## Example Input

Raw 4K 60fps OBS screen capture (`demo-raw.mkv`) needing lossless trimming, loudness normalization, and <2.5MB web hero loop export.

## Example Output

Annotated shell pipeline (`master-media.sh`) with input validation and bitrate verification.
