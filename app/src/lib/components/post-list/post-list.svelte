<script>
  /** @type {{children?: import('svelte').Snippet}} */
  let { children } = $props();
</script>

<ul class="post-list">
  {@render children?.()}
</ul>
