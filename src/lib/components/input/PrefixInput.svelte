<script lang="ts">
	import ShowHidden from '../ShowHidden.svelte';

	export let opacity: string = '1';
	export let prefixIcon: string = '';
	export let prefixText: string = '';
	export let textBold: boolean = false;
</script>

<div class="input-customize">
	<div class="prefix" style="opacity: {opacity};">
		<ShowHidden isShow={prefixText != '' && prefixIcon == ''}>
			<span class:text-bold={textBold} class:text-regular={!textBold}>{prefixText}</span>
		</ShowHidden>

		<ShowHidden isShow={prefixIcon != ''}>
			<img src={prefixIcon} alt="prefix" />
		</ShowHidden>
	</div>

	<slot />
</div>

<style>
	* {
		margin: 0;
		padding: 0;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	.input-customize {
		background-color: white;
		display: flex;
		flex-direction: row;
		align-items: center;
		border: 1px solid blue;
		border-radius: 4px;
	}

	.input-customize :global(.input-customize) {
		border: none !important;
		width: 100%;
	}

	.input-customize :global(input) {
		width: 100%;
		flex-grow: 1;
		border: none;
		background: none;
		padding-left: 0.5em;
	}

	.input-customize :global(input.customize):focus {
		outline: 0;
	}

	.input-customize :global(input:-moz-focusring) {
		text-shadow: 0 0 0 #000;
	}

	.input-customize:focus-within {
		border-color: greenyellow;
	}

	.input-customize .prefix {
		min-width: 1.5em;
		padding: 0.5em 0 0.5em 0.5em;
	}

	.input-customize .prefix span {
		color: var(--text-primary);
		font-size: 1em;
	}

	.input-customize .prefix img {
		display: block;
		height: 1.3em;
		width: 1.3em;
	}
</style>
