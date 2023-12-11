<script lang="ts">
	import { menuItems } from '$lib/constants/ExaudieMenu';
	import { getMenuTitleFromPage } from '$lib/helpers/ExaudieMenuGetter';
	import { page } from '$app/stores';
	import NavToBack from '$lib/components/NavToBack.svelte';
	import VerticalSpace from '$lib/components/VerticalSpace.svelte';
	import Card from '$lib/components/card/Card.svelte';
	import ToastNotify from '$lib/components/toast-snackbar/ToastNotify.svelte';
</script>

<ToastNotify />

<NavToBack label={getMenuTitleFromPage(menuItems, $page.url.pathname)} linkBack="/exaudie" />

<VerticalSpace height="8px" />

<Card>
	<main>
		<slot />
	</main>
</Card>

<style>
	main {
		height: 65vh;
		overflow: auto;
		background-color: rgba(245, 245, 245, 0.3);
		padding: 1em;
		box-sizing: border-box;
	}
</style>
