/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,

    /* ----- //external domains images ---- */
    //   images: {
    //     domains: [],
    //   },
  },
};

module.exports = nextConfig;
