<script lang="ts">
	import ShowHidden from '../ShowHidden.svelte';

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
		<ShowHidden isShow={prefixIcon !== ''}>
			<img src={prefixIcon} alt="prefix" />
		</ShowHidden>

		<ShowHidden isShow={prefixIcon === '' && prefixText !== ''}>
			<span
				class="prefix-text"
				class:text-bold={prefixBold}
				style="--prefix-text-color:{prefixTextColor};"
			>
				{prefixText}
			</span>
		</ShowHidden>
	</div>
</div>

<style lang="less">
	* {
		margin: 0;
		padding: 0;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	.prefix-customize {
		position: relative;
		display: flex;
		flex-grow: 1;

		& :global(input),
		& :global(textarea) {
			padding-left: calc(var(--padding-left) * 1px) !important;
		}
	}

	.prefix-wrap {
		position: absolute;
		padding: 12px 5px 12px 10px;
		top: 0;
		left: 0;
		opacity: var(--prefix-opacity);

		img {
			display: block;
			width: 1.2em;
			height: 1.2em;
		}
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
