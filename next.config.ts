import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ['three'],
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
