<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import OutsiteClicker from '../clicker/OutsiteClicker.svelte';
	import Dialog from './Dialog.svelte';

	export let isShow: boolean;

	const dispatch = createEventDispatcher();

	const onClickOutsite = () => {
		if (isShow) dispatch('onClickOutsite');
	};
</script>

<Dialog {isShow}>
	<OutsiteClicker on:onClickOutsite={onClickOutsite}>
		<slot />
	</OutsiteClicker>
</Dialog>
