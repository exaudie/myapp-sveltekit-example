<script lang="ts">
	import type { NavButtonType } from '$lib/types/NavButtonType';
	import type { TabItem } from '$lib/types/TabItemType';
	import ShowHidden from '$lib/components/ShowHidden.svelte';
	import NavButton from '$lib/components/tabs/NavButton.svelte';
	import TabBar from '$lib/components/tabs/TabBar.svelte';
	import NavButtonHelper from '$lib/helpers/NavButtonHelper';
	import DateFormatterItem from './(components)/DateFormatterItem.svelte';
	import NumberFormatterItem from './(components)/NumberFormatterItem.svelte';
	import TabBarHelper from '$lib/helpers/TabBarHelper';

	let tabItems = [
		{ label: 'Date Formatter', value: 1 },
		{ label: 'Number Formatter', value: 2 },
		{ label: 'Disabled', value: 3, enabled: false }
	];

	let navHelper = NavButtonHelper.getInstance();
	navHelper.setItems({
		navItems: tabItems as NavButtonType[]
	});

	const onNavClick = (val: CustomEvent) => (tabHelper.setActive = val.detail.value);

	let tabHelper = TabBarHelper.getInstance();
	tabHelper.setItems({
		navItems: tabItems as TabItem[]
	});

	const onTabClick = (val: CustomEvent) => (navHelper.setActive = val.detail.value);
</script>

<NavButton bind:navHelper paddingBtn="4px 8px" on:NavClick={onNavClick} />

<TabBar bind:navHelper={tabHelper} on:TabClick={onTabClick}>
	<ShowHidden isShow={tabHelper.getActive === 1}>
		<DateFormatterItem />
	</ShowHidden>

	<ShowHidden isShow={tabHelper.getActive === 2}>
		<NumberFormatterItem />
	</ShowHidden>
</TabBar>
