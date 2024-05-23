<script lang="ts">
	export let isShow: boolean;
</script>

<dialog open={isShow}>
	<slot />
</dialog>

<style lang="less">
	* {
		margin: 0;
		padding: 0;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	dialog {
		border: none;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	@media only screen and (max-width: 600px) {
		dialog {
			width: 90vw;
		}
	}
</style>
