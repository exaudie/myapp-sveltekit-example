import { derived, writable } from 'svelte/store';

export type NotifyData = {
	message: string;
	dimissable?: boolean;
};

export type PushNotifyData = {
	id: string;
	message: string;
	type: 'error' | 'success' | 'info';
	dimissable: boolean;
};

const createStore = () => {
	const storeData = writable<PushNotifyData[]>([]);

	const push = (params: PushNotifyData) => {
		console.log('push notification', params.message);
	};

	const success = (params: NotifyData) => {
		push({
			id: id(),
			message: params.message,
			type: 'success',
			dimissable: params?.dimissable ?? true
		});
	};

	const error = (params: NotifyData) => {
		push({
			id: id(),
			message: params.message,
			type: 'error',
			dimissable: params?.dimissable ?? true
		});
	};

	const info = (params: NotifyData) => {
		push({
			id: id(),
			message: params.message,
			type: 'info',
			dimissable: params?.dimissable ?? true
		});
	};

	const dimiss = (id: string) => {
		if (id === '') return;
	};

	const storeDerived = derived(storeData, ($storeData, set) => {
		setTimeout(() => {
			set($storeData);
		}, 1000);
	});

	const { subscribe } = storeDerived;

	return { success, info, error, dimiss, subscribe };
};

export const toastNotify = createStore();

const id = () => Math.random().toString(30).substring(2, 9);
