<script lang="ts">
	export let title: string;
	export let desc: string;
	export let illust: string = '';
</script>

<div class="content-state">
	<img src={illust} alt="illustration" />

	<div class="state-wtap">
		<h3>{title}</h3>

		<p>{desc}</p>
	</div>
</div>

<style lang="less">
	* {
		margin: 0;
		padding: 0;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	.content-state {
		width: 32vw;
		padding: 2em 1em;
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 2em;

		img {
			display: block;
			width: 10em;
			height: 10em;
		}

		.state-wtap {
			width: 100%;

			h3 {
				color: var(--text-primary);
			}

			p {
				color: var(--text-secondary);
			}
		}
	}

	@media only screen and (max-width: 600px) {
		.content-state {
			width: 90vw;
		}
	}
</style>
