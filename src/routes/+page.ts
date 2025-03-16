import type { Component } from 'svelte';

export async function load({ data: { posts, reviews, demos } }) {
  const pageContent = await import('../../content/home.md');
  const Content = pageContent.default as Component;

  return {
    Content,
    posts,
    reviews,
    demos,
  };
}
