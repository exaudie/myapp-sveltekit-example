<script lang="ts">
	import { storeExample } from '$lib/stores/ExampleStore';
	import { onDestroy, onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import LabelTop from '$lib/components/LabelTop.svelte';
	import VerticalSpace from '$lib/components/VerticalSpace.svelte';
	import Button from '$lib/components/button/Button.svelte';
	import GridLayoutThreeColumn from '$lib/components/grid/GridLayoutThreeColumn.svelte';
	import InputBasic from '$lib/components/input/InputBasic.svelte';

	let inputSetUp: string = '';
	let valStoreSetUp: any;
	let inputValue = { store: '', localStorage: '', sessionStorage: '' };
	let resultValue = { store: '', localStorage: '', sessionStorage: '' };

	const keyLocalStorage: string = 'localStorage';
	const keySessionStorage: string = 'sessionStorage';

	const writeStore = writable<string[]>([]);

	writeStore.subscribe((val) => (valStoreSetUp = val));

	const onSeDerived = () => {
		if (inputSetUp == '') return;

		writeStore.set([inputSetUp]);
		inputSetUp = '';
	};

	const onAddDerived = () => {
		if (inputSetUp == '') return;

		writeStore.update((val) => (val = [...val, inputSetUp]));
		inputSetUp = '';
	};

	const storeUnsubscribe = storeExample.subscribe((data) => {
		resultValue.store = JSON.stringify(data);
	});

	const onSetStore = () => {
		storeExample.set({ name: inputValue.store, email: '' });
		inputValue.store = '';
	};

	const onAddStore = () => {
		storeExample.add({ name: inputValue.store, email: '' });
		inputValue.store = '';
	};

	const onDelStore = () => {
		storeExample.del();
		inputValue.store = '';
	};

	const onSetLocalStorage = () => {
		const dataStore = JSON.stringify({ value: inputValue.localStorage });
		localStorage.setItem(keyLocalStorage, dataStore);
	};

	const onRmLocalStorage = () => {
		localStorage.removeItem(keyLocalStorage);
	};

	const getLocalStorage = () => {
		let dataStore = localStorage.getItem(keyLocalStorage);
		if (!dataStore) return null;

		return JSON.parse(dataStore);
	};

	const onSetSessionStorage = () => {
		const dataStore = JSON.stringify({ value: inputValue.sessionStorage });
		sessionStorage.setItem(keySessionStorage, dataStore);
	};

	const onRmSessionStorage = () => {
		sessionStorage.removeItem(keySessionStorage);
	};

	const getSessionStorage = () => {
		let dataStore = sessionStorage.getItem(keySessionStorage);
		if (!dataStore) return null;

		return JSON.parse(dataStore);
	};

	onMount(async () => {
		resultValue.localStorage = getLocalStorage()?.value ?? '';
		resultValue.sessionStorage = getSessionStorage()?.value ?? '';
	});
	onDestroy(() => {
		storeUnsubscribe();
	});
</script>

<LabelTop label="Store Example" labelAlign="center">
	<GridLayoutThreeColumn>
		<InputBasic placeholder="enter a text" bind:value={inputValue.store} />

		<div class="wrap vertical">
			<Button label="set store" on:Click={onSetStore} />
			<Button label="add store" on:Click={onAddStore} />
			<Button label="del store" on:Click={onDelStore} />
		</div>

		<LabelTop label="Store Result">
			<div class="box">
				{resultValue.store}
			</div>
		</LabelTop>
	</GridLayoutThreeColumn>
</LabelTop>

<VerticalSpace height="36px" />

<LabelTop label="Store Derived Example" labelAlign="center">
	<GridLayoutThreeColumn>
		<InputBasic placeholder="enter a text" bind:value={inputSetUp} />

		<div class="wrap vertical">
			<Button label="set store" on:Click={onSeDerived} />
			<Button label="update store" on:Click={onAddDerived} />
		</div>

		<LabelTop label="Store Result">
			<div class="box">
				{JSON.stringify(valStoreSetUp)}
			</div>
		</LabelTop>
	</GridLayoutThreeColumn>
</LabelTop>

<VerticalSpace height="36px" />

<LabelTop label="localStorage Example" labelAlign="center">
	<GridLayoutThreeColumn>
		<InputBasic placeholder="enter a text" bind:value={inputValue.localStorage} />

		<div class="wrap vertical">
			<Button label="set localStorage" on:Click={onSetLocalStorage} />
			<Button label="clear localStorage" theme="warning" on:Click={onRmLocalStorage} />
		</div>

		<LabelTop label="localStorage Result">
			<div class="box">
				{resultValue.localStorage}
			</div>
		</LabelTop>
	</GridLayoutThreeColumn>
</LabelTop>

<VerticalSpace height="36px" />

<LabelTop label="sessionStorage Example" labelAlign="center">
	<GridLayoutThreeColumn>
		<InputBasic placeholder="enter a text" bind:value={inputValue.sessionStorage} />

		<div class="wrap vertical">
			<Button label="set sessionStorage" on:Click={() => onSetSessionStorage()} />
			<Button label="clear sessionStorage" theme="warning" on:Click={() => onRmSessionStorage()} />
		</div>

		<LabelTop label="sessionStorage Result">
			<div class="box">
				{resultValue.sessionStorage}
			</div>
		</LabelTop>
	</GridLayoutThreeColumn>
</LabelTop>

<style>
	.wrap {
		display: flex;
		gap: 1em;
	}

	.vertical {
		flex-direction: column;
	}

	.box {
		padding: 1em;
		border-radius: 0.3em;
		background-color: white;
		border: 1px solid var(--text-scondary);
	}
</style>
