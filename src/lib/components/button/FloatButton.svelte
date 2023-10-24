<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let icon: string;

	const dispatch = createEventDispatcher();

	const onClick = () => dispatch('Click');
</script>

<button on:click={onClick}><img src={icon} alt="float" /></button>

<style>
	button {
		cursor: pointer;
		box-shadow: 0px 2px 4px 0px rgba(96, 97, 112, 0.16), 0px 0px 1px 0px rgba(40, 41, 61, 0.04);
		background: white;
		border-radius: 50%;
		border: none;
		outline: none;
		padding: 12px;
		position: fixed;
		bottom: 50px;
		right: 24px;
	}

	button > img {
		display: block;
		width: 24px;
		height: 24px;
	}

	button:active {
    box-shadow:  0px 3px 5px 0px rgba(96, 97, 112, 0.449), 0px 0px 2px 0px rgba(34, 35, 55, 0.202);
	}
</style>
