const categoryTitles: { [key: string]: string } = {
  all: 'All posts',
  music: 'Music',
  software: 'Software',
  life: 'Life',
}

export function load({ params: { list }, data: { posts } }) {
  const categoryTitle = categoryTitles[list];

  return { categoryTitle, posts, categorySlug: list as string }
}
