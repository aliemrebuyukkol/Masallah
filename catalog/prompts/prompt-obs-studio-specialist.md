# OBS Studio — Production Implementation & Pattern Prompt

- **Category:** Video
- **Source:** [OBS Studio](https://github.com/obsproject/obs-studio)
- **Target Model:** Claude 3.7 Sonnet / Gemini 2.5 Pro
- **License:** GPL-2.0
- **Tags:** Video, Tool, Recording, Streaming, Prompt

## Description

Structured engineering & creative direction prompt derived from OBS Studio (Video) best practices.

## Original Prompt

```text
Create an implementation using OBS Studio (C/C++, OBS Studio, obs-websocket) following official documentation patterns.
```

## Masallah Optimized Prompt

```text
Act as a Principal Specialist in OBS Studio (https://github.com/obsproject/obs-studio). Implement a production-ready module adhering to these verified constraints:
1. Core Stack & Standards: Use C/C++, OBS Studio, obs-websocket, NVENC / VideoToolbox with strict type safety and clean resource lifecycle management.
2. Pattern Fidelity: Apply OBS Studio's canonical architecture (Open-source cross-platform studio for low-overhead GPU screen recording, WebGL Browser Source compositing, and programmatic scene automation via `obs-websocket`.) without copying proprietary third-party brand assets.
3. Accessibility & Performance: Maintain 60fps interaction budgets, keyboard navigability, and deterministic error handling.
```

## Example Input

Build a modular video recipe demonstrating OBS Studio integration in a modern web or creative pipeline.

## Example Output

Self-contained C/C++ implementation + integration test and usage documentation.
