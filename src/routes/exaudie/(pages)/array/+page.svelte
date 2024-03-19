<script lang="ts">
	import LabelTop from '$lib/components/LabelTop.svelte';
	import GridLayoutTwoColumn from '$lib/components/layout-style/GridLayoutTwoColumn.svelte';

	type ObjSort = { numb: number; name: string };

	const oriSort: ObjSort[] = [
		{ numb: 4, name: 'four' },
		{ numb: 2, name: 'two' },
		{ numb: 9, name: 'nine' },
		{ numb: 5, name: 'five' },
		{ numb: 3, name: 'thre' },
		{ numb: 10, name: 'ten' },
		{ numb: 7, name: 'seve' },
		{ numb: 1, name: 'one' },
		{ numb: 6, name: 'six' },
		{ numb: 0, name: 'zero' },
		{ numb: 8, name: 'eigh' }
	];

	const oriToSort: ObjSort[] = [
		{ numb: 4, name: 'four' },
		{ numb: 2, name: 'two' },
		{ numb: 9, name: 'nine' },
		{ numb: 5, name: 'five' },
		{ numb: 3, name: 'thre' },
		{ numb: 10, name: 'ten' },
		{ numb: 7, name: 'seve' },
		{ numb: 1, name: 'one' },
		{ numb: 6, name: 'six' },
		{ numb: 0, name: 'zero' },
		{ numb: 8, name: 'eigh' }
	];

	const sort = oriSort.sort((a: ObjSort, b: ObjSort) => (a.numb > b.numb ? 1 : -1));
	const toSorted = oriToSort.toSorted((a: ObjSort, b: ObjSort) => (a.numb > b.numb ? 1 : -1));
</script>

<GridLayoutTwoColumn>
	<LabelTop label="oriSort">
		<details>
			{#each oriSort as itm}
				<data>{JSON.stringify(itm)}</data>
			{/each}
		</details>
	</LabelTop>

	<LabelTop label="sort result">
		<details>
			{#each sort as itm}
				<data>{JSON.stringify(itm)}</data>
			{/each}
		</details>
	</LabelTop>

	<LabelTop label="oriToSort">
		<details>
			{#each oriToSort as itm}
				<data>{JSON.stringify(itm)}</data>
			{/each}
		</details>
	</LabelTop>

	<LabelTop label="toSorted result">
		<details>
			{#each toSorted as itm}
				<data>{JSON.stringify(itm)}</data>
			{/each}
		</details>
	</LabelTop>
</GridLayoutTwoColumn>

<style>
	details {
		background-color: white;
		display: flex;
		flex-direction: column;
		gap: 2px;
	}
</style>
