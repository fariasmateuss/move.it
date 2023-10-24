await import('./src/env/server.mjs');

/**
 * @type {import('next').NextConfig}
 */

const config = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } },
    ],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },
};

export default config;
