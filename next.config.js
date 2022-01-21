const withPWA = require("next-pwa");

/** @type {import("next").NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        SOURCE_URL: process.env.SOURCE_URL
    },
    pwa: {
        dest: "public",
        register: true,
        skipWaiting: true,
        //disable: process.env.NODE_ENV === "production"
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"]
        });
        return config;
    }
};

module.exports = withPWA(nextConfig);
