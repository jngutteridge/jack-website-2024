<script>
	import { ReviewLink, ReviewList } from '$lib/components/review-list';

  /** @type {{data: any}} */
  let { data } = $props();
  let { title, reviews, slug } = $derived(data);
  let count = $derived(reviews.length);
  const showCategory = false;
</script>
<div class="container">
  <h1 class="main-heading">{title}</h1>
  <span class="main-details">{count} reviews</span>
  <ReviewList>
    {#each reviews as {title, formattedDate, category, href, categoryHref, imgSrc}}
      <ReviewLink {title} {category} {formattedDate} {href} {categoryHref} {showCategory} {imgSrc} />
    {/each}
  </ReviewList>
  <a class="main-next-link" href="/reviews">View all reviews</a>
</div>

<svelte:head>
  <title>{title}</title>
</svelte:head>
