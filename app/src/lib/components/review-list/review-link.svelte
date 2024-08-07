<script lang="ts">
  export let title: string;
  export let category: string;
  export let formattedDate: string;
  export let href: string;
  export let showCategory = true;
  export let categoryHref: string;
  export let imgSrc: string;
</script>
<li>
  <div class="wrapper">
    <h2><a {href}>{title}</a></h2>
    {#if showCategory}
      <span>Posted in <a href={categoryHref}>{category}</a> on {formattedDate}</span>
    {:else}
      <span>Reviewed on {formattedDate}</span>
    {/if}
  </div>
  <img src={imgSrc} alt=""/>
</li>
