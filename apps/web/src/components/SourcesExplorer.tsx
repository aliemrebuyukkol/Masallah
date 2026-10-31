'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CATALOG, SOURCES, sanitizeExternalHref, type CatalogItem } from '@/lib/data';
import { useI18n, SOURCE_TR_DESCRIPTIONS } from '@/lib/i18n';
import { PreviewModal } from './PreviewModal';

const SECTION_TR_MAP: Record<string, string> = {
  'A. Visual Direction / Design Inspiration': 'A. Görsel Yön / Tasarım İlhamı',
  'B. UI / UX': 'B. Arayüz & Kullanıcı Deneyimi (UI / UX)',
  'C. Motion / Interaction': 'C. Motion & Etkileşim Tasarımı',
  'D. Components / Design System': 'D. Bileşenler & Tasarım Sistemleri',
  'E. Frontend Craft': 'E. Frontend Ustalığı & CSS Mimari',
  'F. Architecture / Code Quality': 'F. Yazılım Mimarisi & Kod Kalitesi',
  'G. Test / QA': 'G. Test & Kalite Güvencesi (QA)',
  'H. Security': 'H. Web & Uygulama Güvenliği',
  'I. Creative Development / Pixel Effects': 'I. Yaratıcı Geliştirme & Pixel Efektleri',
  'J. Video / Motion / Generative Creative Toolchain': 'J. Video, 3D, Ses & Üretken AI Araç Zinciri',
};

