/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    PROJECT_ID: process.env.PROJECT_ID,
    APP_ID: process.env.APP_ID,
    DATABASE_URL: process.env.DATABASE_URL,
    STORAGE_BUCKET: process.env.STORAGE_BUCKET,
    LOCATION_ID: process.env.LOCATION_ID,
    API_KEY: process.env.API_KEY,
    AUTH_DOMAIN: process.env.AUTH_DOMAIN,
    MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
    MEASUREMENT_ID: process.env.MEASUREMENT_ID
  }
};

export default nextConfig;
