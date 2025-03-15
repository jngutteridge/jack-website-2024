<script>
  /** @type {{children?: import('svelte').Snippet}} */
  let { children } = $props();
</script>

<ul class="demos-list">
  {@render children?.()}
</ul>
