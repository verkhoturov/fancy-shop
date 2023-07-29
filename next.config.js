/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_API_BACKEND: 'https://admin.groundedgenetics.com',
        NEXT_API_BACKEND_AFC: 'https://admin.groundedgenetics.com/wp-json/wp/v2/',
        WOOCOMMERCE_KEY: 'ck_9a01f2edd2d0ac5c13b30f10025faa5b7698f6fc',
        WOOCOMMERCE_SECRET: 'cs_0f95e949b58b4788a03d41f9207ec3a9c772ba44',
    },
    images: {
        dangerouslyAllowSVG: true,
        formats: ['image/webp'],
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
        domains: ['admin.groundedgenetics.com'],
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },
};

module.exports = nextConfig;
