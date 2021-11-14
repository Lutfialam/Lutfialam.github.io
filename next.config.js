/** @type {import('next').NextConfig} */
module.exports = {
  assetPrefix: '.',
  // assetPrefix: "https://lutfialam.github.io/",
  reactStrictMode: true,
  // basePath: '/docs',
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};
