import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/api';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://godofblogs.xyz';
  let posts = [];
  
  try {
    posts = getAllPosts();
  } catch (e) {
    console.error('Error fetching posts for sitemap:', e);
  }

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => {
    let lastMod = new Date();
    if (post.date) {
      const parsedDate = new Date(post.date);
      if (!isNaN(parsedDate.getTime())) {
        lastMod = parsedDate;
      }
    }
    
    return {
      url: `${baseUrl}/posts/${post.slug}`,
      lastModified: lastMod,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    };
  });

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    ...postEntries,
  ];
}
