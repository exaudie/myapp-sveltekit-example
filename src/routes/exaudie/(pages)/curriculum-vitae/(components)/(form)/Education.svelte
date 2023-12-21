<script lang="ts">
	import type { EducationScheme } from '$lib/types/CurriculumVitaeType';
	import HeaderExpand from '$lib/components/HeaderExpand.svelte';
	import ButtonIcon from '$lib/components/button/ButtonIcon.svelte';
	import AddIcon from '$lib/images/icon/add_icon.svg';
	import EducationItem from './EducationItem.svelte';

	export let schemes: EducationScheme[];

	const initEducation = (): EducationScheme => ({
		schoolName: { value: '' },
		degree: { value: '' },
		major: { value: '' },
		grade: { value: '' },
		startDate: { value: '' },
		graduateDate: { value: '' },
		isStudyHere: { value: '' },
		desc: { value: '' }
	});

	const onAddEducation = () => {
		schemes = [...schemes, initEducation()];
	};

	const onDelEducation = (scheme: EducationScheme) => {
		schemes = schemes.filter((val) => val !== scheme);
	};
</script>

<HeaderExpand title="Education" titleSize="1.2em" titleColor="--text-primary">
	<article>
		{#each schemes as scheme, index}
			<EducationItem bind:scheme indexScheme={index} on:Delete={() => onDelEducation(scheme)} />
		{/each}

		<div class="btn-wrap">
			<ButtonIcon theme="primary" isOutline={true} icon={AddIcon} on:Click={onAddEducation} />
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
