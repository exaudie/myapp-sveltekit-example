<script lang="ts">
	export let gap: string = '1em';
	export let padding: string = '0';
</script>

<main
	style="--gap:{gap};
				--padding:{padding};"
>
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
		grid-template-columns: repeat(2, 1fr);
		gap: var(--gap);
		align-items: start;
		padding: var(--padding);
	}

	@media only screen and (max-width: 600px) {
		main {
			grid-template-columns: 1fr;
		}
	}
</style>
