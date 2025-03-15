<script lang="ts">
  interface Props {
    title: string;
    category: string;
    formattedDate: string;
    href: string;
    showCategory?: boolean;
    categoryHref: string;
    imgSrc: string;
  }

  let {
    title,
    category,
    formattedDate,
    href,
    showCategory = true,
    categoryHref,
    imgSrc
  }: Props = $props();
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
