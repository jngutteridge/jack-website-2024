<script lang="ts">
	interface Props {
		name: string;
		class?: string;
	}

	let { name, class: className = '' }: Props = $props();
</script>

{#if name === 'home'}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		class={className}
	>
		<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
		<polyline points="9 22 9 12 15 12 15 22" />
	</svg>
{:else if name === 'user'}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		class={className}
	>
		<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
		<circle cx="12" cy="7" r="4" />
	</svg>
{:else if name === 'clock'}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		class={className}
	>
		<circle cx="12" cy="12" r="10" />
		<polyline points="12 6 12 12 16 14" />
	</svg>
{:else if name === 'calendar'}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		class={className}
	>
		<path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path
			d="M3 10h18"
		/>
	</svg>
{:else if name === 'edit-3'}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		class={className}
	>
		<path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
	</svg>
{:else if name === 'code'}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		class={className}
	>
		<polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
	</svg>
{:else if name === 'star'}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		class={className}
	>
		<polygon
			points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
		/>
	</svg>
{:else if name === 'mail'}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		class={className}
	>
		<rect width="20" height="16" x="2" y="4" rx="2" /><path
			d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
		/>
	</svg>
{:else if name === 'link'}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		class={className}
	>
		<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path
			d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
		/>
	</svg>
{:else if name === 'rss'}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		class={className}
	>
		<path d="M4 11a9 9 0 0 1 9 9" /><path d="M4 4a16 16 0 0 1 16 16" /><circle
			cx="5"
			cy="19"
			r="1"
		/>
	</svg>
{:else if name === 'bluesky'}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 512 512"
		fill="currentColor"
		class={className}
	>
		<path
			d="M111.8 62.2C170.2 105.9 233 188.9 256 240c23-51.1 85.8-134.1 144.2-177.8C440.5 32 512 39 512 113.6c0 18-8.6 108.6-13.7 129.4-19 77.2-96.7 96.8-164.7 85.8 116.1 22 129.3 91.9 73 139.7-93 78.9-138.8-31.8-150.6-60.2-11.8 28.4-57.6 139.2-150.6 60.2-56.3-47.8-43.1-117.7 73-139.7-68 11-145.7-8.5-164.7-85.8C8.6 222.2 0 131.6 0 113.6 0 39 71.5 32 111.8 62.2z"
		/>
	</svg>
{:else if name === 'instagram'}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		class={className}
	>
		<rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path
			d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
		/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
	</svg>
{:else if name === 'mastodon'}
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class={className}>
		<path
			d="M11.19 12.195c2.016-.24 3.77-1.475 3.99-2.603.348-1.778.32-4.339.32-4.339 0-3.47-2.286-4.488-2.286-4.488C12.062.238 10.083.017 8.027 0h-.05C5.92.017 3.942.238 2.79.765c0 0-2.285 1.017-2.285 4.488l-.002.662c-.004.64-.007 1.35.011 2.091.083 3.394.626 6.74 3.78 7.57 1.454.383 2.703.463 3.709.408 1.823-.1 2.847-.647 2.847-.647l-.06-1.317s-1.303.41-2.767.36c-1.45-.05-2.98-.156-3.215-1.928a4 4 0 0 1-.033-.496s1.424.346 3.228.428c1.103.05 2.137-.064 3.188-.189zm1.613-2.47H11.13v-4.08c0-.859-.364-1.295-1.091-1.295-.804 0-1.207.517-1.207 1.541v2.233H7.168V5.89c0-1.024-.403-1.541-1.207-1.541-.727 0-1.091.436-1.091 1.296v4.079H3.197V5.522q0-1.288.66-2.046c.456-.505 1.052-.764 1.793-.764.856 0 1.504.328 1.933.983L8 4.39l.417-.695c.429-.655 1.077-.983 1.934-.983.74 0 1.336.259 1.791.764q.662.757.661 2.046z"
		/>
	</svg>
{:else if name === 'github'}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		class={className}
	>
		<path
			d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
		/><path d="M9 18c-4.51 2-5-2-7-2" />
	</svg>
{/if}
