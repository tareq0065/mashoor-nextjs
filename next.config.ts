import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // static exports for better performance
  output: 'standalone',

  // Image optimization
  images: {
    domains: [],
    formats: ['image/webp', 'image/avif'],
  },

  // Compression
  compress: true,

  // Performance optimizations
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
