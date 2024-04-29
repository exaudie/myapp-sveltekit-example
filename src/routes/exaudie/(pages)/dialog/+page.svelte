<script lang="ts">
	import GridLayoutThreeColumn from '$lib/components/layout-style/GridLayoutThreeColumn.svelte';
	import Button from '$lib/components/button/Button.svelte';
	import Dialog from '$lib/components/dialog/Dialog.svelte';
	import DialogOutsiteClick from '$lib/components/dialog/DialogOutsiteClick.svelte';

	let isShowDialog: boolean = false;
	let isShowDialogWithOutsite: boolean = false;

	const toggleShowDialog = () => (isShowDialog = !isShowDialog);
	const toggleShowDialogWithOutsite = () => (isShowDialogWithOutsite = !isShowDialogWithOutsite);
</script>

<GridLayoutThreeColumn>
	<Button on:Click={toggleShowDialog}>show</Button>

	<Button on:Click={toggleShowDialogWithOutsite}>show with outsite</Button>

	<Button on:Click={toggleShowDialog}>show</Button>
</GridLayoutThreeColumn>

<Dialog isShow={isShowDialog}>
	<div class="content">
		tanpilan testing bindDialog!=undefined<Button on:Click={toggleShowDialog}>close</Button>
	</div>
</Dialog>

<DialogOutsiteClick isShow={isShowDialogWithOutsite} on:ClickOutsite={toggleShowDialogWithOutsite}>
	<div class="content">
		tanpilan testing DialogWithOutsite
		<Button on:Click={toggleShowDialogWithOutsite}>close</Button>
	</div>
</DialogOutsiteClick>

<style>
	.content {
		background-color: blueviolet;
		width: 300px;
		height: 200px;
	}
</style>
