<script lang="ts">
	import type { TabItem } from '$lib/types/TabItemType';
	import TabBar from '$lib/components/tabs/TabBar.svelte';
	import DateFormatterItem from './(components)/DateFormatterItem.svelte';
	import NumberFormatterItem from './(components)/NumberFormatterItem.svelte';
	import ShowHidden from '$lib/components/ShowHidden.svelte';

	let tabActive: number = 1;
	let tabItems: TabItem[] = [
		{ label: 'Date Formatter', value: 1 },
		{ label: 'Number Formatter', value: 2 },
		{ label: 'Disabled', value: 3, enabled: false }
	];
</script>

<TabBar bind:tabActive {tabItems}>
	<ShowHidden isShow={tabActive === 1}>
		<DateFormatterItem />
	</ShowHidden>

	<ShowHidden isShow={tabActive === 2}>
		<NumberFormatterItem />
	</ShowHidden>
</TabBar>
