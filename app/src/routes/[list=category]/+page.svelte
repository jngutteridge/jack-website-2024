<script>
	import { PostLink, PostList } from '$lib/components/post-list'

  export let data;
  $: count = posts.length;
  $: pageCategory  = data.categorySlug;
  $: ({ categoryTitle, posts } = data);
</script>
<div class="container">
  <h1 class="main-heading">{categoryTitle}</h1>
  <span class="main-details">{count} posts</span>
  <PostList>
    {#each posts as {title, formattedDate, category, href, categorySlug}}
      <PostLink {title} {category} {formattedDate} {href} {categorySlug} showCategory={pageCategory === 'all'} />
    {/each}
  </PostList>
  <a class="main-next-link" href="/">Go back to homepage</a>
</div>

<svelte:head>
  <title>{categoryTitle}</title>
</svelte:head>
