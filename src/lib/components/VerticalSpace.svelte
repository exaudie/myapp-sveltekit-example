<script lang="ts">
	export let height: string | '8px';
</script>

<div style="--height: {height};" />

<style>
	* {
		margin: 0;
		padding: 0;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	div {
		display: block;
		height: var(--height);
	}
</style>
