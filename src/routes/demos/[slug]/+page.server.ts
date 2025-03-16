import { fetchDemos } from '$lib/utils';
import { error } from '@sveltejs/kit';

export async function load({ params: { slug } }) {

  const demos = await fetchDemos();
  const demo = demos.find(demo => demo.slug === slug);

  if (!demo) {
    throw error(404);
  }

  return { demo };
};
