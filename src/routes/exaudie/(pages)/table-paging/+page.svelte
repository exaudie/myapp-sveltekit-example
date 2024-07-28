<script lang="ts">
	import type { NavButtonType } from '$lib/types/NavButtonType';
	import ShowHidden from '$lib/components/ShowHidden.svelte';
	import NavButton from '$lib/components/tabs/NavButton.svelte';
	import NavButtonHelper from '$lib/components/tabs/NavButtonHelper';
	import PagingInHelper from './(components)/PagingInHelper.svelte';
	import PagingOutHelper from './(components)/PagingOutHelper.svelte';
	import VerticalSpace from '$lib/components/VerticalSpace.svelte';

	const dataList = Array.from({ length: 38 }, (_, idx) => {
		const numRow: number = idx + 1;

		let column = new Map<string, any>();

		for (let i = 1; i <= 10; i++) {
			column.set(`field${i}`, `row${numRow} col${i} `);
		}

		return Object.fromEntries(column);
	});

	const tabItems = [
		{ label: 'PagingInHelper', value: 1 },
		{ label: 'PagingOutHelper', value: 2 },
		{ label: 'NavPaging1', value: 3 },
		{ label: 'NavPaging2', value: 4 }
	];

	let navHelper = new NavButtonHelper().setItems({
		navItems: tabItems as NavButtonType[]
	});
</script>

<NavButton bind:navHelper isFitLabel={true} gap="1em" />

<VerticalSpace height="1em" />

<ShowHidden isShow={navHelper.getActive === 1}>
	<PagingInHelper {dataList} />
</ShowHidden>

<ShowHidden isShow={navHelper.getActive === 2}>
	<PagingOutHelper {dataList} />
</ShowHidden>
