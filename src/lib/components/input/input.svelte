<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let type: string = 'text';
	export let id: string = '';
	export let name: string = '';
	export let placeholder: string = '';
	export let value: string;
	export let isError: boolean = false;

	const dispatch = createEventDispatcher();

	const typeAction = (node: HTMLInputElement) => {
		node.type = type;
	};

	const onFocus = () => dispatch('Focus');
	const onBlur = () => dispatch('Blur');
</script>

<input
	use:typeAction
	{id}
	{name}
	{placeholder}
	bind:value
	class="customize"
	class:error-border={isError}
	on:focus={onFocus}
	on:blur={onBlur}
/>

<style>
	input {
		background-color: white;
		border-radius: 4px;
		border: 1px solid #99a0af;
		color: var(--text-primary);
		padding: 0.5em 1em;
		text-overflow: ellipsis;
	}

	input::placeholder {
		color: var(--text-scondary);
		opacity: 1;
	}

	.error-border {
		border: 1px solid red;
	}
</style>
