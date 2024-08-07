<script>
  export let data;
  $: ({ title, formattedDate, category, categoryHref, imgSrc } = data.review);
  $: Content = data.Content;
</script>
<h1 class="content-heading">{title}</h1>
<img class="review-image" src={imgSrc} alt="" />
<span class="main-details">Posted in <a href={categoryHref}>{category}</a> on <date>{formattedDate}</date></span>
<article class="content">
  <svelte:component this={Content} />
</article>
<div class="container">
  <a class="main-next-link" href="/">Go back to homepage</a>
</div>

<svelte:head>
  <title>{title}</title>
</svelte:head>
