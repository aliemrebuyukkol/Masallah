'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CatalogItem, sanitizeExternalHref } from '@/lib/data';
import { CopyPromptButton } from './CopyPromptButton';

interface CatalogCardProps {
  item: CatalogItem;
  onOpenDemo?: (demoType: string) => void;
}

export function CatalogCard({ item, onOpenDemo }: CatalogCardProps) {
  const [inspectOpen, setInspectOpen] = useState(false);
  const [promptMode, setPromptMode] = useState<'optimized' | 'original' | 'code'>('optimized');

  const activePromptText =
    promptMode === 'original' && item.originalPrompt
      ? item.originalPrompt
      : item.optimizedPrompt || item.originalPrompt;

  return (
    <article className="ms-card" data-testid={`catalog-card-${item.id}`}>
      <div className="ms-card-preview">
        <img
          src={item.previewSvg}
          alt={`${item.title} preview`}
          loading="lazy"
          width={800}
          height={500}
        />
        <div className="ms-card-badges">
          <span className="ms-badge">{item.category}</span>
          <div style={{ display: 'flex', gap: 6 }}>
            {item.hasDemo && <span className="ms-badge ms-badge-emerald">Live Demo</span>}
            {item.hasPrompt && <span className="ms-badge ms-badge-accent">Prompt</span>}
            {typeof item.stars === 'number' && item.stars > 0 && (
              <span className="ms-badge">★ {(item.stars / 1000).toFixed(1)}k</span>
            )}
          </div>
        </div>
      </div>

      <div className="ms-card-body">
        <div className="ms-card-meta">
          <span>
            {item.kind.toUpperCase()} · {item.sourceName}
          </span>
          <span>{item.license.slice(0, 22)}</span>
        </div>

        <h3 className="ms-card-title">
          <Link href={`/item/${item.slug}`}>{item.title}</Link>
        </h3>

        <p className="ms-card-desc">{item.description}</p>

        <div className="ms-tag-list" aria-label="Technologies and Tags">
          {item.technologies.slice(0, 3).map((tech) => (
            <span key={`tech-${tech}`} className="ms-tag" style={{ color: '#ff9c85' }}>
              {tech}
            </span>
          ))}
          {item.tags.slice(0, 3).map((tag) => (
            <span key={`tag-${tag}`} className="ms-tag">
              #{tag}
            </span>
          ))}
        </div>

        {/* Capability Indicators required by Section 17 */}
        <div
          style={{
            display: 'flex',
            gap: 10,
            fontSize: 11.5,
            fontFamily: 'var(--font-mono)',
            color: 'var(--ink-muted)',
          }}
        >
          <span>Prompt: {item.hasPrompt ? 'Yes' : 'No'}</span>
          <span>·</span>
          <span>Demo: {item.hasDemo ? 'Yes' : 'No'}</span>
          <span>·</span>
          <span>Code: {item.hasCode ? 'Yes' : 'No'}</span>
        </div>

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
                  Masallah Optimized Prompt
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
                  Original Prompt
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
                  Code / Spec
                </button>
              )}
            </div>

            <pre className="ms-code-block" style={{ maxHeight: 210 }}>
              {promptMode === 'code' ? item.codeSnippet : activePromptText}
            </pre>

            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {promptMode !== 'code' && activePromptText && (
                <CopyPromptButton
                  text={activePromptText}
                  label={promptMode === 'original' ? 'Copy Original Prompt' : 'Copy Optimized Prompt'}
                />
              )}
              {promptMode === 'code' && item.codeSnippet && (
                <CopyPromptButton text={item.codeSnippet} label="Copy Code Snippet" primary={false} />
              )}
            </div>
          </div>
        )}

        <div className="ms-card-footer">
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {(item.hasPrompt || item.hasCode) && (
              <button
                type="button"
                className="ms-btn"
                onClick={() => setInspectOpen((prev) => !prev)}
                aria-expanded={inspectOpen}
              >
                {inspectOpen ? 'Hide Prompt' : 'Inspect Prompt'}
              </button>
            )}
            {item.hasPrompt && (item.optimizedPrompt || item.originalPrompt) && !inspectOpen && (
              <CopyPromptButton
                text={item.optimizedPrompt || item.originalPrompt}
                label="Copy Prompt"
                primary={false}
              />
            )}
            {item.hasDemo && item.demoType && onOpenDemo && (
              <button
                type="button"
                className="ms-btn"
                onClick={() => onOpenDemo(item.demoType!)}
              >
                Launch Demo
              </button>
            )}
          </div>

          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            {item.sourceUrl && (
              <a
                href={sanitizeExternalHref(item.sourceUrl)}
                target="_blank"
                rel="noopener noreferrer"
                className="ms-btn"
                title={`Open canonical source: ${item.sourceName}`}
              >
                Source ↗
              </a>
            )}
            <Link href={`/item/${item.slug}`} className="ms-btn ms-btn-primary">
              Details →
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
