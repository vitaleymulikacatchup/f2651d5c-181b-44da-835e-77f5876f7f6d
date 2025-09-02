import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: false,
typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
swcMinify: false,
images: { unoptimized: true },
output: 'standalone',
};

export default nextConfig;
