# CosyVoice Multilingual Narration & WhisperX Word-Level Subtitle Pipeline

- **Category:** Audio
- **Source:** [CosyVoice / WhisperX](https://github.com/QwenAudio/CosyVoice)
- **Target Model:** Claude 3.7 Sonnet / Gemini 2.5 Pro
- **License:** Apache-2.0 / BSD-2-Clause
- **Tags:** Audio, Video, Workflow, Generative AI, Prompt

## Description

Chains zero-shot multilingual voice synthesis (`CosyVoice`) with phoneme-level forced alignment (`WhisperX`) to output 24kHz WAV narration and millisecond-accurate JSON captions for Remotion.

## Original Prompt

```text
Generate voiceover audio with CosyVoice and extract word-level timestamps using WhisperX.
```

## Masallah Optimized Prompt

```text
Build an automated narration and word-level subtitle synchronization pipeline chaining `CosyVoice` (`FunAudioLLM/CosyVoice`) and `WhisperX` (`m-bain/whisperX`):
1. Multilingual Narration Synthesis (`CosyVoice2`):
   - Segment script by sentence boundaries and apply explicit prosody/breath markers.
   - Synthesize 24kHz mono WAV segments using `cosyvoice.inference_instruct2()` or zero-shot speaker reference (keeping pretrained model weights in local cache outside git).
2. Phoneme Forced Alignment (`WhisperX`):
   - Transcribe synthesized audio with `whisperx.load_model("large-v3", compute_type="float16")`.
   - Run wav2vec2 phoneme alignment via `whisperx.load_align_model()` and `whisperx.align()` to produce exact `{ word, start, end, score }` millisecond timestamps.
3. Remotion Export: Convert aligned word timestamps into both `.srt`/`.vtt` and a typed Remotion `captions.json` array.
```

## Example Input

Turkish & English bilingual technical explainer script (90 seconds) requiring frame-accurate word highlighting in Remotion.

## Example Output

End-to-end Python pipeline (`narrate_and_align.py`) outputting `narration.wav`, `subtitles.srt`, and `remotion-captions.json`.
