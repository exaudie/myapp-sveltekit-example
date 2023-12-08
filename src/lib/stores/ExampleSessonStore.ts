import { writable } from 'svelte/store';

interface StoreData {
	id?: string;
	name: string;
	email: string;
}

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

	const del = () => storeData.set(null);

	const useSessionStorage = () => {
		const sessionData = sessionStorage.getItem(params.key);
		if (sessionData) {
			storeData.set(JSON.parse(atob(sessionData)));
		}

		storeData.subscribe((data) => sessionStorage.setItem(params.key, btoa(JSON.stringify(data))));
	};

	const { subscribe } = storeData;

	return { set, add, del, subscribe, useSessionStorage };
};

export const storeSessionExample = createStore({ key: 'keysession' });

const id = () => Math.random().toString(25).substring(2, 9);
