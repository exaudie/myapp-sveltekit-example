<script lang="ts">
	import DialogConfirm from './DialogConfirm.svelte';

	export let isShow: boolean = false;
</script>

<DialogConfirm bind:isShow title="Upload File">
	<section></section>
</DialogConfirm>

<style>
	section {
		width: 50vw;
		display: flex;
		flex-direction: column;
	}
</style>
