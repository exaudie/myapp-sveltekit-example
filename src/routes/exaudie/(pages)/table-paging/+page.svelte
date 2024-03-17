<script lang="ts">
	import PagingOutHelper from './(components)/PagingOutHelper.svelte';

		const dataList: any[] = Array.from({ length: 71 }, (_, idx) => {
		const numRow = idx + 1;
		return Array.from({ length: 10 }, (_, idx) => {
			return { name: `${numRow} column ${idx + 1}` };
		});
	});
</script>

<PagingOutHelper {dataList} />
