<main><slot /></main>

<style>
	main {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1em;
		align-items: start;
	}

	@media only screen and (max-width: 640px) {
		main {
			grid-template-columns: 1fr;
		}
	}
</style>
