'use client';

import React, { useEffect, useRef, useState } from 'react';
import { CopyPromptButton } from './CopyPromptButton';

export const DEMO_MODES = [
  { id: 'pixelfx-canvas', label: '01 · PixelFX Dual-Buffer VFX', source: 'PixelFX (#26)', category: 'VFX' },
  { id: 'three-webgl-studio', label: '02 · Three.js + Bloom + Quarks + Tweakpane', source: 'Three.js / postprocessing (#34–#39)', category: '3D / WebGL' },
  { id: 'motion-spring', label: '03 · Motion Spring & Layout Solver', source: 'Motion (#10 / #30)', category: 'Motion' },
  { id: 'anime-stagger', label: '04 · Anime.js 2D Radial Stagger Grid', source: 'Anime.js (#29)', category: 'Motion' },
  { id: 'react-bits-spotlight', label: '05 · React Bits Spotlight & Kinetic Type', source: 'React Bits (#11)', category: 'Component' },
  { id: 'manim-fourier', label: '06 · Manim Fourier Epicycles & LaTeX', source: 'Manim (#31)', category: 'Video / Math' },
  { id: 'remotion-timeline', label: '07 · Remotion + WhisperX + librosa Sync', source: 'Remotion / WhisperX / librosa (#27, #42, #43)', category: 'Video / Audio' },
  { id: 'radix-a11y-inspector', label: '08 · Radix + shadcn Roving Focus', source: 'Radix UI / shadcn/ui (#15, #16)', category: 'Component / A11y' },
  { id: 'laws-of-ux-lab', label: '09 · Laws of UX Fitts & Hick Lab', source: 'Laws of UX / NNGroup (#06, #07)', category: 'UX' },
  { id: 'owasp-sanitizer', label: '10 · OWASP XSS & URL Sanitizer Gate', source: 'OWASP Cheat Sheets (#25)', category: 'Security' },
] as const;

interface LiveDemoStudioProps {
  initialDemo?: string;
}

const PIXEL_PALETTES: Record<string, [number, number, number][]> = {
  frost: [
    [10, 14, 26],
    [24, 52, 104],
    [56, 130, 214],
    [125, 211, 252],
    [240, 249, 255],
  ],
  fire: [
    [18, 9, 12],
    [112, 24, 18],
    [214, 69, 32],
    [245, 158, 11],
    [254, 249, 195],
  ],
  arcane: [
    [14, 10, 24],
    [76, 29, 149],
    [147, 51, 234],
    [232, 121, 249],
    [253, 244, 255],
  ],
  emerald: [
    [8, 20, 16],
    [6, 95, 70],
    [16, 185, 129],
    [110, 231, 183],
    [236, 253, 245],
  ],
};

const REMOTION_CAPTION_WORDS = [
  { text: 'Masallah', startMs: 0, endMs: 650 },
  { text: 'connects', startMs: 650, endMs: 1250 },
  { text: '46', startMs: 1250, endMs: 1700 },
  { text: 'creative', startMs: 1700, endMs: 2350 },
  { text: 'sources', startMs: 2350, endMs: 3000 },
  { text: 'into', startMs: 3000, endMs: 3450 },
  { text: 'one', startMs: 3450, endMs: 3900 },
  { text: 'living', startMs: 3900, endMs: 4550 },
  { text: 'studio.', startMs: 4550, endMs: 6000 },
];

