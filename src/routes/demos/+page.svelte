<script>
	import { DemosLink, DemosList } from '$lib/components/demos-list';

  let { data } = $props();
  let { demos, count } = $derived(data);
</script>
<div class="max-w-[65ch] mx-auto">
  <h1 class="text-3xl pt-6 text-center max-w-[35ch] mx-auto text-balance">Demos</h1>
  <span class="text-slate-500 text-sm pt-2 pb-6 text-center block">{count} demos</span>
  <DemosList>
    {#each demos as {title, formattedDate, href }}
      <DemosLink {title} {formattedDate} {href} />
    {/each}
  </DemosList>
  <a class="text-slate-500 my-6 underline block" href="/">Go back to homepage</a>
</div>

<svelte:head>
  <title>Reviews</title>
</svelte:head>
