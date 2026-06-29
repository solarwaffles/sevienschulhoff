/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/sevienschulhoff",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
