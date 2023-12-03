import { writable } from 'svelte/store';

export type StoreData = {
	id?: string;
	name: string;
	email: string;
};

const createStore = () => {
	const _storeData = writable<StoreData[] | null>(null);

	const set = (data: StoreData) => {
		data.id = id();
		_storeData.set([data]);
	};

	const add = (data: StoreData) => {
		data.id = id();
		_storeData.update((val) => {
			const newVal = val ?? [];

			return [...newVal, data];
		});
	};

	const del = () => _storeData.set(null);

	const { subscribe } = _storeData;
	return { set, add, del, subscribe };
};

export const storeExample = createStore();

const id = () => Math.random().toString(25).substring(2,9);
