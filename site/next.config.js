/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Custom Workspaces',
    description: 'Workspaces Customized.',
    icon: 'https://i.imgur.com/snHliXV.png',
    listUrl: 'https://mohawkvader.github.com/codevortex',
    contactUrl: 'https://mohawkvader.github.com/codevortex',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
