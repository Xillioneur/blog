import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import { Metadata } from "next";
import { HOME_PAGE_IMAGE_URL } from "@/lib/constants";



export const metadata: Metadata = {
  // Override the generic title from layout → make it homepage-specific
  title: 'God of Blogs',  // or just 'God of Blogs' if you prefer no suffix
  // Optional: more precise description for homepage
  description: 'This is for all of us to cherish our time with God and develop the means to encourage each other to do the same thing with prose, script, and words.',
  // Critical for fixing your GSC duplicate issue
  alternates: {
    canonical: 'https://godofblgos.xyz',  // ← CHANGE THIS (no trailing slash!)
    // or use env var: process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.com'
  },
  // Optional: If you want homepage-specific OG/Twitter overrides
  // (otherwise they inherit from layout — which is usually fine)
  openGraph: {
    title: 'God of Blogs',  // uncomment only if you want to override
    description: 'Come and check out my website for free, God of Blogs.',
    images: [HOME_PAGE_IMAGE_URL],  // already good from layout
    url: 'https://godofblogs.xyz',  // helps social previews
  },
  twitter: {
    card: 'summary_large_image',
    title: 'God of Blogs',
    creator: '@Xillioneur',
    images: [HOME_PAGE_IMAGE_URL],
  },
};

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];
  
  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Container>
        <Intro />
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </main>
  );
}
