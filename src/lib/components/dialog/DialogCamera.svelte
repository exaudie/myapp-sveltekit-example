<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import TakePhotoCamera from '../TakePhotoCamera.svelte';
	import DialogConfirm from './DialogConfirm.svelte';

	export let isShow: boolean = false;

	const dispatch = createEventDispatcher();

	const onClose = () => {
		dispatch('Close');

		isShow = false;
	};
</script>

<DialogConfirm bind:isShow title="Camera">
	<div class="take-photo-customize">
		<TakePhotoCamera on:Close={onClose}></TakePhotoCamera>
	</div>
</DialogConfirm>

<style>
	.take-photo-customize {background-color: aqua;
		padding-bottom: 1em;
	}
</style>
