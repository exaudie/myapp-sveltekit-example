<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import OutsiteClicker from '../clicker/OutsiteClicker.svelte';
	import Dialog from './Dialog.svelte';
	import Backdrop from '../Backdrop.svelte';

	export let isShow: boolean;

	const dispatch = createEventDispatcher();

	const onClickOutsite = () => {
		if (isShow) dispatch('ClickOutsite');
	};
</script>

<Backdrop {isShow}>
	<Dialog isShow={true}>
		<OutsiteClicker on:ClickOutsite={onClickOutsite}>
			<slot />
		</OutsiteClicker>
	</Dialog>
</Backdrop>
