/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["img-api.neople.co.kr", "*"],
    },
    reactStrictMode: true,
    swcMinify: true,
};

module.exports = nextConfig;
