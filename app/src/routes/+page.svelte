<script>

  export let data;

  const posts = data.posts;

</script>
<h1>Booom</h1>
<ul>
{#each posts as {title, formattedDate, category}}
  <li>
    <h2>{title}</h2>
    <span>Posted in {category} on {formattedDate}</span>
  </li>
{/each}
</ul>