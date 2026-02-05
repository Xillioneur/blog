import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/api';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://godofblogs.xyz';
  let posts = [];
  
  try {
    posts = getAllPosts();
  } catch (e) {
    console.error('Error fetching posts for sitemap:', e);
  }

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => {
    let lastMod = new Date();
    try {
      if (post.date) {
        lastMod = new Date(post.date);
      }
    } catch (e) {
      // fallback to current date
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
