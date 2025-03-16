interface Link {
  text: string;
  href: string;
}

export async function load({ url: { pathname } }) {
  const showSocialImage = pathname.split('/')[1] !== 'reviews';
  const pageContent = await import('../../content/home.md');
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
    showSocialImage,
    websiteTitle,
    headerLinks,
    socialLinks,
    footerLinks
  };
}
