<script lang="ts">
	export let value: number;
	export let display: string = '';
</script>

<div class="background-progress">
	<div class="foreground-progress" style="--width:{value}%">
		<span>{display}</span>
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

	.background-progress {
		display: flex;
		width: 100%;
		height: 20px;
		background-color: #e3ecf8;
		border: 1px solid #e1e7f2;
		border-radius: 1em;
	}

	.foreground-progress {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		width: var(--width);
		background-color: #3e86fa;
		border-radius: 1em;

		span {
			font-size: 0.8em;
			color: white;
		}
	}
</style>
