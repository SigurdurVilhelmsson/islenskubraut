/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['@react-pdf/renderer'],
  turbopack: {
    root: '.',
  },
};

export default nextConfig;
