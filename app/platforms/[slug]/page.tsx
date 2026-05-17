import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPlatform, platforms } from '../data';

export async function generateStaticParams() {
  return platforms.map((platform) => ({ slug: platform.slug }));
}

export default async function PlatformPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const platform = getPlatform(slug);

  if (!platform) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="mx-auto max-w-7xl px-6 py-24">
        <Link href="/platforms" className="text-sm text-cyan-300 hover:text-cyan-200">
          ← Back to Platforms
        </Link>

        <div className="mt-8 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">{platform.eyebrow}</p>
            <h1 className="mt-4 text-5xl font-black leading-tight tracking-tight md:text-7xl">
              {platform.headline}
            </h1>
            <p className="mt-8 text-xl leading-relaxed text-zinc-300">
              {platform.subheadline}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="/contact" className="rounded-full bg-cyan-400 px-7 py-4 font-semibold text-[#050816]">
                {platform.cta}
              </a>
              <a href="https://github.com/unboxd-cloud" className="rounded-full border border-white/15 px-7 py-4 font-semibold text-white">
                View Repository
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-cyan-400/20 bg-cyan-400/10 p-10">
            <div className="text-sm uppercase tracking-[0.25em] text-cyan-200">Platform Visual</div>
            <div className="mt-6 rounded-3xl border border-white/10 bg-[#050816]/60 p-10 text-center">
              <div className="text-sm text-zinc-400">Architecture Layer</div>
              <div className="mt-4 text-4xl font-bold text-white">{platform.visualLabel}</div>
              <div className="mt-6 grid gap-3">
                {platform.metrics.map((metric) => (
                  <div key={metric} className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-zinc-300">
                    {metric}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-bold">Overview</h2>
            <p className="mt-6 text-lg leading-relaxed text-zinc-300">{platform.overview}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-4xl font-bold">Key Capabilities</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {platform.capabilities.map((capability) => (
            <div key={capability} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-zinc-300">
              {capability}
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <h2 className="text-4xl font-bold">Ideal Use Cases</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {platform.useCases.map((useCase) => (
              <div key={useCase} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-zinc-300">
                {useCase}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
