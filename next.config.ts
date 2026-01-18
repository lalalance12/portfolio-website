import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configure Turbopack root directory to fix multiple lockfiles warning
  turbopack: {
    root: __dirname,
  },
  // Configure image optimization
  images: {
    qualities: [75, 85],
  },
};

export default nextConfig;
