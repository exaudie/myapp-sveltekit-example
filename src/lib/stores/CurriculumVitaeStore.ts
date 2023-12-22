import type { CurrculumVitae } from '$lib/types/CurriculumVitaeType';
import { writable } from 'svelte/store';

const createStore = (params: { key: string }) => {
	const storeData = writable<CurrculumVitae | null>(null);

	const set = (data: CurrculumVitae) => storeData.set(data);

	const useLocalStorage = () => {
		const localData = localStorage.getItem(params.key);
		if (localData) storeData.set(JSON.parse(atob(localData)));

		storeData.subscribe((data) => {
			if (data) localStorage.setItem(params.key, btoa(JSON.stringify(data)));
		});
	};

	const { subscribe } = storeData;

	return { set, subscribe, useLocalStorage };
};

export const CvStore = createStore({ key: 'cvprivate' });
