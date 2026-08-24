import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  serverExternalPackages: ["pg"],
  images: {
    qualities: [75, 90, 100],
  },
};

export default nextConfig;
