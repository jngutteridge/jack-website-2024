export async function load({ data: { posts, reviews, demos } }) {
  const pageContent = await import('../../../content/home.md');
  const Content = pageContent.default;

  return {
    Content,
    posts,
    reviews,
    demos,
  };
}
