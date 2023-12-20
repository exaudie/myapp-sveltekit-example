<script lang="ts">
	import { storeLocalExample } from '$lib/stores/ExampleLocalStore';
	import { storeSessionExample } from '$lib/stores/ExampleSessonStore';
	import { storeExample } from '$lib/stores/ExampleStore';
	import { storeDerivedExample } from '$lib/stores/ExampleStoreDerived';
	import { onDestroy, onMount } from 'svelte';
	import LabelTop from '$lib/components/LabelTop.svelte';
	import VerticalSpace from '$lib/components/VerticalSpace.svelte';
	import Button from '$lib/components/button/Button.svelte';
	import GridLayoutThreeColumn from '$lib/components/grid/GridLayoutThreeColumn.svelte';
	import InputBasic from '$lib/components/input/InputBasic.svelte';

	let inputValue = { store: '', derived: '', localStorage: '', sessionStorage: '' };
	let resultValue = { store: '', derived: '', localStorage: '', sessionStorage: '' };

	/**
	 * Svelte Store basic
	 */
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

	/**
	 * svelte store with derived
	 */
	const storeDerivedUnsubscribe = storeDerivedExample.subscribe((data) => {
		resultValue.derived = JSON.stringify(data);
	});
	const onSeDerived = () => {
		storeDerivedExample.set({ name: inputValue.derived, email: '' });
		inputValue.derived = '';
	};

	const onAddDerived = () => {
		storeDerivedExample.add({ name: inputValue.derived, email: '' });
		inputValue.derived = '';
	};

	const onDelDerived = () => {
		storeDerivedExample.del();
		inputValue.derived = '';
	};

	/**
	 * svelte store with local storage
	 */
	const storeLocalUnsubscribe = storeLocalExample.subscribe((data) => {
		resultValue.localStorage = JSON.stringify(data);
	});

	const onSetLocalStorage = () => {
		storeLocalExample.set({ name: inputValue.localStorage, email: '' });
		inputValue.localStorage = '';
	};

	const onRmLocalStorage = () => {
		storeLocalExample.del();
	};

	/**
	 * svelte store with session storage
	 */
	const storeSessionUnsubscribe = storeSessionExample.subscribe((data) => {
		resultValue.sessionStorage = JSON.stringify(data);
	});

	const onSetSessionStorage = () => {
		storeSessionExample.set({ name: inputValue.sessionStorage, email: '' });
		inputValue.sessionStorage = '';
	};

	const onRmSessionStorage = () => {
		storeSessionExample.del();
	};

	/**
	 * life sycle
	 */
	onMount(async () => {
		storeLocalExample.useLocalStorage();
		storeSessionExample.useSessionStorage();
	});

	onDestroy(() => {
		storeUnsubscribe();
		storeDerivedUnsubscribe();
		storeLocalUnsubscribe();
		storeSessionUnsubscribe();
	});
</script>

<!-- svelte store basic -->
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

<!-- svelte store with derived -->
<LabelTop label="Store Derived Example" labelAlign="center">
	<GridLayoutThreeColumn>
		<InputBasic placeholder="enter a text" bind:value={inputValue.derived} />

		<div class="wrap vertical">
			<Button label="set store" on:Click={onSeDerived} />
			<Button label="update store" on:Click={onAddDerived} />
			<Button label="update store" on:Click={onDelDerived} />
		</div>

		<LabelTop label="Store Result">
			<div class="box">
				{resultValue.derived}
			</div>
		</LabelTop>
	</GridLayoutThreeColumn>
</LabelTop>

<VerticalSpace height="36px" />

<!-- svelte store with local storage -->
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

<!-- svelte store with session storage -->
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
		border: 1px solid var(--text-secondary);
	}
</style>
