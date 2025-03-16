import { fetchPosts, fetchReviews, fetchDemos } from '$lib/utils';

export async function load() {
	return {
		posts: ((await fetchPosts()).slice(0, 6)),
		reviews: ((await fetchReviews()).slice(0, 4)),
		demos: ((await fetchDemos()).slice(0, 4)),
	};
};
