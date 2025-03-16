<script>
  let { data } = $props();
  let { title, detail, links, projectLinks } = $derived(data);
</script>
<div class="container links-container">
  <h1 class="text-3xl pt-6 text-center max-w-[35ch] mx-auto text-balance">{ title }</h1>
  <span class="text-slate-500 text-sm pt-2 pb-6 text-center block">{ detail }</span>
  <dl>
  {#each links as {href, title, description}}
    <dt><a {href}>{title}</a></dt>
    <dd>{description}</dd>
  {/each}
  </dl>
  <h2>Projects</h2>
  <dl>
  {#each projectLinks as {href, title, description}}
    <dt><a {href}>{title}</a></dt>
    <dd>{description}</dd>
  {/each}
  </dl>
  <a class="text-slate-500 my-6 underline block" href="/">Go to homepage</a>
</div>
<svelte:head>
  <title>{ title }</title>
</svelte:head>
