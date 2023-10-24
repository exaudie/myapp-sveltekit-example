<script lang="ts">
	import { getMonthENList, getMonthIDList } from '$lib/helpers/DateFormatter';
	import GridLayoutTwoColumn from '$lib/components/grid/GridLayoutTwoColumn.svelte';
	import Select from '$lib/components/select/Select.svelte';
	import SelectClassic from '$lib/components/select/SelectClassic.svelte';
	import SelectMinimal from '$lib/components/select/SelectMinimal.svelte';
	import SelectRound from '$lib/components/select/SelectRound.svelte';
	import LabelTopLeft from '$lib/components/LabelTopLeft.svelte';
</script>

<GridLayoutTwoColumn>
	<LabelTopLeft label="getMonthIDList">
		<Select placeholder="select month">
			{#each getMonthIDList() as month}
				<option value={month}>{month}</option>
			{/each}
		</Select>
	</LabelTopLeft>

	<LabelTopLeft label="getMonthENList">
		<Select placeholder="select month">
			{#each getMonthENList() as month}
				<option value={month}>{month}</option>
			{/each}
		</Select>
	</LabelTopLeft>

	<SelectMinimal>
		<Select placeholder="select month">
			{#each getMonthIDList() as month}
				<option value={month}>{month}</option>
			{/each}
		</Select>
	</SelectMinimal>

	<SelectRound>
		<Select placeholder="select month">
			{#each getMonthIDList() as month}
				<option value={month}>{month}</option>
			{/each}
		</Select>
	</SelectRound>

	<SelectClassic>
		<Select placeholder="select month">
			{#each getMonthIDList() as month}
				<option value={month}>{month}</option>
			{/each}
		</Select>
	</SelectClassic>
</GridLayoutTwoColumn>
