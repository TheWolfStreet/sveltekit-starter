<script lang="ts">
	import { Gear, Moon, Translate } from 'phosphor-svelte';
	import { queryParam } from 'sveltekit-search-params';

	import { m } from '$lib/paraglide/messages.js';
	import LangSelector from '$lib/components/settings/LangSelector.svelte';
	import ThemeSelector from '$lib/components/settings/ThemeSelector.svelte';
	import Popup from '$lib/components/base/Popup.svelte';
	import Button from '$lib/components/base/Button.svelte';

	const settings = queryParam('settings');

	function toggleSettings(open: boolean) {
		settings.set(open ? 'open' : null);
	}
</script>

<div
	class="flex h-screen w-screen items-center justify-center bg-gradient-to-br
	       from-slate-50 via-gray-50 to-slate-100
	       dark:from-slate-950 dark:via-gray-950 dark:to-slate-900"
>
	<div class="prose text-center dark:prose-invert">
		<h1
			class="mb-8 bg-gradient-to-r from-body to-muted bg-clip-text text-transparent
			       dark:from-body-dark dark:to-muted-dark"
		>
			{m.hello_world({ name: 'SvelteKit' })}
		</h1>
		<Button
			variant="primary"
			size="md"
			class="shadow-xl shadow-tint"
			onclick={() => toggleSettings(true)}
		>
			<Gear class="size-6" />
			{m.settings()}
		</Button>
	</div>
</div>

<Popup onClickout={() => toggleSettings(false)} open={$settings === 'open'}>
	<div class="flex h-full flex-col space-y-6 sm:h-auto">
		<header class="border-b border-edge pb-4 text-center dark:border-edge-dark">
			<h2
				class="flex items-center justify-center gap-3 text-xl font-semibold text-body dark:text-body-dark"
			>
				{m.settings()}
			</h2>
			<p class="mt-1 text-sm text-muted dark:text-muted-dark">{m.settings_description()}</p>
		</header>

		<div class="flex flex-col items-center justify-center gap-4 space-y-5 sm:block">
			<div class="group w-full">
				<label
					for="lang"
					class="mb-2 flex items-center gap-3 text-sm font-medium text-body dark:text-body-dark"
				>
					<div class="rounded-md bg-blue-50 p-1.5 dark:bg-blue-900/20">
						<Translate class="h-4 w-4 text-blue-600 dark:text-blue-400" />
					</div>
					{m.language()}
				</label>
				<LangSelector id="lang" />
			</div>

			<div class="group w-full">
				<label
					for="theme"
					class="mb-2 flex items-center gap-3 text-sm font-medium text-body dark:text-body-dark"
				>
					<div class="rounded-md bg-purple-50 p-1.5 dark:bg-purple-900/20">
						<Moon class="size-4 text-purple-600 dark:text-purple-400" />
					</div>
					{m.theme()}
				</label>
				<ThemeSelector id="theme" />
			</div>
		</div>

		<footer
			class="mt-auto flex items-center justify-end gap-3 border-t border-edge pt-4 sm:mt-0 dark:border-edge-dark"
		>
			<Button
				variant="primary"
				size="sm"
				class="w-full sm:w-auto"
				onclick={() => toggleSettings(false)}
			>
				{m.done()}
			</Button>
		</footer>
	</div>
</Popup>
