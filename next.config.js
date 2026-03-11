/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Désactive l'optimisation Next pour servir directement /public/images/*
    unoptimized: true,
  },
};

module.exports = nextConfig;
