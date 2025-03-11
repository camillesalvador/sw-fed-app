import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  // devIndicators: false
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
