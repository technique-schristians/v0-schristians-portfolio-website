/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export', // This is the magic line
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ["*.vusercontent.net"],
}

export default nextConfig
