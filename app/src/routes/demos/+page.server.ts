import { fetchDemos } from '$lib/utils';

export async function load() {
  const demos = await fetchDemos();

  return { demos, count: demos.length }
}
