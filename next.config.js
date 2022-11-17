const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    loader: 'akamai',
    path: '/',
  },
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,

      use: ['@svgr/webpack'],
    })
    return config
  },
  output: 'standalone',
}

module.exports = nextConfig
