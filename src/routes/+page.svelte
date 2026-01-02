<script>
	import { WeeklyPostLink, WeeklyPostList } from '$lib/components/weekly-post-list'
	import { PostLink, PostList } from '$lib/components/post-list'
	import { ReviewLink, ReviewList } from '$lib/components/review-list'
	import { DemosLink, DemosList } from '$lib/components/demos-list'

  let { data } = $props();
  const { posts, weeklyPosts, reviews, demos, Content, websiteTitle, projectLinks } = data;
</script>
<article class="home max-w-[65ch] mx-auto text-pretty">
  <Content />
</article>
<div class="max-w-[65ch] mx-auto">
  <h2 class="text-2xl pt-8 pb-6 text-slate-500">Projects</h2>
  <dl>
  {#each projectLinks as {href, title, description}}
    <dt><a {href} class="underline">{title}</a></dt>
    <dd class="mb-4">{description}</dd>
  {/each}
  </dl>
</div>
<div class="max-w-[65ch] mx-auto">
  <h2 class="text-2xl pt-8 pb-2 text-slate-500">Weekly posts</h2>
  <p class="pb-4">A list of personal weekly retrospectives</p>
  <WeeklyPostList>
  {#each weeklyPosts as {formattedDate, href}}
    <WeeklyPostLink {formattedDate} {href} />
  {/each}
  </WeeklyPostList>
  <a class="text-slate-500 my-6 underline block" href="/weekly">View all weekly posts</a>
</div>
<div class="max-w-[65ch] mx-auto">
  <h2 class="text-2xl pt-8 pb-6 text-slate-500">Latest posts</h2>
  <PostList>
  {#each posts as {title, formattedDate, category, href, categoryHref}}
    <PostLink {title} {formattedDate} {category} {href} {categoryHref} />
  {/each}
  </PostList>
  <a class="text-slate-500 my-6 underline block" href="/posts">View all posts</a>
</div>
<div class="max-w-[65ch] mx-auto">
  <h2 class="text-2xl pt-8 pb-6 text-slate-500">Latest Demos</h2>
  <DemosList>
  {#each demos as {title, formattedDate, href}}
    <DemosLink {title} {formattedDate} {href} />
  {/each}
  </DemosList>
  <a class="text-slate-500 my-6 underline block" href="/demos">View all demos</a>
</div>
<div class="max-w-[65ch] mx-auto">
  <h2 class="text-2xl pt-8 pb-6 text-slate-500">Latest reviews</h2>
  <ReviewList>
  {#each reviews as {title, formattedDate, category, href, categoryHref, imgSrc}}
    <ReviewLink {title} {formattedDate} {category} {href} {categoryHref} {imgSrc} />
  {/each}
  </ReviewList>
  <a class="text-slate-500 my-6 underline block" href="/reviews">View all reviews</a>
</div>

<svelte:head>
  <title>{websiteTitle}</title>
</svelte:head>
