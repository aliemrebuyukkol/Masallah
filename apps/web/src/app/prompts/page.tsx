import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { HeaderNav } from '@/components/HeaderNav';
import { CopyPromptButton } from '@/components/CopyPromptButton';
import { PROMPTS, sanitizeExternalHref } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Prompt Library (Original & Masallah Optimized Prompts)',
  description:
    'Central catalog of 47 web design, UI/UX, motion, Remotion, Manim, Blender MCP, Three.js, WebGL, PixelFX, ComfyUI, CosyVoice, librosa, WhisperX, Testing, and OWASP security prompts.',
  alternates: {
    canonical: 'https://nazartesi.com/masallahpub/prompts',
  },
};

export default function PromptsPage() {
  return (
    <>
      <HeaderNav activePath="/prompts" />
      <main id="main-content" className="ms-container" style={{ paddingBottom: 80 }}>
        <section className="ms-hero">
          <div className="ms-eyebrow">PROMPT &amp; AGENT SKILL LIBRARY · {PROMPTS.length} PROMPTS</div>
          <h1 className="ms-hero-title">
            Original &amp; <em>Masallah Optimized</em> Prompt Catalog
          </h1>
          <p className="ms-hero-subtitle">
            Every prompt separates the Original Source Prompt from the Masallah Optimized Prompt—providing abstracted visual/architectural constraints, target models, and concrete input/output examples.
          </p>
        </section>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginTop: 36 }}>
          {PROMPTS.map((p, idx) => (
            <article key={p.id} className="ms-card" style={{ padding: 24 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 12 }}>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
                  <span className="ms-badge ms-badge-accent">PROMPT #{String(idx + 1).padStart(2, '0')}</span>
                  <span className="ms-badge">{p.category}</span>
                  <span className="ms-badge">Source: {p.source}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--ink-muted)' }}>
                    Model: {p.model}
                  </span>
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <CopyPromptButton text={p.optimizedPrompt} label="Copy Masallah Optimized Prompt" />
                  <CopyPromptButton text={p.originalPrompt} label="Copy Original" primary={false} />
                </div>
              </div>

              <h2 style={{ fontSize: 21, fontWeight: 700, marginBottom: 6 }}>
                <Link href={`/item/${p.id}`}>{p.title}</Link>
              </h2>
              <p style={{ fontSize: 14, color: 'var(--ink-secondary)', marginBottom: 16 }}>{p.description}</p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 16, marginBottom: 16 }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--ink-muted)', marginBottom: 6 }}>
                    ORIGINAL SOURCE PROMPT
                  </div>
                  <pre className="ms-code-block">{p.originalPrompt}</pre>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, color: '#ff9c85', marginBottom: 6 }}>
                    MASALLAH OPTIMIZED PROMPT
                  </div>
                  <pre className="ms-code-block">{p.optimizedPrompt}</pre>
                </div>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: 12,
                  padding: 14,
                  borderRadius: 8,
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border-hairline)',
                  fontSize: 13,
                }}
              >
                <div>
                  <strong style={{ color: 'var(--ink-primary)' }}>Example Input:</strong>{' '}
                  <span style={{ color: 'var(--ink-secondary)' }}>{p.exampleInput}</span>
                </div>
                <div>
                  <strong style={{ color: 'var(--ink-primary)' }}>Example Output:</strong>{' '}
                  <span style={{ color: 'var(--ink-secondary)' }}>{p.exampleOutput}</span>
                </div>
              </div>

              <div className="ms-card-footer" style={{ marginTop: 14 }}>
                <div className="ms-tag-list">
                  {p.tags.map((t) => (
                    <span key={t} className="ms-tag">#{t}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <a
                    href={sanitizeExternalHref(p.sourceUrl)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ms-btn"
                  >
                    Source URL ↗
                  </a>
                  <Link href={`/item/${p.id}`} className="ms-btn">
                    Full Detail →
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
