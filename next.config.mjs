/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/pearlsmile-dental',
  assetPrefix: '/pearlsmile-dental/',
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: { unoptimized: true },
}
export default nextConfig
