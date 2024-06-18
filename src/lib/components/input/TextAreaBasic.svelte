<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { createEventDispatcher } from 'svelte';

	export let id: string = '';
	export let name: string = '';
	export let placeholder: string = '';
	export let autocomplete: string = 'off';
	export let value: string;
	export let rows: number | null = null;
	export let valueAlign: 'start' | 'end' | 'center' = 'start';
	export let required: boolean = false;
	export let disabled: boolean = false;
	export let readonly: boolean = false;
	export let maxlength: HTMLInputAttributes['maxlength'] = null;
	export let maxHeight: string = 'none';
	export let autoHeight: boolean = false;
	export let isError: boolean = false;

	let scrollHeight: number;

	const dispatch = createEventDispatcher();

	const onInput = () => dispatch('Input');
	const onFocus = () => dispatch('Focus');
	const onBlur = () => dispatch('Blur');

	const onKeyup = (e: Event) => {
		if (!autoHeight) return;

		const target = e.target as HTMLElement;
		target.style.height = 'auto';
		scrollHeight = target.scrollHeight;
		target.style.height = `${scrollHeight + 1.4}px`;
	};
</script>

<textarea
	{id}
	{name}
	{placeholder}
	{autocomplete}
	{required}
	{disabled}
	{readonly}
	{rows}
	{maxlength}
	bind:value
	class="customize"
	class:error-border={isError}
	class:auto-height={autoHeight}
	style="--value-align:{valueAlign};
				--max-height:{maxHeight};"
	on:input={onInput}
	on:focus={onFocus}
	on:blur={onBlur}
	on:keyup={onKeyup}
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

	textarea {
		&.customize {
			width: 100%;
			max-height: var(--max-height);
			border-radius: 4px;
			padding: 0.7em 1em;
			border: 1px solid rgba(128, 128, 128, 0.5);
			resize: none;
			outline: none;

			color: var(--text-primary);
			font-size: 1em;
		}

		&.auto-height {
			scrollbar-width: thin;

			&::-webkit-scrollbar {
				width: 0;
			}
		}

		&::placeholder {
			color: var(--text-secondary);
			opacity: 1;
		}

		&:focus {
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
