import { fetchReviews } from '$lib/utils';
import { error } from '@sveltejs/kit';

export async function load({ params: { slug } }) {

  const reviews = await fetchReviews();
  const review = reviews.find(review => review.slug === slug);

  if (!review) {
    throw error(404);
  }

  return { review };
};
