<script lang="ts">
	import { cubicOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';
	import GridLayoutTwoColumn from '$lib/components/layout-style/GridLayoutTwoColumn.svelte';

	const progress = tweened(0, {
		duration: 400,
		easing: cubicOut
	});
</script>

<GridLayoutTwoColumn>
	<progress value={$progress} />

	<progress value={0.5} />

	<div>
		<button on:click={() => progress.set(0)}> 0% </button>

		<button on:click={() => progress.set(0.25)}> 25% </button>

		<button on:click={() => progress.set(0.5)}> 50% </button>

		<button on:click={() => progress.set(0.75)}> 75% </button>

		<button on:click={() => progress.set(1)}> 100% </button>
	</div>
</GridLayoutTwoColumn>

<style>
	progress {
		width: 100%;
	}
</style>
