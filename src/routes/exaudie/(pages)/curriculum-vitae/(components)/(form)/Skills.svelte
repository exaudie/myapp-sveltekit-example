<script lang="ts">
	import type { SkillsScheme } from '$lib/types/CurriculumVitaeType';
	import HeaderExpand from '$lib/components/HeaderExpand.svelte';
	import ButtonIcon from '$lib/components/button/ButtonIcon.svelte';
	import AddIcon from '$lib/images/icon/add_icon.svg';
	import SkillItem from './SkillItem.svelte';

	export let schemes: SkillsScheme[];

	const initSkill = (): SkillsScheme => ({ skillName: { value: '' }, skillLevel: { value: '' } });

	const onAddSkill = () => {
		schemes = [...schemes, initSkill()];
	};

	const onDelSkill = (scheme: SkillsScheme) => {
		schemes = schemes.filter((val) => val !== scheme);
	};
</script>

<HeaderExpand title="Skills" titleSize="1.2em" titleColor="--text-primary">
	<article>
		{#each schemes as scheme}
			<SkillItem bind:scheme on:Delete={() => onDelSkill(scheme)} />
		{/each}

		<div class="btn-wrap">
			<ButtonIcon theme="primary" isOutline={true} icon={AddIcon} on:Click={onAddSkill} />
		</div>
	</article>
</HeaderExpand>

<style>
	* {
		margin: 0;
		padding: 0;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	article {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		gap: 1em;
	}

	@media only screen and (max-width: 640px) {
		.btn-wrap {
			text-align: end;
		}
	}
</style>
