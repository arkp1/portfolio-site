import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },

  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "motion-dom/dist/es/frameloop/frame.mjs":
        "motion-dom/dist/es/frameloop/index.mjs",
    };
    return config;
  },
};

export default nextConfig;
