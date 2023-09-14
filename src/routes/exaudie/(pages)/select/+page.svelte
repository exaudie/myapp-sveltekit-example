<script lang="ts">
	import { getMonthList } from '$lib/helpers/DateFormatter';
	import GridLayoutTwoColumn from '$lib/components/grid/GridLayoutTwoColumn.svelte';
	import Select from '$lib/components/select/Select.svelte';
	import SelectClassic from '$lib/components/select/SelectClassic.svelte';
	import SelectMinimal from '$lib/components/select/SelectMinimal.svelte';
	import SelectRound from '$lib/components/select/SelectRound.svelte';
</script>

<GridLayoutTwoColumn>
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
</GridLayoutTwoColumn>
