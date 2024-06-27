/** @type {import('next').NextConfig} */
const nextConfig = {
    output:'export',

    images: {
        domains: ['firebasestorage.googleapis.com'],
    },
    experimental: {
        serverActions: true, 
      },
}


module.exports = nextConfig
