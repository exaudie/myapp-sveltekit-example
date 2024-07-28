<script lang="ts">
	import type { NavButtonType } from '$lib/types/NavButtonType';
	import type { TabItem } from '$lib/types/TabItemType';
	import ShowHidden from '$lib/components/ShowHidden.svelte';
	import NavButton from '$lib/components/tabs/NavButton.svelte';
	import TabBar from '$lib/components/tabs/TabBar.svelte';
	import NavButtonHelper from '$lib/components/tabs/NavButtonHelper';
	import DateFormatterItem from './(components)/DateFormatterItem.svelte';
	import NumberFormatterItem from './(components)/NumberFormatterItem.svelte';
	import TabBarHelper from '$lib/components/tabs/TabBarHelper';
	import DateFormatterMomentItem from './(components)/DateFormatterMomentItem.svelte';

	enum NavValue {
		DateFormat1 = 1,
		DateFormat2 = 2,
		NumberFormat = 3,
		Disabled = 4
	}

	let tabItems = [
		{ label: 'Date Formatter', value: NavValue.DateFormat1 },
		{ label: 'Date Formatter With MomentJs', value: NavValue.DateFormat2 },
		{ label: 'Number Formatter', value: NavValue.NumberFormat },
		{ label: 'Disabled', value: NavValue.Disabled, enabled: false }
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
	tabHelper.setActive = 2;

	const onTabClick = (val: CustomEvent) => (navHelper.setActive = val.detail.value);
</script>

<NavButton bind:navHelper paddingBtn="4px 8px" on:NavClick={onNavClick} />

<TabBar bind:navHelper={tabHelper} on:TabClick={onTabClick}>
	<ShowHidden isShow={tabHelper.getActive === NavValue.DateFormat1}>
		<DateFormatterItem />
	</ShowHidden>

	<ShowHidden isShow={tabHelper.getActive === NavValue.DateFormat2}>
		<DateFormatterMomentItem />
	</ShowHidden>

	<ShowHidden isShow={tabHelper.getActive === NavValue.NumberFormat}>
		<NumberFormatterItem />
	</ShowHidden>
</TabBar>
