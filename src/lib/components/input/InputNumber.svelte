<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { removeSeparator, setIntlThousandSeparator } from '$lib/helpers/NumberFormatter';
	import { createEventDispatcher } from 'svelte';
	import Input from './Input.svelte';

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
	export let allowNegative: boolean = false;
	export let withSeparator: boolean = false;
	export let separator: '.' | ',' = '.';
	export let toFixed: number = 2;
	export let isError: boolean = false;

	const decimal = separator == '.' ? ',' : '.';
	const patternNeg = new RegExp(`^[-]`);
	const prefNeg = allowNegative ? '[-]{1}[\\d]*|' : '';
	const pattern = new RegExp(
		`^(${prefNeg}[1-9]{1}[${separator}\\d]*)[${decimal}]?\\d{0,${toFixed}}$`
	);

	const dispatch = createEventDispatcher();

	const setNominalOnly = (value: string) => {
		let newValue: string = '';
		let tempValue: string = '';

		for (const elm of Array.from(value)) {
			tempValue += elm;

			const isMatch = pattern.test(tempValue);
			if (!isMatch) tempValue = tempValue.substring(0, tempValue.length - 1);

			newValue = tempValue;
		}

		return newValue;
	};

	const setToSpar = (value: string) => {
		const splitValue = value.split(decimal);

		const rmSpar = removeSeparator(splitValue[0], { separator });
		const sparValue = setIntlThousandSeparator(rmSpar, { separator });
		const newValue = splitValue.length > 1 ? [sparValue, splitValue[1]].join(decimal) : sparValue;

		if (value.length == 1 && patternNeg.test(value)) return '-';

		return newValue;
	};

	const onInput = () => {
		dispatch('Input');

		value = setNominalOnly(value);
		value = withSeparator ? setToSpar(value) : value;
	};

	const onFocus = () => {
		dispatch('Focus');
	};

	const onBlur = () => dispatch('Blur');

	value = withSeparator ? setToSpar(value) : value;
</script>

<div class="input-customize">
	<Input
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
	/>
</div>

<style>
	.input-customize {
		flex-grow: 1;
		display: grid;
	}
</style>
