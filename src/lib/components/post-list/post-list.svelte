<script lang="ts">
  let { children } = $props();
</script>

<ul class="flex flex-col gap-6">
  {@render children?.()}
</ul>
