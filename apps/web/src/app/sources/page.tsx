import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { HeaderNav } from '@/components/HeaderNav';
import { SOURCES, sanitizeExternalHref } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Source Explorer (46 Master Sources & Coverage Matrix)',
  description:
    'Explore all 46 master design, UI/UX, motion, component, architecture, testing, security, pixel VFX, 3D, and video toolchain sources in the Masallah registry.',
  alternates: {
    canonical: 'https://nazartesi.com/masallahpub/sources',
  },
};

export default function SourcesPage() {
  const sections = Array.from(new Set(SOURCES.map((s) => s.section)));

  return (
    <>
      <HeaderNav activePath="/sources" />
      <main id="main-content" className="ms-container" style={{ paddingBottom: 80 }}>
        <section className="ms-hero">
          <div className="ms-eyebrow">SOURCE REGISTRY · 46 / 46 AUDITED</div>
          <h1 className="ms-hero-title">
            Master <em>Source</em> Explorer &amp; Coverage Matrix
          </h1>
          <p className="ms-hero-subtitle">
            Every source in the Masallah manifest is inspected for open-source license compliance, GitHub telemetry, related prompts, examples, and deduplication links.
          </p>
        </section>

        {/* GROUPED SOURCE CARDS BY SECTION (A - J) */}
        {sections.map((sectionTitle) => {
          const groupSources = SOURCES.filter((s) => s.section === sectionTitle);
          return (
            <section key={sectionTitle} style={{ marginTop: 44 }} aria-label={sectionTitle}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderBottom: '1px solid var(--border-hairline)',
                  paddingBottom: 12,
                  marginBottom: 20,
                }}
              >
                <h2 style={{ fontSize: 22, fontWeight: 700 }}>{sectionTitle}</h2>
                <span className="ms-badge">{groupSources.length} Sources</span>
              </div>

              <div className="ms-cards-grid">
                {groupSources.map((src) => (
                  <article key={src.id} className="ms-card" style={{ padding: 20 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <span
                          style={{
                            width: 32,
                            height: 32,
                            borderRadius: 8,
                            background: 'var(--bg-elevated)',
                            border: '1px solid var(--border-strong)',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontFamily: 'var(--font-mono)',
                            fontSize: 12,
                            fontWeight: 700,
                            color: '#ff9c85',
                          }}
                        >
                          {String(src.num).padStart(2, '0')}
                        </span>
                        <div>
                          <h3 style={{ fontSize: 17, fontWeight: 700 }}>{src.name}</h3>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-muted)' }}>
                            {src.category} · {src.license.slice(0, 26)}
                          </span>
                        </div>
                      </div>
                      <span
                        className={`ms-badge ${
                          src.status === 'Indexed' || src.status === 'Partially Indexed' ? 'ms-badge-emerald' : 'ms-badge-accent'
                        }`}
                      >
                        {src.status}
                      </span>
                    </div>

                    <p style={{ fontSize: 13.5, color: 'var(--ink-secondary)', marginBottom: 12 }}>{src.description}</p>

                    <div
                      style={{
                        padding: 10,
                        borderRadius: 6,
                        background: 'var(--bg-elevated)',
                        border: '1px solid var(--border-hairline)',
                        fontSize: 12,
                        color: 'var(--ink-secondary)',
                        marginBottom: 12,
                      }}
                    >
                      <strong>Discovery Note:</strong> {src.statusNote}
                    </div>

                    {src.relatedSourceIds.length > 0 && (
                      <div style={{ fontSize: 12, fontFamily: 'var(--font-mono)', color: '#6ee7b7', marginBottom: 10 }}>
                        ⇄ Deduplicated canonical link with: {src.relatedSourceIds.join(', ')}
                      </div>
                    )}

                    {/* Discovered item counters required by Section 16 */}
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: 6,
                        marginBottom: 14,
                        textAlign: 'center',
                        fontFamily: 'var(--font-mono)',
                        fontSize: 11.5,
                      }}
                    >
                      <div style={{ padding: 6, background: 'var(--bg-canvas)', borderRadius: 4 }}>
                        <div style={{ fontWeight: 700, color: 'var(--ink-primary)' }}>{src.counts.designs}</div>
                        <div style={{ color: 'var(--ink-muted)', fontSize: 10 }}>Designs</div>
                      </div>
                      <div style={{ padding: 6, background: 'var(--bg-canvas)', borderRadius: 4 }}>
                        <div style={{ fontWeight: 700, color: 'var(--ink-primary)' }}>{src.counts.prompts}</div>
                        <div style={{ color: 'var(--ink-muted)', fontSize: 10 }}>Prompts</div>
                      </div>
                      <div style={{ padding: 6, background: 'var(--bg-canvas)', borderRadius: 4 }}>
                        <div style={{ fontWeight: 700, color: 'var(--ink-primary)' }}>{src.counts.repos}</div>
                        <div style={{ color: 'var(--ink-muted)', fontSize: 10 }}>Repos</div>
                      </div>
                      <div style={{ padding: 6, background: 'var(--bg-canvas)', borderRadius: 4 }}>
                        <div style={{ fontWeight: 700, color: 'var(--ink-primary)' }}>{src.counts.examples}</div>
                        <div style={{ color: 'var(--ink-muted)', fontSize: 10 }}>Examples</div>
                      </div>
                    </div>

                    <div className="ms-card-footer">
                      <Link href={`/?source=${src.id}`} className="ms-btn ms-btn-primary">
                        Filter Items ({src.counts.total})
                      </Link>
                      <div style={{ display: 'flex', gap: 6 }}>
                        <a
                          href={sanitizeExternalHref(src.url)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ms-btn"
                        >
                          Website ↗
                        </a>
                        {src.repositoryUrl && (
                          <a
                            href={sanitizeExternalHref(src.repositoryUrl)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ms-btn"
                          >
                            GitHub {src.stars ? `★${(src.stars / 1000).toFixed(1)}k` : '↗'}
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          );
        })}

        {/* FULL 46-SOURCE COVERAGE REPORT TABLE (Section 34) */}
        <section style={{ marginTop: 64 }} aria-labelledby="coverage-table-heading">
          <h2 id="coverage-table-heading" style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
            46-Source Master Coverage Matrix
          </h2>
          <div className="ms-table-wrap">
            <table className="ms-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Source</th>
                  <th>Category</th>
                  <th>Status</th>
                  <th>Designs</th>
                  <th>Prompts</th>
                  <th>Repos</th>
                  <th>Examples</th>
                  <th>License</th>
                </tr>
              </thead>
              <tbody>
                {SOURCES.map((s) => (
                  <tr key={s.id}>
                    <td style={{ fontFamily: 'var(--font-mono)' }}>{String(s.num).padStart(2, '0')}</td>
                    <td>
                      <a
                        href={sanitizeExternalHref(s.url)}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontWeight: 600, textDecoration: 'underline' }}
                      >
                        {s.name}
                      </a>
                    </td>
                    <td>{s.category}</td>
                    <td>
                      <span className="ms-badge">{s.status}</span>
                    </td>
                    <td style={{ fontFamily: 'var(--font-mono)' }}>{String(s.counts.designs).padStart(2, '0')}</td>
                    <td style={{ fontFamily: 'var(--font-mono)' }}>{String(s.counts.prompts).padStart(2, '0')}</td>
                    <td style={{ fontFamily: 'var(--font-mono)' }}>{String(s.counts.repos).padStart(2, '0')}</td>
                    <td style={{ fontFamily: 'var(--font-mono)' }}>{String(s.counts.examples).padStart(2, '0')}</td>
                    <td style={{ fontSize: 12, color: 'var(--ink-secondary)' }}>{s.license}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </>
  );
}
