/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure output for maximum compatibility with static exports
  output: "export",
  // Set distDir to match Cloudflare Pages expectations
  distDir: ".next",
  // Allow trailing slash redirects directly at top level (not in experimental)
  skipTrailingSlashRedirect: true,
  // Other experimental features
  experimental: {
    // Set forceSwcTransforms for performance
    forceSwcTransforms: true,
  },
};

export default nextConfig;
