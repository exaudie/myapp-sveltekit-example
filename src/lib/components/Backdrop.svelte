<script lang="ts">
	import { lockScroll, unLockScroll } from '$lib/helpers/CommonHelpers';
	import CloseIcon from '$lib/images/icon/close_icon.svg';
	import { onDestroy, onMount } from 'svelte';

	export let isShow: boolean;
	export let withClose: boolean = false;
	export let withCloseEsc: boolean = false;

	const onClose = () => (isShow = false);

	const onKeypress = (event: KeyboardEvent) => {
		if (!withCloseEsc) return;
		if (event.metaKey) return;
		if (isShow && event.key === 'Escape') onClose();
	};

	onMount(() => lockScroll());
	onDestroy(() => unLockScroll());
</script>

<svelte:window on:keydown={onKeypress} />
<main class="backdrop" class:visible={isShow}>
	<button class="close" class:visible={withClose} on:click={onClose}>
		<img src={CloseIcon} alt="close" />
	</button>
	<slot />
</main>

<style lang="less">
	* {
		margin: 0;
		padding: 0;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	.backdrop {
		visibility: hidden;
		position: fixed;
		z-index: 9999;
		top: 0;
		left: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100vw;
		height: 100vh;
		background: rgba(0, 0, 0, 0.66);
	}

	.visible {
		visibility: visible !important;
	}

	.close {
		all: unset;
		visibility: hidden;
		cursor: pointer;
		position: absolute;
		top: 0;
		right: 0;

		img {
			width: 30px;
			height: 30px;
		}
	}
</style>
