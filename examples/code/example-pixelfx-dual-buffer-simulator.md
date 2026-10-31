# PixelFX Dual-Buffer Procedural VFX Simulator

Live low-resolution (160x90) procedural pixel art VFX engine executing the PixelFX dual-buffer architecture (indexed color ramp + 2x2 Bayer dither + additive light glow) across Frost Nova, Fire Campfire, Arcane Orb, and Lightning Strike presets.

```tsx
// PixelFX dual-buffer composite pattern: color buffer + additive light glow
export function compositeDualBuffer(colorBuf, lightBuf, outRgba, paletteHex, glowStrength = 1.0) {
  for (let i = 0; i < colorBuf.length; i++) {
    const palIndex = colorBuf[i];
    const baseRgb = paletteHex[palIndex] ?? [10, 10, 14];
    const glow = lightBuf[i] * glowStrength;
    const offset = i * 4;
    outRgba[offset]     = Math.min(255, baseRgb[0] + glow * 220);
    outRgba[offset + 1] = Math.min(255, baseRgb[1] + glow * 180);
    outRgba[offset + 2] = Math.min(255, baseRgb[2] + glow * 255);
    outRgba[offset + 3] = 255;
  }
}
```
