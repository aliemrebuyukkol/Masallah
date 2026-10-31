'use client';

import React, { useDeferredValue, useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import {
  CATALOG,
  MAIN_SECTIONS,
  SOURCES,
  TAGS_INDEX,
  WORKFLOWS,
  getArchiveStats,
  itemMatchesSection,
} from '@/lib/data';
import { CatalogCard } from './CatalogCard';
import { LiveDemoStudio } from './LiveDemoStudio';
import { CopyPromptButton } from './CopyPromptButton';

export function ArchiveExplorer() {
  const stats = useMemo(() => getArchiveStats(), []);
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const [query, setQuery] = useState('');
  const [activeSection, setActiveSection] = useState<string>('all');
  const [selectedSource, setSelectedSource] = useState<string>('all');
  const [selectedTech, setSelectedTech] = useState<string>('all');
  const [selectedContentType, setSelectedContentType] = useState<string>('all');
  const [onlyWithPrompt, setOnlyWithPrompt] = useState<boolean>(false);
  const [onlyWithDemo, setOnlyWithDemo] = useState<boolean>(false);
  const [onlyWithRepo, setOnlyWithRepo] = useState<boolean>(false);
  const [activeDemoMode, setActiveDemoMode] = useState<string>('pixelfx-canvas');

  const deferredQuery = useDeferredValue(query);

  // Hydrate filters from URL query parameters on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    if (params.get('q')) setQuery(params.get('q') || '');
    if (params.get('section')) setActiveSection(params.get('section') || 'all');
    if (params.get('category')) setActiveSection(params.get('category') || 'all');
    if (params.get('source')) setSelectedSource(params.get('source') || 'all');
    if (params.get('tech')) setSelectedTech(params.get('tech') || 'all');
    if (params.get('type')) setSelectedContentType(params.get('type') || 'all');
    if (params.get('prompt') === '1') setOnlyWithPrompt(true);
    if (params.get('demo') === '1') setOnlyWithDemo(true);
    if (params.get('repo') === '1') setOnlyWithRepo(true);
  }, []);

  // Sync filters back to URL query parameters for shareable deep links
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams();
    if (query.trim()) params.set('q', query.trim());
    if (activeSection !== 'all') params.set('section', activeSection);
    if (selectedSource !== 'all') params.set('source', selectedSource);
    if (selectedTech !== 'all') params.set('tech', selectedTech);
    if (selectedContentType !== 'all') params.set('type', selectedContentType);
    if (onlyWithPrompt) params.set('prompt', '1');
    if (onlyWithDemo) params.set('demo', '1');
    if (onlyWithRepo) params.set('repo', '1');

    const qs = params.toString();
    const newUrl = qs ? `${window.location.pathname}?${qs}` : window.location.pathname;
    window.history.replaceState(null, '', newUrl);
  }, [query, activeSection, selectedSource, selectedTech, selectedContentType, onlyWithPrompt, onlyWithDemo, onlyWithRepo]);

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

  const allTechnologies = useMemo(() => {
    const set = new Set<string>();
    for (const item of CATALOG) {
      for (const t of item.technologies) set.add(t);
    }
    return Array.from(set).sort();
  }, []);

  const filteredItems = useMemo(() => {
    const q = deferredQuery.trim().toLowerCase();

    return CATALOG.filter((item) => {
      if (!itemMatchesSection(item, activeSection)) return false;
      if (selectedSource !== 'all' && item.sourceId !== selectedSource) return false;
      if (selectedTech !== 'all' && !item.technologies.includes(selectedTech)) return false;
      if (selectedContentType !== 'all' && !item.contentTypes.includes(selectedContentType)) return false;
      if (onlyWithPrompt && !item.hasPrompt) return false;
      if (onlyWithDemo && !item.hasDemo) return false;
      if (onlyWithRepo && !item.repositoryUrl) return false;

      if (!q) return true;
      const haystack = [
        item.title,
        item.description,
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
  }, [deferredQuery, activeSection, selectedSource, selectedTech, selectedContentType, onlyWithPrompt, onlyWithDemo, onlyWithRepo]);

  function resetAllFilters() {
    setQuery('');
    setActiveSection('all');
    setSelectedSource('all');
    setSelectedTech('all');
    setSelectedContentType('all');
    setOnlyWithPrompt(false);
    setOnlyWithDemo(false);
    setOnlyWithRepo(false);
  }

  return (
    <div className="ms-container" style={{ paddingBottom: 80 }}>
      {/* HERO SECTION */}
      <section className="ms-hero" aria-labelledby="hero-heading">
        <div className="ms-eyebrow">
          <span>MASALLAH v1.0</span>
          <span>·</span>
          <span>46 MASTER SOURCES INDEXED</span>
        </div>

        <div className="ms-hero-grid">
          <div>
            <h1 id="hero-heading" className="ms-hero-title">
              Masallah — <em>Living</em> Design, Prompt, Motion &amp; Code Archive
            </h1>
            <p className="ms-hero-subtitle">
              Designs, Prompts, Experiments, Repositories &amp; Creative References. Uniting 46 master open-source engines and visual galleries into one searchable, license-verified developer &amp; design studio.
            </p>
          </div>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'flex-start' }}>
            <Link href="/sources" className="ms-btn ms-btn-primary">
              Explore All 46 Sources →
            </Link>
            <Link href="/prompts" className="ms-btn">
              Prompt Library ({stats.prompts})
            </Link>
            <Link href="/workflows" className="ms-btn">
              Multi-Tool Workflows ({stats.workflows})
            </Link>
          </div>
        </div>

        {/* LIVE COUNTERS (Section 14) */}
        <div className="ms-stats-grid" role="region" aria-label="Live Archive Counters">
          <div className="ms-stat-cell">
            <span className="ms-stat-value">{stats.designs}</span>
            <span className="ms-stat-label">Designs &amp; Analyses</span>
          </div>
          <div className="ms-stat-cell">
            <span className="ms-stat-value">{stats.prompts}</span>
            <span className="ms-stat-label">Prompts (Orig + Opt)</span>
          </div>
          <div className="ms-stat-cell">
            <span className="ms-stat-value">{stats.repositories}</span>
            <span className="ms-stat-label">Repositories</span>
          </div>
          <div className="ms-stat-cell">
            <span className="ms-stat-value">{stats.components}</span>
            <span className="ms-stat-label">Components &amp; Systems</span>
          </div>
          <div className="ms-stat-cell">
            <span className="ms-stat-value">{stats.motionExamples}</span>
            <span className="ms-stat-label">Motion Examples</span>
          </div>
          <div className="ms-stat-cell">
            <span className="ms-stat-value">{stats.threeDExperiments}</span>
            <span className="ms-stat-label">3D &amp; VFX Experiments</span>
          </div>
          <div className="ms-stat-cell">
            <span className="ms-stat-value">{stats.workflows}</span>
            <span className="ms-stat-label">Workflows</span>
          </div>
          <div className="ms-stat-cell">
            <span className="ms-stat-value">{stats.sources}</span>
            <span className="ms-stat-label">Master Sources</span>
          </div>
        </div>
      </section>

      {/* GLOBAL FULL-TEXT SEARCH & SHAREABLE FILTERS (Sections 15, 20, 21) */}
      <section className="ms-filter-shell" aria-label="Search and Filter Archive">
        <div className="ms-search-row">
          <div className="ms-search-input-wrap">
            <input
              ref={searchInputRef}
              type="search"
              role="searchbox"
              aria-label="Search designs, prompts, repositories, technologies, tags"
              placeholder="Search titles, prompts, repositories, shaders, Three.js, Remotion, PixelFX... (Press /)"
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
            <option value="all">All 46 Sources</option>
            {SOURCES.map((s) => (
              <option key={s.id} value={s.id}>
                #{String(s.num).padStart(2, '0')} {s.name} ({s.category})
              </option>
            ))}
          </select>

          <select
            aria-label="Filter by Technology"
            className="ms-select"
            value={selectedTech}
            onChange={(e) => setSelectedTech(e.target.value)}
          >
            <option value="all">All Technologies</option>
            {allTechnologies.map((tech) => (
              <option key={tech} value={tech}>
                {tech}
              </option>
            ))}
          </select>

          <select
            aria-label="Filter by Content Type"
            className="ms-select"
            value={selectedContentType}
            onChange={(e) => setSelectedContentType(e.target.value)}
          >
            <option value="all">All Content Types</option>
            {TAGS_INDEX.contentTypes.map((ct) => (
              <option key={ct.name} value={ct.name}>
                {ct.name} ({ct.count})
              </option>
            ))}
          </select>
        </div>

        {/* 16 Main Sections Navigation */}
        <div className="ms-pill-rail" role="group" aria-label="Archive Sections">
          {MAIN_SECTIONS.map((sec) => (
            <button
              key={sec.id}
              type="button"
              className="ms-pill"
              aria-pressed={activeSection === sec.id}
              onClick={() => setActiveSection(sec.id)}
            >
              {sec.label}
            </button>
          ))}
          <Link href="/sources" className="ms-pill">
            Sources (46) ↗
          </Link>
        </div>

        {/* Capability Filter Toggles & Result Count */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 12,
            marginTop: 14,
            paddingTop: 14,
            borderTop: '1px solid var(--border-hairline)',
          }}
        >
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <button
              type="button"
              className="ms-pill"
              aria-pressed={onlyWithPrompt}
              onClick={() => setOnlyWithPrompt((v) => !v)}
            >
              Has Prompt
            </button>
            <button
              type="button"
              className="ms-pill"
              aria-pressed={onlyWithDemo}
              onClick={() => setOnlyWithDemo((v) => !v)}
            >
              Has Live Demo
            </button>
            <button
              type="button"
              className="ms-pill"
              aria-pressed={onlyWithRepo}
              onClick={() => setOnlyWithRepo((v) => !v)}
            >
              Has GitHub Repo
            </button>
            {(query || activeSection !== 'all' || selectedSource !== 'all' || selectedTech !== 'all' || selectedContentType !== 'all' || onlyWithPrompt || onlyWithDemo || onlyWithRepo) && (
              <button type="button" className="ms-btn" onClick={resetAllFilters}>
                Reset All Filters
              </button>
            )}
          </div>

          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5, color: 'var(--ink-secondary)' }} aria-live="polite">
            Showing <strong>{filteredItems.length}</strong> of {CATALOG.length} catalog entries
          </div>
        </div>
      </section>

      {/* CATALOG GRID */}
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
          <h2 style={{ fontSize: 20, marginBottom: 8 }}>No matching archive entries</h2>
          <p style={{ color: 'var(--ink-secondary)', marginBottom: 18 }}>
            No catalog entries matched your current filter combination. Reset filters to explore all 114 items across 46 sources.
          </p>
          <button type="button" className="ms-btn ms-btn-primary" onClick={resetAllFilters}>
            Reset All Filters
          </button>
        </div>
      ) : (
        <section aria-label="Catalog Results">
          <div className="ms-cards-grid">
            {filteredItems.map((item) => (
              <CatalogCard
                key={item.id}
                item={item}
                onOpenDemo={(demoType) => {
                  setActiveDemoMode(demoType);
                  document.getElementById('live-demo-anchor')?.scrollIntoView({ behavior: 'smooth' });
                }}
              />
            ))}
          </div>
        </section>
      )}

      {/* INTERACTIVE LIVE DEMO STUDIO */}
      <div id="live-demo-anchor" style={{ paddingTop: 24 }}>
        <LiveDemoStudio initialDemo={activeDemoMode} />
      </div>

      {/* CONNECTED MULTI-TOOL WORKFLOWS PREVIEW (Section 12) */}
      <section style={{ marginTop: 56 }} aria-labelledby="workflows-heading">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 20, flexWrap: 'wrap', gap: 12 }}>
          <div>
            <span className="ms-eyebrow" style={{ marginBottom: 8 }}>CONNECTED PIPELINES</span>
            <h2 id="workflows-heading" style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.03em' }}>
              Multi-Source Creative &amp; Engineering Workflows
            </h2>
          </div>
          <Link href="/workflows" className="ms-btn">
            Open Full Workflow Studio →
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 20 }}>
          {WORKFLOWS.map((wf) => (
            <div key={wf.id} className="ms-card" style={{ padding: 24 }}>
              <span className="ms-badge ms-badge-accent" style={{ alignSelf: 'flex-start', marginBottom: 10 }}>
                {wf.stages.length}-STAGE PIPELINE
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
              <div style={{ marginTop: 'auto', display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                <CopyPromptButton text={wf.orchestrationPrompt} label="Copy Orchestration Prompt" />
                <Link href={`/item/${wf.id}`} className="ms-btn">
                  Inspect Pipeline →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
