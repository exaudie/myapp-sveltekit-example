<script lang="ts">
	import { getMonthList } from '$lib/helpers/DateFormatter';
	import Select from '$lib/components/select/Select.svelte';
	import SelectClassic from '$lib/components/select/SelectClassic.svelte';
	import SelectMinimal from '$lib/components/select/SelectMinimal.svelte';
	import SelectRound from '$lib/components/select/SelectRound.svelte';
</script>

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
