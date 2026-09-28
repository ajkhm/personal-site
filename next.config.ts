import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
    // Optional: Add trailing slashes to generate /about/index.html instead of /about.html
    trailingSlash: true,
    // Optional: Required if using the default next/image component without a provider
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
