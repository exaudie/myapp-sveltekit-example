<script lang="ts">
	import type { SocialMediaScheme } from '$lib/types/CurriculumVitaeType';
	import { createEventDispatcher } from 'svelte';
	import LabelTop from '$lib/components/LabelTop.svelte';
	import ButtonIcon from '$lib/components/button/ButtonIcon.svelte';
	import GridLayoutTwoColumn from '$lib/components/layout-style/GridLayoutTwoColumn.svelte';
	import InputBasic from '$lib/components/input/InputBasic.svelte';
	import DeleteIcon from '$lib/images/icon/delete_icon.svg';

	export let scheme: SocialMediaScheme;

	const dispatch = createEventDispatcher();

	const onDelete = () => dispatch('Delete');
</script>

<section>
	<GridLayoutTwoColumn>
		<LabelTop label="Social Media Name">
			<InputBasic placeholder="Enter Social Media Name" bind:value={scheme.sosmedName.value} />
		</LabelTop>

		<LabelTop label="Social Media Link">
			<InputBasic placeholder="Enter Social Media Link" bind:value={scheme.sosmedLink.value} />
		</LabelTop>
	</GridLayoutTwoColumn>

	<div class="btn-wrap">
		<ButtonIcon theme="danger" isOutline={true} icon={DeleteIcon} on:Click={onDelete} />
	</div>
</section>

<style lang="less">
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
