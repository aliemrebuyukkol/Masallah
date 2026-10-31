'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { CatalogItem, sanitizeExternalHref } from '@/lib/data';
import { SOURCE_TR_DESCRIPTIONS, useI18n } from '@/lib/i18n';
import { CopyPromptButton } from './CopyPromptButton';

interface PreviewModalProps {
  item: CatalogItem | null;
  onClose: () => void;
}

export function PreviewModal({ item, onClose }: PreviewModalProps) {
  const { locale, t } = useI18n();
  const [activeTab, setActiveTab] = useState<'optimized' | 'original' | 'code'>('optimized');

  useEffect(() => {
    if (!item) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [item, onClose]);

  if (!item) return null;

  const trInfo = SOURCE_TR_DESCRIPTIONS[item.sourceId];
  const displayDesc = locale === 'tr' && trInfo ? trInfo.desc : item.description;
  const displayPurpose = locale === 'tr' && trInfo ? trInfo.purpose : item.tags.join(' · ');

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        background: 'rgba(5, 6, 9, 0.86)',
        backdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: 1060,
          maxHeight: '90vh',
          overflowY: 'auto',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-strong)',
          borderRadius: 16,
          boxShadow: '0 28px 80px rgba(0,0,0,0.75)',
        }}
      >
        {/* Top Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '16px 24px',
            borderBottom: '1px solid var(--border-hairline)',
            position: 'sticky',
            top: 0,
            background: 'var(--bg-card)',
            zIndex: 5,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
            <span className="ms-badge ms-badge-accent">
              {locale === 'tr' && trInfo ? trInfo.categoryTr : item.category}
            </span>
            <strong style={{ fontSize: 17 }}>{item.sourceName}</strong>
            {typeof item.stars === 'number' && item.stars > 0 && (
              <span className="ms-badge ms-badge-emerald">★ {item.stars.toLocaleString()}</span>
            )}
          </div>
          <button type="button" className="ms-btn" onClick={onClose}>
            ✕ {t('Kapat (Esc)', 'Close (Esc)')}
          </button>
        </div>

        {/* Main Modal Content */}
        <div style={{ padding: 24, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: 24 }}>
          {/* Left: Big Real Website/Demo Screenshot */}
          <div>
            <div
              style={{
                borderRadius: 12,
                overflow: 'hidden',
                border: '1px solid var(--border-strong)',
                background: '#07080b',
                marginBottom: 14,
              }}
            >
              <img
                src={item.previewSvg}
                alt={item.title}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>

            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {item.sourceUrl && (
                <a
                  href={sanitizeExternalHref(item.sourceUrl)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ms-btn ms-btn-primary"
                >
                  {t('Canlı Siteyi Aç ↗', 'Open Live Website ↗')}
                </a>
              )}
              {item.repositoryUrl && (
                <a
                  href={sanitizeExternalHref(item.repositoryUrl)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ms-btn"
                >
                  GitHub Repo ↗
                </a>
              )}
              <Link href={`/item/${item.slug}`} className="ms-btn">
                {t('Tam Sayfa Görünümü →', 'Full Page View →')}
              </Link>
            </div>
          </div>

          {/* Right: Summary, Purpose & Prompt/Code Tabs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <h2 style={{ fontSize: 22, fontWeight: 750, lineHeight: 1.25 }}>{item.title}</h2>
            <p style={{ fontSize: 14.5, color: 'var(--ink-secondary)' }}>{displayDesc}</p>

            <div
              style={{
                padding: 12,
                borderRadius: 8,
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border-hairline)',
                fontSize: 13,
              }}
            >
              <strong>{t('Kullanım Amacı:', 'Primary Purpose:')}</strong>{' '}
              <span style={{ color: 'var(--ink-secondary)' }}>{displayPurpose}</span>
            </div>

            {/* Prompt & Code Switcher */}
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {item.optimizedPrompt && (
                <button
                  type="button"
                  className="ms-pill"
                  aria-pressed={activeTab === 'optimized'}
                  onClick={() => setActiveTab('optimized')}
                >
                  {t('✨ Masallah Optimize Prompt', '✨ Masallah Optimized Prompt')}
                </button>
              )}
              {item.originalPrompt && (
                <button
                  type="button"
                  className="ms-pill"
                  aria-pressed={activeTab === 'original'}
                  onClick={() => setActiveTab('original')}
                >
                  {t('Orijinal Prompt', 'Original Prompt')}
                </button>
              )}
              {item.codeSnippet && (
                <button
                  type="button"
                  className="ms-pill"
                  aria-pressed={activeTab === 'code'}
                  onClick={() => setActiveTab('code')}
                >
                  {t('Kod / Kurulum', 'Code / Setup')}
                </button>
              )}
            </div>

            <pre className="ms-code-block" style={{ maxHeight: 240 }}>
              {activeTab === 'code'
                ? item.codeSnippet
                : activeTab === 'original'
                ? item.originalPrompt
                : item.optimizedPrompt || item.originalPrompt}
            </pre>

            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <CopyPromptButton
                text={
                  activeTab === 'code'
                    ? item.codeSnippet
                    : activeTab === 'original'
                    ? item.originalPrompt
                    : item.optimizedPrompt || item.originalPrompt
                }
                label={
                  activeTab === 'code'
                    ? t('Kodu Kopyala', 'Copy Code')
                    : t('Promptu Kopyala', 'Copy Prompt')
                }
                copiedLabel={t('Panoya Kopyalandı ✓', 'Copied to Clipboard ✓')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
