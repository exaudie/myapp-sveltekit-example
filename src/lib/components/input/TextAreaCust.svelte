<script lang="ts">
	import type { ValidateType } from '$lib/types/ValidateType';
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { createEventDispatcher } from 'svelte';
	import TextAreaBasic from './TextAreaBasic.svelte';

	export let id: string = '';
	export let name: string = '';
	export let placeholder: string = '';
	export let value: string = '';
	export let required: boolean = false;
	export let disabled: boolean = false;
	export let readonly: boolean = false;
	export let autocomplete: string = 'off';
	export let rows: number | null = null;
	export let valueAlign: 'start' | 'end' | 'center' = 'start';
	export let maxlength: HTMLInputAttributes['maxlength'] = null;
	export let maxHeight: string = 'none';
	export let autoHeight: boolean = false;
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
	<TextAreaBasic
		{id}
		{name}
		{placeholder}
		{autocomplete}
		{required}
		{disabled}
		{readonly}
		{rows}
		{valueAlign}
		{maxlength}
		{maxHeight}
		{autoHeight}
		bind:value
		bind:isError
		on:Input={onInput}
		on:Focus={onFocus}
		on:Blur={onBlur}
	/>
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
	}
</style>
