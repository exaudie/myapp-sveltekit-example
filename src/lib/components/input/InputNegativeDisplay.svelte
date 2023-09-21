<script lang="ts">
	import Input from './Input.svelte';

	export let value: string = '';
	export let editValue: string | null | undefined = null;
	export let placeholder: string = '';
	export let alwaysNegative: boolean = false;

	let fieldValue: string = '';
	let isFocus: boolean = false;
	let isNegative: boolean = false;

	const getFieldvalue = (value: string) => {
		const matches = value.match(/\((.*?)\)/g);
		if (!matches) return value;

		const match = matches[0];
		const newVal = match.substring(1, match.length - 1);

		return newVal;
	};

	const setPlusMinus = (value: string) => {
		const valClear = value;
		const valueNumb = Number(valClear);

		isNegative = !isNaN(valueNumb) && valueNumb < 0 ? true : false;
	};

	const setMinus = (value: string) => {
		const isMin = value.match(/^-\d*/);

		return isMin ? '-' : '';
	};

	const limitTyping = (value: string) => {
		let newValue = '';
		let tempValue = '';

		for (const elm of value) {
			tempValue += elm;
			if (!tempValue.match('^?\-?([1-9]{1}[0-9]*)')) break;
			newValue = tempValue;
		}

		return newValue;
	};

	const onFocus = () => {
		fieldValue = `${setMinus(fieldValue)}${getFieldvalue(fieldValue)}`;
		isFocus = true;
	};

	const onBlur = () => {
		fieldValue = `(${fieldValue})`;
		isFocus = false;
	};

	const replaces = (value: string) => {
		return value.replace(/[^(\-\\\d)]/g, '');
	};

	$: fieldValue = isFocus ? fieldValue : `(${getFieldvalue(editValue ?? fieldValue)})`;
	$: fieldValue = fieldValue == '()' ? '' : fieldValue;
	$: value = getFieldvalue(fieldValue ?? value);
	$: setPlusMinus(value);
</script>

<div class="input-customize">
	<Input {placeholder} bind:value={fieldValue} on:Blur={onBlur} on:Focus={onFocus} />
</div>
<div>
	{`replace : ${replaces(fieldValue)}`}
</div>

<div>{`limitTyping : ${limitTyping(fieldValue)}`}</div>

<style>
	.input-customize :global(input:focus) {
		outline: none;
		border: 1px solid blue;
	}
</style>
