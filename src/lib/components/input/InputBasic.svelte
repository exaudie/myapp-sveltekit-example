<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { createEventDispatcher } from 'svelte';

	export let type: HTMLInputElement['type'] = 'text';
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
	export let max: HTMLInputAttributes['max'] = null;
	export let min: HTMLInputAttributes['min'] = null;
	export let isError: boolean = false;

	const dispatch = createEventDispatcher();

	const typeAction = (node: HTMLInputElement) => {
		node.type = type;
	};

	const onInput = () => dispatch('Input');
	const onFocus = () => dispatch('Focus');
	const onBlur = () => dispatch('Blur');
	const onKeypress = (evn: KeyboardEvent) => dispatch('Keypress', evn);
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
	style="--value-align:{valueAlign};"
	on:input={onInput}
	on:focus={onFocus}
	on:blur={onBlur}
	on:keypress={onKeypress}
/>

<style lang="less">
	* {
		margin: 0;
		padding: 0;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		font-family: var(--font-body);
	}

	input {
		&.customize {
			width: 100%;
			background-color: white;
			border: 1px solid rgba(128, 128, 128, 0.5);
			border-radius: 4px;
			padding: 0.7em 1em;

			text-overflow: ellipsis;
			color: var(--text-primary);
			text-align: var(--value-align);
			font-size: 1em;
		}

		&::placeholder {
			color: var(--text-secondary);
			opacity: 1;
		}

		&:focus,
		&:hover {
			outline: none;
			border-color: royalblue;
		}

		&:read-only,
		&:disabled {
			background-color: rgba(128, 128, 128, 0.3);
		}

		&.error-border {
			border-color: var(--danger-state);
		}
	}
</style>
