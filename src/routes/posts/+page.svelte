<script lang="ts">
	import { PostLink, PostList } from '$lib/components/post-list'

  let { data } = $props();
  let { posts } = $derived(data);
  let count = $derived(posts.length);

  const postsByYear = $derived(posts.reduce((acc, post) => {
    const year = new Date(post.date).getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(post);
    return acc;
  }, {} as Record<string, typeof posts>));

  const years = $derived(Object.keys(postsByYear).sort((a, b) => Number(b) - Number(a)));
</script>
<div class="max-w-[65ch] mx-auto">
  <h1 class="text-3xl pt-6 text-center max-w-[35ch] mx-auto text-balance">Writing</h1>
  <span class="text-slate-500 text-sm pt-2 pb-6 text-center block">{count} posts</span>
  {#each years as year}
    <h2 class="text-2xl text-slate-500 pt-6 pb-4">{year}</h2>
    <PostList>
      {#each postsByYear[year] as {title, formattedDate, category, href, categoryHref}}
        <PostLink {title} {category} {formattedDate} {href} {categoryHref} />
      {/each}
    </PostList>
  {/each}
  <a class="text-slate-500 my-6 underline block" href="/">Go back to homepage</a>
</div>

<svelte:head>
  <title>All posts</title>
</svelte:head>
