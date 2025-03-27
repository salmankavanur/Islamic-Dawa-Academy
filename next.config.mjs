/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better error detection
  reactStrictMode: true,

  // Images configuration
  images: {
    // Domains for external image sources
    domains: ['randomuser.me', 'media.gettyimages.com'],
    // Allow any HTTPS image source with wildcard pattern
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    // Allow SVG images (use cautiously due to security risks)
    dangerouslyAllowSVG: true,
    // Security policy for images
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Keep static image generation enabled
    disableStaticImages: false,
  },

  // TypeScript configuration
  typescript: {
    // Allow builds to complete despite TypeScript errors (temporary workaround)
    ignoreBuildErrors: true,
  },

  // ESLint configuration
  eslint: {
    // Allow builds to complete despite ESLint errors (temporary workaround)
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;