/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  async redirects() {
    return [
      {
        source: "/share",
        destination: "https://g.page/r/CaUiPo6aPVQvEAE/review",
        permanent: false,
      },
      {
        source: "/direction",
        destination: "https://maps.app.goo.gl/rQMoHMLzyEVezEGc6",
        permanent: false,
      },
      {
        source: "/get-directions",
        destination: "https://maps.app.goo.gl/rQMoHMLzyEVezEGc6",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
