import Link from 'next/link';

const navItems = [
  ['Platforms', '/platforms'],
  ['Solutions', '/solutions'],
  ['Industries', '/industries'],
  ['Blog', '/blog'],
  ['Case Studies', '/case-studies'],
  ['About', '/about'],
  ['Contact', '/contact'],
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href="/" className="text-xl font-semibold tracking-tight text-white">Unboxd Cloud</Link>
        <nav className="hidden gap-7 text-sm text-zinc-400 lg:flex">
          {navItems.map(([label, href]) => (
            <Link key={href} href={href} className="hover:text-white">{label}</Link>
          ))}
        </nav>
        <Link href="/contact" className="hidden rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-[#050816] md:inline-flex">Start a deployment</Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050816] px-6 py-12 text-zinc-400">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="text-xl font-semibold text-white">Unboxd Cloud</div>
          <p className="mt-4 max-w-md leading-relaxed">Agentic cloud solutions delivered at the edge for publishing, commerce, identity, and enterprise infrastructure.</p>
        </div>
        <div>
          <div className="font-semibold text-white">Company</div>
          <div className="mt-4 grid gap-3 text-sm">
            {navItems.map(([label, href]) => <Link key={href} href={href} className="hover:text-white">{label}</Link>)}
          </div>
        </div>
        <div>
          <div className="font-semibold text-white">Legal</div>
          <div className="mt-4 grid gap-3 text-sm">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
            <a href="mailto:hello@unboxd.cloud" className="hover:text-white">hello@unboxd.cloud</a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl text-sm text-zinc-500">© 2026 Unboxd Cloud. All rights reserved.</div>
    </footer>
  );
}
