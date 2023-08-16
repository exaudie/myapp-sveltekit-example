<script lang="ts">
	export let isShow;
</script>

<dialog bind:this={isShow}>
	<slot />
</dialog>

<style>
	dialog::backdrop {
		background-color: rgba(0, 0, 0, 0.3);
	}
</style>
