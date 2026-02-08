/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "news.abhinaya.co.id",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  experimental: {
    serverComponentsExternalPackages: ['better-sqlite3'],
  },
  output: 'standalone',
};

module.exports = nextConfig;
