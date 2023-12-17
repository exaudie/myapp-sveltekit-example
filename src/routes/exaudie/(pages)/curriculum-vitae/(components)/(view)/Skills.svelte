<script lang="ts">
	import type { Skills } from '$lib/types/CurriculumVitaeType';
	import { isEmptyTo } from '$lib/helpers/DefaultValue';
	import HeaderAction from '$lib/components/HeaderAction.svelte';
	import LabelTop from '$lib/components/LabelTop.svelte';
	import GridLayoutTwoColumn from '$lib/components/grid/GridLayoutTwoColumn.svelte';
	import VerticalSpace from '$lib/components/VerticalSpace.svelte';

	export let datas: Skills[];
</script>

<HeaderAction title="Skills" titleSize="1.2em" />

<VerticalSpace height="1em" />
<GridLayoutTwoColumn>
	<LabelTop label="Skill Name" />
	<LabelTop label="Level" />

	{#each datas as data}
		<span>{isEmptyTo(data.skillName, { defValue: '-' })}</span>

		<span>{isEmptyTo(data.skillLevel, { defValue: '-' })}</span>
	{/each}
</GridLayoutTwoColumn>
