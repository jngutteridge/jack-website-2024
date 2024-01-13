<script>
  export let data;
  $: ({ title, detail, Content } = data);
</script>
<div class="container">
  <h1 class="main-heading">{title}</h1>
  {#if detail}<span class="main-details">{detail}</span>{/if}
</div>
<article class="content">
  <svelte:component this={Content} />
</article>
<div class="container">
  <a class="main-next-link" href="/">Go back to homepage</a>
</div>

<svelte:head>
  <title>{title}</title>
</svelte:head>
