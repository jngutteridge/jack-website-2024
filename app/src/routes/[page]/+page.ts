import { error } from '@sveltejs/kit';
import type { SvelteComponent } from 'svelte';

export async function load({ params: { page } }) {

  try {
    const pageContent = await import(`../../../../content/${page}.md`);
    const Content = pageContent.default;
    const { title, detail } = pageContent.metadata;

    return {
      Content,
      title,
      detail,
    } as {
      Content: SvelteComponent,
      title: string,
      detail: string | undefined,
    }
  } catch (e) {
    throw error(404);
  }
}
