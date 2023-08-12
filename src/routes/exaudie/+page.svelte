<script>
	import { menuItems } from '$lib/constants/ExaudieMenu';
	import { goto } from '$app/navigation';
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
		display: grid;
		grid-template-columns: auto auto auto;
		gap: 16px;
	}
</style>
