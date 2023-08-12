<script lang="ts">
	import { getMenuTitleFromPage } from '$lib/constants/ExaudieMenu';
	import { page } from '$app/stores';
	import NavToBack from '$lib/components/NavToBack.svelte';
	import VerticalSpace from '$lib/components/VerticalSpace.svelte';
	import Input from '$lib/components/input/input.svelte';

	const currentPath = $page.url.pathname;
	const pathSplit = currentPath.split('/');
</script>

<NavToBack
	label={getMenuTitleFromPage(`/${pathSplit.at(pathSplit.length - 1) ?? ''}`)}
	linkBack="/exaudie"
/>
<VerticalSpace height="8px" />
<div class="wrap">
	<Input placeholder="enter some text" />
	<Input placeholder="enter some text" />
	<Input placeholder="enter some text" />
</div>

<style>
	.wrap {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1em;
	}
</style>
