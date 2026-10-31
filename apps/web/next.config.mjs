/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/masallahpub',
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