export function SourcesExplorer() {
  const { locale, t } = useI18n();
  const [selectedModalItem, setSelectedModalItem] = useState<CatalogItem | null>(null);
  const sections = Array.from(new Set(SOURCES.map((s) => s.section)));

  function handleOpenPreview(sourceId: string) {
    const entry =
      CATALOG.find((c) => c.sourceId === sourceId && c.kind === 'prompt') ||
      CATALOG.find((c) => c.sourceId === sourceId) ||
      null;
    if (entry) {
      setSelectedModalItem(entry);
    }
  }

  return (
    <main id="main-content" className="ms-container" style={{ paddingBottom: 80 }}>
      <section className="ms-hero">
        <div className="ms-eyebrow">
          {t('KAYNAK DİZİNİ · 46 / 46 GERÇEK EKRAN ÖNİZLEMELİ', 'SOURCE REGISTRY · 46 / 46 AUDITED WITH REAL PREVIEWS')}
        </div>
        <h1 className="ms-hero-title">
          {locale === 'tr' ? (
            <>
              46 Ana <em>Kaynak</em> Vitrini &amp; Kapsam Matrisi
            </>
          ) : (
            <>
              Master <em>Source</em> Explorer &amp; Coverage Matrix
            </>
          )}
        </h1>
        <p className="ms-hero-subtitle">
          {t(
            'Masallah manifestosundaki 46 kaynağın tamamı gerçek site/demo ekran görüntüleri, Türkçe kullanım amacı, açık kaynak lisans doğrulaması, promptları ve örnek kodlarıyla aşağıda listelenmiştir.',
            'Every source in the Masallah manifest is inspected with real site/demo screenshots, purpose analysis, open-source license compliance, prompts, and runnable examples.'
          )}
        </p>
      </section>

      {/* GROUPED SOURCE CARDS BY SECTION (A - J) */}
      {sections.map((sectionTitle) => {
        const groupSources = SOURCES.filter((s) => s.section === sectionTitle);
        const displaySectionTitle = locale === 'tr' ? SECTION_TR_MAP[sectionTitle] || sectionTitle : sectionTitle;

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
              <h2 style={{ fontSize: 22, fontWeight: 700 }}>{displaySectionTitle}</h2>
              <span className="ms-badge">
                {groupSources.length} {t('Kaynak', 'Sources')}
              </span>
            </div>

            <div className="ms-cards-grid">
              {groupSources.map((src) => {
                const trInfo = SOURCE_TR_DESCRIPTIONS[src.id];
                const screenshotUrl = `/masallahpub/screenshots/${src.id}.png`;
                const displayDesc = locale === 'tr' && trInfo ? trInfo.desc : src.description;
                const displayPurpose = locale === 'tr' && trInfo ? trInfo.purpose : src.statusNote;
                const displayCategory = locale === 'tr' && trInfo ? trInfo.categoryTr : src.category;

                return (
                  <article key={src.id} className="ms-card" style={{ overflow: 'hidden' }}>
                    {/* Real Website Screenshot Preview */}
                    <div
                      className="ms-card-preview"
                      onClick={() => handleOpenPreview(src.id)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          handleOpenPreview(src.id);
                        }
                      }}
                      style={{ cursor: 'pointer', position: 'relative' }}
                      title={t('Büyük önizleme ve prompt için tıkla', 'Click for large preview and prompt')}
                    >
                      <img
                        src={screenshotUrl}
                        alt={`${src.name} — ${displayCategory}`}
                        loading="lazy"
                        width={640}
                        height={400}
                        style={{ objectFit: 'cover', objectPosition: 'top center', width: '100%', height: '100%' }}
                      />
                      <div
                        style={{
                          position: 'absolute',
                          top: 10,
                          left: 10,
                          display: 'flex',
                          gap: 6,
                        }}
                      >
                        <span
                          className="ms-badge ms-badge-accent"
                          style={{ background: 'rgba(10,11,14,0.88)', backdropFilter: 'blur(8px)' }}
                        >
                          #{String(src.num).padStart(2, '0')} · {src.name}
                        </span>
                      </div>
                      <div
                        style={{
                          position: 'absolute',
                          bottom: 10,
                          right: 10,
                          padding: '4px 10px',
                          borderRadius: 6,
                          background: 'rgba(10, 11, 14, 0.84)',
                          border: '1px solid rgba(255,255,255,0.18)',
                          color: '#f4f3ef',
                          fontSize: 11,
                          fontFamily: 'var(--font-mono)',
                        }}
                      >
                        🔍 {t('Önizle', 'Preview')}
                      </div>
                    </div>

                    <div style={{ padding: 20, display: 'flex', flexDirection: 'column', flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                        <div>
                          <h3 style={{ fontSize: 18, fontWeight: 700 }}>{src.name}</h3>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-muted)' }}>
                            {displayCategory} · {src.license.slice(0, 26)}
                          </span>
                        </div>
                        <span className="ms-badge ms-badge-emerald">{src.status}</span>
                      </div>

                      <p style={{ fontSize: 13.5, color: 'var(--ink-secondary)', marginBottom: 10 }}>{displayDesc}</p>

                      <div
                        style={{
                          padding: '8px 10px',
                          borderRadius: 6,
                          background: 'var(--bg-elevated)',
                          border: '1px solid var(--border-hairline)',
                          fontSize: 12,
                          color: 'var(--ink-secondary)',
                          marginBottom: 12,
                        }}
                      >
                        <strong style={{ color: '#ff9c85' }}>{t('Kullanım Amacı:', 'Purpose:')}</strong> {displayPurpose}
                      </div>

                      {src.relatedSourceIds.length > 0 && (
                        <div style={{ fontSize: 11.5, fontFamily: 'var(--font-mono)', color: '#6ee7b7', marginBottom: 10 }}>
                          ⇄ {t('İlişkili kaynak:', 'Linked with:')} {src.relatedSourceIds.join(', ')}
                        </div>
                      )}

                      {/* Discovered item counters */}
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(4, 1fr)',
                          gap: 6,
                          marginBottom: 14,
                          marginTop: 'auto',
                          textAlign: 'center',
                          fontFamily: 'var(--font-mono)',
                          fontSize: 11.5,
                        }}
                      >
                        <div style={{ padding: 6, background: 'var(--bg-canvas)', borderRadius: 4 }}>
                          <div style={{ fontWeight: 700, color: 'var(--ink-primary)' }}>{src.counts.designs}</div>
                          <div style={{ color: 'var(--ink-muted)', fontSize: 10 }}>{t('Tasarım', 'Designs')}</div>
                        </div>
                        <div style={{ padding: 6, background: 'var(--bg-canvas)', borderRadius: 4 }}>
                          <div style={{ fontWeight: 700, color: 'var(--ink-primary)' }}>{src.counts.prompts}</div>
                          <div style={{ color: 'var(--ink-muted)', fontSize: 10 }}>{t('Prompt', 'Prompts')}</div>
                        </div>
                        <div style={{ padding: 6, background: 'var(--bg-canvas)', borderRadius: 4 }}>
                          <div style={{ fontWeight: 700, color: 'var(--ink-primary)' }}>{src.counts.repos}</div>
                          <div style={{ color: 'var(--ink-muted)', fontSize: 10 }}>{t('Repo', 'Repos')}</div>
                        </div>
                        <div style={{ padding: 6, background: 'var(--bg-canvas)', borderRadius: 4 }}>
                          <div style={{ fontWeight: 700, color: 'var(--ink-primary)' }}>{src.counts.examples}</div>
                          <div style={{ color: 'var(--ink-muted)', fontSize: 10 }}>{t('Örnek', 'Examples')}</div>
                        </div>
                      </div>

                      <div className="ms-card-footer">
                        <button
                          type="button"
                          onClick={() => handleOpenPreview(src.id)}
                          className="ms-btn ms-btn-primary"
                        >
                          {t('🔍 Hızlı İncele', '🔍 Quick Preview')}
                        </button>
                        <div style={{ display: 'flex', gap: 6 }}>
                          <Link href={`/?source=${src.id}`} className="ms-btn">
                            {t(`İçerikler (${src.counts.total})`, `Items (${src.counts.total})`)}
                          </Link>
                          <a
                            href={sanitizeExternalHref(src.url)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ms-btn"
                          >
                            {t('Site ↗', 'Site ↗')}
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        );
      })}

      {/* FULL 46-SOURCE COVERAGE REPORT TABLE */}
      <section style={{ marginTop: 64 }} aria-labelledby="coverage-table-heading">
        <h2 id="coverage-table-heading" style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          {t('46 Ana Kaynak Kapsam Matrisi', '46-Source Master Coverage Matrix')}
        </h2>
        <div className="ms-table-wrap">
          <table className="ms-table">
            <thead>
              <tr>
                <th>#</th>
                <th>{t('Kaynak', 'Source')}</th>
                <th>{t('Kategori', 'Category')}</th>
                <th>{t('Durum', 'Status')}</th>
                <th>{t('Tasarım', 'Designs')}</th>
                <th>{t('Prompt', 'Prompts')}</th>
                <th>{t('Repo', 'Repos')}</th>
                <th>{t('Örnek', 'Examples')}</th>
                <th>{t('Lisans', 'License')}</th>
              </tr>
            </thead>
            <tbody>
              {SOURCES.map((s) => {
                const trInfo = SOURCE_TR_DESCRIPTIONS[s.id];
                return (
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
                    <td>{locale === 'tr' && trInfo ? trInfo.categoryTr : s.category}</td>
                    <td>
                      <span className="ms-badge">{s.status}</span>
                    </td>
                    <td style={{ fontFamily: 'var(--font-mono)' }}>{String(s.counts.designs).padStart(2, '0')}</td>
                    <td style={{ fontFamily: 'var(--font-mono)' }}>{String(s.counts.prompts).padStart(2, '0')}</td>
                    <td style={{ fontFamily: 'var(--font-mono)' }}>{String(s.counts.repos).padStart(2, '0')}</td>
                    <td style={{ fontFamily: 'var(--font-mono)' }}>{String(s.counts.examples).padStart(2, '0')}</td>
                    <td style={{ fontSize: 12, color: 'var(--ink-secondary)' }}>{s.license}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <PreviewModal item={selectedModalItem} onClose={() => setSelectedModalItem(null)} />
    </main>
  );
}
