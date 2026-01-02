<script>
  let { data } = $props();
  let { formattedDate } = $derived(data.post);
  let Content = $derived(data.Content);
</script>
<h1 class="text-3xl pt-6 pb-6 text-center max-w-[35ch] mx-auto text-balance">Post for the week of {formattedDate}</h1>
<article class="content prose mx-auto">
  <Content />
</article>
<div class="max-w-[65ch] mx-auto">
  <a class="text-slate-500 my-6 underline block" href="/weekly">Go to all weekly posts</a>
</div>

<svelte:head>
  <title>Post for the week of {formattedDate}</title>
</svelte:head>
