<script lang="ts">
	import type { ExperienceScheme } from '$lib/types/CurriculumVitaeType';
	import { createEventDispatcher } from 'svelte';
	import HeaderAction from '$lib/components/HeaderAction.svelte';
	import LabelTop from '$lib/components/LabelTop.svelte';
	import GridLayoutTwoColumn from '$lib/components/grid/GridLayoutTwoColumn.svelte';
	import InputBasic from '$lib/components/input/InputBasic.svelte';
	import InputDate from '$lib/components/input/InputDate.svelte';
	import TextArea from '$lib/components/input/TextArea.svelte';
	import DeleteIcon from '$lib/images/icon/delete_icon.svg';

	export let indexScheme: number;
	export let scheme: ExperienceScheme;

	const dispatch = createEventDispatcher();

	const onDelete = () => dispatch('Delete');
</script>

<section>
	<HeaderAction
		title="Experience {indexScheme + 1}"
		titleColor="var(--text-secondary)"
		actBtnLabel="Delete"
		actBtnIcon={DeleteIcon}
		on:ActClick={onDelete}
	/>

	<GridLayoutTwoColumn>
		<LabelTop label="Role">
			<InputBasic placeholder="Enter Last Name" bind:value={scheme.role.value} />
		</LabelTop>

		<LabelTop label="Company Name">
			<InputBasic placeholder="Enter First Name" bind:value={scheme.companyName.value} />
		</LabelTop>
	</GridLayoutTwoColumn>
	
	<LabelTop label="Location">
		<InputBasic placeholder="Enter First Name" bind:value={scheme.location.value} />
	</LabelTop>

	<GridLayoutTwoColumn>
		<LabelTop label="Start Date">
			<InputDate placeholder="Enter First Name" bind:value={scheme.startDate.value} />
		</LabelTop>

		<LabelTop label="End Date">
			<InputDate placeholder="Enter First Name" bind:value={scheme.endDate.value} />
		</LabelTop>

		<div class="space" />

		<div>
			<input id="isWorkHere" type="checkbox" bind:checked={scheme.isWorkHere.checked} />
			<label for="isWorkHere">I currently work here</label>
		</div>
	</GridLayoutTwoColumn>

	<LabelTop label="Description">
		<TextArea placeholder="Enter Last Name" bind:value={scheme.desc.value} />
	</LabelTop>
</section>

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

	@media only screen and (max-width: 640px) {
		div.space {
			display: none;
		}
	}
</style>
