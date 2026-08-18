export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://apex.capital/sitemap.xml",
    host: "https://apex.capital",
  };
}
