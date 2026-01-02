<script lang="ts">
  interface Props {
    formattedDate: string;
    href: string;
  }

  let {
    formattedDate,
    href,
  }: Props = $props();
</script>
<li>
  <h2 class="text-pretty underline"><a {href}>Post for the week of {formattedDate}</a></h2>
</li>
