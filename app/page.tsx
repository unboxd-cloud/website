const platformLayers = [
  {
    title: 'Enterprise Cloud Foundation',
    description: 'Private, edge, and hybrid cloud infrastructure for regulated, distributed, and mission-critical environments.',
    items: ['OpenStack Private Cloud', 'MicroCloud Edge Cloud', 'Apache CloudStack Hybrid Cloud', 'S3-Compatible Object Storage'],
  },
  {
    title: 'Cloud Native Operations',
    description: 'Container lifecycle, image distribution, API routing, workload delivery, and service automation.',
    items: ['Podman Container Management', 'Harbor Registry', 'Apache APISIX Gateway', 'Edge Workload Delivery'],
  },
  {
    title: 'Identity, Access & Communication',
    description: 'Enterprise authentication, single sign-on, mail infrastructure, access control, and notification services.',
    items: ['Keycloak IAM', 'Logto SSO', 'Stalwart Mail Server', 'Novu Notifications'],
  },
  {
    title: 'Observability & Reliability',
    description: 'Monitoring, traces, logs, errors, service health, and operational visibility for distributed systems.',
    items: ['SigNoz Observability', 'GlitchTip Error Tracking', 'Service Health', 'Operational Alerts'],
  },
  {
    title: 'Composable Application Services',
    description: 'Enterprise application capabilities delivered as modular platform services across content, commerce, and publishing.',
    items: ['WordPress CMS', 'WooCommerce Commerce', 'Ghost Publishing', 'Postiz Social Publishing'],
  },
  {
    title: 'Agentic Operations Layer',
    description: 'Service-specific agents for deployment, management, monitoring, troubleshooting, optimization, and governance.',
    items: ['Service Agents', 'Agent Orchestration', 'Tool Registry', 'Agent Monitoring'],
  },
];

const deploymentModels = [
  ['Private Cloud', 'Dedicated enterprise infrastructure powered by OpenStack for controlled environments.'],
  ['Edge Cloud', 'Small-footprint distributed cloud infrastructure powered by MicroCloud for edge locations.'],
  ['Hybrid Cloud', 'Apache CloudStack-based infrastructure spanning private, hosted, and distributed environments.'],
  ['Composable Cloud', 'A modular architecture where infrastructure, identity, storage, APIs, observability, and applications are assembled as required.'],
];

const enterpriseCapabilities = [
  'Multi-tenant platform architecture',
  'Identity and access management',
  'Hybrid and private deployment options',
  'Cloud-native service composition',
  'Observability across infrastructure and applications',
  'API gateway and traffic management',
  'Operational agents for each service domain',
  'Open-source foundation with enterprise control',
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <header className="border-b border-white/10 bg-[#050816]/90">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="text-xl font-semibold tracking-tight">Unboxd Cloud</div>
          <nav className="hidden gap-8 text-sm text-zinc-400 md:flex">
            <a href="#architecture" className="hover:text-white">Architecture</a>
            <a href="#deployment" className="hover:text-white">Deployment</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#agents" className="hover:text-white">Agents</a>
            <a href="#enterprise" className="hover:text-white">Enterprise</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-28">
        <div className="max-w-5xl">
          <div className="mb-8 inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            Enterprise Composable Agentic Cloud Native Platform
          </div>

          <h1 className="text-5xl font-black leading-tight tracking-tight md:text-7xl">
            Cloud infrastructure composed for enterprise control, edge delivery, and autonomous operations.
          </h1>

          <p className="mt-10 max-w-4xl text-xl leading-relaxed text-zinc-300">
            Unboxd Cloud is an enterprise platform for assembling private cloud, edge cloud, hybrid cloud, identity, storage, APIs, observability, container services, publishing, commerce, and operational agents into a governed cloud-native ecosystem.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {['Composable', 'Cloud Native', 'Enterprise Grade', 'Agent Managed'].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-zinc-200">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="architecture" className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-14 max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">Platform Architecture</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">A layered enterprise cloud platform.</h2>
            <p className="mt-6 text-lg leading-relaxed text-zinc-400">
              The platform is organized into infrastructure, operations, identity, observability, application, and agentic operations layers. Each layer can be deployed independently or composed into a complete enterprise cloud environment.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {platformLayers.map((layer) => (
              <article key={layer.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
                <h3 className="text-2xl font-semibold">{layer.title}</h3>
                <p className="mt-4 leading-relaxed text-zinc-400">{layer.description}</p>
                <div className="mt-6 space-y-3">
                  {layer.items.map((item) => (
                    <div key={item} className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-zinc-300">
                      {item}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="deployment" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">Deployment Models</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">Designed for enterprise deployment flexibility.</h2>
            <p className="mt-6 text-lg leading-relaxed text-zinc-400">
              Unboxd Cloud supports controlled private environments, distributed edge locations, hybrid cloud estates, and composable service deployment. The platform is built for organizations that need ownership, portability, and operational control.
            </p>
          </div>

          <div className="grid gap-5">
            {deploymentModels.map(([title, description]) => (
              <div key={title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className="mt-3 text-zinc-400">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-14 max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">Service Ecosystem</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">A composable catalog of infrastructure and application services.</h2>
            <p className="mt-6 text-lg leading-relaxed text-zinc-400">
              Services can be adopted individually or combined into a full enterprise platform. New services can be added to the ecosystem as business, infrastructure, and operational requirements evolve.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
            {[
              'OpenStack', 'MicroCloud', 'Apache CloudStack', 'S3 Storage',
              'Podman', 'Harbor', 'Keycloak', 'Logto',
              'Stalwart Mail', 'APISIX', 'SigNoz', 'GlitchTip',
              'Novu', 'WordPress', 'WooCommerce', 'Ghost',
              'Postiz', 'Agent Platform', 'Model Runner', 'MCP Gateway',
            ].map((service) => (
              <div key={service} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 text-zinc-200">
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="agents" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">Agentic Operations</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">Each service domain can be paired with its own operational agent.</h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-zinc-400">
            <p>
              Agents are positioned as operational control units for service domains. They assist with provisioning, configuration, monitoring, remediation, scaling, documentation, and lifecycle management.
            </p>
            <p>
              The agentic layer does not replace enterprise governance. It extends operations teams with repeatable automation, service context, and domain-specific execution support.
            </p>
          </div>
        </div>
      </section>

      <section id="enterprise" className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-12 max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">Enterprise Characteristics</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">Built for organizations that require control, extensibility, and operational depth.</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {enterpriseCapabilities.map((capability) => (
              <div key={capability} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-zinc-300">
                {capability}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-10 text-center text-sm text-zinc-500">
        © 2026 Unboxd Cloud · Enterprise Composable Agentic Cloud Native Platform
      </footer>
    </main>
  );
}
