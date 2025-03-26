/** @type {import('next').NextConfig} */
const nextConfig = {
  // Other Next.js config option
  reactStrictMode: true,

  // Note: For admin panel + API routes, we need to use server-side rendering
  // We'll set this in environment specific configurations
  output: process.env.EXPORT_MODE === 'true' ? 'export' : undefined,
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
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    disableStaticImages: false,
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
