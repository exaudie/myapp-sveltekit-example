<script lang="ts">
	export let title: string = '';
	export let subtitle: string = '';
</script>

<main>
	<div class="left-title">
		<h3>{title}</h3>
		<p>{subtitle}</p>
	</div>

	<div class="right-content"><slot /></div>
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
		grid-template-columns: 1fr 2fr;
		gap: 1em;

		.left-title {
			display: flex;
			flex-direction: column;
			gap: 0.3em;

			* {
				font-size: 1em;
				line-height: 1.3em;
			}

			h3 {
				font-weight: 700;
				color: var(--text-primary);
			}

			p {
				font-weight: 400;
				color: var(--text-secondary);
			}
		}
	}

	/* Extra small devices (phones, 600px and down) */
	@media only screen and (max-width: 600px) {
		main {
			grid-template-columns: 1fr;
		}
	}
</style>
