  /** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      mdxRs: true,
    },
    // output: "export", gives static export 
    output: "export",
    basePath: '',
    // setting unoptimized option to true makes images work in static build
    images: {
      unoptimized: true,
    },
  }
   
  const withMDX = require('@next/mdx')()
  module.exports = withMDX(nextConfig)