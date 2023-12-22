<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import ShowHidden from './ShowHidden.svelte';
	import ButtonIcon from './button/ButtonIcon.svelte';

	export let title: string;
	export let titleSize: string = '1em';
	export let titleColor: string = 'var(--text-primary)';
	export let actBtnLabel: string = '';
	export let actBtnIcon: string = '';

	const dispatch = createEventDispatcher();

	const onActClick = () => dispatch('ActClick');
</script>

<section>
	<h3
		style="--title-size:{titleSize};
          --title-color:{titleColor};"
	>
		{title}
	</h3>

	<ShowHidden isShow={actBtnLabel !== '' || actBtnIcon !== ''}>
		<div class="btn-action">
			<ButtonIcon
				theme="danger"
				isOutline={true}
				icon={actBtnIcon}
				label={actBtnLabel}
				on:Click={onActClick}
			/>
		</div>
	</ShowHidden>
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
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1em;
	}

	h3 {
		flex-grow: 1;
		font-size: var(--title-size);
		color: var(--title-color);
	}

	.btn-action :global(button) {
		padding: 0.2em 1em;
	}
</style>
