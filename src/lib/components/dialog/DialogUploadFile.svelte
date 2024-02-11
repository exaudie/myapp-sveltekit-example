<script lang="ts">
	import ShowHidden from '../ShowHidden.svelte';
	import TakePhotoPreview from '../camera/TakePhotoPreview.svelte';
	import InputDragDropFile from '../input/InputDragDropFile.svelte';
	import DialogConfirm from './DialogConfirm.svelte';

	export let isShow: boolean = false;

	let imageSrc: string = '';
</script>

<DialogConfirm bind:isShow title="Upload File">
	<ShowHidden isShow={imageSrc === ''}>
		<InputDragDropFile />
	</ShowHidden>

	<ShowHidden isShow={imageSrc !== ''}>
		<TakePhotoPreview {imageSrc} />
	</ShowHidden>
</DialogConfirm>
