<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { HTMLInputAttributes } from 'svelte/elements';

	export let id: string = '';
	export let name: string = '';
	export let placeholder: string = '';
	export let autocomplete: string = 'off';
	export let value: string;
	export let valueAlign: 'start' | 'end' | 'center' = 'start';
	export let required: boolean = false;
	export let disabled: boolean = false;
	export let readonly: boolean = false;
	export let maxlength: HTMLInputAttributes['maxlength'] = null;
	export let isError: boolean = false;

	const dispatch = createEventDispatcher();

	let heightArea: number;

	const onInput = () => dispatch('Input');
	const onFocus = () => dispatch('Focus');
	const onBlur = () => dispatch('Blur');
</script>

<textarea
	{id}
	{name}
	{placeholder}
	{autocomplete}
	{required}
	{disabled}
	{readonly}
	{maxlength}
	autocorrect="off"
	bind:value
	class="customize"
	class:error-border={isError}
	style="--value-align:{valueAlign};"
	on:input={onInput}
	on:focus={onFocus}
	on:blur={onBlur}
	on:resize={(e) => {
		console.log('e', e);
	}}
/>

<style>
	* {
		margin: 0;
		padding: 0;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		font-family: var(--font-body);
	}

	textarea {
		background-color: white;
		flex-grow: 1;
		border-radius: 4px;
		border: 1px solid rgba(128, 128, 128, 0.5);
		color: var(--text-primary);
		padding: 0.7em 1em;
		text-overflow: ellipsis;
		text-align: var(--value-align);
		resize: none;
		font-size: 1em;
		/* height: calc(var(--height-area) * 1px) !important; */

		&::placeholder {
			color: var(--text-secondary);
			opacity: 1;
		}

		&:focus {
			outline: none;
			border: 1px solid royalblue;
		}

		&:read-only,
		&:disabled {
			background-color: rgba(128, 128, 128, 0.3);
		}
	}

	.error-border {
		border: 1px solid red;
	}
</style>
