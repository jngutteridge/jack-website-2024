import { fetchReviews } from '$lib/utils';

export async function load() {
  const reviews = await fetchReviews();

  const books = reviews.filter(review => review.categorySlug === 'book');
  const music = reviews.filter(review => review.categorySlug === 'music');
  const live = reviews.filter(review => review.categorySlug === 'live');

  return { books, music, live, count: reviews.length }
}
