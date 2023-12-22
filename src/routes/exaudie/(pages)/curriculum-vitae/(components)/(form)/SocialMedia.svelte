<script lang="ts">
	import type { SocialMediaScheme } from '$lib/types/CurriculumVitaeType';
	import SocialMediaItem from './SocialMediaItem.svelte';
	import HeaderExpand from '$lib/components/HeaderExpand.svelte';
	import ButtonIcon from '$lib/components/button/ButtonIcon.svelte';
	import AddIcon from '$lib/images/icon/add_icon.svg';

	export let schemes: SocialMediaScheme[];

	const initSosmed = (): SocialMediaScheme => ({
		sosmedName: { value: '' },
		sosmedLink: { value: '' }
	});

	const onAddSosmed = () => {
		schemes = [...schemes, initSosmed()];
	};

	const onDelSosmed = (scheme: SocialMediaScheme) => {
		schemes = schemes.filter((val) => val !== scheme);
	};
</script>

<HeaderExpand title="Social Media" titleSize="1.2em" titleColor="--text-primary">
	<article>
		{#each schemes as scheme}
			<SocialMediaItem bind:scheme on:Delete={() => onDelSosmed(scheme)} />
		{/each}

		<div class="btn-wrap">
			<ButtonIcon theme="primary" isOutline={true} icon={AddIcon} on:Click={onAddSosmed} />
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
