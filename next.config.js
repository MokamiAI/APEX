/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        // Kill HTML caching at the browser AND any proxy: the preview must always
        // show the latest deployed build.
        source: "/:path*",
        headers: [
          { key: "Cache-Control", value: "no-store, max-age=0, must-revalidate" },
          { key: "Pragma", value: "no-cache" },
          { key: "Expires", value: "0" },
          { key: "X-Apex-Build", value: process.env.NEXT_PUBLIC_BUILD_TAG || "v2.3" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
