interface Link {
  text: string;
  href: string;
}

export async function load() {
  const pageContent = await import('../../../content/home.md');
  const {
    websiteTitle,
    headerLinks,
    socialLinks,
    footerLinks
  } = pageContent.metadata as {
    websiteTitle: string,
    headerLinks: Link[],
    socialLinks: Link[],
    footerLinks: Link[],
  };

  return {
    websiteTitle,
    headerLinks,
    socialLinks,
    footerLinks
  };
}

export const prerender = true;
export const trailingSlash = 'always';
