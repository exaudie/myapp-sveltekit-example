<script lang="ts">
	import { notifications } from '$lib/stores/NotificationsStore';
	import { derived, writable } from 'svelte/store';
	import Toast from '$lib/components/toast-snackbar/Toast.svelte';
	import ToastNotif from '$lib/components/toast-snackbar/ToastNotif.svelte';
	import Button from '$lib/components/button/Button.svelte';
	import GridLayoutThreeColumn from '$lib/components/grid/GridLayoutThreeColumn.svelte';

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

	const onToast3 = () => {
		tesStore.update((e) => `toast3 ${e}${count}`);
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

<Toast />
<ToastNotif />
<GridLayoutThreeColumn>
	<Button on:Click={onClick}>toast1</Button>

	<Button on:Click={onToast2}>toast2</Button>

	<Button on:Click={onToast3}>toast3</Button>

	<Button on:Click={() => {}}>toast4</Button>
</GridLayoutThreeColumn>
