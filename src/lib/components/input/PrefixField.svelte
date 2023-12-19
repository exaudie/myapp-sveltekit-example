<script lang="ts">
	export let prefixOpacity: string = '1';
	export let prefixIcon: string = '';
	export let prefixText: string = '';
	export let prefixTextColor: string = '#03213E';
	export let prefixBold: boolean = true;

	let widthPrefix: number;
</script>

<div class="prefix-customize" style="--padding-left:{widthPrefix};">
	<slot />

	<div class="prefix-wrap" style="--prefix-opacity:{prefixOpacity}" bind:offsetWidth={widthPrefix}>
		<img src={prefixIcon} alt="prefix" class:display-none={prefixIcon === ''} />
		<span
			class="prefix-text"
			class:display-none={prefixIcon !== '' && prefixText !== ''}
			class:text-bold={prefixBold}
			style="--prefix-text-color:{prefixTextColor};"
		>
			{prefixText}
		</span>
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

	.prefix-customize {
		position: relative;
		display: flex;
		flex-grow: 1;
	}

	.prefix-wrap {
		position: absolute;
		padding: 12px 5px 12px 10px;
		top: 0;
		left: 0;
	}

	.prefix-wrap {
		opacity: var(--prefix-opacity);
	}

	.prefix-wrap img {
		display: block;
		width: 1.2em;
		height: 1.2em;
	}

	.prefix-customize :global(input),
	.prefix-customize :global(textarea) {
		padding-left: calc(var(--padding-left) * 1px) !important;
	}

	.prefix-text {
		color: var(--prefix-text-color);
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
	}

	.text-bold {
		font-weight: 700 !important;
	}
</style>
