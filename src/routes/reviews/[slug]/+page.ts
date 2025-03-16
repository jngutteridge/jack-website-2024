export async function load({ data: { review } }) {
  const reviewContent = await import(`../../../../content/reviews/${review.id}-${review.slug}.md`);
  const Content = reviewContent.default;

  return { Content, review };
}
