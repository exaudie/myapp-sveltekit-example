import { derived, writable } from 'svelte/store';

interface StoreData {
	id?: string;
	name: string;
	email: string;
}

const createStore = () => {
	const storeData = writable<StoreData[] | null>(null);

	const set = (data: StoreData) => {
		data.id = id();
		storeData.set([data]);
	};

	const add = (data: StoreData) => {
		data.id = id();
		storeData.update((val) => {
			const newVal = val ?? [];

			return [...newVal, data];
		});
	};

	const del = () => storeData.set(null);

	const storeDerived = derived(storeData, ($storeData, set) => {
		const timer = setTimeout(() => {
			set($storeData);
		}, 1000);
	});

	const { subscribe } = storeDerived;

	return { set, add, del, subscribe };
};

export const storeDerivedExample = createStore();

const id = () => Math.random().toString(25).substring(2, 9);
