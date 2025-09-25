<script lang="ts">
	import { fade, scale } from 'svelte/transition';

	export let open = false;
	export let duration = 250;
	export let onClickout: (event: MouseEvent | KeyboardEvent) => void;

	function onclick(event: MouseEvent) {
		if (event.target === event.currentTarget) {
			onClickout(event);
		}
	}

	function onkeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			onClickout(event);
		}
	}
</script>

{#if open}
	<div
		class="fixed inset-0 z-50 flex items-center justify-center
		       bg-black/20 p-0 backdrop-blur-md dark:bg-black/40"
		transition:fade={{ duration }}
		role="dialog"
		aria-modal="true"
		tabindex="-1"
		{onclick}
		{onkeydown}
	>
		<div
			class="relative h-full w-full rounded-none border border-edge
			       bg-surface p-8 shadow-2xl ring-1
			       shadow-tint ring-edge-subtle backdrop-blur-sm sm:mx-auto
			       sm:my-4 sm:h-auto sm:w-full sm:max-w-lg
			       sm:rounded-2xl dark:border-edge-dark
			       dark:bg-surface-dark dark:shadow-tint-dark
			       dark:ring-edge-subtle-dark dark:backdrop-blur-sm"
			transition:scale={{ duration, start: 0.95 }}
		>
			<slot />
		</div>
	</div>
{/if}
