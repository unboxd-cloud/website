import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
