import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://nazartesi.com'),
  title: {
    default: 'Masallah — Designs, Prompts, Experiments, Repositories & Creative References',
    template: '%s | Masallah Archive',
  },
  description:
    'A curated digital design archive, prompt library, motion & creative coding studio, and open-source repository index across 46 master sources.',
  alternates: {
    canonical: 'https://nazartesi.com/masallahpub',
  },
  openGraph: {
    type: 'website',
    siteName: 'Masallah Archive',
    title: 'Masallah — Designs, Prompts, Experiments, Repositories & Creative References',
    description:
      'Explore 46 master creative & engineering sources, 47 original + optimized prompts, 35 open-source repositories, 10 live interactive demos, and multi-tool workflows.',
    url: 'https://nazartesi.com/masallahpub',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <footer
          role="contentinfo"
          style={{
            borderTop: '1px solid var(--border-hairline)',
            padding: '48px 0',
            background: 'var(--bg-elevated)',
            marginTop: 64,
          }}
        >
          <div className="ms-container" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
            <div style={{ maxWidth: 540 }}>
              <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 6 }}>
                Masallah — Living Design, Prompt, Motion &amp; Repository Knowledge Base
              </div>
              <p style={{ fontSize: 13, color: 'var(--ink-secondary)' }}>
                All 46 master sources are indexed with strict license verification and source attribution. Third-party trademarks, designs, and linked open-source libraries remain the property of their respective authors.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center', fontSize: 13, fontFamily: 'var(--font-mono)' }}>
              <Link href="/">Explore</Link>
              <Link href="/sources">46 Sources</Link>
              <Link href="/prompts">Prompts</Link>
              <Link href="/repos">Repositories</Link>
              <Link href="/demos">Live Demos</Link>
              <Link href="/workflows">Workflows</Link>
              <a href="https://github.com/aliemrebuyukkol/Masallah" target="_blank" rel="noopener noreferrer">
                GitHub v1.0.0 ↗
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
