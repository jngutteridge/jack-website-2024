import { fetchPosts } from '$lib/utils';

export async function load({ params: { list } }) {
  const posts = await fetchPosts();

  if (list === 'all') {
    return { posts };
  }

  return {
    posts: posts.filter(post => post.category.toLowerCase() === list),
  }
}
