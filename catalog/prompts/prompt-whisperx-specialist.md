# WhisperX — Production Implementation & Pattern Prompt

- **Category:** Audio
- **Source:** [WhisperX](https://github.com/m-bain/whisperX)
- **Target Model:** Claude 3.7 Sonnet / Gemini 2.5 Pro
- **License:** BSD-2-Clause
- **Tags:** Audio, Video, Subtitles, Transcription, Prompt

## Description

Structured engineering & creative direction prompt derived from WhisperX (Audio) best practices.

## Original Prompt

```text
Create an implementation using WhisperX (Python, WhisperX, faster-whisper) following official documentation patterns.
```

## Masallah Optimized Prompt

```text
Act as a Principal Specialist in WhisperX (https://github.com/m-bain/whisperX). Implement a production-ready module adhering to these verified constraints:
1. Core Stack & Standards: Use Python, WhisperX, faster-whisper, wav2vec2, Pyannote with strict type safety and clean resource lifecycle management.
2. Pattern Fidelity: Apply WhisperX's canonical architecture (Automatic speech recognition pipeline combining faster-whisper with phoneme-based forced alignment (wav2vec2) and speaker diarization for millisecond-accurate word-level subtitle timing.) without copying proprietary third-party brand assets.
3. Accessibility & Performance: Maintain 60fps interaction budgets, keyboard navigability, and deterministic error handling.
```

## Example Input

Build a modular audio recipe demonstrating WhisperX integration in a modern web or creative pipeline.

## Example Output

Self-contained Python implementation + integration test and usage documentation.
