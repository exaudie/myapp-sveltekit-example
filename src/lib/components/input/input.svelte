<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { createEventDispatcher } from 'svelte';

	export let type: HTMLInputElement['type'] = 'text';
	export let id: string = '';
	export let name: string = '';
	export let placeholder: string = '';
	export let autocomplete: string = 'off';
	export let value: string;
	export let required: boolean = false;
	export let disabled: boolean = false;
	export let readonly: boolean = false;
	export let maxlength: HTMLInputAttributes['maxlength'] = null;
	export let max: HTMLInputAttributes['max'] = null;
	export let min: HTMLInputAttributes['min'] = null;
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
	{autocomplete}
	{required}
	{disabled}
	{readonly}
	{maxlength}
	{max}
	{min}
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
		border: 1px solid rgba(128, 128, 128, 0.5);
		color: var(--text-primary);
		padding: 0.7em 1em;
		text-overflow: ellipsis;

		&::placeholder {
			color: var(--text-scondary);
			opacity: 1;
		}

		&:focus {
			outline: none;
			border: 1px solid royalblue;
		}
	}

	.error-border {
		border: 1px solid red;
	}
</style>
