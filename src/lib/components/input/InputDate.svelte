<script lang="ts">
	import type { ValidateType } from '$lib/types/ValidateType';
	import { createEventDispatcher } from 'svelte';
	import ErrorMessageField from '../ErrorMessageField.svelte';
	import InputBasic from './InputBasic.svelte';

	export let type: 'date' | 'week' | 'time' | 'month' = 'date';
	export let id: string = '';
	export let name: string = '';
	export let placeholder: string = '';
	export let autocomplete: string = 'off';
	export let value: string;
	export let required: boolean = false;
	export let disabled: boolean = false;
	export let readonly: boolean = false;
	export let isErrorReactive: boolean = false;
	export let isError: boolean = false;
	export let errorMessage: string = '';
	export let onValidate = (value: string): ValidateType => ({ isError: false, errorMessage: '' });

	const dispatch = createEventDispatcher();

	const onInput = () => dispatch('Input');
	const onFocus = () => {
		dispatch('Focus');

		isErrorReactive = true;
	};
	const onBlur = () => dispatch('Blur');

	$: if (isErrorReactive) ({ isError, errorMessage } = onValidate(value));
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
		bind:value
		bind:isError
		on:Input={onInput}
		on:Focus={onFocus}
		on:Blur={onBlur}
	/>

	<ErrorMessageField {isError} message={errorMessage} />
</div>

<style lang="less">
	* {
		margin: 0;
		padding: 0;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	.input-customize {
		width: 100%;
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		row-gap: 0.2em;
	}
</style>
