import sourcesJson from '../../../../data/sources.json';
import promptsJson from '../../../../data/prompts.json';
import reposJson from '../../../../data/repos.json';
import examplesJson from '../../../../data/examples.json';
import catalogJson from '../../../../data/catalog.json';
import tagsJson from '../../../../data/tags.json';

export type CoverageStatus =
  | 'Indexed'
  | 'Partially Indexed'
  | 'Link Only'
  | 'License Restricted'
  | 'Access Restricted'
  | 'Unavailable';

export interface SourceRecord {
  id: string;
  num: number;
  name: string;
  section: string;
  category: string;
  status: CoverageStatus;
  statusNote: string;
  description: string;
  url: string;
  repositoryUrl: string;
  demoUrl: string;
  documentationUrl: string;
  license: string;
  author: string;
  tags: string[];
  technologies: string[];
  contentTypes: string[];
  canonicalProductId: string;
  relatedSourceIds: string[];
  stars: number | null;
  httpStatus: number | null;
  counts: {
    designs: number;
    prompts: number;
    repos: number;
    examples: number;
    workflows: number;
    total: number;
  };
  retrievedAt: string;
}

export interface VisualAnalysis {
  reference: string;
  layout: string;
  typography: string;
  colors: string;
  spacing: string;
  motion: string;
  components: string[];
}

export interface WorkflowStage {
  step: number;
  title: string;
  tool: string;
  sourceId: string;
  input: string;
  output: string;
  detail: string;
}

export interface CatalogItem {
  id: string;
  slug: string;
  kind: 'design' | 'prompt' | 'repository' | 'example' | 'workflow';
  title: string;
  description: string;
  category: string;
  sourceId: string;
  relatedSourceIds?: string[];
  sourceName: string;
  sourceUrl: string;
  repositoryUrl: string;
  demoUrl: string;
  license: string;
  author: string;
  tags: string[];
  technologies: string[];
  contentTypes: string[];
  hasPrompt: boolean;
  hasDemo: boolean;
  hasCode: boolean;
  demoType: string | null;
  visualAnalysis?: VisualAnalysis;
  originalPrompt: string;
  optimizedPrompt: string;
  exampleInput?: string;
  exampleOutput?: string;
  model?: string;
  stars?: number;
  forks?: number;
  language?: string;
  installation?: string;
  keyFeatures?: string[];
  isSecondaryMirror?: boolean;
  canonicalProductId?: string;
  stages?: WorkflowStage[];
  codeSnippet: string;
  previewSvg: string;
  featured: boolean;
}

export const SOURCES = sourcesJson as SourceRecord[];
export const PROMPTS = promptsJson;
export const REPOS = reposJson;
export const WORKFLOWS = examplesJson.workflows;
export const EXAMPLES = examplesJson.examples;
export const DESIGNS = examplesJson.designs;
export const CATALOG = catalogJson as CatalogItem[];
export const TAGS_INDEX = tagsJson;

/**
 * All 16 main navigation sections required by Masallah spec (Section 15)
 */
export const MAIN_SECTIONS = [
  { id: 'all', label: 'All Archive', matchCategories: [] as string[], matchKinds: [] as string[] },
  { id: 'Designs', label: 'Designs', matchCategories: ['Design'], matchKinds: ['design'] },
  { id: 'Prompts', label: 'Prompts', matchCategories: ['Prompt', 'Agent Skill'], matchKinds: ['prompt'] },
  { id: 'UI / UX', label: 'UI / UX', matchCategories: ['UI', 'UX'], matchKinds: [] },
  { id: 'Motion', label: 'Motion', matchCategories: ['Motion', 'Interaction'], matchKinds: [] },
  { id: 'Components', label: 'Components', matchCategories: ['Component', 'Design System'], matchKinds: [] },
  { id: 'Repositories', label: 'Repositories', matchCategories: ['Repository'], matchKinds: ['repository'] },
  { id: 'Creative Coding', label: 'Creative Coding', matchCategories: ['Creative Coding', 'VFX'], matchKinds: [] },
  { id: '3D', label: '3D & WebGL', matchCategories: ['3D', 'WebGL'], matchKinds: [] },
  { id: 'Video', label: 'Video & Audio', matchCategories: ['Video', 'Audio', 'Generative AI'], matchKinds: [] },
  { id: 'Workflows', label: 'Workflows', matchCategories: ['Workflow'], matchKinds: ['workflow'] },
  { id: 'Frontend', label: 'Frontend', matchCategories: ['Frontend'], matchKinds: [] },
  { id: 'Architecture', label: 'Architecture', matchCategories: ['Architecture'], matchKinds: [] },
  { id: 'Testing', label: 'Testing', matchCategories: ['Testing'], matchKinds: [] },
  { id: 'Security', label: 'Security', matchCategories: ['Security'], matchKinds: [] },
  { id: 'Resources', label: 'Resources & Tools', matchCategories: ['Tool', 'Agent Skill', 'Documentation'], matchKinds: [] },
] as const;

export function itemMatchesSection(item: CatalogItem, sectionId: string): boolean {
  if (!sectionId || sectionId === 'all') return true;
  const sec = MAIN_SECTIONS.find((s) => s.id === sectionId);
  if (!sec) {
    return (
      item.category.toLowerCase() === sectionId.toLowerCase() ||
      item.contentTypes.some((ct) => ct.toLowerCase() === sectionId.toLowerCase())
    );
  }
  if ((sec.matchKinds as readonly string[]).includes(item.kind)) return true;
  if ((sec.matchCategories as readonly string[]).includes(item.category)) return true;
  return item.contentTypes.some((ct) => (sec.matchCategories as readonly string[]).includes(ct));
}

export function sanitizeExternalHref(rawUrl: string): string {
  if (!rawUrl) return '#';
  try {
    const parsed = new URL(rawUrl.trim());
    if (parsed.protocol === 'https:' || parsed.protocol === 'http:') {
      return parsed.toString();
    }
    return '#';
  } catch {
    return '#';
  }
}

export function getArchiveStats() {
  return {
    sources: SOURCES.length,
    designs: DESIGNS.length,
    prompts: PROMPTS.length,
    repositories: REPOS.length,
    components: CATALOG.filter((i) => i.category === 'Component' || i.category === 'Design System').length,
    motionExamples: CATALOG.filter((i) => i.category === 'Motion' || i.contentTypes.includes('Motion')).length,
    threeDExperiments: CATALOG.filter((i) => i.category === '3D' || i.category === 'WebGL' || i.category === 'VFX').length,
    workflows: WORKFLOWS.length,
    liveDemos: EXAMPLES.filter((e) => e.hasLiveDemo).length,
    totalCatalog: CATALOG.length,
  };
}
