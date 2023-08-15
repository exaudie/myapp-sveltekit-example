<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let type: 'button' | 'submit' | 'reset' | null | undefined = 'button';

	let dispatch = createEventDispatcher();

	const onClick = () => dispatch('onClick');
</script>

<button {type} class="text-bold" on:click={onClick}><slot /></button>

<style>
	button {
		border: 1px solid var(--text-scondary);
		cursor: pointer;
		border-radius: 4px;
		padding: 0.5em 1em;
		font-size: 1em;
	}

	button:hover {
		border-color: blue;
	}

	button:active {
		color: white;
		background-color: rgba(0, 0, 255, 0.2);
	}
</style>
