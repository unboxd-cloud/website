import './globals.css';
import type { Metadata } from 'next';
import { Header, Footer } from './components/SiteShell';

const siteUrl = 'https://unboxd.cloud';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Unboxd Cloud | Enterprise Composable Cloud Native Platform',
  description:
    'Enterprise composable agentic cloud native platform for private cloud, edge cloud, hybrid cloud, identity, storage, APIs, observability, and autonomous operations.',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: 'Unboxd Cloud',
    description: 'Agentic cloud solutions delivered at the edge.',
    url: siteUrl,
    siteName: 'Unboxd Cloud',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#050816] text-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
