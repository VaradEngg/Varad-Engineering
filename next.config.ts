import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  compress: true,

  poweredByHeader: false,

  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,

    deviceSizes: [640, 750, 828, 1080, 1200, 1600, 1920, 2048],

    imageSizes: [32, 48, 64, 96, 128, 160, 200, 256, 320, 384, 480, 512, 640],

    qualities: [75, 80, 85, 90, 95, 100],
  },

  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;