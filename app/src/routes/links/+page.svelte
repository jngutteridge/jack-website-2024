<script>
  export let data;
  $: ({ title, detail, links, projectLinks, contributionLinks } = data);
</script>
<div class="container links-container">
  <h1 class="main-heading">{ title }</h1>
  <span class="main-details">{ detail }</span>
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
  <h2>Contributions</h2>
  <dl>
  {#each contributionLinks as {href, title, description}}
    <dt><a {href}>{title}</a></dt>
    <dd>{description}</dd>
  {/each}
  </dl>
  <a class="main-next-link" href="/">Go to homepage</a>
</div>
<svelte:head>
  <title>{ title }</title>
</svelte:head>
