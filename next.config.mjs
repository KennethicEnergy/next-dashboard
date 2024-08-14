/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    PROJECT_ID: process.env.PROJECT_ID,
    APP_ID: process.env.APP_ID,
    STORAGE_BUCKET: process.env.STORAGE_BUCKET,
    API_KEY: process.env.API_KEY,
    AUTH_DOMAIN: process.env.AUTH_DOMAIN,
    MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
  }
};

export default nextConfig;
