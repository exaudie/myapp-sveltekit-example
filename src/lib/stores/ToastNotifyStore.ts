import { derived, writable } from 'svelte/store';

export type NotifyData = {
	message: string;
	dimissable?: boolean;
	timeout?: number;
};

export type PushNotifyData = {
	id: string;
	message: string;
	type: 'error' | 'success' | 'info';
	dimissable: boolean;
	timeout?: number;
};

const createStore = () => {
	const storeData = writable<PushNotifyData[]>([]);

	const push = (params: PushNotifyData) => storeData.update((data) => [...data, params]);

	const success = (params: NotifyData) => {
		push({
			id: id(),
			message: params.message,
			type: 'success',
			dimissable: params?.dimissable ?? true,
			timeout: params?.timeout
		});
	};

	const error = (params: NotifyData) => {
		push({
			id: id(),
			message: params.message,
			type: 'error',
			dimissable: params?.dimissable ?? true,
			timeout: params?.timeout
		});
	};

	const info = (params: NotifyData) => {
		push({
			id: id(),
			message: params.message,
			type: 'info',
			dimissable: params?.dimissable ?? true,
			timeout: params?.timeout
		});
	};

	const dimiss = (id: string) => {
		if (id === '') return;

		storeData.update((data) => data.filter((val) => val.id !== id));
	};

	const storeDerived = derived(storeData, ($storeData, set) => {
		set($storeData);

		if ($storeData.length > 0) {
			setTimeout(() => {
				dimiss($storeData[0]?.id);
			}, $storeData[0]?.timeout ?? 4000);
		}
	});

	const { subscribe } = storeDerived;

	return { success, info, error, dimiss, subscribe };
};

export const toastNotify = createStore();

const id = () => Math.random().toString(30).substring(2, 9);
