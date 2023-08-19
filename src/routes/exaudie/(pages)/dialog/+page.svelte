<script lang="ts">
	import { page } from '$app/stores';
	import { getMenuTitleFromPage } from '$lib/constants/ExaudieMenu';
	import NavToBack from '$lib/components/NavToBack.svelte';
	import VerticalSpace from '$lib/components/VerticalSpace.svelte';
	import Button from '$lib/components/button/Button.svelte';
	import Dialog from '$lib/components/dialog/Dialog.svelte';
	import DialogOutsiteClick from '$lib/components/dialog/DialogOutsiteClick.svelte';

	let isShowDialog: boolean = false;
	let isShowDialogWithOutsite: boolean = false;

	const currentPath = $page.url.pathname;
	const pathSplit = currentPath.split('/');

	const toggleShowDialog = () => (isShowDialog = !isShowDialog);
	const toggleShowDialogWithOutsite = () => (isShowDialogWithOutsite = !isShowDialogWithOutsite);
</script>

<NavToBack
	label={getMenuTitleFromPage(`/${pathSplit.at(pathSplit.length - 1) ?? ''}`)}
	linkBack="/exaudie"
/>
<VerticalSpace height="8px" />

<div class="wrap">
	<Button on:onClick={toggleShowDialog}>show</Button>

	<Button on:onClick={toggleShowDialogWithOutsite}>show with outsite</Button>

	<Button on:onClick={toggleShowDialog}>show</Button>
</div>

<Dialog isShow={isShowDialog}>
	<div class="content">
		tanpilan testing bindDialog!=undefined<Button on:onClick={toggleShowDialog}>close</Button>
	</div>
</Dialog>

<DialogOutsiteClick
	isShow={isShowDialogWithOutsite}
	on:onClickOutsite={toggleShowDialogWithOutsite}
>
	<div class="content">
		tanpilan testing DialogWithOutsite
		<Button on:onClick={toggleShowDialogWithOutsite}>close</Button>
	</div>
</DialogOutsiteClick>

<style>
	.wrap {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1em;
	}

	.content {
		background-color: blueviolet;
		width: 300px;
		height: 200px;
	}
</style>
