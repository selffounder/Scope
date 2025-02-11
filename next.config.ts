import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
     
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.(js|ts)x?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
