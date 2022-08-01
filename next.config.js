/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  productionBrowserSourceMaps: true,
}

module.exports = nextConfig