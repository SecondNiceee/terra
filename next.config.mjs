/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          maxInitialRequests: 1,
          maxAsyncRequests: 1,
          minSize: 0,
          cacheGroups: {
            styles: {
              name: 'styles',
              type: 'css/mini-extract',
              chunks: 'all',
              enforce: true,
            },
            default: {
              name: 'bundle',
              chunks: 'all',
              minChunks: 1,
              priority: -20,
              reuseExistingChunk: false,
            },
            defaultVendors: false,
          },
        },
      };
    }
    return config;
  },
};

export default nextConfig;
