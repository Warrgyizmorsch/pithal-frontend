import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/products/m-sand-crusher-plant",
        destination: "/products/m-sand-plant",
        permanent: true,
      },
      {
        source: "/products/crusher-machines",
        destination: "/products/crusher-machine",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
