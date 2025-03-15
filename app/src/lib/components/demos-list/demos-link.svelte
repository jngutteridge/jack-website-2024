<script lang="ts">
  interface Props {
    title: string;
    formattedDate: string;
    href: string;
  }

  let { title, formattedDate, href }: Props = $props();
</script>
<li>
  <div class="wrapper">
    <h2><a {href}>{title}</a></h2>
      <span>Posted on {formattedDate}</span>
  </div>
</li>
