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
	<slot />
</dialog>

<style>
	dialog {
		padding: 0;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	dialog::backdrop {
		background-color: rgba(0, 0, 0, 0.4);
	}
</style>
