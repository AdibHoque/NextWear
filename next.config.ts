import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nextwear.vercel.app",
        port: "",
      },
    ],
  },
};

export default nextConfig;
