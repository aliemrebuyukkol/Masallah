import type { CatalogItem } from '@/lib/data';
import { CATALOG } from '@/lib/data';
import { CatalogCard } from './CatalogCard';

/**
 * Storybook CSF3 Specification for Masallah CatalogCard (Section 24 & 26)
 */
const meta = {
  title: 'Masallah/CatalogCard',
  component: CatalogCard,
  tags: ['autodocs'],
};

export default meta;

export const DefaultDesignEntry = {
  args: {
    item: CATALOG.find((c) => c.kind === 'design') as CatalogItem,
  },
};

export const PromptWithOriginalAndOptimized = {
  args: {
    item: CATALOG.find((c) => c.id === 'prompt-pixelfx-procedural-vfx-skill') as CatalogItem,
  },
};

export const RepositoryWithLiveStars = {
  args: {
    item: CATALOG.find((c) => c.id === 'repo-threejs') as CatalogItem,
  },
};

export const InteractiveLiveDemoCard = {
  args: {
    item: CATALOG.find((c) => c.id === 'example-threejs-webgl-postprocessing-studio') as CatalogItem,
  },
};
