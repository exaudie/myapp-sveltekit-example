<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { removeSeparator, setIntlThousandSeparator } from '$lib/helpers/NumberFormatter';
	import { createEventDispatcher, onMount } from 'svelte';
	import InputBasic from './InputBasic.svelte';
	import type { ValidateType } from '$lib/types/ValidateType';

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
	export let isErrorReactive: boolean = false;
	export let isError: boolean = false;
	export let errorMessage: string = '';
	export let onValidate = (value: string): ValidateType | null => null;

	const decimal = separator == '.' ? ',' : '.';
	const patternNeg = new RegExp(`^[-]`);
	const prefNeg = allowNegative ? '[-]{1}[\\d]*|' : '';
	const regNominal = new RegExp(
		`^(${prefNeg}[1-9]{1}[${separator}\\d]*)[${decimal}]?\\d{0,${toFixed}}$`
	);
	const regNumOnly = new RegExp(`^[\\d]*$`);

	const dispatch = createEventDispatcher();

	const setNominalOnly = (value: string) => {
		let newValue: string = '';
		let tempValue: string = '';

		for (const elm of Array.from(value)) {
			tempValue += elm;

			const isMatch = regNominal.test(tempValue);
			if (!isMatch) tempValue = tempValue.substring(0, tempValue.length - 1);

			newValue = tempValue;
		}

		return newValue;
	};

	const setIsMaxNum = (value: string) => {
		if (type !== 'number' || max === null) return value;

		let newValue: string = '';
		let tempValue: string = '';

		for (const elm of Array.from(value)) {
			tempValue += elm;

			const isMax = Number(tempValue);
			if (isMax > Number(max)) tempValue = tempValue.substring(0, tempValue.length - 1);

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
		value = setIsMaxNum(value);
		value = withSeparator ? setToSpar(value) : value;
	};

	const onFocus = () => {
		dispatch('Focus');

		isErrorReactive = true;
	};

	const onBlur = () => dispatch('Blur');

	const onKeypress = (evn: CustomEvent) => {
		/// to ensure users can only enter numbers
		if (type === 'number' && !regNumOnly.test(evn.detail.key)) evn.detail.preventDefault();

		dispatch('Keypress', evn);
	};

	const parseValidate = () => {
		const valid: ValidateType | null = onValidate(value);
		if (valid != null) ({ isError, errorMessage } = valid);
	};

	$: if (isErrorReactive) parseValidate();

	onMount(() => (value = withSeparator ? setToSpar(value) : value));
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
		on:Focus={onFocus}
		on:Blur={onBlur}
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
