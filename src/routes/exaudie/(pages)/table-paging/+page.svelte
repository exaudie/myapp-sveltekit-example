<script lang="ts">
	import type { NavButtonType } from '$lib/types/NavButtonType';
	import ShowHidden from '$lib/components/ShowHidden.svelte';
	import NavButton from '$lib/components/tabs/NavButton.svelte';
	import NavButtonHelper from '$lib/helpers/NavButtonHelper';
	import PagingInHelper from './(components)/PagingInHelper.svelte';
	import PagingOutHelper from './(components)/PagingOutHelper.svelte';
	import VerticalSpace from '$lib/components/VerticalSpace.svelte';

	const dataList: any[] = Array.from({ length: 38 }, (_, idx) => {
		const numRow = idx + 1;
		return Array.from({ length: 10 }, (_, idx) => {
			return { name: `${numRow} column ${idx + 1}` };
		});
	});

	const tabItems = [
		{ label: 'PagingInHelper', value: 1 },
		{ label: 'PagingOutHelper', value: 2 }
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
