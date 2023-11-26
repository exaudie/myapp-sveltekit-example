<script lang="ts">
	export let isShow: boolean;

	let bindDialog: HTMLDialogElement;

	const showCloseDialog = (isShow: boolean) => {
		if (bindDialog == undefined) return;

		if (isShow) {
			bindDialog.showModal();

			return;
		}

		bindDialog.close();
	};

	$: showCloseDialog(isShow);
</script>

<dialog bind:this={bindDialog}>
	<section>
		<slot />
	</section>
</dialog>

<style lang="less">
	* {
		margin: 0;
		padding: 0;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	dialog::backdrop {
		background-color: rgba(0, 0, 0, 0.4);
	}

	section {
		position: fixed;
		top: 50%;
		left: 50%;
		/* bring your own prefixes */
		transform: translate(-50%, -50%);
	}
</style>
