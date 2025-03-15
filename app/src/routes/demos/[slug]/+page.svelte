<script>
  /** @type {{data: any}} */
  let { data } = $props();
  let { title, formattedDate } = $derived(data.demo);
  let Content = $derived(data.Content);
</script>
<h1 class="content-heading">{title}</h1>
<span class="main-details">Posted on <date>{formattedDate}</date></span>
<article class="content">
  <Content />
</article>
<div class="container">
  <a class="main-next-link" href="/">Go back to homepage</a>
</div>

<svelte:head>
  <title>{title}</title>
</svelte:head>
