'use client';

import React, { useDeferredValue, useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import {
  CATALOG,
  CatalogItem,
  MAIN_SECTIONS,
  SOURCES,
  WORKFLOWS,
  getArchiveStats,
  itemMatchesSection,
  sanitizeExternalHref,
} from '@/lib/data';
import { SOURCE_TR_DESCRIPTIONS, useI18n } from '@/lib/i18n';
import { CatalogCard } from './CatalogCard';
import { LiveDemoStudio } from './LiveDemoStudio';
import { PreviewModal } from './PreviewModal';
import { CopyPromptButton } from './CopyPromptButton';

type ViewMode = 'showcase-sources' | 'all-catalog' | 'prompts' | 'repos' | 'demos' | 'workflows';

export function ArchiveExplorer() {
  const { locale, t } = useI18n();
  const stats = useMemo(() => getArchiveStats(), []);
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const [viewMode, setViewMode] = useState<ViewMode>('showcase-sources');
  const [query, setQuery] = useState('');
  const [activeSection, setActiveSection] = useState<string>('all');
  const [selectedSource, setSelectedSource] = useState<string>('all');
  const [activeDemoMode, setActiveDemoMode] = useState<string>('pixelfx-canvas');
  const [modalItem, setModalItem] = useState<CatalogItem | null>(null);

  const deferredQuery = useDeferredValue(query);

  // Hydrate filters from URL query parameters on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    if (params.get('q')) {
      setQuery(params.get('q') || '');
      setViewMode('all-catalog');
    }
    if (params.get('section')) {
      setActiveSection(params.get('section') || 'all');
      setViewMode('all-catalog');
    }
    if (params.get('source')) {
      setSelectedSource(params.get('source') || 'all');
      setViewMode('all-catalog');
    }
  }, []);

  // Sync filters back to URL query parameters
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams();
    if (query.trim()) params.set('q', query.trim());
    if (activeSection !== 'all') params.set('section', activeSection);
    if (selectedSource !== 'all') params.set('source', selectedSource);

    const qs = params.toString();
    const newUrl = qs ? `${window.location.pathname}?${qs}` : window.location.pathname;
    window.history.replaceState(null, '', newUrl);
  }, [query, activeSection, selectedSource]);

  // Global keyboard shortcut `/` to focus search
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  // One representative primary catalog card per source (46 visual cards, zero duplicate clutter!)
  const showcase46Items = useMemo(() => {
    return SOURCES.map((src) => {
      const bestMatch =
        CATALOG.find((c) => c.sourceId === src.id && c.hasDemo) ||
        CATALOG.find((c) => c.sourceId === src.id && c.kind === 'design') ||
        CATALOG.find((c) => c.sourceId === src.id && c.kind === 'repository') ||
        CATALOG.find((c) => c.sourceId === src.id) ||
        CATALOG[0];
      return {
        ...bestMatch,
        id: `showcase-${src.id}`,
        title: `#${String(src.num).padStart(2, '0')} · ${src.name}`,
        sourceName: src.section.replace(/^[A-J]\.\s*/, ''),
        sourceUrl: src.url,
        repositoryUrl: src.repositoryUrl || bestMatch.repositoryUrl,
        stars: src.stars || bestMatch.stars,
        previewSvg: `/masallahpub/screenshots/${src.id}.png`,
      };
    });
  }, []);

  const filteredItems = useMemo(() => {
    const q = deferredQuery.trim().toLowerCase();

    const baseList =
      viewMode === 'showcase-sources' && !q && activeSection === 'all' && selectedSource === 'all'
        ? showcase46Items
        : viewMode === 'prompts'
        ? CATALOG.filter((i) => i.kind === 'prompt')
        : viewMode === 'repos'
        ? CATALOG.filter((i) => i.kind === 'repository')
        : viewMode === 'demos'
        ? CATALOG.filter((i) => i.hasDemo)
        : CATALOG;

    return baseList.filter((item) => {
      if (!itemMatchesSection(item, activeSection)) return false;
      if (selectedSource !== 'all' && item.sourceId !== selectedSource) return false;

      if (!q) return true;
      const trInfo = SOURCE_TR_DESCRIPTIONS[item.sourceId];
      const haystack = [
        item.title,
        item.description,
        trInfo?.desc || '',
        trInfo?.purpose || '',
        trInfo?.categoryTr || '',
        item.category,
        item.sourceName,
        item.repositoryUrl,
        item.originalPrompt,
        item.optimizedPrompt,
        ...item.tags,
        ...item.technologies,
      ]
        .join(' ')
        .toLowerCase();

      return haystack.includes(q);
    });
  }, [viewMode, showcase46Items, deferredQuery, activeSection, selectedSource]);

  function resetAllFilters() {
    setQuery('');
    setActiveSection('all');
    setSelectedSource('all');
    setViewMode('showcase-sources');
  }

  return (
    <div className="ms-container" style={{ paddingBottom: 80 }}>
      {/* COMPACT, VISUAL-FIRST HERO */}
      <section className="ms-hero" aria-labelledby="hero-heading" style={{ padding: '36px 0 28px' }}>
        <div className="ms-hero-grid" style={{ alignItems: 'center' }}>
          <div>
            <div className="ms-eyebrow" style={{ marginBottom: 12 }}>
              <span>MASALLAH v1.0</span>
              <span>·</span>
              <span>{t('46 KAYNAK & GERÇEK ÖNİZLEME ARŞİVİ', '46 SOURCES & LIVE VISUAL ARCHIVE')}</span>
            </div>
            <h1 id="hero-heading" className="ms-hero-title" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', marginBottom: 10 }}>
              Masallah — <em>{t('Tasarım, Prompt, Motion & Kod', 'Living Design, Prompt & Code')}</em> {t('Kataloğu', 'Archive')}
            </h1>
            <p className="ms-hero-subtitle" style={{ fontSize: 15.5 }}>
              {t(
                '46 tasarım, UI/UX, motion, 3D/WebGL, video ve açık kaynak aracın gerçek ekran görüntüleri, hazır AI promptları ve canlı interaktif demoları tek bir sade vitrinde.',
                'Real visual previews, copyable AI prompts, and live interactive demos across 46 master design, motion, 3D/WebGL, and open-source engineering sources.'
              )}
            </p>
          </div>

          {/* Compact 4-Metric Strip */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 1,
              background: 'var(--border-hairline)',
              border: '1px solid var(--border-hairline)',
              borderRadius: 12,
              overflow: 'hidden',
            }}
          >
            <div className="ms-stat-cell" style={{ padding: '12px 14px' }}>
              <span className="ms-stat-value" style={{ fontSize: 20 }}>46</span>
              <span className="ms-stat-label">{t('Kaynak', 'Sources')}</span>
            </div>
            <div className="ms-stat-cell" style={{ padding: '12px 14px' }}>
              <span className="ms-stat-value" style={{ fontSize: 20 }}>{stats.prompts}</span>
              <span className="ms-stat-label">{t('Prompt', 'Prompts')}</span>
            </div>
            <div className="ms-stat-cell" style={{ padding: '12px 14px' }}>
              <span className="ms-stat-value" style={{ fontSize: 20 }}>{stats.repositories}</span>
              <span className="ms-stat-label">{t('GitHub Repo', 'Repos')}</span>
            </div>
            <div className="ms-stat-cell" style={{ padding: '12px 14px' }}>
              <span className="ms-stat-value" style={{ fontSize: 20 }}>{stats.liveDemos}</span>
              <span className="ms-stat-label">{t('Canlı Demo', 'Live Demos')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* PRIMARY MODE SWITCHER (Clean 6-Tab Navigation Eliminating Clutter) */}
      <div
        role="tablist"
        aria-label={t('Görünüm Modu', 'View Mode')}
        style={{
          display: 'flex',
          gap: 8,
          flexWrap: 'wrap',
          marginTop: 22,
          marginBottom: 16,
        }}
      >
        <button
          type="button"
          role="tab"
          aria-selected={viewMode === 'showcase-sources'}
          className="ms-btn"
          style={{
            background: viewMode === 'showcase-sources' ? 'var(--accent-primary)' : undefined,
            color: viewMode === 'showcase-sources' ? '#09090c' : undefined,
            borderColor: viewMode === 'showcase-sources' ? 'var(--accent-primary)' : undefined,
          }}
          onClick={() => {
            setViewMode('showcase-sources');
            setActiveSection('all');
          }}
        >
          🖼️ {t('46 Kaynak Vitrini (Gerçek Önizlemeli)', '46 Sources Visual Showcase')}
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={viewMode === 'prompts'}
          className="ms-btn"
          style={{
            background: viewMode === 'prompts' ? 'var(--accent-primary)' : undefined,
            color: viewMode === 'prompts' ? '#09090c' : undefined,
            borderColor: viewMode === 'prompts' ? 'var(--accent-primary)' : undefined,
          }}
          onClick={() => setViewMode('prompts')}
        >
          ⚡ {t(`Prompt Kütüphanesi (${stats.prompts})`, `Prompt Library (${stats.prompts})`)}
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={viewMode === 'demos'}
          className="ms-btn"
          style={{
            background: viewMode === 'demos' ? 'var(--accent-primary)' : undefined,
            color: viewMode === 'demos' ? '#09090c' : undefined,
            borderColor: viewMode === 'demos' ? 'var(--accent-primary)' : undefined,
          }}
          onClick={() => setViewMode('demos')}
        >
          🎮 {t(`Canlı İnteraktif Demolar (${stats.liveDemos})`, `Interactive Live Demos (${stats.liveDemos})`)}
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={viewMode === 'repos'}
          className="ms-btn"
          style={{
            background: viewMode === 'repos' ? 'var(--accent-primary)' : undefined,
            color: viewMode === 'repos' ? '#09090c' : undefined,
            borderColor: viewMode === 'repos' ? 'var(--accent-primary)' : undefined,
          }}
          onClick={() => setViewMode('repos')}
        >
          📦 {t(`GitHub Repoları (${stats.repositories})`, `GitHub Repos (${stats.repositories})`)}
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={viewMode === 'workflows'}
          className="ms-btn"
          style={{
            background: viewMode === 'workflows' ? 'var(--accent-primary)' : undefined,
            color: viewMode === 'workflows' ? '#09090c' : undefined,
            borderColor: viewMode === 'workflows' ? 'var(--accent-primary)' : undefined,
          }}
          onClick={() => setViewMode('workflows')}
        >
          🔗 {t(`İş Akışları (${stats.workflows})`, `Workflows (${stats.workflows})`)}
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={viewMode === 'all-catalog'}
          className="ms-btn"
          style={{
            background: viewMode === 'all-catalog' ? 'var(--accent-primary)' : undefined,
            color: viewMode === 'all-catalog' ? '#09090c' : undefined,
            borderColor: viewMode === 'all-catalog' ? 'var(--accent-primary)' : undefined,
          }}
          onClick={() => setViewMode('all-catalog')}
        >
          📚 {t(`Tüm Katalog (${stats.totalCatalog})`, `Full Index (${stats.totalCatalog})`)}
        </button>
      </div>

      {/* CLEAN SEARCH & CATEGORY FILTER BAR */}
      <section className="ms-filter-shell" aria-label="Search and Filter Archive" style={{ padding: 16, margin: '12px 0 24px' }}>
        <div className="ms-search-row">
          <div className="ms-search-input-wrap">
            <input
              ref={searchInputRef}
              type="search"
              role="searchbox"
              aria-label="Search designs, prompts, repositories, technologies, tags"
              placeholder={t(
                'Kaynak, tasarım, prompt veya teknoloji ara (örn: PixelFX, Three.js, Remotion, shadcn, FFmpeg)...',
                'Search sources, designs, prompts, or technologies (e.g. PixelFX, Three.js, Remotion, shadcn)...'
              )}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="ms-search-input"
            />
          </div>

          <select
            aria-label="Filter by Source"
            className="ms-select"
            value={selectedSource}
            onChange={(e) => setSelectedSource(e.target.value)}
          >
            <option value="all">{t('Tüm 46 Kaynak', 'All 46 Sources')}</option>
            {SOURCES.map((s) => (
              <option key={s.id} value={s.id}>
                #{String(s.num).padStart(2, '0')} {s.name}
              </option>
            ))}
          </select>

          {(query || activeSection !== 'all' || selectedSource !== 'all') && (
            <button type="button" className="ms-btn" onClick={resetAllFilters}>
              {t('Filtreyi Temizle', 'Reset')}
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="ms-pill-rail" role="group" aria-label="Archive Sections" style={{ marginTop: 12, paddingTop: 12 }}>
          {MAIN_SECTIONS.map((sec) => {
            const trLabels: Record<string, string> = {
              'all': 'Tümü',
              'Design Inspiration': 'Görsel Tasarım',
              'Prompts & Skills': 'Promptlar',
              'UI / UX': 'UI / UX',
              'Motion & Interaction': 'Motion & Etkileşim',
              'Components & Design Systems': 'Bileşenler',
              'Repositories': 'GitHub Repoları',
              'Creative Coding & Effects': 'Pixel & Efekt',
              '3D & WebGL': '3D & WebGL',
              'Video & Audio Generation': 'Video & Ses AI',
              'Workflows': 'İş Akışları',
              'Frontend Craft': 'Frontend & CSS',
              'Architecture & Patterns': 'Mimari & TS',
              'Testing & QA': 'Test & QA',
              'Security': 'Güvenlik',
              'Resources & Tools': 'Araçlar',
            };
            return (
              <button
                key={sec.id}
                type="button"
                className="ms-pill"
                aria-pressed={activeSection === sec.id}
                onClick={() => setActiveSection(sec.id)}
              >
                {locale === 'tr' ? trLabels[sec.id] || sec.label : sec.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* IF WORKFLOWS MODE IS SELECTED */}
      {viewMode === 'workflows' ? (
        <section aria-label="Workflows">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: 20 }}>
            {WORKFLOWS.map((wf) => (
              <div key={wf.id} className="ms-card" style={{ padding: 24 }}>
                <span className="ms-badge ms-badge-accent" style={{ alignSelf: 'flex-start', marginBottom: 10 }}>
                  {wf.stages.length} {t('ADIMLI İŞ AKIŞI', 'CONNECTED STAGES')}
                </span>
                <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 6 }}>{wf.title}</h3>
                <p style={{ fontSize: 13.5, color: 'var(--ink-secondary)', marginBottom: 14 }}>{wf.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
                  {wf.stages.map((st) => (
                    <span key={st.step} className="ms-tag">
                      {st.step}. {st.tool}
                    </span>
                  ))}
                </div>
                <pre className="ms-code-block" style={{ maxHeight: 160, marginBottom: 14 }}>
                  {wf.orchestrationPrompt}
                </pre>
                <div style={{ marginTop: 'auto', display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  <CopyPromptButton
                    text={wf.orchestrationPrompt}
                    label={t('İş Akışı Promptunu Kopyala', 'Copy Orchestration Prompt')}
                  />
                  <Link href="/workflows" className="ms-btn">
                    {t('Adım Tablosunu Gör →', 'Stage Table →')}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <>
          {/* LIVE INTERACTIVE STUDIO AT TOP WHEN DEMOS MODE SELECTED */}
          {viewMode === 'demos' && (
            <div style={{ marginBottom: 28 }}>
              <LiveDemoStudio initialDemo={activeDemoMode} />
            </div>
          )}

          {/* VISUAL-FIRST CARDS GRID */}
          {filteredItems.length === 0 ? (
            <div
              style={{
                padding: 48,
                textAlign: 'center',
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border-hairline)',
                borderRadius: 'var(--radius-md)',
              }}
            >
              <h2 style={{ fontSize: 20, marginBottom: 8 }}>
                {t('Eşleşen içerik bulunamadı', 'No matching archive entries')}
              </h2>
              <button type="button" className="ms-btn ms-btn-primary" onClick={resetAllFilters}>
                {t('Tüm Vitrini Göster', 'Reset All Filters')}
              </button>
            </div>
          ) : (
            <section aria-label="Catalog Results">
              <div className="ms-cards-grid">
                {filteredItems.map((item) => (
                  <CatalogCard
                    key={item.id}
                    item={item}
                    onPreviewModal={(clicked) => setModalItem(clicked)}
                    onOpenDemo={(demoType) => {
                      setActiveDemoMode(demoType);
                      document.getElementById('live-demo-anchor')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  />
                ))}
              </div>
            </section>
          )}
        </>
      )}

      {/* INTERACTIVE LIVE DEMO STUDIO ANCHOR */}
      {viewMode !== 'demos' && (
        <div id="live-demo-anchor" style={{ paddingTop: 32 }}>
          <LiveDemoStudio initialDemo={activeDemoMode} />
        </div>
      )}

      {/* QUICK PREVIEW & PROMPT LIGHTBOX MODAL */}
      <PreviewModal item={modalItem} onClose={() => setModalItem(null)} />
    </div>
  );
}
