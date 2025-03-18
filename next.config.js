/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  distDir: process.env.NODE_ENV === "production" ? "build" : ".next",
  experimental: {
    turbo: false
  }
};

module.exports = nextConfig;