<script lang="ts">
	import type { TabItem } from '$lib/types/TabItem';
	import TabBar from '$lib/components/tabs/TabBar.svelte';

	let tabActive: number = 1;
	let tabItems: TabItem[] = [{ label: 'Date Formatter' }, { label: 'Number Formatter' }];
</script>

<TabBar bind:tabActive {tabItems} />

{tabActive}
