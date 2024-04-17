/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/photos/**',
      },
    ],
    // TODO: may need to disable image optimization completely due to reaching limit
    // unoptimized: true,
  },
};

export default nextConfig;
