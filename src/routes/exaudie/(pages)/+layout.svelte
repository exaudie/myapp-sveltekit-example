<script lang="ts">
	import { menuItems } from '$lib/constants/ExaudieMenu';
	import { getMenuTitleFromPage } from '$lib/helpers/ExaudieMenuGetter';
	import { page } from '$app/stores';
	import NavToBack from '$lib/components/NavToBack.svelte';
	import VerticalSpace from '$lib/components/VerticalSpace.svelte';
	import Card from '$lib/components/card/Card.svelte';

	let innerWidth: number;
	let outerWidth: number;
	let innerHeight: number;
	let outerHeight: number;
</script>

<svelte:window bind:innerWidth bind:outerWidth bind:innerHeight bind:outerHeight />

<NavToBack label={getMenuTitleFromPage(menuItems, $page.url.pathname)} linkBack="/exaudie" />

<VerticalSpace height="8px" />

<Card>
	<main id="main_content">
		<slot />
	</main>

	<div class="info-screen">
		<p>innerWidth:<span>{innerWidth}</span></p>
		<p>outerWidth:<span>{outerWidth}</span></p>
		<p>innerHeight:<span>{innerHeight}</span></p>
		<p>outerHeight:<span>{outerHeight}</span></p>
	</div>
</Card>

<style lang="less">
	* {
		margin: 0;
		padding: 0;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	main {
		height: 63vh;
		overflow: auto;
		background-color: rgba(245, 245, 245, 0.3);
		padding: 1em;
		box-sizing: border-box;
	}

	.info-screen {
		display: flex;
		flex-wrap: wrap;
		gap: 0 1em;
		padding: 0 1em;
		color: var(--text-secondary);

		p {
			flex-grow: 1;
		}

		span {
			color: var(--text-primary);
		}
	}
</style>
