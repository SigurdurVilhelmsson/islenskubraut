/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['@react-pdf/renderer'],
  turbopack: {
    root: '/var/www/islenskubraut',
  },
};

export default nextConfig;
