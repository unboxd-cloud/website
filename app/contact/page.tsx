export const metadata = {
  title: 'Contact | Unboxd Cloud',
  description: 'Talk to Unboxd Cloud about agentic cloud solutions delivered at the edge.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="mb-6 inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">Contact</div>
        <h1 className="text-5xl font-black tracking-tight md:text-7xl">Let’s build your platform.</h1>
        <p className="mt-8 text-xl leading-relaxed text-zinc-300">Whether you are modernizing infrastructure, launching a platform, or exploring agentic automation, we’d love to hear about your goals.</p>
        <a href="mailto:hello@unboxd.cloud" className="mt-10 inline-flex rounded-full bg-cyan-400 px-7 py-4 font-semibold text-[#050816]">hello@unboxd.cloud</a>
      </section>
    </main>
  );
}
