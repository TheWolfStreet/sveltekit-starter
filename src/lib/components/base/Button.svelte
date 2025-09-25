<script lang="ts">
	export let variant: 'primary' | 'secondary' = 'primary';
	export let size: 'sm' | 'md' | 'lg' = 'md';
	let className = '';
	export { className as class };
	const variants = {
		primary:
			'bg-primary text-white hover:bg-primary/90 focus-visible:ring-primary/20 dark:bg-primary-dark dark:text-body dark:hover:bg-primary-dark/90',
		secondary:
			'bg-surface-alt text-muted hover:bg-edge focus-visible:ring-edge-subtle dark:bg-surface-alt-dark dark:text-muted-dark dark:hover:bg-edge-dark'
	};
	const sizes = {
		sm: 'px-4 py-2 text-sm',
		md: 'px-6 py-3',
		lg: 'px-8 py-4 text-lg'
	};
</script>

<button
	type="button"
	class={`inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg font-medium transition-colors duration-150 focus:outline-none focus-visible:ring-2  ${className} ${variants[variant]} ${sizes[size]}`}
	{...$$restProps}
>
	<slot />
</button>
