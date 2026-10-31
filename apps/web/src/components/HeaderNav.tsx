import React from 'react';
import Link from 'next/link';
import { getArchiveStats } from '@/lib/data';

interface HeaderNavProps {
  activePath?: string;
}

export function HeaderNav({ activePath = '/' }: HeaderNavProps) {
  const stats = getArchiveStats();

  return (
    <header className="ms-header" role="banner">
      <div className="ms-container ms-header-inner">
        <Link href="/" className="ms-brand" aria-label="Masallah Home">
          <span className="ms-brand-mark" aria-hidden="true">M</span>
          <div>
            <div className="ms-brand-title">Masallah</div>
            <div className="ms-brand-sub">Design · Prompt · Motion · 3D · Code Archive</div>
          </div>
        </Link>

        <nav className="ms-nav" aria-label="Main Archive Navigation">
          <Link href="/" className="ms-nav-link" data-active={activePath === '/' ? 'true' : 'false'}>
            Explore ({stats.totalCatalog})
          </Link>
          <Link href="/sources" className="ms-nav-link" data-active={activePath === '/sources' ? 'true' : 'false'}>
            Sources ({stats.sources})
          </Link>
          <Link href="/prompts" className="ms-nav-link" data-active={activePath === '/prompts' ? 'true' : 'false'}>
            Prompts ({stats.prompts})
          </Link>
          <Link href="/repos" className="ms-nav-link" data-active={activePath === '/repos' ? 'true' : 'false'}>
            Repositories ({stats.repositories})
          </Link>
          <Link href="/demos" className="ms-nav-link" data-active={activePath === '/demos' ? 'true' : 'false'}>
            Live Demos ({stats.liveDemos})
          </Link>
          <Link href="/workflows" className="ms-nav-link" data-active={activePath === '/workflows' ? 'true' : 'false'}>
            Workflows ({stats.workflows})
          </Link>
          <a
            href="https://github.com/aliemrebuyukkol/Masallah"
            target="_blank"
            rel="noopener noreferrer"
            className="ms-nav-link"
          >
            GitHub ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
