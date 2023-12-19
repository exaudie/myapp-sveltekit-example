<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Clicker from '../clicker/Clicker.svelte';

	export let suffixOpacity: string = '1';
	export let suffixIcon: string = '';
	export let suffixText: string = '';
	export let suffixTextColor: string = '#03213E';
	export let suffixBold: boolean = true;
	export let withClick: boolean = false;

	let widthSuffix: number;

	const dispatch = createEventDispatcher();

	const onClick = () => dispatch('Click');
</script>

<div class="suffix-customize" style="--padding-right:{widthSuffix};">
	<slot />

	<div class="suffix-wrap" style="--suffix-opacity:{suffixOpacity}" bind:offsetWidth={widthSuffix}>
		<Clicker replaceClick={withClick} on:onClick={onClick}>
			<img src={suffixIcon} alt="suffix" class:display-none={suffixIcon === ''} />
			<span
				class="suffix-text"
				class:display-none={suffixIcon !== '' && suffixText !== ''}
				class:text-bold={suffixBold}
				style="--suffix-text-color:{suffixTextColor};"
			>
				{suffixText}
			</span>
		</Clicker>
	</div>
</div>

<style>
	* {
		margin: 0;
		padding: 0;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	.display-none {
		display: none !important;
	}

	.suffix-customize {
		position: relative;
		display: flex;
		flex-grow: 1;
	}

	.suffix-wrap {
		position: absolute;
		padding: 12px 10px 12px 5px;
		top: 0;
		right: 0;
	}

	.suffix-wrap {
		opacity: var(--suffix-opacity);
	}

	.suffix-wrap img {
		display: block;
		width: 1.2em;
		height: 1.2em;
	}

	.suffix-customize :global(input),
	.suffix-customize :global(textarea) {
		padding-right: calc(var(--padding-right) * 1px) !important;
	}

	.suffix-text {
		color: var(--suffix-text-color);
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
	}

	.text-bold {
		font-weight: 700 !important;
	}
</style>
