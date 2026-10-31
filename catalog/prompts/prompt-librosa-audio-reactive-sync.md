# librosa Beat Tracking, Onset Envelope & Frame-Sync JSON Exporter

- **Category:** Audio
- **Source:** [librosa](https://github.com/librosa/librosa)
- **Target Model:** Claude 3.7 Sonnet / Gemini 2.5 Pro
- **License:** ISC / MIT
- **Tags:** Audio, Motion, Video, Creative Coding, Prompt, Workflow

## Description

Extracts BPM tempo, beat frames, percussive transients, and 4-band spectral energy using `librosa` and exports a 60fps frame-indexed JSON timeline for Remotion and Three.js.

## Original Prompt

```text
Analyze an audio file with librosa to detect beats and export a JSON file for video animation.
```

## Masallah Optimized Prompt

```text
Write a Python audio-analysis script using `librosa` (`github.com/librosa/librosa`) that bridges music signals directly into 60fps web/video animations:
1. Harmonic-Percussive Source Separation: Split audio via `y_harm, y_perc = librosa.effects.hpss(y)` so beat detection locks onto crisp percussive transients.
2. Beat & Onset Extraction: Compute `onset_env = librosa.onset.onset_strength(y=y_perc, sr=sr)`, `tempo, beat_frames = librosa.beat.beat_track(onset_envelope=onset_env, sr=sr)`, and convert frames to exact timestamps (`librosa.frames_to_time`).
3. 60fps Frame Resampling: Interpolate sub-bass (20–120Hz), mid (120–2000Hz), and high-hat (2000–12000Hz) RMS energy onto a deterministic 60fps video frame grid (`frame_0 ... frame_N`) so Remotion or Three.js shaders can read `audioData.frames[currentFrame].bass` in $O(1)$ time.
```

## Example Input

124 BPM electronic soundtrack (`track.wav`) driving a 60fps audio-reactive particle shader.

## Example Output

Python analyzer (`extract_audio_sync.py`) + 60fps `audio-frames.json` schema and live visualizer demo.
