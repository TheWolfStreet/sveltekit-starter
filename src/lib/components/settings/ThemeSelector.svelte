<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { m } from '$lib/paraglide/messages';
	import Selector from '$lib/components/base/Selector.svelte';
	import { applyTheme } from '$lib';

	type Theme = 'light' | 'dark' | 'system';

	let current: Theme = 'system';
	export let id: string = '';

	const options = [
		{ value: 'system', label: m['themes.system']() },
		{ value: 'dark', label: m['themes.dark']() },
		{ value: 'light', label: m['themes.light']() }
	];

	function onValueChange(v: string) {
		if (!browser) return;

		localStorage.setItem('theme', v);
		applyTheme(v);
		current = v as Theme;
	}

	onMount(() => {
		if (!browser) return;

		const saved = localStorage.getItem('theme') as Theme | null;
		if (saved) {
			current = saved;
		}
	});
</script>

<Selector
	{id}
	items={options}
	value={current}
	class="ml-0 w-full sm:ml-8 sm:w-40"
	{onValueChange}
/>
