/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io","cdn.shopify.com"],
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/', // The :path parameter isn't used here so will be automatically passed in the query
      },
    ];
  },
};

module.exports = nextConfig;
