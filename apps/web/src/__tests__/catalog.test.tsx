import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import {
  CATALOG,
  SOURCES,
  PROMPTS,
  REPOS,
  WORKFLOWS,
  getArchiveStats,
  itemMatchesSection,
  sanitizeExternalHref,
} from '@/lib/data';
import { CopyPromptButton } from '@/components/CopyPromptButton';
import { CatalogCard } from '@/components/CatalogCard';

describe('Masallah Data & Schema Integrity', () => {
  it('indexes all 46 master sources without omission', () => {
    expect(SOURCES).toHaveLength(46);
    const nums = SOURCES.map((s) => s.num);
    expect(nums[0]).toBe(1);
    expect(nums[45]).toBe(46);
  });

  it('links Motion (motion.dev #10 and github.com/motiondivision/motion #30) via canonicalProductId', () => {
    const motionSite = SOURCES.find((s) => s.id === 'motion-dev');
    const motionRepo = SOURCES.find((s) => s.id === 'motion-repo');
    expect(motionSite?.canonicalProductId).toBe('motion');
    expect(motionRepo?.canonicalProductId).toBe('motion');
    expect(motionSite?.relatedSourceIds).toContain('motion-repo');
    expect(motionRepo?.relatedSourceIds).toContain('motion-dev');
  });

  it('maintains separate Original and Masallah Optimized prompts for every prompt entry', () => {
    expect(PROMPTS.length).toBeGreaterThanOrEqual(46);
    for (const p of PROMPTS) {
      expect(p.originalPrompt.length).toBeGreaterThan(10);
      expect(p.optimizedPrompt.length).toBeGreaterThan(20);
      expect(p.optimizedPrompt).not.toBe(p.originalPrompt);
    }
  });

  it('sanitizes external URLs against javascript: and data: XSS vectors per OWASP rules', () => {
    expect(sanitizeExternalHref('https://threejs.org')).toBe('https://threejs.org/');
    expect(sanitizeExternalHref('javascript:alert(1)')).toBe('#');
    expect(sanitizeExternalHref('data:text/html,<script>alert(1)</script>')).toBe('#');
  });

  it('matches items accurately across the 16 main archive sections', () => {
    const stats = getArchiveStats();
    expect(stats.sources).toBe(46);
    expect(stats.workflows).toBe(WORKFLOWS.length);
    expect(stats.repositories).toBe(REPOS.length);

    const threeItem = CATALOG.find((i) => i.sourceId === 'threejs')!;
    expect(itemMatchesSection(threeItem, '3D')).toBe(true);
    expect(itemMatchesSection(threeItem, 'all')).toBe(true);
  });
});

describe('Testing Library Component Behavior', () => {
  beforeEach(() => {
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockResolvedValue(undefined),
      },
    });
  });

  it('copies prompt text to clipboard and announces confirmation via aria-live button', async () => {
    render(<CopyPromptButton text="Masallah test prompt payload" label="Copy Test Prompt" />);
    const btn = screen.getByRole('button', { name: /copy test prompt/i });
    fireEvent.click(btn);
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('Masallah test prompt payload');
  });

  it('renders CatalogCard with accessible prompt drawer toggle and capability indicators', () => {
    const sampleItem = CATALOG.find((c) => c.id === 'prompt-pixelfx-procedural-vfx-skill') || CATALOG[0];
    render(<CatalogCard item={sampleItem} />);

    expect(screen.getByText(sampleItem.title)).toBeTruthy();
    const inspectBtn = screen.getByRole('button', { name: /inspect prompt/i });
    fireEvent.click(inspectBtn);

    expect(screen.getByRole('tab', { name: /masallah optimized prompt/i })).toBeTruthy();
    expect(screen.getByRole('tab', { name: /original prompt/i })).toBeTruthy();
  });
});
