<script>
	import { DemosLink, DemosList } from '$lib/components/demos-list';

  export let data;
  $: ({ demos, count } = data);
</script>
<div class="container">
  <h1 class="main-heading">Demos</h1>
  <span class="main-details">{count} demos</span>
  <DemosList>
    {#each demos as {title, formattedDate, href }}
      <DemosLink {title} {formattedDate} {href} />
    {/each}
  </DemosList>
  <a class="main-next-link" href="/">Go back to homepage</a>
</div>

<svelte:head>
  <title>Reviews</title>
</svelte:head>
