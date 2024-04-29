<script lang="ts">
	import type { Skills } from '$lib/types/CurriculumVitaeType';
	import { isEmptyTo } from '$lib/helpers/DefaultValue';
	import HeaderAction from '$lib/components/HeaderAction.svelte';
	import LabelTop from '$lib/components/LabelTop.svelte';
	import GridLayoutTwoColumn from '$lib/components/layout-style/GridLayoutTwoColumn.svelte';
	import VerticalSpace from '$lib/components/VerticalSpace.svelte';
	import ProgressLines from '$lib/components/ProgressLines.svelte';

	export let datas: Skills[];

	const getPercent = (value: number, params?: { from?: number }) => {
		return (value / (params?.from ?? 100)) * 100;
	};
</script>

<HeaderAction title="Skills" titleSize="1.2em" />

<VerticalSpace height="1em" />
<GridLayoutTwoColumn>
	<LabelTop label="Skill Name" />
	<LabelTop label="Level" />

	{#each datas as data}
		<span>{isEmptyTo(data.skillName, { defValue: '-' })}</span>

		{#if data.skillLevel > 0}
			<ProgressLines
				value={getPercent(data.skillLevel, { from: 10 })}
				display={`${data.skillLevel}`}
			/>
		{:else}
			<span>-</span>
		{/if}
	{/each}
</GridLayoutTwoColumn>
