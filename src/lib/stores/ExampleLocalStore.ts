import { writable } from 'svelte/store';

type StoreData = {
	id?: string;
	name: string;
	email: string;
};

const createStore = (params: { key: string; dataInit?: StoreData }) => {
	const dataInit = params?.dataInit == undefined ? null : [params.dataInit];
	const storeData = writable<StoreData[] | null>(dataInit);

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

	const del = () => {
		localStorage.removeItem(params.key);
		storeData.set(null);
	};

	const useLocalStorage = () => {
		const localData = localStorage.getItem(params.key);
		if (localData) {
			storeData.set(JSON.parse(atob(localData)));
		}

		storeData.subscribe((data) => localStorage.setItem(params.key, btoa(JSON.stringify(data))));
	};

	const { subscribe } = storeData;

	return { set, add, del, subscribe, useLocalStorage };
};

export const storeLocalExample = createStore({ key: 'keylocal' });

const id = () => Math.random().toString(25).substring(2, 9);
