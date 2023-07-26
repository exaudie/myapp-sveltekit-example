<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import MenuCard from '$lib/components/MenuCard.svelte';

	const currentPath = $page.url.pathname;

	const items = [
		{ title: 'Button', subtitle: '', page: '/button' },
		{ title: 'Input Form', subtitle: '', page: '/input' },
		{ title: 'Text Area', subtitle: '', page: '/textarea' },
		{ title: 'Select', subtitle: '', page: '/select' },
		{ title: 'Checkbox', subtitle: '', page: '/checkbox' },
		{ title: 'Dialog', subtitle: '', page: '/dialog' },
		{ title: 'Input Auto Load', subtitle: '', page: '/autoload' },
		{ title: 'Form Enhance', subtitle: '', page: '/formenhance' },
		{ title: 'Input Validate', subtitle: '', page: '/inputvalidate' },
		{ title: 'File Upload', subtitle: '', page: '/fileupload' },
		{ title: 'Simmer', subtitle: '', page: '/simmer' },
		{ title: 'SneckBar', subtitle: '', page: '/sneckbar' },
		{ title: 'Table Freeze', subtitle: '', page: '/table-freeze' }
	];
</script>

<svelte:head>
	<title>exaudie</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="card-wrap">
	{#each items as item}
		<MenuCard
			title={item.title}
			subtitle={item.subtitle}
			on:onClick={() => goto(`${currentPath}${item.page}`)}
		/>
	{/each}
</div>

<style>
	.card-wrap {
		display: grid;
		grid-template-columns: auto auto auto;
		gap: 16px;
	}
</style>
