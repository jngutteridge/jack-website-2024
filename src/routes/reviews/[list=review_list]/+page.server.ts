import { fetchReviews } from '$lib/utils';

const categoryTitles: { [key: string]: string } = {
  music: 'Music reviews',
  book: 'Book reviews',
  live: 'Live reviews',
};

export async function load({ params: { list } }) {
  const posts = await fetchReviews();

  const title = categoryTitles[list];
  const reviews = posts.filter(post => post.categorySlug === list);

  return { title, reviews, slug: list as string };
}
