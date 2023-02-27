/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  env : {
    DB_URI : 'mongodb://localhost:27017/next13-auth',
    NEXTAUTH_SECRET : 'letsTryAndLearn',
    GOOGLE_CLIENT_ID : '698135013817-itju2c73bk7j5u073107ia0nh49olhaf.apps.googleusercontent.com',
    GOOGLE_CLIENT_SECRET : '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'
  }
};

module.exports = nextConfig;
