import { fetchPosts, fetchReviews } from '$lib/utils';

export async function load() {
	return {
		posts: ((await fetchPosts()).slice(0, 8)),
		reviews: ((await fetchReviews()).slice(0, 4))
	};
};
