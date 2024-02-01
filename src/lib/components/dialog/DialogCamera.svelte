<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Backdrop from '../Backdrop.svelte';
	import ShowHidden from '../ShowHidden.svelte';
	import TakePhotoCamera from '../TakePhotoCamera.svelte';
	import Dialog from './Dialog.svelte';

	export let isShow: boolean = false;

	const dispatch = createEventDispatcher();

	const onClose = () => {
		dispatch('Close');

		isShow = false;
	};
</script>

<ShowHidden bind:isShow>
	<Backdrop bind:isShow withCloseEsc={true}>
		<div class="customize">
			<Dialog bind:isShow>
				<TakePhotoCamera on:Close={onClose}></TakePhotoCamera>
			</Dialog>
		</div>
	</Backdrop>
</ShowHidden>

<style lang="less">
	* {
		margin: 0;
		padding: 0;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	.customize :global(dialog) {
		border-radius: 0.4em;
		overflow: hidden;
	}
</style>
