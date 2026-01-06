/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://godofblogs.xyz',   
  generateRobotsTxt: true,                     // Also generates robots.txt (highly recommended)
  //sitemapSize: 7000,                           // Optional: split if you ever have thousands of posts
  // Optional extras you can add later:
  // exclude: ['/secret*', '/admin*'],
  // robotsTxtOptions: { policy: [{ userAgent: '*', allow: '/' }] },
};