# Remotion (`remotion-dev/remotion`)

- **GitHub:** [https://github.com/remotion-dev/remotion](https://github.com/remotion-dev/remotion)
- **Homepage / Demo:** [https://www.remotion.dev/showcase](https://www.remotion.dev/showcase)
- **License:** Remotion License (Free for individuals & small teams)
- **Stars:** 69,425
- **Language:** TypeScript

## Installation

```bash
npx create-video@latest
```

## Key Features

- Primary domain: Video (J. Video / Motion / Generative Toolchain)
- Core stack: React, TypeScript, Remotion, FFmpeg, Chromium
- License verified: Remotion License (Free for individuals & small teams)
- Referenced cleanly via metadata and minimal educational code without vendor bloat.

## Minimal Usage Example

```tsx
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const IntroCard: React.FC<{ title: string }> = ({ title }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const scale = spring({ frame, fps, config: { damping: 14, stiffness: 160 } });
  return <AbsoluteFill style={{ transform: `scale(${scale})` }}>{title}</AbsoluteFill>;
};
```
