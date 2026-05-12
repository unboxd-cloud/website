export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="max-w-4xl">
          <div className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 mb-8">
            Composable Agentic Cloud Native Platform
          </div>

          <h1 className="text-6xl md:text-8xl font-black leading-tight tracking-tight">
            Composable Cloud Native Infrastructure
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400 mt-2">
              Powered by Agents.
            </span>
            <span className="block text-zinc-400 mt-2">
              Delivered on the Edge.
            </span>
          </h1>

          <p className="mt-10 text-xl text-zinc-300 leading-relaxed max-w-3xl">
            Build private, edge, and hybrid cloud ecosystems using modular open-source infrastructure and service-specific AI agents.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition px-8 py-4 text-black font-semibold">
              Explore Platform
            </button>

            <button className="rounded-2xl border border-white/20 hover:border-white/40 transition px-8 py-4 text-white">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl font-bold mb-4">Private Cloud</h3>
              <p className="text-zinc-400">OpenStack-powered enterprise cloud infrastructure.</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl font-bold mb-4">Edge Cloud</h3>
              <p className="text-zinc-400">MicroCloud distributed edge-native deployment.</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl font-bold mb-4">Hybrid Cloud</h3>
              <p className="text-zinc-400">Apache CloudStack orchestration across environments.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-3xl mb-16">
          <h2 className="text-5xl font-bold leading-tight">
            Every Service.
            <br />
            Its Own Intelligent Agent.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            'Harbor Registry',
            'Podman Containers',
            'Keycloak IAM',
            'Logto SSO',
            'APISIX Gateway',
            'SigNoz Observability',
            'GlitchTip Monitoring',
            'Novu Notifications',
            'WordPress CMS',
            'WooCommerce',
            'Ghost Publishing',
            'S3 Storage',
          ].map((service) => (
            <div
              key={service}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
            >
              <h3 className="text-xl font-semibold">{service}</h3>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 py-10 text-center text-zinc-500">
        © 2026 Unboxd Cloud · Compose. Deploy. Operate. Automate.
      </footer>
    </main>
  );
}
