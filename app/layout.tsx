import './globals.css';
import type { Metadata } from 'next';

const siteUrl = 'https://unboxd-cloud.github.io/website/';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Unboxd Cloud | Enterprise Composable Cloud Native Platform',
  description:
    'Enterprise composable agentic cloud native platform for private cloud, edge cloud, hybrid cloud, identity, storage, APIs, observability, and autonomous operations.',
  keywords: [
    'enterprise cloud platform',
    'composable cloud',
    'agentic cloud',
    'private cloud',
    'edge cloud',
    'hybrid cloud',
    'OpenStack',
    'Apache CloudStack',
    'MicroCloud',
    'cloud native',
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: 'Unboxd Cloud',
    description:
      'Build, compose, and operate enterprise cloud platforms from end to end.',
    url: siteUrl,
    siteName: 'Unboxd Cloud',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unboxd Cloud',
    description:
      'Enterprise composable cloud native platform for private, edge, hybrid, and agent-managed operations.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
