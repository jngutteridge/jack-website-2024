<script lang="ts">
  import '../style.css';

  interface Props {
    data: any;
    children?: import('svelte').Snippet;
  }

  let { data, children }: Props = $props();
  const { websiteTitle, headerLinks, socialLinks, footerLinks } = data;
  let { showSocialImage } = $derived(data);
</script>
{#if showSocialImage}
  <img src="/img/jack-guitar-profile.jpg" alt="" class="website-image"/>
{/if}
<div class="main-container">
  <main>
    {@render children?.()}
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
