import type { Component } from 'svelte';

export async function load({ data: { posts, weeklyPosts, reviews, demos, projectLinks } }) {
  const pageContent = await import('../../content/home.md');
  const Content = pageContent.default as Component;

  return {
    Content,
    posts,
    weeklyPosts,
    reviews,
    demos,
    projectLinks,
  };
}
