<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { removeSeparator, setIntlThousandSeparator } from '$lib/helpers/NumberFormatter';
	import { createEventDispatcher } from 'svelte';
	import InputBasic from './InputBasic.svelte';

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

	const regNumOnly = new RegExp(`^[\\d]*$`);

	const dispatch = createEventDispatcher();

	const onInput = () => {
		dispatch('Input');
	};

	const onFocus = () => {
		dispatch('Focus');
	};

	const onBlur = () => dispatch('Blur');

	const onKeypress = (evn: CustomEvent) => {
		/// to ensure users can only enter numbers
		if (type === 'number' && !regNumOnly.test(evn.detail.key)) evn.detail.preventDefault();

		dispatch('Keypress', evn);
	};
</script>

<div class="input-customize">
	<InputBasic
		{type}
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
		{valueAlign}
		bind:value
		bind:isError
		on:Input={onInput}
		on:focus={onFocus}
		on:blur={onBlur}
		on:Keypress={(evn) => onKeypress(evn)}
	/>
</div>

<style>
	* {
		margin: 0;
		padding: 0;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	.input-customize {
		flex-grow: 1;
		display: flex;
	}
</style>