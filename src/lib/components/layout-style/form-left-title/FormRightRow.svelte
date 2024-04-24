<script lang="ts">
	export let gap: string = '1em';
	export let padding: string = '0';
	export let lineBottom: string = 'none';
</script>

<main
	style="--gap:{gap};
				--padding:{padding};
        --line-bottom:{lineBottom};"
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
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: var(--gap);
		padding: var(--padding);
		border-bottom: var(--line-bottom);
	}
</style>
