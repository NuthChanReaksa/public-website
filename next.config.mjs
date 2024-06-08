/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    images: {
        domains: [
            "istad.co","i.pinimg.com","images.remotePatterns","www.google.com"
        ],
    },
};

export default nextConfig;
