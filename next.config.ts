import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "4mb",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "w0mlmrgwbziwquaq.public.blob.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "9bwp4zqzo37odphs.public.blob.vercel-storage.com", // Add this
      },
    ],
  },
};

export default nextConfig;
