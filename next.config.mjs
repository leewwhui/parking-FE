/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: process.env.BASE_URL,
    AUTH_TOKEN: process.env.AUTH_TOKEN,
  }
};

export default nextConfig;
