import { writable } from 'svelte/store';

type StoreData = {
	id?: string;
	name: string;
	email: string;
};

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

	const { subscribe } = storeData;
	return { set, add, del, subscribe };
};

export const storeExample = createStore();

const id = () => Math.random().toString(25).substring(2, 9);
