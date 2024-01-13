<script>
  export let data;
  $: ({ title, formattedDate, category, categorySlug } = data.post);
  $: Content = data.Content;
</script>
<h1 class="content-heading">{title}</h1>
<span class="main-details">Posted in <a href="/{categorySlug}">{category}</a> on <date>{formattedDate}</date></span>
<article class="content">
  <svelte:component this={Content} />
</article>
<div class="container">
  <a class="main-next-link" href="/">Go back to homepage</a>
</div>

<svelte:head>
  <title>{title}</title>
</svelte:head>
