import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'], // Add your image domains here
  },
  experimental: {
    appDir: true, // Enable app directory
  },
  webpack: (config) => {
    // Custom webpack configuration if needed
    return config;
  },
  env: {
    APP_NAME: 'HouseIL',
    PRIMARY_COLOR: '#FFC0CB', // Pink color
    SECONDARY_COLOR: '#000000', // Black color
  },
};

export default nextConfig;