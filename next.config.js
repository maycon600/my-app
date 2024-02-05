const path = require("path");

module.exports = {
  reactStrictMode: false,
  pageExtensions: ["page.tsx", "page.ts", "api.tsx", "api.ts"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "**",
      },
    ],
  },
};
