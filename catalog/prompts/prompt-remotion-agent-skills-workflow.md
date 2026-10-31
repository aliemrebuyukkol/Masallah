# Remotion Agent Skills Orchestration (`/remotion-create`, `/remotion-markup`, `/remotion-captions`)

- **Category:** Agent Skill
- **Source:** [Remotion Skills](https://github.com/remotion-dev/skills)
- **Target Model:** Claude 3.7 Sonnet / Gemini 2.5 Pro / Cursor Agent
- **License:** MIT
- **Tags:** Agent Skill, Prompt, Video, Workflow

## Description

Applies the official `remotion-dev/skills` instruction hierarchy to scaffold, style, caption, and preview programmatic videos with an AI coding agent.

## Original Prompt

```text
/remotion-create Make a promo video for a record store
/remotion-markup Create an animated title card using Inter.
/remotion-maps Animate a route from Los Angeles to New York and make the camera follow it.
```

## Masallah Optimized Prompt

```text
Execute a multi-stage programmatic video build following the official Remotion Agent Skills (`github.com/remotion-dev/skills`) protocol:
1. Skill Routing (`/remotion-best-practices`): Preserve existing user composition edits; launch Remotion Studio preview early so visual feedback guides iteration before full MP4 rendering.
2. Markup & Layout (`/remotion-markup`): Use `<AbsoluteFill>` layers, preload fonts deterministically via `@remotion/google-fonts`, and structure inline controls so parameters remain editable in Studio.
3. Word-Level Captions (`/remotion-captions`): Ingest millisecond-aligned word timestamps (from WhisperX or `@remotion/captions`), group into TikTok/Reel-style 4-word pages with `createTikTokStyleCaptions()`, and highlight the active spoken word at `currentTimeMs = (frame / fps) * 1000`.
4. Geospatial Flyover (`/remotion-maps`): Interpolate camera bearing, pitch, and GeoJSON polyline progress deterministically per frame.
```

## Example Input

Create a 15-second vertical (1080x1920) developer release explainer with synchronized word-by-word captions and code highlight zoom.

## Example Output

Multi-sequence Remotion composition with `@remotion/captions` active-word highlighter and Studio schema.
