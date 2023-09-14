<script lang="ts">
	import { page } from '$app/stores';
	import NavToBack from '$lib/components/NavToBack.svelte';
	import VerticalSpace from '$lib/components/VerticalSpace.svelte';
	import { menuItems } from '$lib/constants/ExaudieMenu';
	import { getMenuTitleFromPage } from '$lib/helpers/ExaudieMenuGetter';
</script>

<NavToBack label={getMenuTitleFromPage(menuItems, $page.url.pathname)} linkBack="/exaudie" />
<VerticalSpace height="8px" />
<slot />
