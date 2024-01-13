<script lang="ts">
  import '../style.css';

  export let data;
  const { websiteTitle, headerLinks, socialLinks, footerLinks } = data;
</script>
<img src="/img/jack-guitar-profile.jpg" alt="" class="website-image"/>
<div class="main-container">
  <main>
    <slot />
  </main>
  <header>
    <h1><a href="/">{websiteTitle}</a></h1>
    <nav>
      <ul>
        {#each headerLinks as {text, href}}
          <li><a {href}>{text}</a></li>
        {/each}
      </ul>
    </nav>
  </header>
  <footer>
    <ul>
      {#each socialLinks as {text, href}}
        <li><a {href} rel="me">{text}</a></li>
      {/each}
    </ul>
    <ul>
      {#each footerLinks as {text, href}}
        <li><a {href} data-sveltekit-reload={href === '/rss.xml'}>{text}</a></li>
      {/each}
    </ul>
  </footer>
</div>

<svelte:head>
  <meta name="theme-color" content="#94a3b8">
</svelte:head>
