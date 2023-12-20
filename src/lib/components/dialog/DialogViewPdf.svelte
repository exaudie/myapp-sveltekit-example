<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import CloseIcon from '$lib/images/icon/close_icon.svg';
	import Backdrop from '../Backdrop.svelte';
	import Dialog from './Dialog.svelte';

	export let isShow: boolean;
	export let title: string = 'document';
	export let sourcePdf: string;

	const dispatch = createEventDispatcher();

	const onClose = () => {
		dispatch('Close');

		isShow = false;
	};
</script>

<Backdrop {isShow}>
	<Dialog {isShow}>
		<button class="close" on:click={onClose}>
			<img src={CloseIcon} alt="close" />
		</button>

		<iframe src={sourcePdf} frameborder="0" {title} />
	</Dialog>
</Backdrop>

<style lang="less">
	* {
		margin: 0;
		padding: 0;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	iframe {
		width: 80vw;
		height: 80vh;
	}

	button {
		all: unset;
		cursor: pointer;
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		background-color: rgba(240, 248, 255, 0.5);
		width: 30px;
		height: 30px;
		top: -30px;
		right: -30px;

		img {
			display: block;
			width: 24px;
			height: 24px;
		}
	}
</style>
