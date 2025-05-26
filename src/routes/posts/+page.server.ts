import { fetchPosts } from '$lib/utils';

export async function load() {
  const posts = await fetchPosts();

  return { posts }
}
