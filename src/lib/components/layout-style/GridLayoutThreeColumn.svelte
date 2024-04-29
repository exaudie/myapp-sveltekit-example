<script lang="ts">
	export let gap: string = '1em';
</script>

<main style="--gap:{gap};">
	<slot />
</main>

<style>
	* {
		margin: 0;
		padding: 0;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	main {
		flex-grow: 1;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--gap);
		align-items: start;
	}

	@media only screen and (max-width: 600px) {
		main {
			grid-template-columns: 1fr;
		}
	}
</style>
