export async function load({ data: { post } }) {
  const postContent = await import(`../../../../content/weekly/${post.slug}.md`);
  const Content = postContent.default;

  return { Content, post };
}
