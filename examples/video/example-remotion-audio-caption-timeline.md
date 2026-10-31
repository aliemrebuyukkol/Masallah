# Remotion + WhisperX + librosa Synchronized Frame Timeline

Frame-deterministic 60fps video player simulator showing how Remotion synchronizes WhisperX millisecond word timestamps with librosa 3-band spectral beat bars at any scrubbed frame.

```tsx
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const SyncedCaptionComposition: React.FC<{ words: AlignedWord[]; beats: number[] }> = ({ words, beats }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const currentTimeMs = (frame / fps) * 1000;
  const energy = beats[frame % beats.length] ?? 0.25;

  return (
    <AbsoluteFill style={{ backgroundColor: "#090A0F", justifyContent: "center", alignItems: "center" }}>
      <div style={{ display: "flex", gap: 12, transform: `scale(${1 + energy * 0.08})` }}>
        {words.map((w, i) => {
          const active = currentTimeMs >= w.startMs && currentTimeMs <= w.endMs;
          return (
            <span key={i} style={{ color: active ? "#E85D3F" : "#F4F3EF", fontWeight: active ? 700 : 400 }}>
              {w.text}
            </span>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
```
