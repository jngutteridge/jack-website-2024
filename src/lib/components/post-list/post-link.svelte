<script lang="ts">
  interface Props {
    title: string;
    category: string;
    formattedDate: string;
    href: string;
    showCategory?: boolean;
    categoryHref: string;
  }

  let {
    title,
    category,
    formattedDate,
    href,
    showCategory = true,
    categoryHref
  }: Props = $props();
</script>
<li>
  <h2 class="text-xl text-pretty"><a {href}>{title}</a></h2>
  <span class="text-slate-500 text-sm">Posted {#if showCategory} in <a href={categoryHref} class="underline">{category}</a> {/if} on {formattedDate}</span>
</li>
