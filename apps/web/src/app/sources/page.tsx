import React from 'react';
import type { Metadata } from 'next';
import { HeaderNav } from '@/components/HeaderNav';
import { SourcesExplorer } from '@/components/SourcesExplorer';

export const metadata: Metadata = {
  title: '46 Kaynak Vitrini & Kapsam Matrisi | Source Explorer',
  description:
    'Explore all 46 master design, UI/UX, motion, component, architecture, testing, security, pixel VFX, 3D, and video toolchain sources in the Masallah registry with real screenshots and Turkish/English support.',
  alternates: {
    canonical: 'https://nazartesi.com/masallahpub/sources',
  },
};

export default function SourcesPage() {
  return (
    <>
      <HeaderNav activePath="/sources" />
      <SourcesExplorer />
    </>
  );
}
