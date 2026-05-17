const industries = ['Technology and SaaS','Media and Publishing','E-commerce and Retail','Financial Services','Healthcare','Professional Services','Education','Manufacturing'];

export const metadata = {
  title: 'Industries | Unboxd Cloud',
  description: 'Industry solutions for SaaS, media, e-commerce, financial services, healthcare, and enterprise organizations.',
};

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="mx-auto max-w-7xl px-6 py-24">
        <h1 className="text-5xl font-black tracking-tight md:text-7xl">Platforms built for modern industries.</h1>
        <p className="mt-8 max-w-4xl text-xl leading-relaxed text-zinc-300">Our platform ecosystem supports organizations building digital products, content operations, commerce systems, and enterprise cloud environments.</p>
        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => <div key={industry} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-zinc-300">{industry}</div>)}
        </div>
      </section>
    </main>
  );
}
