/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export", gives static export
  output: "export",
  // setting unoptimized option to true makes images work in static build
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;