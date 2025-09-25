<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import '../app.css';

	import { applyTheme } from '$lib';

	let { children } = $props();

	onMount(() => {
		if (!browser) return;

		let saved = localStorage.getItem('theme');
		if (!saved) {
			localStorage.setItem('theme', 'system');
			saved = 'system';
		}

		const media = window.matchMedia('(prefers-color-scheme: dark)');

		const onChanged = () => {
			saved = localStorage.getItem('theme');
			if (saved === 'system') {
				applyTheme(saved);
			}
		};

		media.addEventListener('change', onChanged);
		return () => media.removeEventListener('change', onChanged);
	});
</script>

<svelte:head>
	<link rel="icon" href="favicon.svg" />
</svelte:head>

{@render children?.()}
