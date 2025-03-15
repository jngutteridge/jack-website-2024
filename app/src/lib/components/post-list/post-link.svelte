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
  <h2><a {href}>{title}</a></h2>
  <span>Posted {#if showCategory} in <a href="/{categorySlug}">{category}</a> {/if} on {formattedDate}</span>
</li>
