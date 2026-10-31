import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { HeaderNav } from '@/components/HeaderNav';
import { CopyPromptButton } from '@/components/CopyPromptButton';
import { REPOS, sanitizeExternalHref } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Repository Catalog (Open-Source Creative & Engineering Engines)',
  description:
    'Curated GitHub repository catalog covering PixelFX, Remotion, Remotion Skills, Anime.js, Motion, Manim, Lottie, MCP for Blender, Three.js, Jolt Physics, postprocessing, ComfyUI, CosyVoice, librosa, WhisperX, OBS, LosslessCut, and FFmpeg.',
  alternates: {
    canonical: 'https://nazartesi.com/masallahpub/repos',
  },
};

export default function ReposPage() {
  return (
    <>
      <HeaderNav activePath="/repos" />
      <main id="main-content" className="ms-container" style={{ paddingBottom: 80 }}>
        <section className="ms-hero">
          <div className="ms-eyebrow">GITHUB REPOSITORY CATALOG · {REPOS.length} REPOSITORIES</div>
          <h1 className="ms-hero-title">
            Open-Source <em>Repository</em> &amp; Toolchain Index
          </h1>
          <p className="ms-hero-subtitle">
            Referenced cleanly without vendor bloat—featuring live GitHub stars, SPDX licenses, CLI installation commands, and original minimal usage snippets.
          </p>
        </section>

        <div className="ms-cards-grid" style={{ marginTop: 36 }}>
          {REPOS.map((repo) => (
            <article key={repo.id} className="ms-card" style={{ padding: 22 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8, marginBottom: 10 }}>
                <span className="ms-badge">{repo.language}</span>
                <div style={{ display: 'flex', gap: 6 }}>
                  {repo.stars > 0 && <span className="ms-badge ms-badge-emerald">★ {repo.stars.toLocaleString()}</span>}
                  <span className="ms-badge">{repo.license}</span>
                </div>
              </div>

              <h2 style={{ fontSize: 19, fontWeight: 700, marginBottom: 6 }}>
                <Link href={`/item/${repo.id}`}>{repo.displayName}</Link>
              </h2>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: '#ff9c85', marginBottom: 10 }}>
                {repo.name}
              </div>

              <p style={{ fontSize: 13.5, color: 'var(--ink-secondary)', marginBottom: 12 }}>{repo.description}</p>

              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-muted)', marginBottom: 4 }}>
                INSTALLATION
              </div>
              <pre className="ms-code-block" style={{ marginBottom: 12, padding: 10 }}>{repo.installation}</pre>

              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-muted)', marginBottom: 4 }}>
                MINIMAL USAGE PATTERN
              </div>
              <pre className="ms-code-block" style={{ maxHeight: 165, marginBottom: 14 }}>{repo.codeExample}</pre>

              <div className="ms-card-footer">
                <CopyPromptButton text={repo.installation} label="Copy Install" primary={false} />
                <div style={{ display: 'flex', gap: 6 }}>
                  <a
                    href={sanitizeExternalHref(repo.githubUrl)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ms-btn"
                  >
                    GitHub ↗
                  </a>
                  <Link href={`/item/${repo.id}`} className="ms-btn ms-btn-primary">
                    Details →
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
