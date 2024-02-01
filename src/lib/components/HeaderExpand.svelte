<script lang="ts">
	import { slide } from 'svelte/transition';
	import ArrowBottomIcon from '../images/icon/arrow_bottom.svg';
	import ShowHidden from './ShowHidden.svelte';

	export let title: string;
	export let titleSize: string = '1em';
	export let titleColor: string = 'var(--text-primary)';
	export let isExpand: boolean = false;

	const onExpand = () => (isExpand = !isExpand);
</script>

<div class="expand-wrap">
	<section>
		<h3 style="--title-size:{titleSize};--title-color:{titleColor};">
			{title}
		</h3>

		<button on:click={onExpand}>
			<img src={ArrowBottomIcon} class:to-down={!isExpand} class:to-up={isExpand} alt="expand" />
		</button>
	</section>

	<ShowHidden isShow={isExpand}>
		<div transition:slide|global>
			<slot />
		</div>
	</ShowHidden>
</div>

<style lang="less">
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

	button {
		cursor: pointer;
		background: none;
		border: none;

		img {
			display: block;
			width: 2.5em;
			height: 2.5em;

			&.to-up {
				transform: rotate(-180deg);
				transition: 0.3s;
			}

			&.to-down {
				transform: rotate(0deg);
				transition: 0.3s;
			}
		}
	}

	.expand-wrap {
		display: flex;
		flex-direction: column;
	}
</style>
