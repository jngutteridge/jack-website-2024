<script lang="ts">
  interface Props {
    title: string;
    category: string;
    formattedDate: string;
    href: string;
    showCategory?: boolean;
    categorySlug: string;
  }

  let {
    title,
    category,
    formattedDate,
    href,
    showCategory = true,
    categorySlug
  }: Props = $props();
</script>
<li>
  <h2 class="text-xl text-pretty"><a {href}>{title}</a></h2>
  <span class="text-slate-500 text-sm">Posted {#if showCategory} in <a href="/{categorySlug}" class="underline">{category}</a> {/if} on {formattedDate}</span>
</li>
