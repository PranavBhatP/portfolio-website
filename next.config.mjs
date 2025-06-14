/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
    },
    basePath: "/portfolio-website",
    reactStrictMode: true,
    trailingSlash: true,
    // Remove output: "export" to enable dynamic routes and Sanity CMS
    // This requires deployment to Vercel, Netlify, or similar platforms instead of GitHub Pages
};

export default nextConfig;
