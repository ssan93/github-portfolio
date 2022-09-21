/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {    
    loader: 'akamai',
    path: '',
    domains: ["github.com", "i.imgur.com", "res.cloudinary.com"],
  }
}

module.exports = nextConfig
