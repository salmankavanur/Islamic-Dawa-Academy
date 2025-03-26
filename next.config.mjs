/** @type {import('next').NextConfig} */
const nextConfig = {
  // Other Next.js config option
  reactStrictMode: true,

  // Enable static exports
  output: 'export',
  distDir: 'out',

  // Configure images for static export
  images: {
    unoptimized: true,
    domains: ['randomuser.me', 'media.gettyimages.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
