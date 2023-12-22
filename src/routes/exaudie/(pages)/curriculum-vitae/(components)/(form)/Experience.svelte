<script lang="ts">
	import type { ExperienceScheme } from '$lib/types/CurriculumVitaeType';
	import HeaderExpand from '$lib/components/HeaderExpand.svelte';
	import ButtonIcon from '$lib/components/button/ButtonIcon.svelte';
	import AddIcon from '$lib/images/icon/add_icon.svg';
	import ExperianceItem from './ExperienceItem.svelte';

	export let schemes: ExperienceScheme[];

	const initExperience = (): ExperienceScheme => ({
		role: { value: '' },
		companyName: { value: '' },
		location: { value: '' },
		startDate: { value: '' },
		endDate: { value: '' },
		isWorkHere: { value: '' },
		desc: { value: '' }
	});

	const onAddExperience = () => {
		schemes = [...schemes, initExperience()];
	};

	const onDelExperience = (scheme: ExperienceScheme) => {
		schemes = schemes.filter((val) => val !== scheme);
	};
</script>

<HeaderExpand title="Experience" titleSize="1.2em">
	<article>
		{#each schemes as scheme, index}
			<ExperianceItem bind:scheme indexScheme={index} on:Delete={() => onDelExperience(scheme)} />
		{/each}

		<div class="btn-wrap">
			<ButtonIcon theme="primary" isOutline={true} icon={AddIcon} on:Click={onAddExperience} />
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
