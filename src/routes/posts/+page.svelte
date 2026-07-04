<script lang="ts">
	import { PostLink, PostList } from '$lib/components/post-list'

  let { data } = $props();
  let { postsByYear, count } = $derived(data);

</script>
<div class="max-w-copy mx-auto">
  <h1 class="text-3xl pt-6 text-center max-w-[35ch] mx-auto text-balance">Writing</h1>
  <span class="text-slate-500 text-sm pt-2 pb-6 text-center block">{count} posts</span>
  {#each postsByYear as { year, posts }}
    <h2 class="text-2xl text-slate-500 pt-6 pb-4">{year}</h2>
    <PostList>
      {#each posts as {title, formattedDate, category, href, categoryHref}}
        <PostLink {title} {category} {formattedDate} {href} {categoryHref} />
      {/each}
    </PostList>
  {/each}
  <a class="text-slate-500 my-6 underline block" href="/">Go back to homepage</a>
</div>

<svelte:head>
  <title>All posts</title>
</svelte:head>
