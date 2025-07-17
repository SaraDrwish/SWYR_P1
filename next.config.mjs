/** @type {import('next').NextConfig} */
  const isGithubPages = process.env.NODE_ENV === 'production';

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export', 
  basePath: isGithubPages ? '/SWYR_P1' : '',
  assetPrefix: isGithubPages ? '/SWYR_P1/' : '',
};

export default nextConfig;
