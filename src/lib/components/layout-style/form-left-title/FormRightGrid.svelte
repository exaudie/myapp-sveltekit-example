<main>
	<slot />
</main>

<style lang="less">
	* {
		margin: 0;
		padding: 0;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	main {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1em;
		align-items: start;
	}

	/* Extra small devices (phones, 600px and down) */
	@media only screen and (max-width: 600px) {
		main {
			grid-template-columns: repeat(auto-fill, minmax(182px, 1fr));
		}
	}
</style>
