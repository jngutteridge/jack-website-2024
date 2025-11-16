<script lang="ts">
  interface Props {
    title: string;
    formattedDate: string;
    href: string;
  }

  let { title, formattedDate, href }: Props = $props();
</script>
<li>
  <h2 class="text-pretty underline"><a {href}>{title}</a></h2>
  <span class="text-slate-500">Posted on {formattedDate}</span>
</li>
