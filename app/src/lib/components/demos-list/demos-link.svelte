<script lang="ts">
  export let title: string;
  export let formattedDate: string;
  export let href: string;
</script>
<li>
  <div class="wrapper">
    <h2><a {href}>{title}</a></h2>
      <span>Posted on {formattedDate}</span>
  </div>
</li>
