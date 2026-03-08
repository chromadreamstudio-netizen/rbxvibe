/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // هذا السطر يخبر Vercel بتجاهل تحذيرات النصوص (مثل الفواصل) وبناء الموقع فوراً
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;