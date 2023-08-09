/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['sangw.in', 'localhost', 'avatars.githubusercontent.com'] // <== Domain name
  }
}

module.exports = nextConfig
