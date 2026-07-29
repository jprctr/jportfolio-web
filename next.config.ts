import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['smith.local'],
  output: "standalone",
};

export default nextConfig;
