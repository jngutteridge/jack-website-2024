<script>
	import { PostLink, PostList } from '$lib/components/post-list'

  export let data;
  const { posts, Content, websiteTitle } = data;
</script>
<article class="home">
  <Content />
</article>
<div class="container">
  <h2 class="main-heading">Latest posts</h2>
  <PostList>
  {#each posts as {title, formattedDate, category, href, categorySlug}}
    <PostLink {title} {formattedDate} {category} {href} {categorySlug} />
  {/each}
  </PostList>
  <a class="main-next-link" href="/all">View all posts</a>
</div>

<svelte:head>
  <title>{websiteTitle}</title>
</svelte:head>
