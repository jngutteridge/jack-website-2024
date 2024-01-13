export async function load({ data: { posts } }) {
  const pageContent = await import('../../../content/home.md');
  const Content = pageContent.default;

  return {
    Content,
    posts,
  };
}
