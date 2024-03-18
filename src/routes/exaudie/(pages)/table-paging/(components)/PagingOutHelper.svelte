<script lang="ts">
	import NavPaging from '$lib/components/paging/NavPaging.svelte';
	import NavPagingHelper from '$lib/helpers/NavPagingHelper';

	export let dataList: any[];

	let pagingHelper = new NavPagingHelper();
	let itemsPerPage: number = 5;
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

<div class="table-wrap shadow-left-right-scroll">
	<table>
		<thead>
			<tr>
				{#each Object.keys(dataList[0]) as _, colIdx}
					<th>head {colIdx + 1}</th>
				{/each}
			</tr>
		</thead>

		<tbody>
			{#each dataPerPage as rows}
				<tr>
					{#each Object.keys(rows) as key}
						<td>{rows[key]}</td>
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

	.shadow-left-right-scroll {
		background-image:
			/* Shadows */
			linear-gradient(to right, white, white),
			linear-gradient(to right, white, white),
			/* Shadow covers */ linear-gradient(to right, rgba(0, 0, 0, 0.25), rgba(255, 255, 255, 0)),
			linear-gradient(to left, rgba(0, 0, 0, 0.25), rgba(255, 255, 255, 0));

		background-position:
			left center,
			right center,
			left center,
			right center;
		background-repeat: no-repeat;
		background-color: white;
		background-size:
			20px 100%,
			20px 100%,
			10px 100%,
			10px 100%;

		/* Opera doesn't support this in the shorthand */
		background-attachment: local, local, scroll, scroll;
	}

	.table-wrap {
		width: 100%;
		height: 43vh;
		overflow: auto;

		table {
			border: none;
			border-collapse: collapse;
			background-color: rgb(244, 244, 244);
			box-shadow:
				inset 1px 0 0 rgb(108, 33, 33),
				inset 0 1px 0 white;

			thead {
				th {
					top: 0;
					position: sticky;
					z-index: 91;
					color: white;
					background-color: var(--color-primary);
					box-shadow:
						inset -1px 0 0 white,
						inset 0 1px 0 white,
						inset 0 -1px 0 white;

					&:first-child {
						z-index: 99;
						box-shadow:
							inset 1px 0 0 white,
							inset -1px 0 0 white,
							inset 0 1px 0 white,
							inset 0 -1px 0 white;
					}

					&:nth-child(2) {
						z-index: 99;
					}
				}
			}

			tbody {
				td {
					box-shadow:
						inset -1px 0 0 white,
						inset 0 -1px 0 white;

					&:first-child {
						background-color: rgb(224, 232, 239);
						box-shadow:
							inset 1px 0 0 white,
							inset -1px 0 0 white,
							inset 0 -1px 0 white;
					}

					&:nth-child(2) {
						background-color: rgb(224, 232, 239);
					}
				}
			}

			th,
			td {
				min-width: 200px;
				min-height: 30px;
				padding: 8px 16px;
				border: none;

				&:first-child {
					left: 0;
					position: sticky;
				}

				&:nth-child(2) {
					left: 200px;
					position: sticky;
				}
			}
		}
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
