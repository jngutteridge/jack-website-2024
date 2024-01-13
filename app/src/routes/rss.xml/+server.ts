import { fetchAllForFeed } from '$lib/utils';
import { PUBLIC_WEBSITE_HOSTNAME } from '$env/static/public'

export async function GET({ setHeaders }) {
  setHeaders({
    'Content-Type': 'application/xml'
  });

  const posts = await fetchAllForFeed();

  return new Response(render(posts));
}

const render = (posts: {
  slug: string;
  date: Date;
  formattedDate: string;
  title: string;
  category: string;
  categorySlug: string;
  href: string;
  path: string;
  id: string;
  content: unknown;
}[]) => `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<atom:link href="https://${PUBLIC_WEBSITE_HOSTNAME}/rss.xml" rel="self" type="application/rss+xml" />
<title>Jack Gutteridge</title>
<link>https://${PUBLIC_WEBSITE_HOSTNAME}/</link>
<description>Music, Software and Life by Jack Gutteridge</description>
${posts
    .map(
      (post) => `<item>
<guid>https://${PUBLIC_WEBSITE_HOSTNAME}${post.href}</guid>
<title>${post.title}</title>
<link>https://${PUBLIC_WEBSITE_HOSTNAME}${post.href}</link>
<description><![CDATA[${post.content.default.render().html}]]></description>
<pubDate>${new Date(post.date).toUTCString()}</pubDate>
</item>`
    )
    .join('')}
</channel>
</rss>
`;

export const prerender = true;
