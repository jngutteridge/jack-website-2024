import { error } from '@sveltejs/kit';

interface Link {
  title: string;
  description: string;
  href: string;
}

export async function load() {

  try {
    const pageContent = await import(`../../../../content/links.md`);
    const { title, links, projectLinks, contributionLinks, detail } = pageContent.metadata;

    return {
      title,
      detail,
      links,
      projectLinks,
      contributionLinks,
    } as {
      title: string,
      detail: string,
      links: Link[],
      projectLinks: Link[],
      contributionLinks: Link[],
    }
  } catch (e) {
    throw error(404);
  }
}
