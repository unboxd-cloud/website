import Link from 'next/link';
import { platforms } from './data';

export const metadata = {
  title: 'Platforms | Unboxd Cloud',
  description: 'Explore the Unboxd Cloud platform ecosystem: publishing, commerce, infrastructure, and identity platforms for agentic cloud solutions delivered at the edge.',
};

export default function PlatformsPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            Platform Ecosystem
          </div>
          <h1 className="text-5xl font-black leading-tight tracking-tight md:text-7xl">
            Agentic cloud platforms delivered at the edge.
          </h1>
          <p className="mt-8 text-xl leading-relaxed text-zinc-300">
            Unboxd Cloud brings publishing, commerce, infrastructure, and identity into one composable platform ecosystem for modern digital businesses.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {platforms.map((platform) => (
            <Link
              key={platform.slug}
              href={`/platforms/${platform.slug}`}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 transition hover:border-cyan-400/40 hover:bg-white/[0.07]"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">{platform.eyebrow}</p>
                  <h2 className="mt-4 text-3xl font-bold">{platform.name}</h2>
                </div>
                <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-sm text-cyan-200">
                  {platform.repo}
                </div>
              </div>
              <p className="mt-6 text-lg leading-relaxed text-zinc-300">{platform.subheadline}</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {platform.metrics.map((metric) => (
                  <div key={metric} className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-zinc-300">
                    {metric}
                  </div>
                ))}
              </div>
              <div className="mt-8 font-semibold text-cyan-300 group-hover:text-cyan-200">Explore platform →</div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
