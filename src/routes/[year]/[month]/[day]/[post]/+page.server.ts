import { fetchPosts } from '$lib/utils';
import { error } from '@sveltejs/kit';

export async function load({ url: { pathname } }) {
  const [year, month, day, slug] = pathname.split('/').slice().slice(1);

  const posts = await fetchPosts();
  const post = posts.find(post => post.slug === slug);

  if (!post || post.date.getFullYear() !== Number(year) || post.date.getMonth() !== Number(month) - 1 || post.date.getDate() !== Number(day)) {
    throw error(404);
  }

  return { post };
};
