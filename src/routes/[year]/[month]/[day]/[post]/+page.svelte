<script>
  let { data } = $props();
  let { title, formattedDate, category, categorySlug } = $derived(data.post);
  let Content = $derived(data.Content);
</script>
<h1 class="text-5xl pt-6 text-center max-w-[35ch] mx-auto text-balance">{title}</h1>
<span class="text-slate-500 text-sm pt-2 pb-6 text-center block">Posted in <a href="/{categorySlug}" class="underline">{category}</a> on <date>{formattedDate}</date></span>
<article class="content prose mx-auto">
  <Content />
</article>
<div class="max-w-[65ch] mx-auto">
  <a class="text-slate-500 my-6 underline block" href="/">Go back to homepage</a>
</div>

<svelte:head>
  <title>{title}</title>
</svelte:head>
