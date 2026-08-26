/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Porfolio_2',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  trailingSlash: true,
}

module.exports = nextConfig
