/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'api.degencdn.com',
            },
        ],
    },
};

export default nextConfig;
