<script lang="ts">
	import { page } from '$app/stores';
	import NavToBack from '$lib/components/NavToBack.svelte';
	import Toast from '$lib/components/Toast.svelte';
	import ToastNotif from '$lib/components/ToastNotif.svelte';
	import VerticalSpace from '$lib/components/VerticalSpace.svelte';
	import Button from '$lib/components/button/Button.svelte';
	import { getMenuTitleFromPage } from '$lib/constants/ExaudieMenu';
	import { notifications } from '$lib/stores/NotificationsStore';
	import { derived, writable } from 'svelte/store';

	const currentPath = $page.url.pathname;
	const pathSplit = currentPath.split('/');

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

<NavToBack
	label={getMenuTitleFromPage(`/${pathSplit.at(pathSplit.length - 1) ?? ''}`)}
	linkBack="/exaudie"
/>
<VerticalSpace height="8px" />

<Toast />
<ToastNotif />
<div class="wrap">
	<Button on:onClick={onClick}>toast1</Button>

	<Button on:onClick={onToast2}>toast2</Button>

	<Button on:onClick={onToast3}>toast3</Button>

	<Button on:onClick={() => {}}>toast4</Button>
</div>

<style>
	.wrap {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1em;
	}
</style>
