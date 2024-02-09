<script lang="ts">
	import DialogConfirm from './DialogConfirm.svelte';

	export let isShow: boolean = false;
</script>

<DialogConfirm bind:isShow title="Upload File">
	<section></section>
</DialogConfirm>

<style>
	* {
		margin: 0;
		padding: 0;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	section {
		width: 50vw;
		display: flex;
		flex-direction: column;
	}
</style>
