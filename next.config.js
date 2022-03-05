const path = require("path");
require("dotenv").config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias["components"] = path.join(__dirname, "components");
    config.resolve.alias["public"] = path.join(__dirname, "public");

    return config;
  },
  env: {
    API_URL: process.env.API_URL,
  },
};

module.exports = nextConfig;
