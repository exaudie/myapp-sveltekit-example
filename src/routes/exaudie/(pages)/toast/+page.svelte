<script lang="ts">
	import { notifications } from '$lib/stores/NotificationsStore';
	import { toastNotify } from '$lib/stores/ToastNotifyStore';
	import { derived, writable } from 'svelte/store';
	import Button from '$lib/components/button/Button.svelte';
	import GridLayoutThreeColumn from '$lib/components/grid/GridLayoutThreeColumn.svelte';
	import ToastNofication from '$lib/components/toast-snackbar/ToastNofication.svelte';
	import ToastNotify from '$lib/components/toast-snackbar/ToastNotify.svelte';

	const onSuccess = () => toastNotify.success({ message: 'Toast success' });

	const onError = () => toastNotify.error({ message: 'Toast error' });

	const onInfo = () => toastNotify.info({ message: 'Toast info' });

	const onClick = () => {
		notifications.success('testing toast', 1000);
	};

	const tesStore = writable('yes', () => {
		console.log('writable', `start`);
	});

	console.log('tesStore', tesStore);

	tesStore.subscribe((data) => {
		console.log('subscribe', data);
	});

	tesStore.set('no');
	tesStore.update((e) => (e += 'we'));

	let count = 0;
	const onToast2 = () => {
		tesStore.set('toast2=>' + count);
		count++;
	};

	const derivedtest = derived(tesStore, (val, set, update) => {
		set(val);
		update((val) => (val += ' upderiv'));
	});

	derivedtest.subscribe((val) => {
		console.log('derivedtest.subscribe', val);
	});

	console.log('derivedtest', derivedtest);
</script>

<ToastNofication />
<ToastNotify />

<GridLayoutThreeColumn>
	<Button on:Click={onClick}>toast1</Button>

	<Button on:Click={onToast2}>toast2</Button>

	<Button on:Click={onSuccess}>Toast Success</Button>

	<Button on:Click={onError}>Toast Error</Button>

	<Button on:Click={onInfo}>Toast Info</Button>
</GridLayoutThreeColumn>
