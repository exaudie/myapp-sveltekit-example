<script lang="ts">
	import { cubicOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';

	const progress = tweened(0, {
		duration: 400,
		easing: cubicOut
	});
</script>

<main>
	<progress value={$progress} />

	<progress value={0.5} />

	<div>
		<button on:click={() => progress.set(0)}> 0% </button>

		<button on:click={() => progress.set(0.25)}> 25% </button>

		<button on:click={() => progress.set(0.5)}> 50% </button>

		<button on:click={() => progress.set(0.75)}> 75% </button>

		<button on:click={() => progress.set(1)}> 100% </button>
	</div>
</main>

<style>
	main {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1em;
	}

	progress {
		width: 100%;
	}
</style>
