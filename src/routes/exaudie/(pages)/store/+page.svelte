<script lang="ts">
	import { writable } from 'svelte/store';
	import VerticalSpace from '$lib/components/VerticalSpace.svelte';
	import Button from '$lib/components/button/Button.svelte';
	import InputBasic from '$lib/components/input/InputBasic.svelte';

	let inputSetUp: string = '';
	let valStoreSetUp: any;

	const writeStore = writable<string[]>([]);

	writeStore.subscribe((val) => (valStoreSetUp = val));

	const onClickSet = () => {
		if (inputSetUp == '') return;

		writeStore.set([inputSetUp]);
		inputSetUp = '';
	};

	const onClickUpdate = () => {
		if (inputSetUp == '') return;

		writeStore.update((val) => (val = [...val, inputSetUp]));
		inputSetUp = '';
	};
</script>

<div class="wrap">
	<InputBasic placeholder="enter a text" bind:value={inputSetUp} />
	<Button on:onClick={onClickSet}>button set</Button>
	<Button on:onClick={onClickUpdate}>button update</Button>
</div>

<VerticalSpace height="8px" />

<div class="box">
	<div class="val-store">
		<span>store value</span>
		{JSON.stringify(valStoreSetUp)}
	</div>
</div>

<style>
	.wrap,
	.box {
		display: flex;
		gap: 1em;
	}

	.val-store {
		display: flex;
		flex-direction: column;
		gap: 1em;
		padding: 1em;
		border-radius: 0.3em;
		background-color: white;
		border: 1px solid var(--text-scondary);
	}
</style>
