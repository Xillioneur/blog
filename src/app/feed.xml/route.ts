import { getAllPosts } from "@/lib/api";

export async function GET() {
  const posts = getAllPosts();
  const baseUrl = "https://godofblogs.xyz";

  const itemsXml = posts
    .map((post) => {
      return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${baseUrl}/posts/${post.slug}</link>
      <guid>${baseUrl}/posts/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description>${escapeXml(post.excerpt)}</description>
    </item>`;
    })
    .join("");

  const rssXml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>God of Blogs</title>
    <link>${baseUrl}</link>
    <description>A blog for you, God, and everyone in life.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
    ${itemsXml}
  </channel>
</rss>`;

  return new Response(rssXml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

function escapeXml(unsafe: string) {
  return unsafe.replace(/[<>&"']/g, (c) => {
    switch (c) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      case '"':
        return "&quot;";
      case "'":
        return "&apos;";
    }
    return c;
  });
}
