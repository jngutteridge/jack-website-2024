<script lang="ts">
  let { children } = $props();
</script>

<ul class="flex flex-col gap-4">
  {@render children?.()}
</ul>
