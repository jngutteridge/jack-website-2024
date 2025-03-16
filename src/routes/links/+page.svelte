<script>
  let { data } = $props();
  let { title, detail, links, projectLinks } = $derived(data);
</script>
<div class="max-w-[65ch] mx-auto">
  <h1 class="text-3xl pt-6 text-center max-w-[35ch] mx-auto text-balance">{ title }</h1>
  <span class="text-slate-500 text-sm pt-2 pb-6 text-center block">{ detail }</span>
  <dl>
  {#each links as {href, title, description}}
    <dt><a {href} class="text-slate-600 underline">{title}</a></dt>
    <dd class="mb-4">{description}</dd>
  {/each}
  </dl>
  <h2 class="text-xl text-slate-800 mt-10 mb-4">Projects</h2>
  <dl>
  {#each projectLinks as {href, title, description}}
    <dt><a {href} class="text-slate-600 underline">{title}</a></dt>
    <dd class="mb-4">{description}</dd>
  {/each}
  </dl>
  <a class="text-slate-500 my-6 underline block" href="/">Go to homepage</a>
</div>
<svelte:head>
  <title>{ title }</title>
</svelte:head>
