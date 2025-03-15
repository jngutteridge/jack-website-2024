<script>
  /** @type {{data: any}} */
  let { data } = $props();
  let { title, formattedDate, category, categorySlug } = $derived(data.post);
  let Content = $derived(data.Content);
</script>
<h1 class="content-heading">{title}</h1>
<span class="main-details">Posted in <a href="/{categorySlug}">{category}</a> on <date>{formattedDate}</date></span>
<article class="content">
  <Content />
</article>
<div class="container">
  <a class="main-next-link" href="/">Go back to homepage</a>
</div>

<svelte:head>
  <title>{title}</title>
</svelte:head>
