/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["github.com", "i.imgur.com", "res.cloudinary.com"],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
