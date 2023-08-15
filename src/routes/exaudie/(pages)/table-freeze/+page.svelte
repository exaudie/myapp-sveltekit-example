<script lang="ts">
	import { getMenuTitleFromPage } from '$lib/constants/ExaudieMenu';
	import { page } from '$app/stores';
	import NavToBack from '$lib/components/NavToBack.svelte';
	import VerticalSpace from '$lib/components/VerticalSpace.svelte';

	const currentPath = $page.url.pathname;
	const pathSplit = currentPath.split('/');
	const column: number = 30;
	const row: number = 50;
</script>

<NavToBack
	label={getMenuTitleFromPage(`/${pathSplit.at(pathSplit.length - 1) ?? ''}`)}
	linkBack="/exaudie"
/>
<VerticalSpace height="8px" />

<div class="table-wrap">
	<table>
		<thead>
			<tr>
				{#each Array(column) as _, colIdx}
					<th>head {colIdx}</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each Array(row) as _, rowIdx}
				<tr>
					{#each Array(column) as _, colIdx}
						<td>cell {rowIdx} | {colIdx}</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	.table-wrap {
		background-color: bisque;
		width: 100%;
		height: 60vh;
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
</style>
