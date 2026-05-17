export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050816] px-6 text-white">
      <section className="max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">404</p>
        <h1 className="mt-4 text-5xl font-black tracking-tight md:text-6xl">Page not found</h1>
        <p className="mt-6 text-lg leading-relaxed text-zinc-400">
          The page you are looking for does not exist or may have moved. Return to the Unboxd Cloud homepage to continue exploring the platform.
        </p>
        <a
          href="/website/"
          className="mt-8 inline-flex rounded-full bg-cyan-400 px-7 py-4 font-semibold text-[#050816] hover:bg-cyan-300"
        >
          Back to homepage
        </a>
      </section>
    </main>
  );
}
