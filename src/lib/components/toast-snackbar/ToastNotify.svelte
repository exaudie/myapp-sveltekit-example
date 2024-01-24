<script lang="ts">
	import { toastNotify, type PushNotifyData } from '$lib/stores/ToastNotifyStore';
	import { onDestroy } from 'svelte';
	import { flip } from 'svelte/animate';
	import { fly } from 'svelte/transition';
	import Toast from './Toast.svelte';

	let notifyList: PushNotifyData[] = [];

	const notifyUnsubscribe = toastNotify.subscribe(
		(data) => (notifyList = data as PushNotifyData[])
	);

	const onDimiss = (id: string) => toastNotify.dimiss(id);

	onDestroy(() => notifyUnsubscribe());
</script>

<section class="notify">
	{#each notifyList as notify (notify.id)}
		<div animate:flip transition:fly|global={{ y: 40 }}>
			<Toast
				type={notify.type}
				message={notify.message}
				dismissible={notify.dimissable}
				on:Dismiss={() => onDimiss(notify?.id ?? '')}
			/>
		</div>
	{/each}
</section>

<style>
	section.notify {
		position: fixed;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		top: 10px;
		left: 0;
		right: 0;
		margin: 0 auto;
		padding: 0;
		z-index: 9999;
		pointer-events: none;
	}
</style>
