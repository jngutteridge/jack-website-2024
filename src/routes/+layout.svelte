<script lang="ts">
  import '../style.css';
  
  let { data, children } = $props();
  const { websiteTitle, headerLinks, socialLinks, footerLinks } = data;
  let { showSocialImage } = $derived(data);
</script>
{#if showSocialImage}
  <img src="/img/jack-guitar-profile.jpg" alt="" class="hidden"/>
{/if}
<div class="flex flex-col min-h-screen font-sans">
  <main class="py-4 px-6 grow">
    {@render children?.()}
  </main>
  <header class="-order-1 lg:flex text-center lg:text-left flex-row py-4 px-6">
    <h1 class="text-xl grow mb-2"><a href="/">{websiteTitle}</a></h1>
    <nav class="flex items-center justify-center text-slate-500 text-sm">
      <ul class="flex gap-x-6 gap-y-2 justify-center flex-wrap">
        {#each headerLinks as {text, href}}
          <li><a {href}>{text}</a></li>
        {/each}
      </ul>
    </nav>
  </header>
  <footer class="flex flex-col md:flex-row justify-center gap-x-6 gap-y-2 py-4 px-6 text-slate-500 text-sm">
    <ul class="flex gap-x-6 gap-y-2 justify-center flex-wrap">
      {#each socialLinks as {text, href}}
        <li><a {href} rel="me">{text}</a></li>
      {/each}
    </ul>
    <ul class="flex gap-x-6 gap-y-2 justify-center flex-wrap">
      {#each footerLinks as {text, href}}
        <li><a {href} data-sveltekit-reload={href === '/rss.xml'}>{text}</a></li>
      {/each}
    </ul>
  </footer>
</div>
