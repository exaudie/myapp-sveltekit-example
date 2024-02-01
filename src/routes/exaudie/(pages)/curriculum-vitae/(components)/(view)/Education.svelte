<script lang="ts">
	import type { Education } from '$lib/types/CurriculumVitaeType';
	import { isEmptyTo } from '$lib/helpers/DefaultValue';
	import HeaderAction from '$lib/components/HeaderAction.svelte';
	import LabelTop from '$lib/components/LabelTop.svelte';
	import GridLayoutTwoColumn from '$lib/components/grid/GridLayoutTwoColumn.svelte';

	export let datas: Education[];
</script>

<HeaderAction title="Education" titleSize="1.2em" />

{#each datas as data, index}
	<section>
		<HeaderAction title="Education {index + 1}" titleColor="var(--text-secondary)" />

		<GridLayoutTwoColumn>
			<LabelTop label="School Name">
				<span>{isEmptyTo(data.schoolName, { defValue: '-' })}</span>
			</LabelTop>

			<LabelTop label="Degree">
				<span>{isEmptyTo(data.degree, { defValue: '-' })}</span>
			</LabelTop>

			<LabelTop label="Major">
				<span>{isEmptyTo(data.major, { defValue: '-' })}</span>
			</LabelTop>

			<LabelTop label="Grade">
				<span>{isEmptyTo(data.grade, { defValue: '-' })}</span>
			</LabelTop>

			<LabelTop label="Start Date">
				<span>{isEmptyTo(data.startDate, { defValue: '-' })}</span>
			</LabelTop>

			<LabelTop label="Graduate Date">
				<span>{isEmptyTo(data.isStudyHere ? 'Present' : data.graduateDate, { defValue: '-' })}</span
				>
			</LabelTop>

			<LabelTop label="Description">
				<span>{isEmptyTo(data.desc, { defValue: '-' })}</span>
			</LabelTop>
		</GridLayoutTwoColumn>
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
