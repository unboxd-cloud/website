export const metadata = {
  title: 'About | Unboxd Cloud',
  description: 'Unboxd Cloud is an enterprise composable agentic cloud native platform company.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="mb-6 inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">About Us</div>
        <h1 className="text-5xl font-black tracking-tight md:text-7xl">Engineering the infrastructure behind intelligent businesses.</h1>
        <p className="mt-8 text-xl leading-relaxed text-zinc-300">Unboxd Cloud builds composable platforms for publishing, commerce, identity, and cloud infrastructure. Our mission is to help organizations deploy agentic systems with enterprise-grade reliability, governance, and operational depth.</p>
      </section>
    </main>
  );
}
