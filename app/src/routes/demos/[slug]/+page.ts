export async function load({ data: { demo } }) {
  const demoContent = await import(`../../../../../content/demos/${demo.id}-${demo.slug}.md`);
  const Content = demoContent.default;

  return { Content, demo };
}
