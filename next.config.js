/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: false,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.google.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Enable optimizations for better SEO and performance
  trailingSlash: true,
  
  // Optimize for programmatic SEO with better concurrency control
  generateBuildId: async () => {
    return 'emergency-water-pros-build'
  },
  
  // Reduce concurrent builds to prevent Jest worker overload
  experimental: {
    // Limit parallel static generation
    workerThreads: false,
    cpus: 1
  },
}

module.exports = nextConfig