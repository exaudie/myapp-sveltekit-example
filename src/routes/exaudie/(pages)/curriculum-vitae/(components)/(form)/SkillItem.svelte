<script lang="ts">
	import type { SkillsScheme } from '$lib/types/CurriculumVitaeType';
	import { createEventDispatcher } from 'svelte';
	import LabelTop from '$lib/components/LabelTop.svelte';
	import ButtonIcon from '$lib/components/button/ButtonIcon.svelte';
	import GridLayoutTwoColumn from '$lib/components/layout-style/GridLayoutTwoColumn.svelte';
	import InputBasic from '$lib/components/input/InputBasic.svelte';
	import DeleteIcon from '$lib/images/icon/delete_icon.svg';
	import InputNumber from '$lib/components/input/InputNumber.svelte';

	export let scheme: SkillsScheme;

	const dispatch = createEventDispatcher();

	const onDelete = () => dispatch('Delete');
</script>

<section>
	<GridLayoutTwoColumn>
		<LabelTop label="Skill Name">
			<InputBasic placeholder="Enter Skill Name" bind:value={scheme.skillName.value} />
		</LabelTop>

		<LabelTop label="Skill Level 1-10">
			<InputNumber
				type="number"
				max={10}
				placeholder="Enter Skill Level"
				bind:value={scheme.skillLevel.value}
			/>
		</LabelTop>
	</GridLayoutTwoColumn>

	<div class="btn-wrap">
		<ButtonIcon theme="danger" isOutline={true} icon={DeleteIcon} on:Click={onDelete} />
	</div>
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
		gap: 1em;
		align-items: end;
	}

	@media only screen and (max-width: 640px) {
		section {
			align-items: start;
		}

		.btn-wrap {
			margin-top: 1.2em;
		}
	}
</style>
