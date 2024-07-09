// next.config.mjs
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*', // Match any API route under /api
        destination: 'http://localhost:5000/api/:path*' // Proxy to Flask API
      }
    ];
  }
};

export default nextConfig;
