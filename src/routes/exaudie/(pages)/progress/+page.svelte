<script lang="ts">
	import { page } from '$app/stores';
	import { getMenuTitleFromPage } from '$lib/constants/ExaudieMenu';
	import { cubicOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';
	import NavToBack from '$lib/components/NavToBack.svelte';
	import VerticalSpace from '$lib/components/VerticalSpace.svelte';

	const currentPath = $page.url.pathname;
	const pathSplit = currentPath.split('/');

	const progress = tweened(0, {
		duration: 400,
		easing: cubicOut
	});
</script>

<NavToBack
	label={getMenuTitleFromPage(`/${pathSplit.at(pathSplit.length - 1) ?? ''}`)}
	linkBack="/exaudie"
/>
<VerticalSpace height="8px" />
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

  progress{
    width: 100%;
  }
</style>
