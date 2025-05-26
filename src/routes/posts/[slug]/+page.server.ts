import { fetchPosts } from '$lib/utils';
import { error } from '@sveltejs/kit';

export async function load({ params: { slug } }) {
  const posts = await fetchPosts();
  const post = posts.find(post => post.slug === slug);

  if (!post) throw error(404, 'Page not found');

  return { post };
};
