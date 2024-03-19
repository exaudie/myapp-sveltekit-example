<script lang="ts">
	import type { NavButtonType } from '$lib/types/NavButtonType';
	import type { TabItem } from '$lib/types/TabItemType';
	import VerticalSpace from '$lib/components/VerticalSpace.svelte';
	import NavButton from '$lib/components/tabs/NavButton.svelte';
	import TabBar from '$lib/components/tabs/TabBar.svelte';
	import NavButtonHelper from '$lib/helpers/NavButtonHelper';
	import TabBarHelper from '$lib/helpers/TabBarHelper';
	import GridLayoutTwoColumn from '$lib/components/layout-style/GridLayoutTwoColumn.svelte';
	import LabelTop from '$lib/components/LabelTop.svelte';
	import NavPaging from '$lib/components/paging/NavPaging.svelte';
	import NavPagingHelper from '$lib/helpers/NavPagingHelper';
	import NavPaging1 from '$lib/components/paging/NavPaging1.svelte';
	import NavPaging2 from '$lib/components/paging/NavPaging2.svelte';

	const dataList = Array.from({ length: 53 }, (_, idx) => {
		const page = idx + 1;

		return { id: page, name: `page ${page}` };
	});

	let pagingHelper1 = new NavPagingHelper()
		.setDataList({ dataList })
		.setLengthNavigate(7)
		.withToEnd()
		.buildNavPage();

	let pagingHelper2 = new NavPagingHelper().setTotalPage(14).setLengthNavigate(7).buildNavPage();
	let pagingHelper3 = new NavPagingHelper().setTotalPage(14).setLengthNavigate(5).buildNavPage();

	let tabItems = [
		{ label: 'Nav 1', value: 1 },
		{ label: 'Nav 2', value: 2 },
		{ label: 'Nav 3', value: 3, enabled: true },
		{ label: 'Nav 4', value: 4, enabled: false }
	];

	let navHelper1 = new NavButtonHelper().setItems({
		navItems: tabItems as NavButtonType[]
	});

	let navHelper2 = new NavButtonHelper().setItems({
		navItems: tabItems as NavButtonType[]
	});

	let navResonance1 = new NavButtonHelper().setItems({
		navItems: tabItems as NavButtonType[]
	});

	let navResonance2 = new NavButtonHelper().setItems({
		navItems: [
			{ label: 'Nav 1', value: 1 },
			{ label: 'Nav 2', value: 2 }
		]
	});

	let tabHelper = new TabBarHelper().setItems({
		navItems: tabItems as TabItem[]
	});
</script>

<LabelTop label="Paging Navigation" />

<NavPaging bind:navHelper={pagingHelper1} />

<VerticalSpace height="2em" />

<NavPaging bind:navHelper={pagingHelper2} />

<VerticalSpace height="2em" />

<NavPaging bind:navHelper={pagingHelper3} />

<VerticalSpace height="3em" />

<NavPaging1 lengthNavigate={5} itemsPerPage={5} totalPage={9} />

<VerticalSpace height="2em" />

<NavPaging2 lengthNavigate={7} itemsPerPage={5} totalPage={11} />

<VerticalSpace height="3em" />

<LabelTop label="Tab Navigation" />

<NavButton bind:navHelper={navHelper1} on:NavClick={() => {}} />

<VerticalSpace height="2em" />

<NavButton
	bind:navHelper={navHelper2}
	fontSize="14px"
	paddingBtn="4px 8px"
	on:NavClick={() => {}}
/>

<VerticalSpace height="1em" />

<NavButton
	bind:navHelper={navHelper2}
	gap="2em"
	fontSize="14px"
	paddingBtn="4px 8px"
	colorBtn="#dc3545"
	on:NavClick={() => {}}
/>

<VerticalSpace height="2em" />

<GridLayoutTwoColumn>
	<NavButton
		bind:navHelper={navResonance1}
		fontSize="14px"
		paddingBtn="4px 8px"
		colorBtn="#32a852"
		on:NavClick={(val) => {
			navResonance2.setActive = navResonance2.isAvailableValue(val.detail.value)
				? val.detail.value
				: navResonance2.getActive;
		}}
	/>

	<NavButton
		bind:navHelper={navResonance2}
		fontSize="14px"
		paddingBtn="4px 8px"
		colorBtn="#3285a8"
		on:NavClick={(val) => {
			navResonance1.setActive = navResonance1.isAvailableValue(val.detail.value)
				? val.detail.value
				: navResonance1.getActive;
		}}
	/>
</GridLayoutTwoColumn>

<VerticalSpace height="2em" />

<TabBar bind:navHelper={tabHelper} />
