<div class="select-customize">
	<slot />
</div>

<style>
	.select-customize :global(select) {
		width: 100%;

		/* reset */
		margin: 0;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
	}

	.select-customize :global(select.customize) {
		background-image: linear-gradient(45deg, transparent 50%, gray 50%),
			linear-gradient(135deg, gray 50%, transparent 50%), radial-gradient(#ddd 70%, transparent 72%);
		background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px),
			calc(100% - 0.5em) 0.5em;
		background-size: 5px 5px, 5px 5px, 1.5em 1.5em;
		background-repeat: no-repeat;
	}

	.select-customize :global(select.customize):focus {
    background-image: linear-gradient(45deg, white 50%, transparent 50%),
			linear-gradient(135deg, transparent 50%, white 50%),
			radial-gradient(gray 70%, transparent 72%);
		background-position: calc(100% - 15px) 1em, calc(100% - 20px) 1em, calc(100% - 0.5em) 0.5em;
		background-size: 5px 5px, 5px 5px, 1.5em 1.5em;
		background-repeat: no-repeat;
		border-color: green;
		outline: 0;
	}

	.select-customize :global(select:-moz-focusring) {
		color: transparent;
		text-shadow: 0 0 0 #000;
	}
</style>