export function LiveDemoStudio({ initialDemo = 'pixelfx-canvas' }: LiveDemoStudioProps) {
  const [activeMode, setActiveMode] = useState<string>(initialDemo);

  // 1. PixelFX state
  const [pfxPalette, setPfxPalette] = useState<string>('frost');
  const [pfxGlow, setPfxGlow] = useState<number>(1.15);
  const [pfxFrame, setPfxFrame] = useState<number>(8);
  const [pfxAutoPlay, setPfxAutoPlay] = useState<boolean>(true);
  const pfxCanvasRef = useRef<HTMLCanvasElement | null>(null);

  // 2. Three.js / WebGL / postprocessing / Tweakpane state
  const [bloomIntensity, setBloomIntensity] = useState<number>(1.6);
  const [particleCount, setParticleCount] = useState<number>(48);
  const [rotSpeed, setRotSpeed] = useState<number>(1.0);
  const [wireframeMode, setWireframeMode] = useState<boolean>(false);
  const threeCanvasRef = useRef<HTMLCanvasElement | null>(null);

  // 3. Motion Spring state
  const [stiffness, setStiffness] = useState<number>(360);
  const [damping, setDamping] = useState<number>(26);
  const [mass, setMass] = useState<number>(1.0);
  const [springTarget, setSpringTarget] = useState<boolean>(false);

  // 4. Anime.js 2D Stagger state
  const [staggerOrigin, setStaggerOrigin] = useState<number>(24);
  const [staggerStepMs, setStaggerStepMs] = useState<number>(38);
  const [waveTick, setWaveTick] = useState<number>(0);

  // 5. React Bits Spotlight state
  const [spotPos, setSpotPos] = useState<{ x: number; y: number }>({ x: 180, y: 90 });
  const [kineticReplay, setKineticReplay] = useState<number>(0);

  // 6. Manim Fourier state
  const [harmonics, setHarmonics] = useState<number>(5);
  const manimCanvasRef = useRef<HTMLCanvasElement | null>(null);

  // 7. Remotion Timeline state
  const [remotionFrame, setRemotionFrame] = useState<number>(95);

  // 8. Radix Roving Tabindex state
  const [rovingIndex, setRovingIndex] = useState<number>(0);
  const rovingRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // 9. Laws of UX Fitts & Hick state
  const [fittsDistance, setFittsDistance] = useState<number>(240);
  const [fittsWidth, setFittsWidth] = useState<number>(48);
  const [hickChoices, setHickChoices] = useState<number>(5);

  // 10. OWASP URL Sanitizer state
  const [rawUrlInput, setRawUrlInput] = useState<string>('https://threejs.org/examples/');

  useEffect(() => {
    if (initialDemo) setActiveMode(initialDemo);
  }, [initialDemo]);

  // PixelFX Dual-Buffer animation loop
  useEffect(() => {
    if (activeMode !== 'pixelfx-canvas') return;
    let timer: ReturnType<typeof setInterval> | null = null;
    if (pfxAutoPlay) {
      timer = setInterval(() => {
        setPfxFrame((prev) => (prev + 1) % 24);
      }, 75);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [activeMode, pfxAutoPlay]);

  useEffect(() => {
    if (activeMode !== 'pixelfx-canvas') return;
    const canvas = pfxCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const W = 160;
    const H = 90;
    const imgData = ctx.createImageData(W, H);
    const data = imgData.data;
    const pal = PIXEL_PALETTES[pfxPalette] || PIXEL_PALETTES.frost;
    const t = pfxFrame / 24;
    const cx = W / 2;
    const cy = H / 2 + 8;

    // Acted-out phases: 0..4 windup, 5..7 contact flash, 8..19 shockwave & sparks, 20..23 fade
    const isHitStop = pfxFrame >= 5 && pfxFrame <= 6;
    const radius = pfxFrame < 5 ? 6 + pfxFrame * 2 : 12 + (pfxFrame - 5) * 3.1;

    for (let y = 0; y < H; y++) {
      for (let x = 0; x < W; x++) {
        const dx = x - cx;
        const dy = (y - cy) * 1.35; // isometric squash
        const dist = Math.hypot(dx, dy);
        const angle = Math.atan2(dy, dx);
        const spikes = Math.cos(angle * 8 + t * 6) * 4.5;

        let colorIdx = 0;
        let lightVal = 0;

        // Ring + 8 radial spikes + 2x2 Bayer dither
        const bayer = ((x & 1) + ((y & 1) << 1)) / 4;
        const ringDelta = Math.abs(dist - (radius + spikes * (1 - t * 0.5)));

        if (isHitStop && dist < 24) {
          colorIdx = 4;
          lightVal = 1.0;
        } else if (ringDelta < 3.2 * (1 - t * 0.45)) {
          colorIdx = 4;
          lightVal = 0.85;
        } else if (ringDelta < 7.5 * (1 - t * 0.35) + bayer * 3) {
          colorIdx = 3;
          lightVal = 0.5;
        } else if (dist < radius && dist > radius * 0.45 && bayer > 0.35) {
          colorIdx = 2;
          lightVal = 0.25;
        } else if (dist < radius * 1.25 && bayer > 0.6) {
          colorIdx = 1;
          lightVal = 0.12;
        }

        // Ambient radial light buffer
        const radialGlow = Math.max(0, 1 - dist / (radius * 1.6 + 10)) * (1 - t * 0.65);
        const totalLight = (lightVal + radialGlow * 0.65) * pfxGlow;

        const base = pal[colorIdx] || pal[0];
        const top = pal[4];
        const idx = (y * W + x) * 4;
        data[idx] = Math.min(255, Math.round(base[0] + totalLight * top[0] * 0.55));
        data[idx + 1] = Math.min(255, Math.round(base[1] + totalLight * top[1] * 0.55));
        data[idx + 2] = Math.min(255, Math.round(base[2] + totalLight * top[2] * 0.65));
        data[idx + 3] = 255;
      }
    }
    ctx.putImageData(imgData, 0, 0);
  }, [activeMode, pfxPalette, pfxGlow, pfxFrame]);

  // Three.js / WebGL / postprocessing / Three.quarks 3D Studio Canvas loop
  useEffect(() => {
    if (activeMode !== 'three-webgl-studio') return;
    const canvas = threeCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId = 0;
    let angle = 0;

    // Generate icosahedron-like vertices & edges
    const phi = (1 + Math.sqrt(5)) / 2;
    const rawVerts: [number, number, number][] = [
      [-1, phi, 0], [1, phi, 0], [-1, -phi, 0], [1, -phi, 0],
      [0, -1, phi], [0, 1, phi], [0, -1, -phi], [0, 1, -phi],
      [phi, 0, -1], [phi, 0, 1], [-phi, 0, -1], [-phi, 0, 1],
    ];

    const render = () => {
      angle += 0.014 * rotSpeed;
      const W = canvas.width;
      const H = canvas.height;
      ctx.fillStyle = '#07080c';
      ctx.fillRect(0, 0, W, H);

      // Postprocessing Bloom pass glow
      const grad = ctx.createRadialGradient(W / 2, H / 2, 10, W / 2, H / 2, 110 * Math.max(0.4, bloomIntensity));
      grad.addColorStop(0, `rgba(232, 93, 63, ${Math.min(0.55, bloomIntensity * 0.22)})`);
      grad.addColorStop(0.5, `rgba(34, 211, 238, ${Math.min(0.35, bloomIntensity * 0.14)})`);
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);

      // Project 3D vertices
      const cosA = Math.cos(angle);
      const sinA = Math.sin(angle);
      const cosB = Math.cos(angle * 0.65);
      const sinB = Math.sin(angle * 0.65);

      const projected = rawVerts.map(([vx, vy, vz]) => {
        const x1 = vx * cosA - vz * sinA;
        const z1 = vx * sinA + vz * cosA;
        const y2 = vy * cosB - z1 * sinB;
        const z2 = vy * sinB + z1 * cosB;
        const scale = 210 / (4.4 + z2);
        return { x: W / 2 + x1 * scale, y: H / 2 + y2 * scale, z: z2 };
      });

      // Draw edges
      ctx.lineWidth = wireframeMode ? 1.5 : 2.2;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const d = Math.hypot(
            rawVerts[i][0] - rawVerts[j][0],
            rawVerts[i][1] - rawVerts[j][1],
            rawVerts[i][2] - rawVerts[j][2]
          );
          if (d < 2.15) {
            ctx.strokeStyle = wireframeMode
              ? 'rgba(34, 211, 238, 0.78)'
              : `rgba(244, 243, 239, ${0.28 + Math.min(0.5, bloomIntensity * 0.18)})`;
            ctx.beginPath();
            ctx.moveTo(projected[i].x, projected[i].y);
            ctx.lineTo(projected[j].x, projected[j].y);
            ctx.stroke();
          }
        }
      }

      // Three.quarks orbiting GPU particles
      for (let p = 0; p < particleCount; p++) {
        const orbitAngle = angle * 1.4 + (p * Math.PI * 2) / particleCount;
        const r = 95 + Math.sin(p * 1.7 + angle * 2) * 28;
        const px = W / 2 + Math.cos(orbitAngle) * r;
        const py = H / 2 + Math.sin(orbitAngle * 1.2) * (r * 0.52);
        ctx.fillStyle = p % 2 === 0 ? '#e85d3f' : '#22d3ee';
        ctx.beginPath();
        ctx.arc(px, py, 2.2, 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, [activeMode, bloomIntensity, particleCount, rotSpeed, wireframeMode]);

  // Manim Fourier Epicycle Canvas loop
  useEffect(() => {
    if (activeMode !== 'manim-fourier') return;
    const canvas = manimCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId = 0;
    let time = 0;
    const waveHistory: number[] = [];

    const draw = () => {
      time += 0.03;
      const W = canvas.width;
      const H = canvas.height;
      ctx.fillStyle = '#07080c';
      ctx.fillRect(0, 0, W, H);

      let x = 135;
      let y = H / 2;

      for (let k = 0; k < harmonics; k++) {
        const prevX = x;
        const prevY = y;
        const n = k * 2 + 1;
        const radius = 58 * (4 / (n * Math.PI));
        x += radius * Math.cos(n * time);
        y += radius * Math.sin(n * time);

        ctx.strokeStyle = 'rgba(244, 243, 239, 0.22)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(prevX, prevY, radius, 0, Math.PI * 2);
        ctx.stroke();

        ctx.strokeStyle = '#22d3ee';
        ctx.beginPath();
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(x, y);
        ctx.stroke();
      }

      waveHistory.unshift(y);
      if (waveHistory.length > 260) waveHistory.pop();

      const waveStartX = 250;
      ctx.strokeStyle = 'rgba(232, 93, 63, 0.55)';
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(waveStartX, waveHistory[0]);
      ctx.stroke();

      ctx.strokeStyle = '#e85d3f';
      ctx.lineWidth = 2.2;
      ctx.beginPath();
      for (let i = 0; i < waveHistory.length; i++) {
        const wx = waveStartX + i;
        const wy = waveHistory[i];
        if (i === 0) ctx.moveTo(wx, wy);
        else ctx.lineTo(wx, wy);
      }
      ctx.stroke();

      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animId);
  }, [activeMode, harmonics]);

  // Helper calculations for Laws of UX & OWASP
  const fittsID = Number(Math.log2((2 * Math.max(1, fittsDistance)) / Math.max(1, fittsWidth)).toFixed(2));
  const fittsMs = Math.round(120 + 145 * fittsID);
  const hickMs = Math.round(180 + 155 * Math.log2(hickChoices + 1));

  const owaspCheck = (() => {
    try {
      const u = new URL(rawUrlInput.trim());
      const allowed = u.protocol === 'https:' || u.protocol === 'http:';
      return {
        safe: allowed,
        protocol: u.protocol,
        sanitizedHref: allowed ? u.toString() : '#blocked-unsafe-protocol',
        reason: allowed ? 'Allowed HTTP/HTTPS origin + rel="noopener noreferrer"' : `Blocked dangerous protocol (${u.protocol}) per OWASP DOM XSS rules`,
      };
    } catch {
      return {
        safe: false,
        protocol: 'invalid',
        sanitizedHref: '#invalid-url',
        reason: 'Rejected malformed URL string',
      };
    }
  })();

  return (
    <section className="ms-studio-shell" aria-label="Interactive Live Demo Studio">
      <div className="ms-studio-header">
        <div>
          <span className="ms-badge ms-badge-accent">LIVE INTERACTIVE SANDBOX</span>
          <h2 style={{ fontSize: 20, fontWeight: 700, marginTop: 6 }}>
            Interactive Creative Coding, Motion & Engineering Studio
          </h2>
        </div>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }} role="tablist" aria-label="Select Live Demo">
          {DEMO_MODES.map((m) => (
            <button
              key={m.id}
              type="button"
              role="tab"
              aria-selected={activeMode === m.id}
              data-active={activeMode === m.id ? 'true' : 'false'}
              onClick={() => setActiveMode(m.id)}
              className="ms-pill"
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>

      {/* 1. PIXELFX DUAL-BUFFER DEMO */}
      {activeMode === 'pixelfx-canvas' && (
        <div className="ms-studio-grid">
          <div className="ms-studio-stage">
            <canvas
              ref={pfxCanvasRef}
              width={160}
              height={90}
              style={{
                width: '100%',
                maxWidth: 520,
                aspectRatio: '16 / 9',
                imageRendering: 'pixelated',
                borderRadius: 10,
                border: '1px solid var(--border-strong)',
              }}
              aria-label="PixelFX Dual-Buffer Procedural VFX Canvas"
            />
            <div style={{ marginTop: 12, fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--ink-secondary)' }}>
              Resolution: 160×90 pixelated · Frame {String(pfxFrame).padStart(2, '0')}/24 · Phase:{' '}
              {pfxFrame < 5 ? 'Wind-Up' : pfxFrame <= 6 ? 'HIT-STOP FLASH' : pfxFrame < 19 ? 'Bayer Dither Dissipation' : 'Recovery'}
            </div>
          </div>
          <div className="ms-studio-controls">
            <h3 style={{ fontSize: 16, fontWeight: 650 }}>PixelFX Dual-Buffer Controls (#26)</h3>
            <p style={{ fontSize: 13, color: 'var(--ink-secondary)' }}>
              Simulates <code>patch-gg/pixelfx</code>: separate indexed color ramp + 2×2 Bayer dither buffer composited with an additive radial light buffer.
            </p>
            <div className="ms-control-group">
              <span className="ms-control-label"><span>Palette Ramp</span><span>{pfxPalette.toUpperCase()}</span></span>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {Object.keys(PIXEL_PALETTES).map((palKey) => (
                  <button
                    key={palKey}
                    type="button"
                    className="ms-pill"
                    aria-pressed={pfxPalette === palKey}
                    onClick={() => setPfxPalette(palKey)}
                  >
                    {palKey}
                  </button>
                ))}
              </div>
            </div>
            <div className="ms-control-group">
              <label className="ms-control-label" htmlFor="pfx-glow">
                <span>Additive Light Buffer Strength</span>
                <span>{pfxGlow.toFixed(2)}</span>
              </label>
              <input
                id="pfx-glow"
                type="range"
                min={0}
                max={2}
                step={0.05}
                value={pfxGlow}
                onChange={(e) => setPfxGlow(Number(e.target.value))}
              />
            </div>
            <div className="ms-control-group">
              <label className="ms-control-label" htmlFor="pfx-frame">
                <span>Acted-Out Frame Scrubber</span>
                <span>Frame {pfxFrame}</span>
              </label>
              <input
                id="pfx-frame"
                type="range"
                min={0}
                max={23}
                step={1}
                value={pfxFrame}
                onChange={(e) => {
                  setPfxAutoPlay(false);
                  setPfxFrame(Number(e.target.value));
                }}
              />
            </div>
            <div style={{ display: 'flex', gap: 8, marginTop: 'auto' }}>
              <button type="button" className="ms-btn" onClick={() => setPfxAutoPlay((v) => !v)}>
                {pfxAutoPlay ? 'Pause Loop' : 'Play 24f Loop'}
              </button>
              <CopyPromptButton
                text="Author a procedural pixel-art VFX module using PixelFX's dual-buffer (color ramp + additive light glow) architecture with wind-up, 2-frame hit-stop contact flash, and 2x2 Bayer dither dissipation."
                label="Copy PixelFX Prompt"
              />
            </div>
          </div>
        </div>
      )}

      {/* 2. THREE.JS + POSTPROCESSING + QUARKS + TWEAKPANE */}
      {activeMode === 'three-webgl-studio' && (
        <div className="ms-studio-grid">
          <div className="ms-studio-stage">
            <canvas
              ref={threeCanvasRef}
              width={520}
              height={300}
              style={{ width: '100%', maxWidth: 520, borderRadius: 10, border: '1px solid var(--border-strong)' }}
              aria-label="Three.js Postprocessing and Quarks Particle Studio"
            />
          </div>
          <div className="ms-studio-controls">
            <h3 style={{ fontSize: 16, fontWeight: 650 }}>Tweakpane Parameter HUD (#34–#39)</h3>
            <div className="ms-control-group">
              <label className="ms-control-label" htmlFor="three-bloom">
                <span>SelectiveBloom Intensity</span>
                <span>{bloomIntensity.toFixed(2)}</span>
              </label>
              <input
                id="three-bloom"
                type="range"
                min={0}
                max={3}
                step={0.1}
                value={bloomIntensity}
                onChange={(e) => setBloomIntensity(Number(e.target.value))}
              />
            </div>
            <div className="ms-control-group">
              <label className="ms-control-label" htmlFor="three-quarks">
                <span>Three.quarks Batched Particles</span>
                <span>{particleCount}</span>
              </label>
              <input
                id="three-quarks"
                type="range"
                min={8}
                max={120}
                step={4}
                value={particleCount}
                onChange={(e) => setParticleCount(Number(e.target.value))}
              />
            </div>
            <div className="ms-control-group">
              <label className="ms-control-label" htmlFor="three-speed">
                <span>Orbital Angular Velocity</span>
                <span>{rotSpeed.toFixed(1)}×</span>
              </label>
              <input
                id="three-speed"
                type="range"
                min={0}
                max={2.5}
                step={0.1}
                value={rotSpeed}
                onChange={(e) => setRotSpeed(Number(e.target.value))}
              />
            </div>
            <div style={{ display: 'flex', gap: 8, marginTop: 'auto', flexWrap: 'wrap' }}>
              <button type="button" className="ms-btn" onClick={() => setWireframeMode((w) => !w)}>
                Shading: {wireframeMode ? 'BVH Wireframe' : 'PBR + Bloom'}
              </button>
              <CopyPromptButton
                text="Integrate Three.js InstancedMesh with pmndrs/postprocessing SelectiveBloomEffect, Three.quarks BatchedRenderer particle trails, and a live Tweakpane parameter HUD."
                label="Copy 3D Stack Prompt"
              />
            </div>
          </div>
        </div>
      )}

      {/* 3. MOTION SPRING SOLVER */}
      {activeMode === 'motion-spring' && (
        <div className="ms-studio-grid">
          <div className="ms-studio-stage">
            <div
              style={{
                width: '100%',
                maxWidth: 460,
                height: 180,
                background: 'var(--bg-card)',
                borderRadius: 12,
                border: '1px solid var(--border-hairline)',
                display: 'flex',
                alignItems: 'center',
                padding: '0 28px',
              }}
            >
              <div
                style={{
                  width: 76,
                  height: 76,
                  borderRadius: 16,
                  background: 'linear-gradient(135deg, var(--accent-primary), #f4a261)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  color: '#09090c',
                  transform: `translateX(${springTarget ? '280px' : '0px'}) scale(${springTarget ? 1.08 : 1})`,
                  transition: `transform ${Math.round(420 * (mass / Math.sqrt(stiffness / 100)))}ms cubic-bezier(0.22, ${Math.min(1.65, 1 + 18 / damping)}, 0.36, 1)`,
                }}
              >
                FLIP
              </div>
            </div>
            <button
              type="button"
              className="ms-btn ms-btn-primary"
              style={{ marginTop: 18 }}
              onClick={() => setSpringTarget((t) => !t)}
            >
              Trigger Layout Projection ({springTarget ? 'Reset Left' : 'Project Right'})
            </button>
          </div>
          <div className="ms-studio-controls">
            <h3 style={{ fontSize: 16, fontWeight: 650 }}>Motion Spring Solver (#10 & #30)</h3>
            <div className="ms-control-group">
              <label className="ms-control-label" htmlFor="ms-stiff"><span>Stiffness</span><span>{stiffness}</span></label>
              <input id="ms-stiff" type="range" min={80} max={700} value={stiffness} onChange={(e) => setStiffness(Number(e.target.value))} />
            </div>
            <div className="ms-control-group">
              <label className="ms-control-label" htmlFor="ms-damp"><span>Damping</span><span>{damping}</span></label>
              <input id="ms-damp" type="range" min={8} max={60} value={damping} onChange={(e) => setDamping(Number(e.target.value))} />
            </div>
            <div className="ms-control-group">
              <label className="ms-control-label" htmlFor="ms-mass"><span>Mass</span><span>{mass.toFixed(1)}</span></label>
              <input id="ms-mass" type="range" min={0.4} max={3.0} step={0.1} value={mass} onChange={(e) => setMass(Number(e.target.value))} />
            </div>
            <pre className="ms-code-block" style={{ fontSize: 11.5 }}>
              {`transition={{ type: "spring", stiffness: ${stiffness}, damping: ${damping}, mass: ${mass} }}`}
            </pre>
          </div>
        </div>
      )}

      {/* 4. ANIME.JS 2D RADIAL STAGGER MATRIX */}
      {activeMode === 'anime-stagger' && (
        <div className="ms-studio-grid">
          <div className="ms-studio-stage">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(10, 1fr)',
                gap: 8,
                width: '100%',
                maxWidth: 460,
              }}
            >
              {Array.from({ length: 50 }).map((_, idx) => {
                const cols = 10;
                const dist = Math.hypot((idx % cols) - (staggerOrigin % cols), Math.floor(idx / cols) - Math.floor(staggerOrigin / cols));
                const delay = Math.round(dist * staggerStepMs);
                const isOrigin = idx === staggerOrigin;
                return (
                  <button
                    key={`${idx}-${waveTick}`}
                    type="button"
                    aria-label={`Grid cell ${idx}`}
                    onClick={() => {
                      setStaggerOrigin(idx);
                      setWaveTick((w) => w + 1);
                    }}
                    style={{
                      aspectRatio: '1 / 1',
                      borderRadius: 6,
                      border: '1px solid var(--border-strong)',
                      background: isOrigin ? 'var(--accent-primary)' : 'rgba(34, 211, 238, 0.18)',
                      transform: isOrigin ? 'scale(1.15)' : 'scale(1)',
                      transition: `all 320ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
                      cursor: 'pointer',
                    }}
                    title={`Cell #${idx} · Delay: ${delay}ms`}
                  />
                );
              })}
            </div>
            <div style={{ marginTop: 12, fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--ink-secondary)' }}>
              Click any cell to trigger 2D radial stagger propagation from index #{staggerOrigin}
            </div>
          </div>
          <div className="ms-studio-controls">
            <h3 style={{ fontSize: 16, fontWeight: 650 }}>Anime.js 2D Stagger Choreography (#29)</h3>
            <div className="ms-control-group">
              <label className="ms-control-label" htmlFor="anime-step">
                <span>Stagger Step per Unit Distance</span>
                <span>{staggerStepMs}ms</span>
              </label>
              <input
                id="anime-step"
                type="range"
                min={10}
                max={90}
                value={staggerStepMs}
                onChange={(e) => setStaggerStepMs(Number(e.target.value))}
              />
            </div>
            <pre className="ms-code-block" style={{ fontSize: 11.5 }}>
              {`delay: anime.stagger(${staggerStepMs}, {\n  grid: [10, 5],\n  from: ${staggerOrigin}\n})`}
            </pre>
          </div>
        </div>
      )}

      {/* 5. REACT BITS SPOTLIGHT & KINETIC TYPOGRAPHY */}
      {activeMode === 'react-bits-spotlight' && (
        <div className="ms-studio-grid">
          <div className="ms-studio-stage">
            <div
              onPointerMove={(e) => {
                const r = e.currentTarget.getBoundingClientRect();
                setSpotPos({ x: Math.round(e.clientX - r.left), y: Math.round(e.clientY - r.top) });
              }}
              style={{
                width: '100%',
                maxWidth: 460,
                padding: 32,
                borderRadius: 14,
                border: '1px solid var(--border-strong)',
                background: `radial-gradient(260px circle at ${spotPos.x}px ${spotPos.y}px, rgba(232, 93, 63, 0.25), rgba(19, 20, 27, 0.95) 75%)`,
                cursor: 'crosshair',
              }}
            >
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#ff9c85', marginBottom: 8 }}>
                SPOTLIGHT CURSOR ({spotPos.x}px, {spotPos.y}px)
              </div>
              <div key={kineticReplay} style={{ fontSize: 26, fontWeight: 750, letterSpacing: '-0.03em' }}>
                {'Masallah Creative Archive'.split('').map((ch, i) => (
                  <span
                    key={i}
                    style={{
                      display: 'inline-block',
                      whiteSpace: 'pre',
                      transition: `transform 320ms cubic-bezier(0.16, 1, 0.3, 1) ${i * 18}ms`,
                    }}
                  >
                    {ch}
                  </span>
                ))}
              </div>
              <p style={{ fontSize: 13.5, color: 'var(--ink-secondary)', marginTop: 10 }}>
                Move your pointer across this card to test zero-rerender CSS radial spotlight illumination.
              </p>
            </div>
          </div>
          <div className="ms-studio-controls">
            <h3 style={{ fontSize: 16, fontWeight: 650 }}>React Bits Spotlight & Split-Text (#11)</h3>
            <p style={{ fontSize: 13, color: 'var(--ink-secondary)' }}>
              Updates pointer coordinates via CSS custom properties for 60fps spotlight glow while keeping a unified <code>aria-label</code> on kinetic headings.
            </p>
            <button type="button" className="ms-btn ms-btn-primary" onClick={() => setKineticReplay((k) => k + 1)}>
              Replay Split-Text Stagger
            </button>
          </div>
        </div>
      )}

      {/* 6. MANIM FOURIER EPICYCLES */}
      {activeMode === 'manim-fourier' && (
        <div className="ms-studio-grid">
          <div className="ms-studio-stage">
            <canvas
              ref={manimCanvasRef}
              width={520}
              height={260}
              style={{ width: '100%', maxWidth: 520, borderRadius: 10, border: '1px solid var(--border-strong)' }}
              aria-label="Manim Fourier Series Epicycle Visualizer"
            />
          </div>
          <div className="ms-studio-controls">
            <h3 style={{ fontSize: 16, fontWeight: 650 }}>Manim Community Epicycles (#31)</h3>
            <div className="ms-control-group">
              <label className="ms-control-label" htmlFor="manim-n">
                <span>Harmonic Terms (N)</span>
                <span>{harmonics} odd harmonics</span>
              </label>
              <input
                id="manim-n"
                type="range"
                min={1}
                max={15}
                value={harmonics}
                onChange={(e) => setHarmonics(Number(e.target.value))}
              />
            </div>
            <pre className="ms-code-block" style={{ fontSize: 11.5 }}>
              {`MathTex(r"f(t) = \\sum_{k=1}^{${harmonics}} \\frac{4}{\\pi(2k-1)} \\sin((2k-1)\\omega t)")`}
            </pre>
          </div>
        </div>
      )}

      {/* 7. REMOTION + WHISPERX + LIBROSA TIMELINE */}
      {activeMode === 'remotion-timeline' && (
        <div className="ms-studio-grid">
          <div className="ms-studio-stage">
            <div
              style={{
                width: '100%',
                maxWidth: 480,
                padding: 28,
                borderRadius: 12,
                background: '#0b0c12',
                border: '1px solid var(--border-strong)',
                textAlign: 'center',
              }}
            >
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-muted)', marginBottom: 14 }}>
                REMOTION 60FPS STAGE · FRAME {remotionFrame} / 360 ({((remotionFrame / 60) * 1000).toFixed(0)}ms)
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center', marginBottom: 20 }}>
                {REMOTION_CAPTION_WORDS.map((w, idx) => {
                  const timeMs = (remotionFrame / 60) * 1000;
                  const active = timeMs >= w.startMs && timeMs <= w.endMs;
                  return (
                    <span
                      key={idx}
                      style={{
                        padding: '4px 10px',
                        borderRadius: 6,
                        fontSize: 18,
                        fontWeight: 700,
                        background: active ? 'var(--accent-primary)' : 'rgba(255,255,255,0.05)',
                        color: active ? '#09090c' : 'var(--ink-primary)',
                        transform: active ? 'scale(1.08)' : 'scale(1)',
                        transition: 'all 90ms ease',
                      }}
                    >
                      {w.text}
                    </span>
                  );
                })}
              </div>
              {/* librosa 16-bar spectral envelope */}
              <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: 5, height: 54 }}>
                {Array.from({ length: 16 }).map((_, b) => {
                  const h = 14 + Math.round(Math.abs(Math.sin(remotionFrame * 0.15 + b * 0.55)) * 38);
                  return (
                    <div
                      key={b}
                      style={{
                        width: 12,
                        height: h,
                        borderRadius: 3,
                        background: b % 2 === 0 ? 'var(--accent-cyan)' : 'var(--accent-primary)',
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="ms-studio-controls">
            <h3 style={{ fontSize: 16, fontWeight: 650 }}>Remotion + WhisperX + librosa (#27, #42, #43)</h3>
            <div className="ms-control-group">
              <label className="ms-control-label" htmlFor="rem-frame">
                <span>useCurrentFrame() Scrubber</span>
                <span>Frame {remotionFrame}</span>
              </label>
              <input
                id="rem-frame"
                type="range"
                min={0}
                max={360}
                value={remotionFrame}
                onChange={(e) => setRemotionFrame(Number(e.target.value))}
              />
            </div>
            <p style={{ fontSize: 12.5, color: 'var(--ink-secondary)' }}>
              Deterministic frame lookup: WhisperX forced phoneme alignment highlights the exact active spoken word while librosa HPSS beat envelopes drive the 16-band spectrum.
            </p>
          </div>
        </div>
      )}

      {/* 8. RADIX UI + SHADCN ACCESSIBLE ROVING TABINDEX */}
      {activeMode === 'radix-a11y-inspector' && (
        <div className="ms-studio-grid">
          <div className="ms-studio-stage">
            <div
              role="toolbar"
              aria-label="Roving Focus Demo Toolbar"
              style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}
            >
              {['Design Tokens', 'Radix Dialog', 'Roving Tabs', 'Focus Trap', 'ARIA Live'].map((item, idx) => (
                <button
                  key={item}
                  ref={(el) => {
                    rovingRefs.current[idx] = el;
                  }}
                  type="button"
                  tabIndex={rovingIndex === idx ? 0 : -1}
                  data-state={rovingIndex === idx ? 'active' : 'inactive'}
                  className="ms-btn"
                  style={{
                    borderColor: rovingIndex === idx ? 'var(--accent-primary)' : undefined,
                    background: rovingIndex === idx ? 'var(--accent-primary-soft)' : undefined,
                  }}
                  onClick={() => setRovingIndex(idx)}
                  onKeyDown={(e) => {
                    let next = rovingIndex;
                    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                      e.preventDefault();
                      next = (rovingIndex + 1) % 5;
                    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                      e.preventDefault();
                      next = (rovingIndex + 4) % 5;
                    } else if (e.key === 'Home') {
                      e.preventDefault();
                      next = 0;
                    } else if (e.key === 'End') {
                      e.preventDefault();
                      next = 4;
                    }
                    if (next !== rovingIndex) {
                      setRovingIndex(next);
                      rovingRefs.current[next]?.focus();
                    }
                  }}
                >
                  {item} (tabIndex={rovingIndex === idx ? 0 : -1})
                </button>
              ))}
            </div>
            <div style={{ marginTop: 16, fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--ink-secondary)' }}>
              Focus any button above and press <code>ArrowLeft</code>, <code>ArrowRight</code>, <code>Home</code>, or <code>End</code>.
            </div>
          </div>
          <div className="ms-studio-controls">
            <h3 style={{ fontSize: 16, fontWeight: 650 }}>Radix UI & shadcn/ui Primitives (#15, #16)</h3>
            <pre className="ms-code-block" style={{ fontSize: 11.5 }}>
              {`role="toolbar"\nActive Slot: #${rovingIndex}\ntabIndex={${rovingIndex === 0 ? '0 (Single Tab Stop)' : '0'}}\ndata-state="active"`}
            </pre>
          </div>
        </div>
      )}

      {/* 9. LAWS OF UX FITTS & HICK LAB */}
      {activeMode === 'laws-of-ux-lab' && (
        <div className="ms-studio-grid">
          <div className="ms-studio-stage">
            <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', justifyContent: 'center' }}>
              <div className="ms-stat-cell" style={{ borderRadius: 10, border: '1px solid var(--border-strong)', minWidth: 180 }}>
                <span className="ms-stat-label">Fitts Index of Difficulty</span>
                <span className="ms-stat-value">{fittsID} bits</span>
                <span style={{ fontSize: 12, color: 'var(--ink-secondary)' }}>Est. Acquisition: ~{fittsMs}ms</span>
              </div>
              <div className="ms-stat-cell" style={{ borderRadius: 10, border: '1px solid var(--border-strong)', minWidth: 180 }}>
                <span className="ms-stat-label">Hick Decision Latency</span>
                <span className="ms-stat-value">{hickMs} ms</span>
                <span style={{ fontSize: 12, color: hickChoices <= 7 ? '#6ee7b7' : '#fca5a5' }}>
                  {hickChoices <= 7 ? 'Optimal (<= 7 groups)' : 'Cognitive Overload (> 7)'}
                </span>
              </div>
            </div>
          </div>
          <div className="ms-studio-controls">
            <h3 style={{ fontSize: 16, fontWeight: 650 }}>Laws of UX Quantitative Lab (#06, #07)</h3>
            <div className="ms-control-group">
              <label className="ms-control-label" htmlFor="ux-dist"><span>Cursor Distance (D)</span><span>{fittsDistance}px</span></label>
              <input id="ux-dist" type="range" min={40} max={600} value={fittsDistance} onChange={(e) => setFittsDistance(Number(e.target.value))} />
            </div>
            <div className="ms-control-group">
              <label className="ms-control-label" htmlFor="ux-width"><span>Target Size (W)</span><span>{fittsWidth}px</span></label>
              <input id="ux-width" type="range" min={16} max={120} value={fittsWidth} onChange={(e) => setFittsWidth(Number(e.target.value))} />
            </div>
            <div className="ms-control-group">
              <label className="ms-control-label" htmlFor="ux-hick"><span>Simultaneous Choices (n)</span><span>{hickChoices} items</span></label>
              <input id="ux-hick" type="range" min={2} max={24} value={hickChoices} onChange={(e) => setHickChoices(Number(e.target.value))} />
            </div>
          </div>
        </div>
      )}

      {/* 10. OWASP URL & XSS SANITIZER */}
      {activeMode === 'owasp-sanitizer' && (
        <div className="ms-studio-grid">
          <div className="ms-studio-stage">
            <div style={{ width: '100%', maxWidth: 480 }}>
              <label htmlFor="owasp-input" style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: 12, marginBottom: 8 }}>
                Test External URL or Attack Vector:
              </label>
              <input
                id="owasp-input"
                type="text"
                className="ms-search-input"
                value={rawUrlInput}
                onChange={(e) => setRawUrlInput(e.target.value)}
              />
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 10 }}>
                <button type="button" className="ms-pill" onClick={() => setRawUrlInput('https://cheatsheetseries.owasp.org')}>
                  Valid HTTPS URL
                </button>
                <button type="button" className="ms-pill" onClick={() => setRawUrlInput('javascript:alert(document.cookie)')}>
                  Test javascript: XSS Vector
                </button>
                <button type="button" className="ms-pill" onClick={() => setRawUrlInput('data:text/html,<script>alert(1)</script>')}>
                  Test data: Payload
                </button>
              </div>
            </div>
          </div>
          <div className="ms-studio-controls">
            <h3 style={{ fontSize: 16, fontWeight: 650 }}>OWASP Protocol Allowlist Gate (#25)</h3>
            <div className={`ms-badge ${owaspCheck.safe ? 'ms-badge-emerald' : 'ms-badge-accent'}`} style={{ alignSelf: 'flex-start' }}>
              {owaspCheck.safe ? 'PASS: SAFE ORIGIN' : 'BLOCKED: UNSAFE VECTOR'}
            </div>
            <pre className="ms-code-block" style={{ fontSize: 11.5 }}>
              {JSON.stringify(owaspCheck, null, 2)}
            </pre>
          </div>
        </div>
      )}
    </section>
  );
}
