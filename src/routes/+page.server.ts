import { fetchPosts, fetchWeeklyPosts, fetchReviews, fetchDemos } from '$lib/utils';

interface Link {
  title: string;
	description: string;
  href: string;
}

export async function load() {
  const pageContent = await import('../../content/home.md');
  const {
    projectLinks,
  } = pageContent.metadata as {
    projectLinks: Link[],
  };

	return {
		posts: ((await fetchPosts()).slice(0, 6)),
    weeklyPosts: ((await fetchWeeklyPosts()).slice(0,4)),
		reviews: ((await fetchReviews()).slice(0, 4)),
		demos: ((await fetchDemos()).slice(0, 4)),
		projectLinks,
	};
};
