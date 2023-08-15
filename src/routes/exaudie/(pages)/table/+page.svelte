<script lang="ts">
	import { getMenuTitleFromPage } from '$lib/constants/ExaudieMenu';
	import { page } from '$app/stores';
	import NavToBack from '$lib/components/NavToBack.svelte';
	import VerticalSpace from '$lib/components/VerticalSpace.svelte';

	const currentPath = $page.url.pathname;
	const pathSplit = currentPath.split('/');
	const column: number = 5;
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
		background-color: wheat;
		width: 100%;
		height: 60vh;
		overflow: auto;
	}

	table,
	th,
	td {
		border-collapse: collapse;
	}

	table {
		width: 700px;
		border: 1px solid goldenrod;
	}

	thead {
		background-color: blue;
		color: white;
	}

	tbody tr:nth-child(even) {
		background-color: cadetblue;
	}

	th,
	td {
		min-width: 200px;
		width: 200px;
		min-height: 30px;
		height: 30px;
		padding: 4px 8px;
		border-right: 1px solid white;
	}

	th:last-child,
	td:last-child {
		border-right: none;
	}
</style>
