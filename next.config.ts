/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "furniture-dm-bucket.s3.ap-northeast-2.amazonaws.com",
      "static.toss.im",
    ],
  },
};

module.exports = nextConfig;
