import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { HeaderNav } from '@/components/HeaderNav';
import { LiveDemoStudio } from '@/components/LiveDemoStudio';
import { CopyPromptButton } from '@/components/CopyPromptButton';
import { EXAMPLES } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Interactive Live Demos (PixelFX, Three.js, Motion, Anime.js, Manim, Remotion)',
  description:
    '10 interactive live creative coding, motion, 3D WebGL, procedural pixel VFX, accessibility, and security sandboxes running directly in the browser.',
  alternates: {
    canonical: 'https://nazartesi.com/masallahpub/demos',
  },
};

export default function DemosPage() {
  const liveExamples = EXAMPLES.filter((e) => e.hasLiveDemo);

  return (
    <>
      <HeaderNav activePath="/demos" />
      <main id="main-content" className="ms-container" style={{ paddingBottom: 80 }}>
        <section className="ms-hero">
          <div className="ms-eyebrow">INTERACTIVE SANDBOXES · {liveExamples.length} LIVE DEMOS</div>
          <h1 className="ms-hero-title">
            Interactive <em>Live Demos</em> &amp; Code Recipes
          </h1>
          <p className="ms-hero-subtitle">
            Test real-time parameters across PixelFX dual-buffer canvas, Three.js + postprocessing + Three.quarks + Tweakpane, Motion spring physics, Anime.js 2D radial stagger, React Bits spotlight, Manim Fourier epicycles, Remotion caption sync, and Radix WAI-ARIA roving focus.
          </p>
        </section>

        <LiveDemoStudio initialDemo="pixelfx-canvas" />

        <div className="ms-cards-grid" style={{ marginTop: 36 }}>
          {liveExamples.map((ex) => (
            <article key={ex.id} className="ms-card" style={{ overflow: 'hidden' }}>
              <Link href={`/item/${ex.id}`} className="ms-card-preview" style={{ display: 'block', position: 'relative' }}>
                <img
                  src={`/masallahpub/screenshots/${ex.sourceId}.png`}
                  alt={ex.title}
                  loading="lazy"
                  width={640}
                  height={400}
                  style={{ objectFit: 'cover', objectPosition: 'top center', width: '100%', height: '100%' }}
                />
                <div style={{ position: 'absolute', top: 10, left: 10 }}>
                  <span className="ms-badge ms-badge-emerald" style={{ background: 'rgba(10,11,14,0.88)' }}>
                    ● Canlı Demo / Live Sandbox
                  </span>
                </div>
                <div style={{ position: 'absolute', top: 10, right: 10 }}>
                  <span className="ms-badge" style={{ background: 'rgba(10,11,14,0.88)' }}>{ex.category}</span>
                </div>
              </Link>
              <div style={{ padding: 20, display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h2 style={{ fontSize: 19, fontWeight: 700, marginBottom: 8 }}>
                  <Link href={`/item/${ex.id}`}>{ex.title}</Link>
                </h2>
                <p style={{ fontSize: 13.5, color: 'var(--ink-secondary)', marginBottom: 14 }}>{ex.description}</p>
                <pre className="ms-code-block" style={{ maxHeight: 170, marginBottom: 14 }}>{ex.codeSnippet}</pre>
                <div className="ms-card-footer">
                  <CopyPromptButton text={ex.codeSnippet} label="Kodu Kopyala" primary={false} />
                  <Link href={`/item/${ex.id}`} className="ms-btn ms-btn-primary">
                    Tam Ekran Aç →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}
