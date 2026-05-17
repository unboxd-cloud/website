const solutions = [
  {
    title: 'Agentic Cloud Operations',
    description: 'Deploy service-specific agents that assist with provisioning, monitoring, remediation, documentation, and lifecycle operations across cloud environments.',
    points: ['Operational agents', 'Workflow automation', 'Governed execution', 'Service lifecycle management'],
  },
  {
    title: 'Composable Infrastructure',
    description: 'Build private, edge, and hybrid cloud foundations using modular infrastructure services designed for enterprise control.',
    points: ['Private cloud', 'Edge cloud', 'Hybrid cloud', 'Open-source foundation'],
  },
  {
    title: 'Content and Commerce Platforms',
    description: 'Launch publishing and commerce platforms that connect content, storefronts, workflows, and analytics into one operating model.',
    points: ['Multi-brand publishing', 'Composable commerce', 'SEO operations', 'Analytics'],
  },
  {
    title: 'Identity and Platform Security',
    description: 'Secure every product, tenant, agent, and API with identity, access control, auditability, and platform-level governance.',
    points: ['Authentication', 'Authorization', 'RBAC', 'Tenant isolation'],
  },
];

export const metadata = {
  title: 'Solutions | Unboxd Cloud',
  description: 'Agentic cloud, composable infrastructure, publishing, commerce, identity, and platform security solutions delivered at the edge.',
};

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">Solutions</div>
          <h1 className="text-5xl font-black leading-tight tracking-tight md:text-7xl">Solutions for building intelligent cloud-native businesses.</h1>
          <p className="mt-8 text-xl leading-relaxed text-zinc-300">Unboxd Cloud combines infrastructure, identity, publishing, commerce, and agentic operations into modular solutions that help teams move faster with enterprise control.</p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {solutions.map((solution) => (
            <article key={solution.title} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
              <h2 className="text-3xl font-bold">{solution.title}</h2>
              <p className="mt-5 text-lg leading-relaxed text-zinc-300">{solution.description}</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {solution.points.map((point) => <div key={point} className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-zinc-300">{point}</div>)}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
