/** @type {import('next').NextConfig} */

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  productionBrowserSourceMaps: true,
}

module.exports = nextConfig