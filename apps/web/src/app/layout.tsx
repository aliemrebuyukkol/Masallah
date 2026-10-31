import type { Metadata } from 'next';
import Link from 'next/link';
import { I18nProvider } from '@/lib/i18n';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://nazartesi.com'),
  title: {
    default: 'Masallah — Tasarım, Prompt, İnteraktif Demo ve Açık Kaynak Arşivi',
    template: '%s | Masallah Archive',
  },
  description:
    '46 ana tasarım, UI/UX, motion, component, 3D WebGL ve video üretim kaynağının gerçek ekran görüntüleri, prompt kütüphanesi, canlı demoları ve GitHub arşivi.',
  alternates: {
    canonical: 'https://nazartesi.com/masallahpub',
  },
  openGraph: {
    type: 'website',
    siteName: 'Masallah Archive',
    title: 'Masallah — Tasarım, Prompt, İnteraktif Demo ve Açık Kaynak Arşivi',
    description:
      '46 ana kaynağın gerçek önizlemeleri, 47 optimize edilmiş prompt, 35 açık kaynak repo, 10 canlı interaktif demo ve iş akışları.',
    url: 'https://nazartesi.com/masallahpub',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>
        <I18nProvider>
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
                  Masallah — Tasarım, Prompt, Motion &amp; Açık Kaynak Bilgi Bankası
                </div>
                <p style={{ fontSize: 13, color: 'var(--ink-secondary)' }}>
                  46 ana kaynağın tamamı lisans doğrulaması, gerçek ekran önizlemeleri ve kaynak atıflarıyla kataloglanmıştır. Üçüncü taraf ticari markalar ve açık kaynak kütüphaneler ilgili sahiplerine aittir.
                </p>
              </div>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center', fontSize: 13, fontFamily: 'var(--font-mono)' }}>
                <Link href="/">Keşfet / Explore</Link>
                <Link href="/sources">46 Kaynak</Link>
                <Link href="/prompts">Promptlar</Link>
                <Link href="/demos">Canlı Demolar</Link>
                <Link href="/repos">GitHub Repoları</Link>
                <Link href="/workflows">İş Akışları</Link>
                <a href="https://github.com/aliemrebuyukkol/Masallah" target="_blank" rel="noopener noreferrer">
                  GitHub v1.1.0 ↗
                </a>
              </div>
            </div>
          </footer>
        </I18nProvider>
      </body>
    </html>
  );
}
