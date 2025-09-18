/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: { locales: ["en-US", "fa-IR"], defaultLocale: "en-US" },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/de',
        permanent: false, // temporary redirect (307)
      },
    ];
  },
};

module.exports = nextConfig;
