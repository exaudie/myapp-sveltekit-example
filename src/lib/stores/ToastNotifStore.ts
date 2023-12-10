import { writable } from 'svelte/store';

const createStore = () => {
	const storeData = writable();

	const { subscribe } = storeData;

	return { subscribe };
};

export const toastNotif = createStore();
