<script lang="ts">
	import { createEventDispatcher } from 'svelte';
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

<Dialog {isShow}>
	<button class="close" on:click={onClose}>X</button>

	<iframe src={sourcePdf} frameborder="0" {title} />
</Dialog>

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
		cursor: pointer;
		position: absolute;
		border-radius: 50%;
		background-color: rgba(240, 248, 255, 0.5);
		width: 30px;
		height: 30px;
		top: -25px;
		right: -25px;
	}
</style>
