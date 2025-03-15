<script>
  /** @type {{data: any}} */
  let { data } = $props();
  let { title, detail, Content } = $derived(data);
</script>
<div class="container">
  <h1 class="main-heading">{title}</h1>
  {#if detail}<span class="main-details">{detail}</span>{/if}
</div>
<article class="content">
  <Content />
</article>
<div class="container">
  <a class="main-next-link" href="/">Go back to homepage</a>
</div>

<svelte:head>
  <title>{title}</title>
</svelte:head>
