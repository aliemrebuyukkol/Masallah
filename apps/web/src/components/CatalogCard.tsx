'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CatalogItem, sanitizeExternalHref } from '@/lib/data';
import { SOURCE_TR_DESCRIPTIONS, useI18n } from '@/lib/i18n';
import { CopyPromptButton } from './CopyPromptButton';

interface CatalogCardProps {
  item: CatalogItem;
  onOpenDemo?: (demoType: string) => void;
  onPreviewModal?: (item: CatalogItem) => void;
}

export function CatalogCard({ item, onOpenDemo, onPreviewModal }: CatalogCardProps) {
  const { locale, t } = useI18n();
  const [inspectOpen, setInspectOpen] = useState(false);
  const [promptMode, setPromptMode] = useState<'optimized' | 'original' | 'code'>('optimized');

  const trInfo = SOURCE_TR_DESCRIPTIONS[item.sourceId];
  const displayCategory = locale === 'tr' && trInfo ? trInfo.categoryTr : item.category;
  const displayDesc = locale === 'tr' && trInfo && item.kind !== 'prompt' ? trInfo.desc : item.description;

  const activePromptText =
    promptMode === 'original' && item.originalPrompt
      ? item.originalPrompt
      : item.optimizedPrompt || item.originalPrompt;

  return (
    <article className="ms-card" data-testid={`catalog-card-${item.id}`}>
      {/* Visual-First Real Screenshot Preview */}
      <div
        className="ms-card-preview"
        onClick={() => onPreviewModal && onPreviewModal(item)}
        style={{ cursor: onPreviewModal ? 'zoom-in' : 'default' }}
      >
        <img
          src={item.previewSvg}
          alt={`${item.title} preview`}
          loading="lazy"
          width={800}
          height={500}
          style={{ transition: 'transform 280ms cubic-bezier(0.22, 1, 0.36, 1)' }}
        />
        <div className="ms-card-badges">
          <span className="ms-badge">{displayCategory}</span>
          <div style={{ display: 'flex', gap: 6 }}>
            {item.hasDemo && (
              <span className="ms-badge ms-badge-emerald">
                {t('Canlı Demo', 'Live Demo')}
              </span>
            )}
            {typeof item.stars === 'number' && item.stars > 0 && (
              <span className="ms-badge">★ {(item.stars / 1000).toFixed(1)}k</span>
            )}
          </div>
        </div>
      </div>

      <div className="ms-card-body">
        <div className="ms-card-meta">
          <span style={{ color: '#ff9c85', fontWeight: 600 }}>{item.sourceName}</span>
          <span>{item.technologies.slice(0, 2).join(' · ')}</span>
        </div>

        <h3 className="ms-card-title">
          <Link href={`/item/${item.slug}`}>{item.title}</Link>
        </h3>

        <p className="ms-card-desc">{displayDesc}</p>

        {inspectOpen && (
          <div
            style={{
              marginTop: 8,
              paddingTop: 12,
              borderTop: '1px solid var(--border-hairline)',
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}
          >
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }} role="tablist" aria-label="Prompt Version Tabs">
              {item.optimizedPrompt && (
                <button
                  type="button"
                  role="tab"
                  aria-selected={promptMode === 'optimized'}
                  className="ms-pill"
                  onClick={() => setPromptMode('optimized')}
                >
                  {t('Masallah Optimized Prompt', 'Masallah Optimized Prompt')}
                </button>
              )}
              {item.originalPrompt && (
                <button
                  type="button"
                  role="tab"
                  aria-selected={promptMode === 'original'}
                  className="ms-pill"
                  onClick={() => setPromptMode('original')}
                >
                  {t('Original Prompt', 'Original Prompt')}
                </button>
              )}
              {item.codeSnippet && (
                <button
                  type="button"
                  role="tab"
                  aria-selected={promptMode === 'code'}
                  className="ms-pill"
                  onClick={() => setPromptMode('code')}
                >
                  {t('Kod', 'Code')}
                </button>
              )}
            </div>

            <pre className="ms-code-block" style={{ maxHeight: 190 }}>
              {promptMode === 'code' ? item.codeSnippet : activePromptText}
            </pre>

            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {promptMode !== 'code' && activePromptText && (
                <CopyPromptButton
                  text={activePromptText}
                  label={t('Promptu Kopyala', 'Copy Prompt')}
                  copiedLabel={t('Kopyalandı ✓', 'Copied ✓')}
                />
              )}
              {promptMode === 'code' && item.codeSnippet && (
                <CopyPromptButton
                  text={item.codeSnippet}
                  label={t('Kodu Kopyala', 'Copy Code')}
                  copiedLabel={t('Kopyalandı ✓', 'Copied ✓')}
                  primary={false}
                />
              )}
            </div>
          </div>
        )}

        <div className="ms-card-footer">
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {onPreviewModal && (
              <button
                type="button"
                className="ms-btn ms-btn-primary"
                onClick={() => onPreviewModal(item)}
              >
                🔍 {t('Önizle & Prompt', 'Preview & Prompt')}
              </button>
            )}
            {(item.hasPrompt || item.hasCode) && (
              <button
                type="button"
                className="ms-btn"
                onClick={() => setInspectOpen((prev) => !prev)}
                aria-expanded={inspectOpen}
              >
                {inspectOpen ? t('Gizle', 'Hide') : t('Inspect Prompt', 'Inspect Prompt')}
              </button>
            )}
            {item.hasDemo && item.demoType && onOpenDemo && (
              <button
                type="button"
                className="ms-btn"
                onClick={() => onOpenDemo(item.demoType!)}
              >
                ▶ {t('Canlı Demo', 'Live Demo')}
              </button>
            )}
          </div>

          <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
            {item.sourceUrl && (
              <a
                href={sanitizeExternalHref(item.sourceUrl)}
                target="_blank"
                rel="noopener noreferrer"
                className="ms-btn"
                title={item.sourceName}
              >
                {t('Site ↗', 'Site ↗')}
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
