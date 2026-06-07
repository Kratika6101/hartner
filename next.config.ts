import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  images: {
    // Replaces deprecated domains config
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "storage.justimmo.at",
      },
    ],

    // Allows these quality values
    qualities: [75, 90, 95],
  },
};

export default nextConfig;