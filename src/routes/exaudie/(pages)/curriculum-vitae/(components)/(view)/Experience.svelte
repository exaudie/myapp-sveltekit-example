<script lang="ts">
	import type { Experience } from '$lib/types/CurriculumVitaeType';
	import { isEmptyTo } from '$lib/helpers/DefaultValue';
	import HeaderAction from '$lib/components/HeaderAction.svelte';
	import LabelTop from '$lib/components/LabelTop.svelte';
	import GridLayoutTwoColumn from '$lib/components/grid/GridLayoutTwoColumn.svelte';

	export let datas: Experience[];
</script>

<HeaderAction title="Experience" titleSize="1.2em" />

{#each datas as data, index}
	<section>
		<HeaderAction title="Experience {index + 1}" titleColor="var(--text-secondary)" />

		<GridLayoutTwoColumn>
			<LabelTop label="Role">
				<span>{isEmptyTo(data.role, { defValue: '-' })}</span>
			</LabelTop>

			<LabelTop label="Company Name">
				<span>{isEmptyTo(data.companyName, { defValue: '-' })}</span>
			</LabelTop>
		</GridLayoutTwoColumn>

		<LabelTop label="Location">
			<span>{isEmptyTo(data.location, { defValue: '-' })}</span>
		</LabelTop>

		<GridLayoutTwoColumn>
			<LabelTop label="Start Date">
				<span>{isEmptyTo(data.startDate, { defValue: '-' })}</span>
			</LabelTop>

			<LabelTop label="End Date">
				<span>{data.isWorkHere ? 'Present' : isEmptyTo(data.endDate, { defValue: '-' })}</span>
			</LabelTop>
		</GridLayoutTwoColumn>

		<LabelTop label="Description">
			<span>{isEmptyTo(data.desc, { defValue: '-' })}</span>
		</LabelTop>
	</section>
{/each}

<style>
	* {
		margin: 0;
		padding: 0;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	section {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		gap: 1em;
		margin-top: 0.5em;
		padding-top: 0.5em;
		border-top: 1px solid var(--text-secondary);
	}
</style>
