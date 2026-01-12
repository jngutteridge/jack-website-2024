import { fetchAllForFeed } from '$lib/utils';
import { PUBLIC_WEBSITE_HOSTNAME } from '$env/static/public'
import { render } from 'svelte/server';
import type { Component } from 'svelte';

export async function GET({ setHeaders }) {
  setHeaders({
    'Content-Type': 'application/xml'
  });

  const posts = await fetchAllForFeed();

  return new Response(generateFeed(posts));
}

const escape = (str: string) =>
	str
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&#039;');

const generateFeed = (posts: {
  date: Date;
  title: string;
  href: string;
  content: { default: Component };
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
<title>${escape(post.title)}</title>
<link>https://${PUBLIC_WEBSITE_HOSTNAME}${post.href}</link>
<description><![CDATA[${render(post.content.default).body}]]></description>
<pubDate>${new Date(post.date).toUTCString()}</pubDate>
</item>`
    )
    .join('')}
</channel>
</rss>
`;

export const prerender = true;
