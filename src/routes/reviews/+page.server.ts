import { fetchReviews } from '$lib/utils';

const categoryTitles: { [key: string]: string } = {
  music: 'Music',
  book: 'Books',
  live: 'Live',
  game: 'Games',
};

export async function load() {
  const reviews = await fetchReviews();

  const reviewsByCat = reviews.reduce((acc, review) => {
    const category = review.categorySlug;
    if (!acc[category]) {
      acc[category] = {
        name: categoryTitles[category] || category,
        reviews: []
      };
    }
    acc[category].reviews.push(review);
    return acc;
  }, {} as Record<string, {name: string, reviews: typeof reviews}>);

  return {
    reviews: Object.values(reviewsByCat),
    count: reviews.length
  };
}