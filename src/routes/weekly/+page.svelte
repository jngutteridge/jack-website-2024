<script lang="ts">
	import { WeeklyPostLink, WeeklyPostList } from '$lib/components/weekly-post-list'

  let { data } = $props();
  let { postsByYear, count } = $derived(data);

</script>
<div class="max-w-[65ch] mx-auto">
  <h1 class="text-3xl pt-6 text-center max-w-[35ch] mx-auto text-balance">Weekly posts</h1>
  <span class="text-slate-500 text-sm pt-2 pb-6 text-center block">{count} posts</span>
  {#each postsByYear as { year, posts }}
    <h2 class="text-2xl text-slate-500 pt-6 pb-4">{year}</h2>
    <WeeklyPostList>
      {#each posts as {formattedDate, href}}
        <WeeklyPostLink {formattedDate} {href} />
      {/each}
    </WeeklyPostList>
  {/each}
  <a class="text-slate-500 my-6 underline block" href="/">Go back to homepage</a>
</div>

<svelte:head>
  <title>Weekly posts</title>
</svelte:head>
