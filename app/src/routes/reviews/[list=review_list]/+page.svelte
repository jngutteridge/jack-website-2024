<script>
	import { ReviewLink, ReviewList } from '$lib/components/review-list';

  let { data } = $props();
  let { title, reviews, slug } = $derived(data);
  let count = $derived(reviews.length);
  const showCategory = false;
</script>
<div class="max-w-[65ch] mx-auto">
  <h1 class="text-3xl pt-6 text-center max-w-[35ch] mx-auto text-balance">{title}</h1>
  <span class="text-slate-500 text-sm pt-2 pb-6 text-center block">{count} reviews</span>
  <ReviewList>
    {#each reviews as {title, formattedDate, category, href, categoryHref, imgSrc}}
      <ReviewLink {title} {category} {formattedDate} {href} {categoryHref} {showCategory} {imgSrc} />
    {/each}
  </ReviewList>
  <a class="text-slate-500 my-6 underline block" href="/reviews">View all reviews</a>
</div>

<svelte:head>
  <title>{title}</title>
</svelte:head>
