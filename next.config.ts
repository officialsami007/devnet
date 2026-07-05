import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/process_automation", destination: "/docudex-workflow", permanent: true },
      { source: "/process-automation", destination: "/docudex-workflow", permanent: true },
      { source: "/document-management", destination: "/docudex-edms", permanent: true },
      { source: "/hris", destination: "/hrms", permanent: true }
    ];
  }
};

export default nextConfig;
