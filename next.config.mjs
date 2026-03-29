/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "growbilliontrees.com",
        pathname: "/cdn/shop/files/**",
      },
      {
        protocol: "https",
        hostname: "mizoramtourism.com",
        pathname: "/post_images/**",
      },
      {
        protocol: "https",
        hostname: "www.tourmyindia.com",
        pathname: "/socialimg/**",
      },
      {
        protocol: "https",
        hostname: "cdn.vastrashilpakosh.in",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
