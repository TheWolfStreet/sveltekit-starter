<script lang="ts">
	import { locales, setLocale, getLocale } from '$lib/paraglide/runtime';

	import Selector from '$lib/components/base/Selector.svelte';

	export let id: string = '';

	const labels = {
		he: '🇮🇱 עברית',
		en: '🇬🇧 English',
		ru: '🇷🇺 Русский'
	} as const;

	type Locale = (typeof locales)[number];
	let selected: Locale = getLocale();

	const localeOptions = locales.map((loc) => ({ value: loc, label: labels[loc] }));
	function onValueChange(v: string) {
		setLocale(v as Locale);
		selected = v as Locale;
	}
</script>

<Selector
	{id}
	items={localeOptions}
	value={selected}
	{onValueChange}
	class="ml-0 w-full sm:ml-8 sm:w-40"
/>
