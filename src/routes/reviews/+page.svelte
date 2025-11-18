<script>
	import { ReviewLink, ReviewList } from '$lib/components/review-list';

  let { data } = $props();
  let { reviews, count } = $derived(data);
  const showCategory = false;
</script>
<div class="max-w-[65ch] mx-auto">
  <h1 class="text-3xl pt-6 text-center max-w-[35ch] mx-auto text-balance">Reviews</h1>
  <span class="text-slate-500 text-sm pt-2 pb-6 text-center block">{count} reviews</span>

  {#each reviews as categoryGroup}
    <h2 class="text-2xl pt-8 pb-6 text-slate-500">{categoryGroup.name}</h2>
    <ReviewList>
      {#each categoryGroup.reviews as {title, formattedDate, category, href, categoryHref, imgSrc}}
        <ReviewLink {title} {category} {formattedDate} {href} {categoryHref} {showCategory} {imgSrc} />
      {/each}
    </ReviewList>
  {/each}

  <a class="text-slate-500 my-6 underline block" href="/">Go back to homepage</a>
</div>

<svelte:head>
  <title>Reviews</title>
</svelte:head>