<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	const onClick = () => {
		dispatch('onClick');
	};
</script>

<button class="{$$restProps.class || ''} button-clicker" on:click={onClick}>
	<slot />
</button>

<style>
	.button-clicker {
		all: unset;
	}
</style>
