/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export',
  images: {
    unoptimized: true,
  },

  output: 'export',
  basePath: '/SWYR_P1',
  assetPrefix: '/SWYR_P1/',
}
 

export default nextConfig




