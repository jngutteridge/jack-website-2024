<script lang="ts">
  import '../style.css';
  import { page } from '$app/state';
  
  let { data, children } = $props();
  const { websiteTitle, headerLinks, socialLinks, footerLinks } = data;
  let { showSocialImage } = $derived(data);
  let navHidden = $state(true);

  $effect(() => {
    page.url.pathname;
    navHidden = true;
  });
</script>
{#if showSocialImage}
  <img src="/img/jack-guitar-profile.jpg" alt="" class="hidden"/>
{/if}
<div class="flex flex-col lg:flex-row h-screen font-sans">
  <main class="py-4 px-6 grow lg:overflow-y-auto">
    {@render children?.()}
  </main>
  <header class="-order-1 flex flex-col py-4 px-6 gap-6 bg-slate-200 lg:w-80">
    <div class="flex">
      <div class="flex-grow">
        <h1 class="text-xl"><a href="/">{websiteTitle}</a></h1>
        <span class="text-slate-700">Musician and software developer</span>
      </div>
      <button class="lg:hidden" onclick={() => navHidden = !navHidden}>
        <img src="/icon/menu.svg" alt="Menu icon" />
        <span class="sr-only">Menu</span>
      </button>
    </div>
    <nav class="flex-col text-slate-600 gap-6 flex lg:flex" class:hidden={navHidden}>
      <ul class="flex flex-col gap-2">
        {#each headerLinks as {text, href}}
          <li><a {href} class:underline={href === '/' ? page.url.pathname === '/' : page.url.pathname.startsWith(href)}>{text}</a></li>
        {/each}
      </ul>
      <ul class="flex flex-col gap-2">
        {#each socialLinks as {text, href}}
          <li><a {href} rel="me">{text}</a></li>
        {/each}
      </ul>
      <ul class="flex flex-col gap-2">
        {#each footerLinks as {text, href}}
          <li><a {href} data-sveltekit-reload={href === '/rss.xml'}>{text}</a></li>
        {/each}
      </ul>
    </nav>
  </header>
</div>
