import React from 'react';
import { HeaderNav } from '@/components/HeaderNav';
import { ArchiveExplorer } from '@/components/ArchiveExplorer';

export default function HomePage() {
  return (
    <>
      <HeaderNav activePath="/" />
      <main id="main-content">
        <ArchiveExplorer />
      </main>
    </>
  );
}
