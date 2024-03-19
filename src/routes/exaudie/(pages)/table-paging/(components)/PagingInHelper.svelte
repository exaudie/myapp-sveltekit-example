<script lang="ts">
	import NavPaging from '$lib/components/paging/NavPaging.svelte';
	import NavPagingInfoShowing from '$lib/components/paging/NavPagingInfoShowing.svelte';
	import NavPagingHelper from '$lib/helpers/NavPagingHelper';

	type Daata = { name?: string; ggg?: string };

	export let dataList: Daata[];

	let pagingHelper = new NavPagingHelper();

	pagingHelper.setDataList({ dataList }).setLengthNavigate(5).buildNavPage();
</script>

<div class="table-wrap shadow-left-right-scroll">
	<table>
		<thead>
			<tr>
				{#each Object.keys(pagingHelper.getDataListPage[0]) as _, colIdx}
					<th>head {colIdx + 1}</th>
				{/each}
			</tr>
		</thead>

		<tbody>
			{#each pagingHelper.getDataListPage as rows}
				<tr>
					{#each Object.keys(rows) as key}
						<td>{rows[key]}</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<NavPagingInfoShowing colorActive="#ff5c5c" bind:navHelper={pagingHelper} />

<style lang="less">
	* {
		margin: 0;
		padding: 0;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	.shadow-left-right-scroll {
		/* overflow */
		overflow-x: auto;
		width: 50%;

		/* shadow */
		animation: scroll-shadow-inset linear;
		animation-timeline: scroll(self inline);
	}

	@keyframes scroll-shadow-inset {
		/* start with inset shadow on right */
		from {
			box-shadow: inset -10px -10px 15px 0px rgb(0 0 0 / 0.3);
		}

		/* end with inset shadow on left */
		to {
			box-shadow: inset 10px -10px 15px 0px rgb(0 0 0 / 0.3);
		}
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
					background-color: #ff5c5c;
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
</style>
