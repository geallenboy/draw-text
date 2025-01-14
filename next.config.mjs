import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "replicate.delivery"
      },
      {
        protocol: "https",
        hostname: "qwkccrpysbnsdqfweqki.supabase.co"
      }
    ]
  }
};

export default withNextIntl(nextConfig);
