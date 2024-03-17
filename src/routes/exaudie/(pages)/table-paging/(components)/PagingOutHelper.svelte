<script lang="ts">
	import NavPaging from '$lib/components/paging/NavPaging.svelte';
	import NavPagingHelper from '$lib/helpers/NavPagingHelper';

	export let dataList: any[];

	let pagingHelper = new NavPagingHelper();
	let itemsPerPage: number = 10;
	let totalPage: number = 0;
	let dataPerPage: any[] = [];
	let startDataPage: number = 0;
	let endDataPage: number = 0;

	const setDataPage = (page: number) => {
		let list: any[] = [];

		const startIdx = (page - 1) * itemsPerPage;
		startDataPage = startIdx + 1;
		const endIdx = Math.min(page * itemsPerPage, dataList.length);
		endDataPage = endIdx;

		for (let i = startIdx; i < endIdx; i++) {
			if (!dataList[i]) break;

			list = [...list, ...[dataList[i]]];
		}

		return list;
	};

	const onSelectPage = (evn: CustomEvent) => (dataPerPage = setDataPage(evn?.detail?.page ?? 1));
	const onToFirst = (evn: CustomEvent) => (dataPerPage = setDataPage(evn?.detail?.page ?? 1));
	const onToLast = (evn: CustomEvent) => (dataPerPage = setDataPage(evn?.detail?.page ?? 1));
	const onPrev = (evn: CustomEvent) => (dataPerPage = setDataPage(evn?.detail?.page ?? 1));
	const onNext = (evn: CustomEvent) => (dataPerPage = setDataPage(evn?.detail?.page ?? 1));

	totalPage = Math.ceil(dataList.length / itemsPerPage);

	pagingHelper.setTotalPage(totalPage).setLengthNavigate(5).withToEnd().buildNavPage();

	dataPerPage = setDataPage(pagingHelper.getCurrentPage);
</script>

<div class="table-wrap">
	<table>
		<thead>
			<tr>
				{#each Array.from(dataList[0]) as _, colIdx}
					<th>head {colIdx + 1}</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each dataPerPage as row}
				<tr>
					{#each row as column}
						<td>{column.name}</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<div class="nav-paging">
	<p>Showing {startDataPage} to {endDataPage} from {dataList.length} entries</p>
	<NavPaging
		bind:navHelper={pagingHelper}
		on:SelectPage={onSelectPage}
		on:Prev={onPrev}
		on:Next={onNext}
		on:ToFirst={onToFirst}
		on:ToLast={onToLast}
	/>
</div>

<style lang="less">
	* {
		margin: 0;
		padding: 0;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	.table-wrap {
		background-color: bisque;
		width: 100%;
		height: 55vh;
		overflow: auto;
	}

	table {
		width: 700px;
		border: 1px solid goldenrod;
	}

	th,
	td {
		min-width: 200px;
		width: 200px;
		min-height: 30px;
		height: 30px;
		border: 1px dashed rebeccapurple;
	}

	thead th {
		top: 0;
		position: sticky;
		z-index: 91;
		color: white;
		background-color: blue;
	}

	th:first-child {
		z-index: 99;
	}

	th:first-child,
	td:first-child {
		left: 0;
		position: sticky;
	}

	td:first-child {
		background-color: aliceblue;
	}

	.nav-paging {
		display: flex;
		justify-content: space-between;
		padding: 0.5em 0;

		p {
			width: 100%;
		}

		& :global(.pagination) {
			justify-content: end;
		}
	}
</style>
