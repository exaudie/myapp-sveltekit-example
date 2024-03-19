<script lang="ts">
	import { getMonthList } from '$lib/helpers/DateFormatter';
	import GridLayoutTwoColumn from '$lib/components/layout-style/GridLayoutTwoColumn.svelte';
	import Select from '$lib/components/select/Select.svelte';
	import SelectClassic from '$lib/components/select/SelectClassic.svelte';
	import SelectMinimal from '$lib/components/select/SelectMinimal.svelte';
	import SelectRound from '$lib/components/select/SelectRound.svelte';
	import LabelTop from '$lib/components/LabelTop.svelte';
</script>

<GridLayoutTwoColumn>
	<LabelTop label="getMonthIDList">
		<Select placeholder="select month">
			{#each getMonthList() as month}
				<option value={month}>{month}</option>
			{/each}
		</Select>
	</LabelTop>

	<LabelTop label="getMonthENList">
		<Select placeholder="select month">
			{#each getMonthList({ locales: 'en' }) as month}
				<option value={month}>{month}</option>
			{/each}
		</Select>
	</LabelTop>

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
