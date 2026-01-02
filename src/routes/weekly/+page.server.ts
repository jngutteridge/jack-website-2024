import { fetchWeeklyPosts } from '$lib/utils';

export async function load() {
  const posts = await fetchWeeklyPosts();

  const postsByYear = posts.reduce((acc, post) => {
    const year = new Date(post.date).getFullYear().toString();
    if (!acc[year]) {
      acc[year] = { year, posts: [] };
    }
    acc[year].posts.push(post);
    return acc;
  }, {} as Record<string, {year: string, posts: typeof posts}>);

  return { postsByYear: Object.values(postsByYear), count: posts.length }
}