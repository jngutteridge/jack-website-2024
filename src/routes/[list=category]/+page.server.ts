import { fetchPosts } from '$lib/utils';

const categoryTitles: { [key: string]: string } = {
  all: 'All posts',
  music: 'Music',
  software: 'Software',
  life: 'Life',
};

export async function load({ params: { list } }) {
  const posts = await fetchPosts();

  const categoryTitle = categoryTitles[list];

  let categoryPosts;
  if (list === 'all') {
    categoryPosts = posts;
  } else {
    categoryPosts = posts.filter(post => post.category.toLowerCase() === list);
  }

  return { categoryTitle, posts: categoryPosts, categorySlug: list as string }
}
