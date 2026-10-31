import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { HeaderNav } from '@/components/HeaderNav';
import { CopyPromptButton } from '@/components/CopyPromptButton';
import { LiveDemoStudio } from '@/components/LiveDemoStudio';
import { CATALOG, SOURCES, sanitizeExternalHref } from '@/lib/data';

export function generateStaticParams() {
  return CATALOG.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = CATALOG.find((c) => c.slug === slug);
  if (!item) {
    return { title: 'Item Not Found' };
  }
  return {
    title: `${item.title} (${item.sourceName})`,
    description: item.description,
    alternates: {
      canonical: `https://nazartesi.com/masallahpub/item/${item.slug}`,
    },
  };
}

export default async function CatalogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = CATALOG.find((c) => c.slug === slug);
  if (!item) notFound();

  const sourceObj = SOURCES.find((s) => s.id === item.sourceId);
  const relatedItems = CATALOG.filter(
    (c) => c.id !== item.id && (c.sourceId === item.sourceId || c.category === item.category)
  ).slice(0, 6);

  return (
    <>
      <HeaderNav />
      <main id="main-content" className="ms-container" style={{ paddingTop: 32, paddingBottom: 80 }}>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--ink-muted)', marginBottom: 20 }}>
          <Link href="/" style={{ textDecoration: 'underline' }}>Masallah Archive</Link>
          <span> / </span>
          <Link href={`/?section=${encodeURIComponent(item.category)}`} style={{ textDecoration: 'underline' }}>{item.category}</Link>
          <span> / </span>
          <span style={{ color: 'var(--ink-primary)' }}>{item.title}</span>
        </nav>

        {/* Top Preview & Metadata Header */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: 28,
            alignItems: 'start',
            marginBottom: 36,
          }}
        >
          <div className="ms-card" style={{ overflow: 'hidden' }}>
            <div className="ms-card-preview">
              <img src={item.previewSvg} alt={item.title} width={800} height={500} />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <span className="ms-badge ms-badge-accent">{item.kind.toUpperCase()}</span>
              <span className="ms-badge">{item.category}</span>
              <span className="ms-badge">License: {item.license}</span>
              {typeof item.stars === 'number' && item.stars > 0 && (
                <span className="ms-badge ms-badge-emerald">★ {item.stars.toLocaleString()} Stars</span>
              )}
            </div>

            <h1 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 750, lineHeight: 1.15, letterSpacing: '-0.03em' }}>
              {item.title}
            </h1>

            <p style={{ fontSize: 15.5, color: 'var(--ink-secondary)' }}>{item.description}</p>

            {/* Technologies & Tags */}
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-muted)', marginBottom: 6 }}>
                TECHNOLOGIES &amp; TAXONOMY
              </div>
              <div className="ms-tag-list">
                {item.technologies.map((tech) => (
                  <span key={tech} className="ms-tag" style={{ color: '#ff9c85' }}>{tech}</span>
                ))}
                {item.tags.map((tag) => (
                  <span key={tag} className="ms-tag">#{tag}</span>
                ))}
              </div>
            </div>

            {/* Source Attribution & Links */}
            <div
              style={{
                padding: 16,
                borderRadius: 10,
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border-hairline)',
                fontSize: 13,
              }}
            >
              <div style={{ fontWeight: 700, marginBottom: 4 }}>
                Source Attribution: {item.sourceName} {sourceObj ? `(Source #${String(sourceObj.num).padStart(2, '0')})` : ''}
              </div>
              <div style={{ color: 'var(--ink-secondary)', marginBottom: 12 }}>
                Author / Maintainer: {item.author} · License: {item.license}
              </div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {item.sourceUrl && (
                  <a
                    href={sanitizeExternalHref(item.sourceUrl)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ms-btn ms-btn-primary"
                  >
                    Open Canonical Source ↗
                  </a>
                )}
                {item.repositoryUrl && (
                  <a
                    href={sanitizeExternalHref(item.repositoryUrl)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ms-btn"
                  >
                    GitHub Repository ↗
                  </a>
                )}
                {item.demoUrl && item.demoUrl !== item.sourceUrl && (
                  <a
                    href={sanitizeExternalHref(item.demoUrl)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ms-btn"
                  >
                    Official Demo ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Live Demo if available */}
        {item.hasDemo && item.demoType && item.demoType !== 'workflow-visualizer' && (
          <LiveDemoStudio initialDemo={item.demoType} />
        )}

        {/* Visual Design Analysis if present */}
        {item.visualAnalysis && (
          <section className="ms-card" style={{ padding: 24, marginBottom: 28 }} aria-label="Visual Reference Analysis">
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 14 }}>
              Design Reference Visual Analysis ({item.visualAnalysis.reference})
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
              <div>
                <strong style={{ color: '#ff9c85', fontSize: 12, fontFamily: 'var(--font-mono)' }}>LAYOUT &amp; GRID</strong>
                <p style={{ fontSize: 13.5, color: 'var(--ink-secondary)', marginTop: 4 }}>{item.visualAnalysis.layout}</p>
              </div>
              <div>
                <strong style={{ color: '#ff9c85', fontSize: 12, fontFamily: 'var(--font-mono)' }}>TYPOGRAPHY</strong>
                <p style={{ fontSize: 13.5, color: 'var(--ink-secondary)', marginTop: 4 }}>{item.visualAnalysis.typography}</p>
              </div>
              <div>
                <strong style={{ color: '#ff9c85', fontSize: 12, fontFamily: 'var(--font-mono)' }}>COLOR SYSTEM</strong>
                <p style={{ fontSize: 13.5, color: 'var(--ink-secondary)', marginTop: 4 }}>{item.visualAnalysis.colors}</p>
              </div>
              <div>
                <strong style={{ color: '#ff9c85', fontSize: 12, fontFamily: 'var(--font-mono)' }}>SPACING &amp; MOTION</strong>
                <p style={{ fontSize: 13.5, color: 'var(--ink-secondary)', marginTop: 4 }}>
                  {item.visualAnalysis.spacing} — {item.visualAnalysis.motion}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Prompts Section (Original + Masallah Optimized) */}
        {(item.optimizedPrompt || item.originalPrompt) && (
          <section className="ms-card" style={{ padding: 24, marginBottom: 28 }} aria-label="Prompts">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12, marginBottom: 16 }}>
              <h2 style={{ fontSize: 20, fontWeight: 700 }}>Prompt Blueprint (Original &amp; Masallah Optimized)</h2>
              <div style={{ display: 'flex', gap: 8 }}>
                {item.optimizedPrompt && (
                  <CopyPromptButton text={item.optimizedPrompt} label="Copy Masallah Optimized Prompt" />
                )}
                {item.originalPrompt && (
                  <CopyPromptButton text={item.originalPrompt} label="Copy Original Prompt" primary={false} />
                )}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 18 }}>
              {item.originalPrompt && (
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--ink-muted)', marginBottom: 6 }}>
                    ORIGINAL PROMPT
                  </div>
                  <pre className="ms-code-block">{item.originalPrompt}</pre>
                </div>
              )}
              {item.optimizedPrompt && (
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, color: '#ff9c85', marginBottom: 6 }}>
                    MASALLAH OPTIMIZED PROMPT
                  </div>
                  <pre className="ms-code-block">{item.optimizedPrompt}</pre>
                </div>
              )}
            </div>

            {(item.exampleInput || item.exampleOutput) && (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: 14,
                  marginTop: 16,
                  padding: 14,
                  background: 'var(--bg-elevated)',
                  borderRadius: 8,
                  fontSize: 13.5,
                }}
              >
                {item.exampleInput && (
                  <div>
                    <strong>Example Input:</strong> <span style={{ color: 'var(--ink-secondary)' }}>{item.exampleInput}</span>
                  </div>
                )}
                {item.exampleOutput && (
                  <div>
                    <strong>Example Output:</strong> <span style={{ color: 'var(--ink-secondary)' }}>{item.exampleOutput}</span>
                  </div>
                )}
              </div>
            )}
          </section>
        )}

        {/* Code / Installation / Specification */}
        {item.codeSnippet && (
          <section className="ms-card" style={{ padding: 24, marginBottom: 28 }} aria-label="Code and Implementation">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <h2 style={{ fontSize: 20, fontWeight: 700 }}>Implementation Code &amp; Specification</h2>
              <CopyPromptButton text={item.codeSnippet} label="Copy Code" primary={false} />
            </div>
            {item.installation && (
              <pre className="ms-code-block" style={{ marginBottom: 12 }}>{`# Installation\n${item.installation}`}</pre>
            )}
            <pre className="ms-code-block">{item.codeSnippet}</pre>
          </section>
        )}

        {/* Related & Similar Entries */}
        <section style={{ marginTop: 44 }} aria-label="Related Entries">
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 16 }}>
            Related &amp; Similar Entries in {item.category}
          </h2>
          <div className="ms-cards-grid">
            {relatedItems.map((rel) => (
              <article key={rel.id} className="ms-card" style={{ padding: 18 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span className="ms-badge">{rel.kind.toUpperCase()}</span>
                  <span className="ms-badge">{rel.sourceName}</span>
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 6 }}>
                  <Link href={`/item/${rel.slug}`}>{rel.title}</Link>
                </h3>
                <p style={{ fontSize: 13, color: 'var(--ink-secondary)', marginBottom: 12 }}>{rel.description}</p>
                <Link href={`/item/${rel.slug}`} className="ms-btn" style={{ alignSelf: 'flex-start' }}>
                  Open Entry →
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
