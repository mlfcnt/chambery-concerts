const sitemap = require("nextjs-sitemap-generator");

sitemap({
  baseUrl: "https://chambery-concerts.vercel.app/",
  extraPaths: ["/prochains-concerts"],
  pagesDirectory: __dirname + "\\pages",
  targetDirectory: "static/",
  sitemapFilename: "sitemap.xml",
  ignoredExtensions: ["png", "jpg"],
});

console.log(`✅ sitemap.xml generated!`);
