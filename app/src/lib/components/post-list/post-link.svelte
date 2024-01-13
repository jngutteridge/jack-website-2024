<script lang="ts">
  export let title: string;
  export let category: string;
  export let formattedDate: string;
  export let href: string;
  export let showCategory = true;
  export let categorySlug: string;
</script>
<li>
  <h2><a {href}>{title}</a></h2>
  <span>Posted {#if showCategory}in <a href="/{categorySlug}">{category}</a> {/if}on {formattedDate}</span>
</li>
