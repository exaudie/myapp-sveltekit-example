<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import ShowHidden from '../ShowHidden.svelte';
	import TakePhotoCamera from '../camera/TakePhotoCamera.svelte';
	import TakePhotoPreview from '../camera/TakePhotoPreview.svelte';
	import DialogConfirm from './DialogConfirm.svelte';

	export let isShow: boolean = false;

	let imageSrc: string = '';

	const dispatch = createEventDispatcher();

	const onClose = () => {
		dispatch('Close');

		isShow = false;
	};

	const onCapture = (val: CustomEvent) => (imageSrc = val.detail.image);

	const onSave = () => {
		dispatch('Save', { image: imageSrc });

		clearImageSrc();
		isShow = false;
	};

	const clearImageSrc = () => (imageSrc = '');

	$: if (!isShow) clearImageSrc();
</script>

<DialogConfirm bind:isShow title="Camera">
	<ShowHidden isShow={imageSrc == ''}>
		<TakePhotoCamera on:Close={onClose} on:Capture={onCapture} />
	</ShowHidden>

	<ShowHidden isShow={imageSrc !== ''}>
		<TakePhotoPreview bind:imageSrc on:Save={onSave} />
	</ShowHidden>
</DialogConfirm>
