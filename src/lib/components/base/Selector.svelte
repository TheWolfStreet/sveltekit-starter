<script lang="ts">
	import { Select } from 'bits-ui';
	import Check from 'phosphor-svelte/lib/Check';
	import CaretUpDown from 'phosphor-svelte/lib/CaretUpDown';
	import CaretDoubleUp from 'phosphor-svelte/lib/CaretDoubleUp';
	import CaretDoubleDown from 'phosphor-svelte/lib/CaretDoubleDown';

	interface Option {
		value: string;
		label: string;
		disabled?: boolean;
	}

	export let items: Option[] = [];
	export let value: string = '';
	let className: string = 'w-72';
	export { className as class };
	export let placeholder: string = '';
	export let allowDeselect: boolean = false;
	export let id: string = '';
	export let onValueChange: (value: string) => void = () => {};

	$: selected = items.find((item) => item.value === value)?.label || placeholder;
</script>

<Select.Root type="single" {onValueChange} {items} {allowDeselect}>
	<Select.Trigger
		{id}
		class={`flex h-10 ${className} cursor-pointer items-center rounded-md border border-edge bg-surface px-3 text-body placeholder:text-muted focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:outline-none dark:border-edge-dark dark:bg-surface-dark dark:text-body-dark dark:placeholder:text-muted-dark dark:focus-visible:ring-primary-dark/60`}
		aria-label="Select input"
	>
		{selected}
		<CaretUpDown class="ml-auto h-6 w-6 text-muted dark:text-muted-dark" />
	</Select.Trigger>

	<Select.Portal>
		<Select.Content
			class="z-50 max-h-60 w-[var(--bits-select-anchor-width)] min-w-[var(--bits-select-anchor-width)] overflow-hidden rounded-lg border border-edge
		bg-surface shadow-md ease-out
		data-[state=closed]:scale-95 data-[state=closed]:opacity-0
		data-[state=open]:scale-100 data-[state=open]:opacity-100
		dark:border-edge-dark dark:bg-surface-dark"
			sideOffset={10}
		>
			<Select.ScrollUpButton class="flex w-full justify-center p-1">
				<CaretDoubleUp class="h-4 w-4 text-body dark:text-body-dark" />
			</Select.ScrollUpButton>

			<Select.Viewport class="p-1">
				{#each items as item (item.value)}
					<Select.Item
						class="flex h-10 w-full cursor-pointer items-center rounded-md px-4 text-sm text-body	
								capitalize data-disabled:opacity-50 data-highlighted:bg-surface-alt dark:text-body-dark dark:data-highlighted:bg-surface-alt-dark"
						value={item.value}
						label={item.label}
						disabled={item.disabled}
					>
						{item.label}
						{#if selected === item.label}
							<div class="ml-auto">
								<Check class="h-4 w-4 text-body dark:text-body-dark" />
							</div>
						{/if}
					</Select.Item>
				{/each}
			</Select.Viewport>

			<Select.ScrollDownButton class="flex w-full justify-center p-1">
				<CaretDoubleDown class="h-4 w-4 text-body dark:text-body-dark" />
			</Select.ScrollDownButton>
		</Select.Content>
	</Select.Portal>
</Select.Root>
