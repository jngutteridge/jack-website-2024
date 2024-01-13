import { fetchPosts } from '$lib/utils';

export async function load() {
	return { posts: ((await fetchPosts()).slice(0, 5)) };
};
