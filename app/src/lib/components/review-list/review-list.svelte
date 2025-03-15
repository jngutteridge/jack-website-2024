<script>
  /** @type {{children?: import('svelte').Snippet}} */
  let { children } = $props();
</script>

<ul class="review-list">
  {@render children?.()}
</ul>
