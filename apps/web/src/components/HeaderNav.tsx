'use client';

import React from 'react';
import Link from 'next/link';
import { getArchiveStats } from '@/lib/data';
import { useI18n } from '@/lib/i18n';

interface HeaderNavProps {
  activePath?: string;
}

export function HeaderNav({ activePath = '/' }: HeaderNavProps) {
  const stats = getArchiveStats();
  const { locale, setLocale, t } = useI18n();

  return (
    <header className="ms-header" role="banner">
      <div className="ms-container ms-header-inner">
        <Link href="/" className="ms-brand" aria-label="Masallah Home">
          <span className="ms-brand-mark" aria-hidden="true">M</span>
          <div>
            <div className="ms-brand-title">Masallah</div>
            <div className="ms-brand-sub">
              {t('Tasarım · Prompt · Motion · 3D · Kod Arşivi', 'Design · Prompt · Motion · 3D · Code Archive')}
            </div>
          </div>
        </Link>

        <nav className="ms-nav" aria-label="Main Archive Navigation">
          <Link href="/" className="ms-nav-link" data-active={activePath === '/' ? 'true' : 'false'}>
            {t('Vitrin', 'Showcase')}
          </Link>
          <Link href="/sources" className="ms-nav-link" data-active={activePath === '/sources' ? 'true' : 'false'}>
            {t(`46 Kaynak`, `46 Sources`)}
          </Link>
          <Link href="/prompts" className="ms-nav-link" data-active={activePath === '/prompts' ? 'true' : 'false'}>
            {t(`Promptlar (${stats.prompts})`, `Prompts (${stats.prompts})`)}
          </Link>
          <Link href="/repos" className="ms-nav-link" data-active={activePath === '/repos' ? 'true' : 'false'}>
            {t(`Repolar (${stats.repositories})`, `Repos (${stats.repositories})`)}
          </Link>
          <Link href="/demos" className="ms-nav-link" data-active={activePath === '/demos' ? 'true' : 'false'}>
            {t(`Canlı Demolar (${stats.liveDemos})`, `Live Demos (${stats.liveDemos})`)}
          </Link>
          <Link href="/workflows" className="ms-nav-link" data-active={activePath === '/workflows' ? 'true' : 'false'}>
            {t(`İş Akışları (${stats.workflows})`, `Workflows (${stats.workflows})`)}
          </Link>

          {/* TR | EN Language Switcher */}
          <div
            role="group"
            aria-label="Dil Seçimi / Language Switcher"
            style={{
              display: 'inline-flex',
              background: 'var(--bg-canvas)',
              border: '1px solid var(--border-strong)',
              borderRadius: 999,
              padding: 2,
              marginLeft: 6,
            }}
          >
            <button
              type="button"
              onClick={() => setLocale('tr')}
              aria-pressed={locale === 'tr'}
              style={{
                padding: '5px 11px',
                borderRadius: 999,
                border: 'none',
                fontSize: 12,
                fontWeight: 700,
                cursor: 'pointer',
                background: locale === 'tr' ? 'var(--accent-primary)' : 'transparent',
                color: locale === 'tr' ? '#09090c' : 'var(--ink-secondary)',
              }}
            >
              TR
            </button>
            <button
              type="button"
              onClick={() => setLocale('en')}
              aria-pressed={locale === 'en'}
              style={{
                padding: '5px 11px',
                borderRadius: 999,
                border: 'none',
                fontSize: 12,
                fontWeight: 700,
                cursor: 'pointer',
                background: locale === 'en' ? 'var(--accent-primary)' : 'transparent',
                color: locale === 'en' ? '#09090c' : 'var(--ink-secondary)',
              }}
            >
              EN
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
