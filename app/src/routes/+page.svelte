<script>
	import { PostLink, PostList } from '$lib/components/post-list'
	import { ReviewLink, ReviewList } from '$lib/components/review-list'

  export let data;
  const { posts, reviews, Content, websiteTitle } = data;
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
<div class="container">
  <h2 class="main-heading">Latest reviews</h2>
  <ReviewList>
  {#each reviews as {title, formattedDate, category, href, categoryHref, imgSrc}}
    <ReviewLink {title} {formattedDate} {category} {href} {categoryHref} {imgSrc} />
  {/each}
  </ReviewList>
  <a class="main-next-link" href="/reviews">View all reviews</a>
</div>

<svelte:head>
  <title>{websiteTitle}</title>
</svelte:head>
