import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { HeaderNav } from '@/components/HeaderNav';
import { CopyPromptButton } from '@/components/CopyPromptButton';
import { WORKFLOWS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Multi-Tool Workflows (AI Video, Interactive 3D, Product UI & Pixel VFX)',
  description:
    'Production-grade workflows connecting Remotion, Three.js, Jolt Physics, postprocessing, Three.quarks, Tweakpane, CosyVoice, librosa, WhisperX, FFmpeg, LosslessCut, Radix UI, shadcn/ui, Playwright, and OWASP.',
  alternates: {
    canonical: 'https://nazartesi.com/masallahpub/workflows',
  },
};

export default function WorkflowsPage() {
  return (
    <>
      <HeaderNav activePath="/workflows" />
      <main id="main-content" className="ms-container" style={{ paddingBottom: 80 }}>
        <section className="ms-hero">
          <div className="ms-eyebrow">CONNECTED PIPELINES · {WORKFLOWS.length} MULTI-SOURCE WORKFLOWS</div>
          <h1 className="ms-hero-title">
            Multi-Tool <em>Creative &amp; Engineering</em> Workflows
          </h1>
          <p className="ms-hero-subtitle">
            Instead of treating sources as isolated links, Masallah connects them into deterministic stage-by-stage pipelines with data handoffs and agent orchestration prompts.
          </p>
        </section>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 36, marginTop: 40 }}>
          {WORKFLOWS.map((wf) => (
            <section key={wf.id} className="ms-card" style={{ padding: 28 }} aria-label={wf.title}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 14 }}>
                <div>
                  <span className="ms-badge ms-badge-accent">{wf.stages.length} CONNECTED STAGES</span>
                  <h2 style={{ fontSize: 24, fontWeight: 750, marginTop: 8 }}>{wf.title}</h2>
                  <p style={{ color: 'var(--ink-secondary)', fontSize: 14.5, marginTop: 4 }}>{wf.subtitle}</p>
                </div>
                <CopyPromptButton text={wf.orchestrationPrompt} label="Copy Full Pipeline Prompt" />
              </div>

              <div className="ms-table-wrap" style={{ marginTop: 16, marginBottom: 20 }}>
                <table className="ms-table">
                  <thead>
                    <tr>
                      <th>Step</th>
                      <th>Stage</th>
                      <th>Tool / Source</th>
                      <th>Input Artifact</th>
                      <th>Output Artifact</th>
                      <th>Engineering Note</th>
                    </tr>
                  </thead>
                  <tbody>
                    {wf.stages.map((st) => (
                      <tr key={st.step}>
                        <td style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#ff9c85' }}>
                          {String(st.step).padStart(2, '0')}
                        </td>
                        <td style={{ fontWeight: 600 }}>{st.title}</td>
                        <td>
                          <Link href={`/?source=${st.sourceId}`} className="ms-badge">
                            {st.tool}
                          </Link>
                        </td>
                        <td style={{ fontSize: 12.5, color: 'var(--ink-secondary)' }}>{st.input}</td>
                        <td style={{ fontSize: 12.5, color: '#6ee7b7' }}>{st.output}</td>
                        <td style={{ fontSize: 12.5, color: 'var(--ink-secondary)' }}>{st.detail}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, color: '#ff9c85', marginBottom: 6 }}>
                  MASTER ORCHESTRATION PROMPT
                </div>
                <pre className="ms-code-block">{wf.orchestrationPrompt}</pre>
              </div>
            </section>
          ))}
        </div>
      </main>
    </>
  );
}
