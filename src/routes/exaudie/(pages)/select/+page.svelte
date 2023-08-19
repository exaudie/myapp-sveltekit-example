<script lang="ts">
	import { getMenuTitleFromPage } from '$lib/constants/ExaudieMenu';
	import { getMonthList } from '$lib/helpers/DateFormatter';
	import { page } from '$app/stores';
	import NavToBack from '$lib/components/NavToBack.svelte';
	import VerticalSpace from '$lib/components/VerticalSpace.svelte';
	import Select from '$lib/components/select/Select.svelte';
	import SelectClassic from '$lib/components/select/SelectClassic.svelte';
	import SelectMinimal from '$lib/components/select/SelectMinimal.svelte';
	import SelectRound from '$lib/components/select/SelectRound.svelte';

	const currentPath = $page.url.pathname;
	const pathSplit = currentPath.split('/');
</script>

<NavToBack
	label={getMenuTitleFromPage(`/${pathSplit.at(pathSplit.length - 1) ?? ''}`)}
	linkBack="/exaudie"
/>
<VerticalSpace height="8px" />

<div class="wrap">
	<Select placeholder="select month">
		{#each getMonthList() as month}
			<option value={month}>{month}</option>
		{/each}
	</Select>

	<Select placeholder="select month">
		{#each getMonthList() as month}
			<option value={month}>{month}</option>
		{/each}
	</Select>

	<SelectMinimal>
		<Select placeholder="select month">
			{#each getMonthList() as month}
				<option value={month}>{month}</option>
			{/each}
		</Select>
	</SelectMinimal>

	<SelectRound>
		<Select placeholder="select month">
			{#each getMonthList() as month}
				<option value={month}>{month}</option>
			{/each}
		</Select>
	</SelectRound>

	<SelectClassic>
		<Select placeholder="select month">
			{#each getMonthList() as month}
				<option value={month}>{month}</option>
			{/each}
		</Select>
	</SelectClassic>
</div>

<style>
	.wrap {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1em;
	}
</style>
