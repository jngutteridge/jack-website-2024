<script>
	import { ReviewLink, ReviewList } from '$lib/components/review-list';

  /** @type {{data: any}} */
  let { data } = $props();
  let { books, live, music, count } = $derived(data);
  const showCategory = false;
</script>
<div class="container">
  <h1 class="main-heading">Reviews</h1>
  <span class="main-details">{count} reviews</span>
  <h2 class="main-heading">Books</h2>
  <ReviewList>
    {#each books as {title, formattedDate, category, href, categoryHref, imgSrc}}
      <ReviewLink {title} {category} {formattedDate} {href} {categoryHref} {showCategory} {imgSrc} />
    {/each}
  </ReviewList>
  <h2 class="main-heading">Live</h2>
  <ReviewList>
    {#each live as {title, formattedDate, category, href, categoryHref, imgSrc}}
      <ReviewLink {title} {category} {formattedDate} {href} {categoryHref} {showCategory} {imgSrc} />
    {/each}
  </ReviewList>
  <h2 class="main-heading">Music</h2>
  <ReviewList>
    {#each music as {title, formattedDate, category, href, categoryHref, imgSrc}}
      <ReviewLink {title} {category} {formattedDate} {href} {categoryHref} {showCategory} {imgSrc} />
    {/each}
  </ReviewList>
  <a class="main-next-link" href="/">Go back to homepage</a>
</div>

<svelte:head>
  <title>Reviews</title>
</svelte:head>
