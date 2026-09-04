export interface BlogPost {
  slug: string;
  tag: string;
  title: string;
  desc: string;
  date: string;
  read: string;
  img: string;
  featured?: boolean;
  large?: boolean;
  views?: string;
  category?: string;
  content?: string;
  faqs?: { question: string; answer: string }[];
  num?: string;
}

// All blogs are now dynamically served from the backend MongoDB database.
// Static fallback array is empty.
export const blogPosts: BlogPost[] = [];

export const getFeaturedPosts = () => blogPosts.filter(post => post.featured || post.large);
export const getLatestArticles = () => blogPosts.slice(0, 3);
export const getTrendingPosts = () => blogPosts.map((post, index) => ({ ...post, num: `0${index + 1}` }));
export const getPostBySlug = (slug: string) => blogPosts.find(post => post.slug === slug);
