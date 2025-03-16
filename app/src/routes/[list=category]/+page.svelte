<script>
	import { PostLink, PostList } from '$lib/components/post-list'

  let { data } = $props();
  let { categoryTitle, posts } = $derived(data);
  let count = $derived(posts.length);
  let pageCategory  = $derived(data.categorySlug);
</script>
<div class="max-w-[65ch] mx-auto">
  <h1 class="text-3xl pt-6 text-center max-w-[35ch] mx-auto text-balance">{categoryTitle}</h1>
  <span class="text-slate-500 text-sm pt-2 pb-6 text-center block">{count} posts</span>
  <PostList>
    {#each posts as {title, formattedDate, category, href, categorySlug}}
      <PostLink {title} {category} {formattedDate} {href} {categorySlug} showCategory={pageCategory === 'all'} />
    {/each}
  </PostList>
  <a class="text-slate-500 my-6 underline block" href="/">Go back to homepage</a>
</div>

<svelte:head>
  <title>{categoryTitle}</title>
</svelte:head>
