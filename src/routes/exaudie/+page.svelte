<script>
	import { menuItems } from '$lib/constants/ExaudieMenu';
	import { page } from '$app/stores';
	import MenuCard from '$lib/components/MenuCard.svelte';

	const currentPath = $page.url.pathname;
</script>

<svelte:head>
	<title>exaudie</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="card-wrap">
	{#each menuItems as item}
		<MenuCard title={item.title} subtitle={item.subtitle} link={`${currentPath}${item.page}`} />
	{/each}
</div>

<style>
	.card-wrap {
		padding: 16px;
		overflow: auto;
		max-height: 75vh;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 16px;
	}

	@media only screen and (max-width: 640px) {
		.card-wrap {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
