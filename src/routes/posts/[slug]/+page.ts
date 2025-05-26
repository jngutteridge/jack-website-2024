export async function load({ data: { post } }) {
  const postContent = await import(`../../../../content/posts/${post.id}-${post.slug}.md`);
  const Content = postContent.default;

  return { Content, post };
}
