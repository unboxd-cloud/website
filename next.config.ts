import type { NextConfig } from 'next';

const isGithubPages = process.env.GITHUB_ACTIONS === 'true';
const hasCustomDomain = process.env.CNAME === 'site.unboxd.cloud';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: isGithubPages && !hasCustomDomain ? '/website' : '',
  assetPrefix: isGithubPages && !hasCustomDomain ? '/website/' : '',
};

export default nextConfig;
