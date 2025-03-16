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
<li class="flex flex-row gap-4">
  <div>
    <h2 class="text-xl text-pretty"><a {href}>{title}</a></h2>
    {#if showCategory}
      <span class="text-slate-500 text-sm">Posted in <a href={categoryHref} class="underline">{category}</a> on {formattedDate}</span>
    {:else}
      <span class="text-slate-500 text-sm">Reviewed on {formattedDate}</span>
    {/if}
  </div>
  <img src={imgSrc} alt="" class="-order-1 w-16 h-16"/>
</li>
